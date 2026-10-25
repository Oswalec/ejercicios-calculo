import test from "node:test";
import assert from "node:assert/strict";
import rehypeSolucion from "../src/lib/rehype-solucion.mjs";

const texto = (value) => ({ type: "text", value });
const el = (tagName, children = []) => ({
  type: "element",
  tagName,
  properties: {},
  children,
});

test("quita Enunciado y envuelve la solución en details", () => {
  const ol = el("ol", [el("li", [texto("paso")])]);
  const ultimo = el("p", [texto("Respuesta")]);
  const enunciado = el("p", [texto("Calcula")]);
  const arbol = {
    type: "root",
    children: [
      el("h2", [texto("Enunciado")]),
      enunciado,
      el("h2", [texto("Solución")]),
      ol,
      ultimo,
    ],
  };
  rehypeSolucion()(arbol, { path: "x.md" });
  assert.equal(arbol.children.length, 2);
  assert.equal(arbol.children[0], enunciado);
  const details = arbol.children[1];
  assert.equal(details.tagName, "details");
  assert.ok(details.properties.className.includes("solucion"));
  assert.equal(details.children[0].tagName, "summary");
  assert.equal(details.children[0].children[0].value, "Ver solución");
  assert.ok(details.children.includes(ol));
  assert.ok(details.children.includes(ultimo));
});

test("lanza un error si falta la sección Solución", () => {
  const arbol = {
    type: "root",
    children: [el("h2", [texto("Enunciado")]), el("p", [texto("x")])],
  };
  assert.throws(
    () => rehypeSolucion()(arbol, { path: "x.md" }),
    (error) => error instanceof Error && error.message.includes("## Solución"),
  );
});
