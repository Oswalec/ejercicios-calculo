import test from "node:test";
import assert from "node:assert/strict";
import { join } from "node:path";
import { temas } from "../src/data/temas.ts";
import {
  DIST,
  PREFIJO,
  exigirDist,
  leer,
  ejerciciosEnDisco,
} from "./ayudantes.mjs";

test("la portada muestra una tarjeta por unidad con su cantidad real", () => {
  exigirDist();
  const html = leer(join(DIST, "index.html"));
  const enDisco = ejerciciosEnDisco();
  for (const tema of temas) {
    const etiqueta = [...html.matchAll(/<a\b[^>]*>/g)]
      .map((m) => m[0])
      .find((a) => a.includes(`data-tema="${tema.slug}"`));
    assert.ok(etiqueta, `no hay tarjeta para ${tema.slug}`);
    assert.ok(
      etiqueta.includes(`href="${PREFIJO}tema/${tema.slug}/"`),
      `${tema.slug}: href incorrecto`,
    );
    const cantidad = enDisco.filter((e) => e.tema === tema.slug).length;
    assert.ok(
      etiqueta.includes(`data-cantidad="${cantidad}"`),
      `${tema.slug}: se esperaba data-cantidad="${cantidad}"`,
    );
    assert.ok(html.includes(tema.nombre), `falta el nombre ${tema.nombre}`);
  }
  assert.equal((html.match(/<h1/g) ?? []).length, 1);
});
