---
name: agregar-ejercicio
description: Agrega un ejercicio resuelto nuevo al sitio (archivo Markdown + LaTeX en src/content/ejercicios/<tema>/). Úsala cuando digan "agrega un ejercicio", "nuevo ejercicio de límites/derivadas/integrales", "sube este problema resuelto" o pasen un enunciado con su solución.
---

# Agregar un ejercicio

## Cuándo usarla
- El docente pide agregar un ejercicio o pega un enunciado con su solución.
- Se necesita completar un tema con más ejercicios.

## Pasos
1. Elige el tema: un `slug` de `src/data/temas.ts` (`limites`, `derivadas`, `integrales`). Un tema nuevo exige editar `temas.ts` primero.
2. Elige un nombre de archivo en minúsculas ASCII y kebab-case, sin tildes: `src/content/ejercicios/<tema>/<slug>.md`. No reutilices un nombre: el nombre es la URL permanente.
3. Escribe el frontmatter de exactamente 4 líneas: `titulo: "…"` (único en el sitio), `tema: "<tema>"` (igual a la carpeta), `dificultad: "basico" | "intermedio" | "avanzado"`, `orden: <siguiente entero libre del tema>`.
4. Cuerpo: `## Enunciado`, el enunciado con la fórmula en `$$ … $$` en líneas propias; `## Solución` con pasos numerados `1.`, `2.`, … que justifican cada regla; última línea `**Respuesta:** <respuesta en LaTeX>`.
5. LaTeX: seno con `\operatorname{sen}`; nada de tildes dentro de `$…$` (usa `\text{}`); ningún `$` fuera de matemáticas.
6. Si el tema tiene una lista fija en `tests/contenido.test.mjs`, agrega el archivo nuevo a esa lista.

## Verificar
```bash
npm run build          # expect: exit 0 — un frontmatter inválido falla nombrando el campo
npm test               # expect: exit 0, 0 failed — sin `$$` crudo, sin katex-error, enlaces internos válidos
npm run format:check   # expect: exit 0
```

## No hagas
- No inventes la respuesta: si el docente no la dio, resuélvela paso a paso y márcala para su revisión en el mensaje de commit.
- No uses claves de frontmatter extra: el esquema es estricto y el build falla.
