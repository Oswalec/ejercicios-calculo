import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { temas } from "../src/data/temas.ts";
import { MINIMO } from "../src/lib/aleatorio.ts";
import {
  DIST,
  exigirDist,
  leer,
  listarHtml,
  ejerciciosEnDisco,
  urlsLocales,
  archivoDeUrl,
} from "./ayudantes.mjs";

test("existen todas las páginas", () => {
  exigirDist();
  const rutas = [
    join(DIST, "index.html"),
    join(DIST, "404.html"),
    ...temas.map((t) => join(DIST, "tema", t.slug, "index.html")),
    ...ejerciciosEnDisco().map((e) =>
      join(DIST, "ejercicio", e.tema, e.slug, "index.html"),
    ),
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

test("cada tema tiene al menos MINIMO ejercicios", () => {
  const enDisco = ejerciciosEnDisco();
  for (const tema of temas) {
    const cantidad = enDisco.filter((e) => e.tema === tema.slug).length;
    assert.ok(cantidad >= MINIMO, `${tema.slug}: solo ${cantidad}`);
    const html = leer(join(DIST, "tema", tema.slug, "index.html"));
    const total = Number(html.match(/data-total="(\d+)"/)?.[1] ?? 0);
    assert.ok(total >= MINIMO, `${tema.slug}: data-total ${total}`);
  }
});

test("las páginas de tema y de ejercicio muestran KaTeX", () => {
  const rutas = [
    ...temas.map((t) => join(DIST, "tema", t.slug, "index.html")),
    ...ejerciciosEnDisco().map((e) =>
      join(DIST, "ejercicio", e.tema, e.slug, "index.html"),
    ),
  ];
  for (const ruta of rutas) {
    assert.ok(leer(ruta).includes('class="katex"'), `${ruta}: sin KaTeX`);
  }
});
