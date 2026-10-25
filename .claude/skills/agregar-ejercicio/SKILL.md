---
name: agregar-ejercicio
description: Agrega ejercicios resueltos al sitio (Markdown + LaTeX en src/content/ejercicios/<tema>/<seccion>/). Úsala cuando digan "agrega un ejercicio", "completa la sección 2.4", "10 ejercicios de límites laterales", "sube este problema resuelto" o pasen un enunciado con su solución.
---

# Agregar ejercicios

## Cuándo usarla
- El docente pide ejercicios para una sección del sílabo (p. ej. «2.2 Límites laterales»).
- El docente pega un enunciado con su solución.

## Pasos
1. Ubica la sección en `src/data/temas.ts`: el `slug` del tema (unidad) y el `slug` de la sección. Lee sus `contenidos`: los ejercicios de la sección deben repartirse entre esos contenidos.
2. Cada sección tiene como máximo 10 ejercicios (`EJERCICIOS_POR_SECCION`). Cuenta los que ya hay en la carpeta.
3. Ruta: `src/content/ejercicios/<tema>/<seccion>/<slug>.md`, con `<slug>` en minúsculas ASCII y kebab-case, sin tildes. No reutilices un nombre: el nombre es la URL permanente.
4. Frontmatter de exactamente 6 líneas:
   - `titulo: "…"` (único en el sitio)
   - `tema: "<tema>"` y `seccion: "<seccion>"` (iguales a las carpetas)
   - `dificultad: "basico" | "intermedio" | "avanzado"`
   - `metodo: "…"` (p. ej. «Factorización», «Racionalización con el conjugado», «Teorema del encaje»)
   - `orden: <siguiente entero libre de la sección>`
5. Cuerpo: `## Enunciado` con el problema (fórmula en `$$ … $$` en líneas propias); `## Solución` con el desarrollo en pasos numerados `1.`, `2.`, … que justifican cada regla; última línea `**Resultado final:** …`.
6. Criterios del docente: notación correcta; comprobar dominios y soluciones; preferir métodos formales; **no** usar equivalencias asintóticas (~), argumentos heurísticos ni aproximaciones innecesarias; enunciados y soluciones originales (los libros solo como referencia temática).
7. LaTeX: seno con `\operatorname{sen}`; nada de tildes dentro de `$…$` (usa `\text{}`); ningún `$` fuera de matemáticas.

## Verificar
```bash
npm run build          # expect: exit 0 — un frontmatter inválido falla nombrando el campo
npm test               # expect: exit 0, 0 failed — sin `$$` crudo, sin katex-error, ≤ 10 por sección
npm run format:check   # expect: exit 0
```

## No hagas
- No inventes la respuesta: resuelve paso a paso y verifica el resultado (por sustitución, derivando, etc.).
- No uses claves de frontmatter extra: el esquema es estricto y el build falla.
- No agregues TIP DE EXAMEN ni ERROR COMÚN: el docente decidió no incluirlos.
