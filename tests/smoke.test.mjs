import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { temas } from "../src/data/temas.ts";
import {
  DIST,
  exigirDist,
  leer,
  listarHtml,
  ejerciciosEnDisco,
  urlsLocales,
  archivoDeUrl,
} from "./ayudantes.mjs";

const paginasDeSeccion = () =>
  temas.flatMap((t) =>
    t.secciones.map((s) => join(DIST, "tema", t.slug, s.slug, "index.html")),
  );
const paginasDeEjercicio = () =>
  ejerciciosEnDisco().map((e) =>
    join(DIST, "ejercicio", e.tema, e.seccion, e.slug, "index.html"),
  );

test("existen todas las páginas", () => {
  exigirDist();
  const rutas = [
    join(DIST, "index.html"),
    join(DIST, "404.html"),
    ...temas.map((t) => join(DIST, "tema", t.slug, "index.html")),
    ...paginasDeSeccion(),
    ...paginasDeEjercicio(),
  ];
  for (const ruta of rutas) assert.ok(existsSync(ruta), `falta ${ruta}`);
});

test("ningún enlace interno está roto", () => {
  for (const archivo of listarHtml()) {
    for (const valor of urlsLocales(leer(archivo))) {
      const sinQuery = valor.split(/[?#]/)[0];
      if (!sinQuery.endsWith("/")) continue;
      const destino = archivoDeUrl(valor);
      assert.ok(destino && existsSync(destino), `${archivo}: ${valor} roto`);
    }
  }
});

test("no quedan fórmulas sin procesar ni errores de KaTeX", () => {
  for (const archivo of listarHtml()) {
    const html = leer(archivo);
    assert.ok(!html.includes("$$"), `${archivo}: contiene $$`);
    assert.ok(!html.includes("katex-error"), `${archivo}: katex-error`);
  }
});

test("las secciones con ejercicios y las páginas de ejercicio muestran KaTeX", () => {
  const conEjercicios = new Set(
    ejerciciosEnDisco().map((e) =>
      join(DIST, "tema", e.tema, e.seccion, "index.html"),
    ),
  );
  for (const ruta of [...conEjercicios, ...paginasDeEjercicio()]) {
    assert.ok(leer(ruta).includes('class="katex"'), `${ruta}: sin KaTeX`);
  }
});
