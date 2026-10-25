import test from "node:test";
import assert from "node:assert/strict";
import { buscarSeccion, EJERCICIOS_POR_SECCION } from "../src/data/temas.ts";
import { esquemaEjercicio } from "../src/lib/esquema.ts";
import { ejerciciosEnDisco, leer, leerFrontmatter } from "./ayudantes.mjs";

test("hay ejercicios en disco", () => {
  assert.ok(ejerciciosEnDisco().length > 0);
});

test("cada ejercicio está en una sección del sílabo que coincide con su carpeta", () => {
  for (const { tema, seccion, slug } of ejerciciosEnDisco()) {
    assert.ok(
      buscarSeccion(tema, seccion),
      `${tema}/${seccion}/${slug}: la carpeta no es una sección de src/data/temas.ts`,
    );
  }
});

test(`ninguna sección pasa de ${EJERCICIOS_POR_SECCION} ejercicios`, () => {
  const conteo = new Map();
  for (const { tema, seccion } of ejerciciosEnDisco()) {
    const clave = `${tema}/${seccion}`;
    conteo.set(clave, (conteo.get(clave) ?? 0) + 1);
  }
  for (const [clave, n] of conteo) {
    assert.ok(n <= EJERCICIOS_POR_SECCION, `${clave}: ${n} ejercicios`);
  }
});

test("frontmatter válido, tema y sección = carpeta, orden y título únicos", () => {
  const titulos = new Set();
  const ordenes = new Map();
  for (const { tema, seccion, slug, ruta } of ejerciciosEnDisco()) {
    const id = `${tema}/${seccion}/${slug}`;
    const { datos } = leerFrontmatter(leer(ruta));
    assert.ok(
      esquemaEjercicio.safeParse(datos).success,
      `${id}: frontmatter inválido`,
    );
    assert.equal(datos.tema, tema, `${id}: tema distinto a la carpeta`);
    assert.equal(
      datos.seccion,
      seccion,
      `${id}: sección distinta a la carpeta`,
    );
    const clave = `${tema}/${seccion}`;
    const usados = ordenes.get(clave) ?? new Set();
    assert.ok(!usados.has(datos.orden), `${id}: orden repetido`);
    usados.add(datos.orden);
    ordenes.set(clave, usados);
    assert.ok(!titulos.has(datos.titulo), `${id}: título repetido`);
    titulos.add(datos.titulo);
  }
});

test("cada cuerpo tiene Enunciado, Solución con pasos y Resultado final", () => {
  for (const { tema, seccion, slug, ruta } of ejerciciosEnDisco()) {
    const id = `${tema}/${seccion}/${slug}`;
    const { cuerpo } = leerFrontmatter(leer(ruta));
    const iEnunciado = cuerpo.indexOf("## Enunciado");
    const iSolucion = cuerpo.indexOf("## Solución");
    assert.ok(iEnunciado !== -1, `${id}: falta ## Enunciado`);
    assert.ok(iSolucion > iEnunciado, `${id}: falta ## Solución`);
    const solucion = cuerpo.slice(iSolucion);
    assert.ok(solucion.includes("1. "), `${id}: sin pasos numerados`);
    assert.ok(
      /^\*\*Resultado final:\*\*/m.test(solucion),
      `${id}: sin **Resultado final:**`,
    );
  }
});
