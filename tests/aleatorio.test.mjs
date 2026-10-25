import test from "node:test";
import assert from "node:assert/strict";
import {
  MINIMO,
  MAXIMO,
  cantidadAMostrar,
  elegirAleatorios,
  otroConjunto,
} from "../src/lib/aleatorio.ts";

function mulberry32(semilla) {
  let a = semilla >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

test("casos borde", () => {
  const rng = mulberry32(1);
  assert.deepEqual(elegirAleatorios(0, rng), []);
  assert.deepEqual(elegirAleatorios(3, rng), [0, 1, 2]);
  assert.equal(
    cantidadAMostrar(30, () => 0),
    MINIMO,
  );
  assert.equal(
    cantidadAMostrar(30, () => 0.999999),
    MAXIMO,
  );
});

for (const total of [10, 30]) {
  test(`200 selecciones válidas con total = ${total}`, () => {
    const rng = mulberry32(total);
    for (let i = 0; i < 200; i++) {
      const r = elegirAleatorios(total, rng);
      assert.ok(r.length >= Math.min(total, MINIMO));
      assert.ok(r.length <= Math.min(total, MAXIMO));
      assert.equal(new Set(r).size, r.length, "índices repetidos");
      assert.ok(
        r.every((x) => x >= 0 && x < total),
        "fuera de rango",
      );
      assert.deepEqual(
        r,
        [...r].sort((a, b) => a - b),
        "no está ordenado",
      );
    }
  });
}

test("otroConjunto nunca repite el conjunto anterior", () => {
  const rng = mulberry32(42);
  let anterior = elegirAleatorios(10, rng);
  for (let i = 0; i < 50; i++) {
    const siguiente = otroConjunto(10, rng, anterior);
    assert.notDeepEqual(siguiente, anterior);
    anterior = siguiente;
  }
});
