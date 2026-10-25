import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { unirRuta } from "../src/lib/url.ts";
import {
  DIST,
  PREFIJO,
  exigirDist,
  leer,
  listarHtml,
  urlsLocales,
  archivoDeUrl,
} from "./ayudantes.mjs";

test("unirRuta une base y ruta sin duplicar barras", () => {
  assert.equal(unirRuta("/", "tema/limites/"), "/tema/limites/");
  assert.equal(
    unirRuta("/ejercicios-calculo", "tema/limites/"),
    "/ejercicios-calculo/tema/limites/",
  );
  assert.equal(
    unirRuta("/ejercicios-calculo/", "/favicon.svg"),
    "/ejercicios-calculo/favicon.svg",
  );
  assert.equal(unirRuta("/ejercicios-calculo/"), "/ejercicios-calculo/");
});

test("la portada tiene lang, título, descripción y canonical", () => {
  exigirDist();
  const html = leer(join(DIST, "index.html"));
  assert.match(html, /<html lang="es"/);
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  assert.match(html, /<link rel="canonical"/);
});

test("todo enlace local usa la base y todo asset existe", () => {
  for (const archivo of listarHtml()) {
    const html = leer(archivo);
    for (const valor of urlsLocales(html)) {
      assert.ok(
        valor.startsWith(PREFIJO),
        `${archivo}: ${valor} no empieza con ${PREFIJO}`,
      );
      const sinQuery = valor.split(/[?#]/)[0];
      if (/\.[a-z0-9]+$/i.test(sinQuery)) {
        const destino = archivoDeUrl(valor);
        assert.ok(
          destino && existsSync(destino),
          `${archivo}: el asset ${valor} no existe en dist/`,
        );
      }
    }
  }
});
