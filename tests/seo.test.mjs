import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { basename, join } from "node:path";
import { temas } from "../src/data/temas.ts";
import {
  DIST,
  PREFIJO,
  SITIO,
  exigirDist,
  leer,
  listarHtml,
  ejerciciosEnDisco,
  canonicalEsperado,
} from "./ayudantes.mjs";

test("la página 404 no se indexa y enlaza al inicio", () => {
  exigirDist();
  const html = leer(join(DIST, "404.html"));
  assert.ok(html.includes("noindex"));
  assert.ok(html.includes(`href="${PREFIJO}"`));
});

test("robots.txt apunta al sitemap con el origen y la base", () => {
  exigirDist();
  const robots = leer(join(DIST, "robots.txt"));
  assert.ok(robots.includes("User-agent: *"));
  assert.ok(
    robots.includes(`Sitemap: ${SITIO}${PREFIJO}sitemap-index.xml`),
    robots,
  );
});

test("el sitemap lista inicio, temas y ejercicios, y no la 404", () => {
  exigirDist();
  assert.ok(existsSync(join(DIST, "sitemap-index.xml")));
  const mapa = leer(join(DIST, "sitemap-0.xml"));
  const esperadas = [
    `${SITIO}${PREFIJO}`,
    ...temas.map((t) => `${SITIO}${PREFIJO}tema/${t.slug}/`),
    ...temas.flatMap((t) =>
      t.secciones.map((s) => `${SITIO}${PREFIJO}tema/${t.slug}/${s.slug}/`),
    ),
    ...ejerciciosEnDisco().map(
      (e) => `${SITIO}${PREFIJO}ejercicio/${e.tema}/${e.seccion}/${e.slug}/`,
    ),
  ];
  for (const loc of esperadas) {
    assert.ok(mapa.includes(`<loc>${loc}</loc>`), `falta ${loc}`);
  }
  const locs = [...mapa.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  assert.ok(
    !locs.some((loc) => loc.includes("404")),
    "el sitemap lista la 404",
  );
});

test("canonical correcto y títulos y descripciones únicos", () => {
  const titulos = new Map();
  const descripciones = new Map();
  for (const archivo of listarHtml()) {
    const html = leer(archivo);
    const titulo = html.match(/<title>([^<]*)<\/title>/)?.[1];
    const descripcion = html.match(
      /<meta name="description" content="([^"]*)"/,
    )?.[1];
    assert.ok(titulo, `${archivo}: sin título`);
    assert.ok(descripcion, `${archivo}: sin descripción`);
    assert.ok(!titulos.has(titulo), `título repetido: ${titulo}`);
    assert.ok(
      !descripciones.has(descripcion),
      `descripción repetida: ${descripcion}`,
    );
    titulos.set(titulo, archivo);
    descripciones.set(descripcion, archivo);
    if (
      basename(archivo) === "404.html" &&
      archivo === join(DIST, "404.html")
    ) {
      continue;
    }
    const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
    assert.equal(canonical, canonicalEsperado(archivo), archivo);
  }
});
