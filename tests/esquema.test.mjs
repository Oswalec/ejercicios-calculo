import test from "node:test";
import assert from "node:assert/strict";
import { esquemaEjercicio } from "../src/lib/esquema.ts";
import { SLUGS_TEMAS } from "../src/data/temas.ts";

const valido = { titulo: "X", tema: "limites", dificultad: "basico", orden: 1 };

function campoConError(datos) {
  const resultado = esquemaEjercicio.safeParse(datos);
  assert.equal(resultado.success, false);
  return resultado.error.issues.map((issue) => issue.path[0]);
}

test("acepta un ejercicio válido", () => {
  assert.equal(esquemaEjercicio.safeParse(valido).success, true);
});

test("rechaza una dificultad desconocida", () => {
  assert.ok(
    campoConError({ ...valido, dificultad: "facil" }).includes("dificultad"),
  );
});

test("rechaza un tema desconocido", () => {
  assert.ok(campoConError({ ...valido, tema: "series" }).includes("tema"));
});

test("rechaza un orden no entero", () => {
  assert.ok(campoConError({ ...valido, orden: 1.5 }).includes("orden"));
});

test("rechaza claves extra (esquema estricto)", () => {
  assert.equal(
    esquemaEjercicio.safeParse({ ...valido, autor: "Y" }).success,
    false,
  );
});

test("los temas son límites, derivadas e integrales", () => {
  assert.deepEqual([...SLUGS_TEMAS], ["limites", "derivadas", "integrales"]);
});
