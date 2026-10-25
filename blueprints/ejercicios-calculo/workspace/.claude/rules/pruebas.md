---
description: Convenciones de pruebas con node:test
paths:
  - "tests/**"
---

# Pruebas

- Archivos `tests/<nombre>.test.mjs`, JavaScript ESM, `import { test } from "node:test"` y `import assert from "node:assert/strict"`.
- Las rutas, el prefijo de base y el sitio salen de `tests/ayudantes.mjs` (`DIST`, `PREFIJO`, `SITIO`, `listarHtml`, `ejerciciosEnDisco`, `archivoDeUrl`, `canonicalEsperado`, `leerFrontmatter`). No dupliques esa lógica.
- Las expectativas se calculan desde el disco (`src/content/ejercicios/`) y `src/data/temas.ts`, nunca con números escritos a mano; la única lista literal es la de los 30 archivos en `tests/contenido.test.mjs`.
- Importa módulos de `src/` con la extensión real (`../src/lib/aleatorio.ts`); Node 24 quita los tipos de forma nativa. Nunca importes `.astro`, `astro:*` ni `src/lib/ejercicios.ts`.
- Las pruebas sobre `dist/` llaman a `exigirDist()` primero: sin build, fallan con un mensaje claro.
- Prohibido `test.skip`, `test.only` y `todo`: la puerta exige 0 omitidas.
