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

test("cada ejercicio tiene su página permanente con ficha, KaTeX y solución plegable", () => {
  exigirDist();
  const lista = ejerciciosEnDisco();
  assert.ok(lista.length > 0, "no hay ejercicios en disco");
  for (const { tema, seccion, slug } of lista) {
    const ruta = join(DIST, "ejercicio", tema, seccion, slug, "index.html");
    assert.ok(existsSync(ruta), `falta ${ruta}`);
    const html = leer(ruta);
    assert.ok(html.includes('class="katex"'), `${slug}: sin KaTeX`);
    assert.ok(html.includes("<details"), `${slug}: sin <details>`);
    assert.ok(html.includes("Ver solución"), `${slug}: sin «Ver solución»`);
    assert.ok(
      html.includes("Resultado final:"),
      `${slug}: sin resultado final`,
    );
    assert.match(html, /<dt\b[^>]*>Método<\/dt>/, `${slug}: sin método`);
    assert.match(html, /<dt\b[^>]*>Tema<\/dt>/, `${slug}: sin tema`);
    assert.ok(!html.includes("$$"), `${slug}: quedó $$ sin procesar`);
    assert.ok(
      !html.includes("Enunciado</h2>"),
      `${slug}: quedó el h2 Enunciado`,
    );
    assert.ok(
      html.includes(`href="${PREFIJO}tema/${tema}/${seccion}/"`),
      `${slug}: sin enlace de vuelta a la sección`,
    );
    assert.equal(
      (html.match(/<h1/g) ?? []).length,
      1,
      `${slug}: debe tener un solo h1`,
    );
  }
});
