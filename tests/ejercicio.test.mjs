import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  DIST,
  PREFIJO,
  exigirDist,
  leer,
  ejerciciosEnDisco,
} from "./ayudantes.mjs";

test("cada ejercicio tiene su página permanente con KaTeX y solución plegable", () => {
  exigirDist();
  const lista = ejerciciosEnDisco();
  assert.ok(lista.length > 0, "no hay ejercicios en disco");
  for (const { tema, slug } of lista) {
    const ruta = join(DIST, "ejercicio", tema, slug, "index.html");
    assert.ok(existsSync(ruta), `falta ${ruta}`);
    const html = leer(ruta);
    assert.ok(html.includes('class="katex"'), `${slug}: sin KaTeX`);
    assert.ok(html.includes("<details"), `${slug}: sin <details>`);
    assert.ok(html.includes("Ver solución"), `${slug}: sin «Ver solución»`);
    assert.ok(!html.includes("$$"), `${slug}: quedó $$ sin procesar`);
    assert.ok(
      !html.includes("Enunciado</h2>"),
      `${slug}: quedó el h2 Enunciado`,
    );
    assert.ok(
      html.includes(`href="${PREFIJO}tema/${tema}/"`),
      `${slug}: sin enlace de vuelta al tema`,
    );
    assert.equal(
      (html.match(/<h1/g) ?? []).length,
      1,
      `${slug}: debe tener un solo h1`,
    );
  }
});
