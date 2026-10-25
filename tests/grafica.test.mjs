import test from "node:test";
import assert from "node:assert/strict";
import { join } from "node:path";
import { compilarExpresion, construirGrafica } from "../src/lib/grafica.mjs";
import {
  DIST,
  exigirDist,
  leer,
  leerFrontmatter,
  ejerciciosEnDisco,
} from "./ayudantes.mjs";

const cerca = (a, b) => Math.abs(a - b) < 1e-9;

test("el intérprete evalúa fórmulas con precedencia y multiplicación implícita", () => {
  const casos = [
    ["2x^2 - 12x + 13", 3, -5],
    ["-2(x + 1)^2 + 3", -1, 3],
    ["-x^2", 3, -9],
    ["2^3^2", 0, 512],
    ["3 sen(x)", Math.PI / 2, 3],
    ["sqrt(-x)", -4, 2],
    ["-abs(x + 2) + 5", 3, 0],
    ["e^x", 1, Math.E],
    ["ln(x)", Math.E, 1],
    ["(x - 4)^2 / 2", 6, 2],
  ];
  for (const [expr, x, esperado] of casos) {
    assert.ok(cerca(compilarExpresion(expr)(x), esperado), `${expr} en ${x}`);
  }
});

test("el intérprete rechaza nombres y símbolos desconocidos", () => {
  assert.throws(() => compilarExpresion("alert(1)"), /desconocido/);
  assert.throws(() => compilarExpresion("x; 1"), /no permitido/);
  assert.throws(() => compilarExpresion("(x + 1"), /Se esperaba/);
});

test("construirGrafica corta la curva en una asíntota y describe la figura", () => {
  const figura = construirGrafica({
    x: [-3, 3],
    y: [-5, 5],
    descripcion: "Hipérbola 1/x",
    curvas: [{ expr: "1/x", etiqueta: "y = 1/x" }],
  });
  assert.equal(figura.tagName, "figure");
  const svg = figura.children[0];
  assert.equal(svg.properties.role, "img");
  const caminos = JSON.stringify(svg).match(/"tagName":"path"/g) ?? [];
  assert.equal(caminos.length, 2, "1/x debe dibujarse en dos ramas separadas");
  assert.ok(JSON.stringify(figura).includes("Hipérbola 1/x"));
});

test("cada ejercicio con gráfica la muestra accesible en su página", () => {
  exigirDist();
  const conGrafica = ejerciciosEnDisco().filter(
    (e) => leerFrontmatter(leer(e.ruta)).tieneGrafica,
  );
  assert.ok(conGrafica.length > 0, "ningún ejercicio tiene gráfica");
  for (const { tema, seccion, slug } of conGrafica) {
    const html = leer(
      join(DIST, "ejercicio", tema, seccion, slug, "index.html"),
    );
    assert.match(html, /<figure class="grafica"/, `${slug}: sin figura`);
    assert.match(html, /<svg[^>]*role="img"/, `${slug}: svg sin role="img"`);
    assert.match(
      html,
      /aria-labelledby="g-?\d+-desc"/,
      `${slug}: sin descripción`,
    );
    assert.match(html, /class="curva /, `${slug}: sin curvas`);
  }
});
