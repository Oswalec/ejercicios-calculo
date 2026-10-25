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
  test(`unidad ${tema.slug}: lista todas sus secciones`, () => {
    exigirDist();
    const ruta = join(DIST, "tema", tema.slug, "index.html");
    assert.ok(existsSync(ruta), `falta ${ruta}`);
    const html = leer(ruta);
    assert.ok(html.includes(tema.nombre));
    const enDisco = ejerciciosEnDisco();
    for (const seccion of tema.secciones) {
      const etiqueta = [...html.matchAll(/<a\b[^>]*>/g)]
        .map((m) => m[0])
        .find((a) => a.includes(`data-seccion="${seccion.slug}"`));
      assert.ok(etiqueta, `falta la sección ${seccion.numero}`);
      assert.ok(
        etiqueta.includes(
          `href="${PREFIJO}tema/${tema.slug}/${seccion.slug}/"`,
        ),
      );
      const cantidad = enDisco.filter(
        (e) => e.tema === tema.slug && e.seccion === seccion.slug,
      ).length;
      assert.ok(
        etiqueta.includes(`data-cantidad="${cantidad}"`),
        `${seccion.numero}: se esperaba ${cantidad}`,
      );
    }
  });

  test(`unidad ${tema.slug}: cada sección muestra todos sus ejercicios`, () => {
    exigirDist();
    for (const seccion of tema.secciones) {
      const ruta = join(DIST, "tema", tema.slug, seccion.slug, "index.html");
      assert.ok(existsSync(ruta), `falta ${ruta}`);
      const html = leer(ruta);
      assert.ok(html.includes(seccion.nombre));
      const propios = ejerciciosEnDisco().filter(
        (e) => e.tema === tema.slug && e.seccion === seccion.slug,
      );
      const items = [...html.matchAll(/<li\b[^>]*\bdata-indice="\d+"/g)];
      assert.equal(items.length, propios.length, `${seccion.numero}: cantidad`);
      if (propios.length === 0) {
        assert.ok(html.includes("Pronto habrá ejercicios de esta sección."));
        continue;
      }
      assert.ok(!/<li\b[^>]*\bdata-indice="\d+"[^>]*\shidden/.test(html));
      for (const { slug } of propios) {
        assert.ok(
          html.includes(
            `href="${PREFIJO}ejercicio/${tema.slug}/${seccion.slug}/${slug}/"`,
          ),
          `falta el enlace a ${slug}`,
        );
      }
    }
  });
}
