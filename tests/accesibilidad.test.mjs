import test from "node:test";
import assert from "node:assert/strict";
import { join } from "node:path";
import { RAIZ, leer, listarHtml } from "./ayudantes.mjs";

test("cada página cumple lo básico de accesibilidad", () => {
  for (const archivo of listarHtml()) {
    const html = leer(archivo);
    assert.match(html, /<html lang="es"/, `${archivo}: lang`);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${archivo}: h1`);
    assert.ok(html.includes('<meta name="viewport"'), `${archivo}: viewport`);
    assert.ok(
      html.includes('href="#contenido"'),
      `${archivo}: enlace de salto`,
    );
    assert.ok(html.includes('id="contenido"'), `${archivo}: main#contenido`);
    for (const [img] of html.matchAll(/<img\b[^>]*>/g)) {
      assert.ok(/\salt=/.test(img), `${archivo}: <img> sin alt`);
    }
    for (const [, texto] of html.matchAll(
      /<button\b[^>]*>([\s\S]*?)<\/button>/g,
    )) {
      assert.ok(
        texto.replace(/<[^>]+>/g, "").trim() !== "",
        `${archivo}: botón vacío`,
      );
    }
    for (const [detalles] of html.matchAll(/<details\b[\s\S]*?<\/details>/g)) {
      assert.ok(
        detalles.includes("<summary"),
        `${archivo}: details sin summary`,
      );
    }
  }
});

function tokens(bloque) {
  const resultado = {};
  for (const [, nombre, hex] of bloque.matchAll(
    /--([a-z-]+):\s*(#[0-9a-f]{6})\s*;/gi,
  )) {
    resultado[nombre] = hex.toLowerCase();
  }
  return resultado;
}

function bloqueRoot(css) {
  const inicio = css.indexOf(":root {");
  return css.slice(inicio, css.indexOf("}", inicio));
}

function luminancia(hex) {
  const canales = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const [r, g, b] = canales.map((c) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contraste(a, b) {
  const [claro, oscuro] = [luminancia(a), luminancia(b)].sort((x, y) => y - x);
  return (claro + 0.05) / (oscuro + 0.05);
}

const PARES = [
  ["fg", "bg"],
  ["fg", "surface"],
  ["fg-muted", "bg"],
  ["fg-muted", "surface"],
  ["primary", "bg"],
  ["primary", "surface"],
  ["primary-fg", "primary"],
  ["accent-fg", "accent"],
];

test("contraste AA de los tokens en modo claro y oscuro", () => {
  const css = leer(join(RAIZ, "src", "styles", "global.css"));
  const claro = tokens(bloqueRoot(css));
  const media = css.slice(css.indexOf("@media (prefers-color-scheme: dark)"));
  const oscuro = { ...claro, ...tokens(bloqueRoot(media)) };
  for (const [modo, valores] of [
    ["claro", claro],
    ["oscuro", oscuro],
  ]) {
    for (const [texto, fondo] of PARES) {
      const razon = contraste(valores[texto], valores[fondo]);
      assert.ok(
        razon >= 4.5,
        `${modo}: --${texto} sobre --${fondo} = ${razon.toFixed(2)}`,
      );
    }
  }
});
