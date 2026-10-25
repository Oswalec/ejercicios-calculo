---
description: Formato de los ejercicios en Markdown + LaTeX
paths:
  - "src/content/**"
  - "tests/fixtures/**"
---

# Contenido de ejercicios

- Ruta: `src/content/ejercicios/<tema>/<slug>.md`; `<slug>` en minúsculas ASCII kebab-case, sin tildes; la carpeta es igual al campo `tema`.
- Frontmatter de exactamente 4 líneas `clave: valor`: `titulo` (string entre comillas dobles, único en el sitio), `tema` (slug de `src/data/temas.ts`), `dificultad` (`"basico"`, `"intermedio"` o `"avanzado"`), `orden` (entero ≥ 1 sin comillas, único en el tema). Ninguna clave extra.
- Cuerpo: `## Enunciado` → enunciado; `## Solución` → pasos numerados `1.` `2.` …; última línea `**Respuesta:** …`. El plugin `rehype-solucion` hace fallar el build si falta alguno de los dos encabezados.
- Fórmulas en bloque con `$$` en líneas propias; en línea con `$…$`. Seno: `\operatorname{sen}`. Nada de letras con tilde dentro de `$…$`; usa `\text{…}`. Ningún `$` fuera de matemáticas.
- Renombrar un archivo publicado rompe su URL permanente: no lo hagas sin el visto bueno del docente.
- `tests/fixtures/ejercicio-invalido.md` es inválido a propósito (`dificultad: "facil"`): no lo corrijas.
