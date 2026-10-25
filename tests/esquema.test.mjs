import test from "node:test";
import assert from "node:assert/strict";
import { esquemaEjercicio } from "../src/lib/esquema.ts";
import {
  SLUGS_TEMAS,
  temas,
  buscarSeccion,
  EJERCICIOS_POR_SECCION,
} from "../src/data/temas.ts";

const valido = {
  titulo: "X",
  tema: "limites",
  seccion: "limites-laterales",
  dificultad: "basico",
  metodo: "Límites laterales",
  orden: 1,
};

function camposConError(datos) {
  const resultado = esquemaEjercicio.safeParse(datos);
  assert.equal(resultado.success, false);
  return resultado.error.issues.map((issue) => issue.path[0]);
}

test("acepta un ejercicio válido", () => {
  assert.equal(esquemaEjercicio.safeParse(valido).success, true);
});

test("rechaza una dificultad desconocida", () => {
  assert.ok(
    camposConError({ ...valido, dificultad: "facil" }).includes("dificultad"),
  );
});

test("rechaza un tema desconocido", () => {
  assert.ok(camposConError({ ...valido, tema: "series" }).includes("tema"));
});

test("rechaza una sección que no es un slug", () => {
  assert.ok(
    camposConError({ ...valido, seccion: "Límites Laterales" }).includes(
      "seccion",
    ),
  );
});

test("exige el método", () => {
  assert.ok(camposConError({ ...valido, metodo: "" }).includes("metodo"));
});

test("rechaza un orden no entero", () => {
  assert.ok(camposConError({ ...valido, orden: 1.5 }).includes("orden"));
});

test("rechaza claves extra (esquema estricto)", () => {
  assert.equal(
    esquemaEjercicio.safeParse({ ...valido, autor: "Y" }).success,
    false,
  );
});

test("el sílabo tiene las 6 unidades con secciones numeradas y únicas", () => {
  assert.deepEqual(
    [...SLUGS_TEMAS],
    [
      "funciones",
      "limites",
      "continuidad",
      "derivadas",
      "aplicaciones-derivada",
      "integrales",
    ],
  );
  assert.equal(EJERCICIOS_POR_SECCION, 10);
  for (const tema of temas) {
    const slugs = tema.secciones.map((s) => s.slug);
    assert.equal(new Set(slugs).size, slugs.length, `${tema.slug}: repetidas`);
    tema.secciones.forEach((seccion, i) => {
      assert.equal(seccion.numero, `${tema.numero}.${i + 1}`);
      assert.ok(
        seccion.contenidos.length > 0,
        `${seccion.numero} sin contenidos`,
      );
    });
  }
  assert.ok(buscarSeccion("limites", "limites-laterales"));
  assert.equal(buscarSeccion("limites", "no-existe"), undefined);
});
