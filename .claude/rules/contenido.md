---
description: Formato de los ejercicios en Markdown + LaTeX
paths:
  - "src/content/**"
  - "tests/fixtures/**"
---

# Contenido de ejercicios

- Ruta: `src/content/ejercicios/<tema>/<seccion>/<slug>.md`; `<slug>` en minúsculas ASCII kebab-case, sin tildes; las carpetas son iguales a los campos `tema` y `seccion`, y la sección existe en `src/data/temas.ts`. Máximo 10 ejercicios por sección.
- Frontmatter de 6 líneas (más el bloque opcional `grafica`) `clave: valor`: `titulo` (string entre comillas dobles, único en el sitio), `tema` y `seccion` (slugs de `src/data/temas.ts`), `dificultad` (`"basico"`, `"intermedio"` o `"avanzado"`), `metodo` (string, p. ej. «Factorización»), `orden` (entero ≥ 1 sin comillas, único en la sección). Ninguna clave extra.
- Criterios del docente: notación correcta, dominios y soluciones comprobados, métodos formales; sin equivalencias asintóticas (~), sin argumentos heurísticos ni aproximaciones innecesarias; enunciados y soluciones originales. Sin TIP DE EXAMEN ni ERROR COMÚN.
- Gráfica opcional: bloque `grafica:` en el frontmatter (después de `orden`), dibujado como SVG exacto desde la fórmula por `src/lib/grafica.mjs`. Campos: `x: [mín, máx]`, `y: [mín, máx]`, `descripcion` (obligatoria, texto para lectores de pantalla), `ubicacion` (`"enunciado"` por defecto, o `"solucion"` si la gráfica revela la respuesta), `curvas` (`expr` con sintaxis `2x^2 - 3`, `sen(x)`, `sqrt(x)`, `abs(x)`, `ln(x)`, `e^x`; `etiqueta` en LaTeX entre comillas simples; `estilo` `principal`/`secundaria`/`referencia`; `desde`/`hasta` opcionales) y `puntos` (`{ x, y, etiqueta, abierto }`; `abierto: true` dibuja un hueco). Úsala solo cuando aporte. Nunca imágenes generadas por IA.
- Cuerpo: `## Enunciado` → enunciado; `## Solución` → pasos numerados `1.` `2.` …; última línea `**Resultado final:** …`. El plugin `rehype-solucion` hace fallar el build si falta alguno de los dos encabezados.
- Fórmulas en bloque con `$$` en líneas propias; en línea con `$…$`. Seno: `\operatorname{sen}`. Nada de letras con tilde dentro de `$…$`; usa `\text{…}`. Ningún `$` fuera de matemáticas.
- Renombrar un archivo publicado rompe su URL permanente: no lo hagas sin el visto bueno del docente.
- `tests/fixtures/ejercicio-invalido.md` es inválido a propósito (`dificultad: "facil"`): no lo corrijas.
