# Ejercicios Resueltos de Cálculo

Sitio web gratuito donde un estudiante de los primeros ciclos elige una unidad del sílabo de Cálculo (Funciones, Límites, Continuidad, Derivadas, Aplicaciones de la derivada, Integrales), luego una sección —por ejemplo «2.2 Límites laterales»— y encuentra hasta 10 ejercicios resueltos paso a paso, con las fórmulas bien escritas.

No tiene costo: es un sitio estático publicado en GitHub Pages. Sin base de datos, sin cuentas y sin anuncios.

## Comandos

| Para qué | Comando |
|---|---|
| Instalar dependencias | `npm install` |
| Ver el sitio mientras editas | `npm run dev` (abre http://localhost:4321) |
| Construir el sitio completo | `npm run build` |
| Ver el sitio construido (incluye la búsqueda) | `npm run preview` |
| Ejecutar las pruebas (después del build) | `npm test` |
| Formatear el código | `npm run format` |

## Cómo agregar un ejercicio

1. Crea un archivo en `src/content/ejercicios/<tema>/<seccion>/<nombre-del-ejercicio>.md`. `<tema>` y `<seccion>` son los nombres cortos de `src/data/temas.ts`, por ejemplo `limites/limites-laterales`. Usa minúsculas, sin tildes, con guiones.
2. Copia la forma de `src/content/ejercicios/limites/fundamentos/sustitucion-directa.md`:
   - el bloque inicial con `titulo`, `tema` y `seccion` (iguales a las carpetas), `dificultad` (`basico`, `intermedio` o `avanzado`), `metodo` (por ejemplo «Factorización») y `orden` (un número que no se repita en la sección);
   - `## Enunciado` con el problema;
   - `## Solución` con los pasos numerados;
   - una última línea `**Resultado final:** …`.
3. Escribe las fórmulas en LaTeX: `$…$` dentro del texto y `$$ … $$` en líneas propias. El seno se escribe `\operatorname{sen}`.
4. Ejecuta `npm run build` y `npm test`. Si algo está mal escrito, el build te dice qué archivo y qué campo falla.

Si trabajas con Claude Code, la skill `agregar-ejercicio` (`.claude/skills/agregar-ejercicio/SKILL.md`) hace estos pasos por ti.

> Cada sección admite hasta 10 ejercicios. Las secciones del sílabo están en `src/data/temas.ts`.

## Cómo publicar

Solo la primera vez:

1. Crea en GitHub un repositorio **público** llamado `ejercicios-calculo` (los repositorios públicos usan GitHub Pages gratis).
2. Desde esta carpeta:
   ```bash
   git remote add origin https://github.com/<usuario>/ejercicios-calculo.git
   git push -u origin main --follow-tags
   ```
3. En GitHub: *Settings → Pages → Build and deployment → Source*, elige **GitHub Actions**.

Desde entonces, cada `git push` a `main` construye, prueba y publica el sitio automáticamente. La dirección final es:

```
https://<usuario>.github.io/ejercicios-calculo/
```

`<usuario>` es tu nombre de usuario de GitHub.
