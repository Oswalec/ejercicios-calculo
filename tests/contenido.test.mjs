import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { temas } from "../src/data/temas.ts";
import { esquemaEjercicio } from "../src/lib/esquema.ts";
import {
  CONTENIDO,
  ejerciciosEnDisco,
  leer,
  leerFrontmatter,
} from "./ayudantes.mjs";

const ESPERADOS = [
  "limites/sustitucion-directa.md",
  "limites/factorizacion-cero-entre-cero.md",
  "limites/racionalizacion.md",
  "limites/limite-al-infinito-polinomios.md",
  "limites/limite-al-infinito-raices.md",
  "limites/limite-trigonometrico-sen-x-sobre-x.md",
  "limites/limites-laterales-valor-absoluto.md",
  "limites/limite-numero-e.md",
  "limites/continuidad-funcion-a-trozos.md",
  "limites/teorema-del-sandwich.md",
  "derivadas/regla-de-la-potencia.md",
  "derivadas/regla-del-producto.md",
  "derivadas/regla-del-cociente.md",
  "derivadas/regla-de-la-cadena.md",
  "derivadas/derivadas-trigonometricas.md",
  "derivadas/exponencial-y-logaritmo.md",
  "derivadas/derivacion-implicita.md",
  "derivadas/recta-tangente.md",
  "derivadas/segunda-derivada.md",
  "derivadas/razon-de-cambio.md",
  "integrales/integrales-inmediatas.md",
  "integrales/sustitucion-simple.md",
  "integrales/integral-trigonometrica-basica.md",
  "integrales/sustitucion-exponencial.md",
  "integrales/integracion-por-partes.md",
  "integrales/por-partes-logaritmo.md",
  "integrales/fracciones-parciales.md",
  "integrales/integral-definida-tfc.md",
  "integrales/area-entre-curvas.md",
  "integrales/integral-definida-sustitucion.md",
];

test("existen los 30 ejercicios esperados", () => {
  for (const relativa of ESPERADOS) {
    assert.ok(existsSync(join(CONTENIDO, relativa)), `falta ${relativa}`);
  }
});

test("cada tema tiene exactamente sus archivos de la lista", () => {
  const enDisco = ejerciciosEnDisco();
  for (const tema of temas) {
    const esperados = ESPERADOS.filter((r) => r.startsWith(`${tema.slug}/`))
      .map((r) => r.slice(tema.slug.length + 1, -".md".length))
      .sort();
    const reales = enDisco
      .filter((e) => e.tema === tema.slug)
      .map((e) => e.slug)
      .sort();
    assert.deepEqual(reales, esperados, `archivos de ${tema.slug}`);
    assert.equal(reales.length, 10, `${tema.slug} debe tener 10`);
  }
});

test("frontmatter válido, tema = carpeta, orden y título únicos", () => {
  const titulos = new Set();
  const ordenes = new Map();
  for (const { tema, slug, ruta } of ejerciciosEnDisco()) {
    const { datos } = leerFrontmatter(leer(ruta));
    const resultado = esquemaEjercicio.safeParse(datos);
    assert.ok(resultado.success, `${tema}/${slug}: frontmatter inválido`);
    assert.equal(datos.tema, tema, `${tema}/${slug}: tema distinto a carpeta`);
    const usados = ordenes.get(tema) ?? new Set();
    assert.ok(!usados.has(datos.orden), `${tema}/${slug}: orden repetido`);
    usados.add(datos.orden);
    ordenes.set(tema, usados);
    assert.ok(!titulos.has(datos.titulo), `${tema}/${slug}: título repetido`);
    titulos.add(datos.titulo);
  }
});

test("cada cuerpo tiene Enunciado, Solución con pasos y Respuesta", () => {
  for (const { tema, slug, ruta } of ejerciciosEnDisco()) {
    const { cuerpo } = leerFrontmatter(leer(ruta));
    const iEnunciado = cuerpo.indexOf("## Enunciado");
    const iSolucion = cuerpo.indexOf("## Solución");
    assert.ok(iEnunciado !== -1, `${tema}/${slug}: falta ## Enunciado`);
    assert.ok(iSolucion > iEnunciado, `${tema}/${slug}: falta ## Solución`);
    const solucion = cuerpo.slice(iSolucion);
    assert.ok(solucion.includes("1. "), `${tema}/${slug}: sin pasos numerados`);
    assert.ok(
      solucion.includes("**Respuesta:**"),
      `${tema}/${slug}: sin **Respuesta:**`,
    );
  }
});
