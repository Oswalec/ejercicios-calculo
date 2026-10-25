import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { temas } from "../src/data/temas.ts";
import {
  DIST,
  PREFIJO,
  exigirDist,
  leer,
  ejerciciosEnDisco,
} from "./ayudantes.mjs";

for (const tema of temas) {
  test(`página del tema ${tema.slug}`, () => {
    exigirDist();
    const ruta = join(DIST, "tema", tema.slug, "index.html");
    assert.ok(existsSync(ruta), `falta ${ruta}`);
    const html = leer(ruta);
    assert.match(html, new RegExp(`<h1[^>]*>${tema.nombre}</h1>`));
    const propios = ejerciciosEnDisco().filter((e) => e.tema === tema.slug);
    const items = [...html.matchAll(/<li\b[^>]*\bdata-indice="(\d+)"[^>]*>/g)];
    assert.equal(items.length, propios.length, "cantidad de ejercicios");
    if (propios.length === 0) {
      assert.ok(html.includes("Pronto habrá ejercicios de este tema."));
      return;
    }
    assert.ok(html.includes(`data-total="${propios.length}"`));
    for (const [etiqueta, indice] of items) {
      if (Number(indice) >= 10) {
        assert.match(
          etiqueta,
          /\shidden/,
          `el ítem ${indice} debería estar oculto`,
        );
      }
    }
    assert.ok(html.includes("<details"));
    assert.ok(html.includes("Ver solución"));
    const boton = html.match(/<button\b[^>]*id="otros-ejercicios"[^>]*>/);
    assert.ok(boton, "falta el botón otros-ejercicios");
    assert.match(boton[0], /\shidden/, "el botón debe venir oculto");
    assert.match(
      html,
      /<p\b[^>]*id="estado-seleccion"[^>]*aria-live="polite"|<p\b[^>]*aria-live="polite"[^>]*id="estado-seleccion"/,
    );
    assert.ok(html.includes('<script type="module"'), "falta el script");
    for (const { slug } of propios) {
      assert.ok(
        html.includes(`href="${PREFIJO}ejercicio/${tema.slug}/${slug}/"`),
        `falta el enlace a ${slug}`,
      );
    }
  });
}
