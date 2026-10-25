import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import {
  DIST,
  PREFIJO,
  exigirDist,
  leer,
  ejerciciosEnDisco,
} from "./ayudantes.mjs";

test("Pagefind generó su interfaz y su índice", () => {
  exigirDist();
  for (const archivo of [
    "pagefind-ui.js",
    "pagefind-ui.css",
    "pagefind-entry.json",
  ]) {
    assert.ok(existsSync(join(DIST, "pagefind", archivo)), `falta ${archivo}`);
  }
});

test("la portada carga el buscador con la base correcta", () => {
  exigirDist();
  const html = leer(join(DIST, "index.html"));
  assert.ok(html.includes('id="buscador"'));
  assert.ok(html.includes(`${PREFIJO}pagefind/pagefind-ui.js`));
  assert.ok(html.includes("PagefindUI"));
  assert.ok(
    html.includes(JSON.stringify(PREFIJO)),
    "falta la base inyectada en baseUrl",
  );
  assert.ok(!html.includes("data-pagefind-body"));
});

test("solo las páginas de ejercicio se indexan", () => {
  exigirDist();
  for (const { tema, seccion, slug } of ejerciciosEnDisco()) {
    const html = leer(
      join(DIST, "ejercicio", tema, seccion, slug, "index.html"),
    );
    assert.ok(html.includes("data-pagefind-body"), `${tema}/${slug}`);
  }
  const paginasDeTema = readdirSync(join(DIST, "tema"), { recursive: true })
    .map(String)
    .filter((ruta) => ruta.endsWith("index.html"));
  assert.ok(paginasDeTema.length > 0);
  for (const ruta of paginasDeTema) {
    const html = leer(join(DIST, "tema", ruta));
    assert.ok(!html.includes("data-pagefind-body"), `tema ${ruta}`);
  }
});
