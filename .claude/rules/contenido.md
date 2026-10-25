---
description: Formato de los ejercicios en Markdown + LaTeX
paths:
  - "src/content/**"
  - "tests/fixtures/**"
---

# Contenido de ejercicios

- Ruta: `src/content/ejercicios/<tema>/<seccion>/<slug>.md`; `<slug>` en minúsculas ASCII kebab-case, sin tildes; las carpetas son iguales a los campos `tema` y `seccion`, y la sección existe en `src/data/temas.ts`. Máximo 10 ejercicios por sección.
- Frontmatter de exactamente 6 líneas `clave: valor`: `titulo` (string entre comillas dobles, único en el sitio), `tema` y `seccion` (slugs de `src/data/temas.ts`), `dificultad` (`"basico"`, `"intermedio"` o `"avanzado"`), `metodo` (string, p. ej. «Factorización»), `orden` (entero ≥ 1 sin comillas, único en la sección). Ninguna clave extra.
- Criterios del docente: notación correcta, dominios y soluciones comprobados, métodos formales; sin equivalencias asintóticas (~), sin argumentos heurísticos ni aproximaciones innecesarias; enunciados y soluciones originales. Sin TIP DE EXAMEN ni ERROR COMÚN.
- Cuerpo: `## Enunciado` → enunciado; `## Solución` → pasos numerados `1.` `2.` …; última línea `**Resultado final:** …`. El plugin `rehype-solucion` hace fallar el build si falta alguno de los dos encabezados.
- Fórmulas en bloque con `$$` en líneas propias; en línea con `$…$`. Seno: `\operatorname{sen}`. Nada de letras con tilde dentro de `$…$`; usa `\text{…}`. Ningún `$` fuera de matemáticas.
- Renombrar un archivo publicado rompe su URL permanente: no lo hagas sin el visto bueno del docente.
- `tests/fixtures/ejercicio-invalido.md` es inválido a propósito (`dificultad: "facil"`): no lo corrijas.
