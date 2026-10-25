# Epic 02: Contenido y publicación

> Al terminar existen los 30 ejercicios (10 por tema), la búsqueda con Pagefind, sitemap, robots y
> 404, la suite de humo y accesibilidad, y el workflow que publica en GitHub Pages.

| | |
|---|---|
| **Epic id** | `02-contenido-y-publicacion` |
| **Tareas** | `E2-T1` … `E2-T8` (pasos 9–16 de `blueprint.md`) |
| **Depende de** | `01-sitio-base` (todas sus tareas `done`) |
| **Desbloquea** | nada — al terminar, sigue la lista manual de `blueprint.md` §20.1 (revisión docente y publicación) |
| **En paralelo con** | ninguno |

No necesitas ningún otro archivo para completar este epic. Todo lo de abajo se repite aquí a propósito.

---

## Stack

Astro 7 (salida estática) · TypeScript 6 estricto · CSS propio con tokens · Markdown procesado con
`unified()` de `@astrojs/markdown-remark` + `remark-math` + `rehype-katex` + plugin propio
`src/lib/rehype-solucion.mjs` · Pagefind · pruebas con `node:test` sobre `dist/` · GitHub Pages por
GitHub Actions. Sin base de datos, sin cuentas, sin APIs, sin LLM, costo cero.
Gestor de paquetes: `npm`. Node fijado en `.nvmrc` (`24`) con `engine-strict=true` en `.npmrc`. Las
versiones de las dependencias están en `package-lock.json`: léelo, nunca adivines una versión.

| Tarea | Comando |
|---|---|
| Desarrollo | `npm run dev` — http://localhost:4321 |
| Build completo | `npm run build` (= `astro check && astro build && pagefind --site dist`) |
| Solo tipos | `npm run check` |
| Formato | `npm run format` · `npm run format:check` |
| Pruebas (tras el build) | `npm test` · un archivo: `node --test tests/aleatorio.test.mjs` |
| Build como en GitHub Pages | `SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm run build` |

**Puerta:** `npm run format:check && npm run build && npm test` sale con 0 antes de marcar cualquier
tarea como `done`.

No hay servicios locales (ni base de datos ni contenedores). Todos los comandos se ejecutan **desde la
raíz del proyecto** (`C:/Users/Oswaldo/ejercicios-calculo`, en Git Bash), nunca desde
`blueprints/ejercicios-calculo/`. `CLAUDE.md`, `.claude/rules/*.md`, `package.json`, `astro.config.mjs`,
`tsconfig.json`, `.prettierrc`, `.prettierignore`, `src/lib/rehype-solucion.mjs`, `tests/ayudantes.mjs`,
`tests/fixtures/ejercicio-invalido.md` y `public/favicon.svg` ya están en la raíz: el paso 0 del
Bootstrap los copió desde `workspace/` antes de la primera tarea. No los escribas tú.

## Subárbol de directorios

Solo lo que toca este epic:

```
.github/workflows/deploy.yml       # NUEVO (E2-T8)
README.md                          # NUEVO (E2-T8)
src/
  components/Ejercicio.astro       # existe (epic 01) — editable solo si E2-T7 lo exige
  content/ejercicios/
    derivadas/*.md                 # NUEVOS (E2-T1: 5, E2-T2: 4)
    integrales/*.md                # NUEVOS (E2-T2: 1, E2-T3: 5, E2-T4: 4)
  layouts/Base.astro               # existe (epic 01) — editable solo si E2-T7 lo exige
  pages/
    404.astro                      # NUEVO (E2-T6)
    ejercicio/[...id].astro        # existe — editado (E2-T5: data-pagefind-body)
    index.astro                    # existe — editado (E2-T5: buscador)
    robots.txt.ts                  # NUEVO (E2-T6)
  styles/global.css                # existe (epic 01) — editable solo si E2-T7 lo exige
  data/temas.ts · lib/*.ts         # existen (epic 01) — solo lectura
tests/
  contenido.test.mjs               # NUEVO (E2-T4) — los 30 nombres, 10 por tema
  busqueda.test.mjs                # NUEVO (E2-T5)
  seo.test.mjs                     # NUEVO (E2-T6)
  smoke.test.mjs                   # NUEVO (E2-T7)
  accesibilidad.test.mjs           # NUEVO (E2-T7)
  ayudantes.mjs                    # existe (workspace) — solo lectura
```

Todo lo que está fuera de este subárbol queda fuera de alcance. Si una tarea parece requerir editar
otro archivo, detente y repórtalo: el límite del epic está mal.

## Modelo de datos que toca este epic

| Entidad | Campos | Notas |
|---|---|---|
| Ejercicio (`src/content/ejercicios/<tema>/<slug>.md`) | frontmatter de 4 líneas: `titulo: "…"` (único en el sitio), `tema: "…"` (= carpeta), `dificultad: "basico" \| "intermedio" \| "avanzado"`, `orden: N` (entero ≥ 1, único en el tema, sin comillas); cuerpo `## Enunciado` → `## Solución` (pasos `1.`, `2.`, …) → `**Respuesta:**` | El esquema es estricto; `rehype-solucion` hace fallar el build si falta una sección. Forma de referencia: `src/content/ejercicios/limites/sustitucion-directa.md` |

## Contratos

**Consumidos** — ya existen, no los reconstruyas:

| De | Interfaz | Garantía |
|---|---|---|
| `01-sitio-base` | `src/lib/url.ts` → `url(ruta?: string): string` | Une la base (`/` o `/ejercicios-calculo/`) con la ruta |
| `01-sitio-base` | `src/data/temas.ts` → `temas`, `SLUGS_TEMAS` | Los tres temas con `slug`, `nombre`, `descripcion`, `orden` |
| `01-sitio-base` | `src/lib/esquema.ts` → `esquemaEjercicio` | zod estricto: `titulo`, `tema`, `dificultad`, `orden` |
| `01-sitio-base` | `src/lib/aleatorio.ts` → `MINIMO` (`5`), `MAXIMO` (`10`) | Mínimo y máximo de ejercicios visibles |
| `01-sitio-base` | `src/layouts/Base.astro` props `{ titulo, descripcion, noindex? }` | `lang="es"`, canonical `new URL(Astro.url.pathname, Astro.site)`, enlace de salto, `main id="contenido"` |
| `workspace/` | `tests/ayudantes.mjs` → `SITIO` = `new URL(SITE_URL ?? "http://localhost:4321").origin`, `PREFIJO`, `canonicalEsperado()`, `listarHtml()`, `ejerciciosEnDisco()`, `leerFrontmatter()`, `archivoDeUrl()` | Toda URL absoluta esperada es `SITIO + PREFIJO + ruta` |

**Producidos**:

| Export | Firma | Lo usa |
|---|---|---|
| `dist/robots.txt` | `User-agent: *` · `Allow: /` · `Sitemap: <origen><base>sitemap-index.xml` | GitHub Pages / buscadores |
| `.github/workflows/deploy.yml` | push a `main` → `npm ci` → `npm run format:check` → `npm run build` → `npm test` → `upload-pages-artifact` (`dist`) → `deploy-pages` | Publicación (lista manual de §20.1) |

## Convenciones que muerden en esta zona

- Imports relativos **con la extensión real** (`../lib/url.ts`, `../data/temas.ts`, `./src/lib/rehype-solucion.mjs`); sin alias `@/`. Las pruebas de Node importan `.ts` directamente gracias al type stripping de Node 24, que resuelve el especificador literalmente.
- `src/lib/aleatorio.ts`, `url.ts`, `esquema.ts` y `src/data/temas.ts` no importan `astro:*` y usan solo TypeScript borrable (`erasableSyntaxOnly`).
- Todo enlace o recurso interno pasa por `url()` de `src/lib/url.ts`; un `href="/..."` literal rompe en GitHub Pages (base `/ejercicios-calculo/`) y `tests/estructura.test.mjs` lo detecta.
- Astro 7 compila con Rust y rechaza etiquetas sin cerrar y anidamiento inválido. No crees `src/fetch.ts` (nombre reservado).
- Atributos con valores dinámicos se escriben como expresión completa: `class={`insignia insignia--${dificultad}`}`, nunca `class="… {x}"`.
- Ningún color ni tamaño literal fuera de `src/styles/global.css`.
- Cada línea Verify es autónoma; no la edites. Si una puerta falla, arregla el código, no el comando.

Reglas completas del proyecto: `CLAUDE.md`. Reglas por zona: `.claude/rules/contenido.md`,
`.claude/rules/interfaz.md`, `.claude/rules/pruebas.md`. Todas están en la raíz desde el Bootstrap.
- Reglas de escritura del contenido: seno `\operatorname{sen}`; nada de letras con tilde dentro de `$…$` (usa `\text{}`); ningún `$` fuera de matemáticas; `$$ … $$` en líneas propias; en el Markdown `|x|` (las tablas usan `\lvert x\rvert` solo porque `|` rompe tablas).

---

## Tareas

En el mismo orden que `tasks.json`. Ese orden es el orden de construcción: trabaja de arriba abajo y no
reordenes por prioridad ni por lo que parezca rápido.

### `E2-T1` — Semilla 3: Derivadas, orden 2 a 6

**Paso de `blueprint.md`:** 9 · **Depende de:** `E1-T8` · **Prioridad:** p0 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Escribe 5 ejercicios nuevos en `src/content/ejercicios/derivadas/`. Reglas de escritura, iguales en
los pasos 7 a 12: cada archivo copia la forma de `src/content/ejercicios/limites/sustitucion-directa.md`
— frontmatter de exactamente 4 líneas (`titulo: "…"`, `tema: "…"`, `dificultad: "…"`, `orden: N`,
strings entre comillas dobles, `orden` sin comillas); `## Enunciado` con el enunciado de la tabla
(fórmula en bloque `$$ … $$` en líneas propias); `## Solución` con 3 a 7 pasos numerados (`1.`, `2.`,
…) que justifican cada regla usada; última línea `**Respuesta:** <respuesta de la tabla en LaTeX>`.
Seno es `\operatorname{sen}`; nada de letras con tilde dentro de `$…$` (usa `\text{}`); ningún `$`
fuera de matemáticas. La respuesta final de cada archivo es la de la tabla; el docente revisará los 30
antes del lanzamiento.

| Archivo | `titulo` | `dificultad` | `orden` | Enunciado | Respuesta |
|---|---|---|---|---|---|
| `regla-del-producto.md` | Regla del producto | basico | 2 | Deriva `f(x) = (x^2 + 1)(3x - 2)` | `f'(x) = 9x^2 - 4x + 3` |
| `regla-del-cociente.md` | Regla del cociente | intermedio | 3 | Deriva `f(x) = \frac{2x + 1}{x - 3}` | `f'(x) = \frac{-7}{(x - 3)^2}` |
| `regla-de-la-cadena.md` | Regla de la cadena con una potencia | intermedio | 4 | Deriva `f(x) = (3x^2 - 1)^4` | `f'(x) = 24x(3x^2 - 1)^3` |
| `derivadas-trigonometricas.md` | Derivada de un producto de funciones trigonométricas | intermedio | 5 | Deriva `f(x) = \operatorname{sen} x \cos x` | `f'(x) = \cos^2 x - \operatorname{sen}^2 x = \cos(2x)` |
| `exponencial-y-logaritmo.md` | Derivada de una exponencial por un logaritmo | intermedio | 6 | Deriva `f(x) = e^{2x} \ln x` para `x > 0` | `f'(x) = 2e^{2x}\ln x + \frac{e^{2x}}{x}` |

**Archivos**
- `src/content/ejercicios/derivadas/regla-del-producto.md`
- `src/content/ejercicios/derivadas/regla-del-cociente.md`
- `src/content/ejercicios/derivadas/regla-de-la-cadena.md`
- `src/content/ejercicios/derivadas/derivadas-trigonometricas.md`
- `src/content/ejercicios/derivadas/exponencial-y-logaritmo.md`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `npm run build` runs with the 5 new files in `src/content/ejercicios/derivadas/` **THE SYSTEM SHALL** exit 0, so every new frontmatter passes the strict schema and every body has `## Enunciado` followed by `## Solución`.
2. **WHEN** each of the 5 new files is read **THE SYSTEM SHALL** contain a line starting with `**Respuesta:**`.
3. **WHEN** `src/content/ejercicios/derivadas/` is listed after this step **THE SYSTEM SHALL** hold exactly 6 `.md` files.
4. **WHEN** `npm test` runs after the build **THE SYSTEM SHALL** exit 0 with 0 failed, including `tests/ejercicio.test.mjs` over every exercise on disk (KaTeX present, no `$$`, `Ver solución` present).

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/regla-del-producto.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/regla-del-cociente.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/regla-de-la-cadena.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/derivadas-trigonometricas.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/exponencial-y-logaritmo.md
test "$(ls src/content/ejercicios/derivadas/*.md | wc -l)" -eq 6
npm run build
npm test
npm run format:check
```

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 9: semilla 3 derivadas 2 a 6"
git tag step-09-semilla-3
```

Si la tarea siguiente sale mal: `git reset --hard step-09-semilla-3`.

---
### `E2-T2` — Semilla 4: Derivadas 7 a 10 e Integrales 1

**Paso de `blueprint.md`:** 10 · **Depende de:** `E2-T1` · **Prioridad:** p0 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Escribe 4 ejercicios nuevos en `src/content/ejercicios/derivadas/` y 1 en
`src/content/ejercicios/integrales/`. Reglas de escritura, iguales en los pasos 7 a 12: cada archivo
copia la forma de `src/content/ejercicios/limites/sustitucion-directa.md` — frontmatter de exactamente
4 líneas (`titulo: "…"`, `tema: "…"`, `dificultad: "…"`, `orden: N`, strings entre comillas dobles,
`orden` sin comillas); `## Enunciado` con el enunciado de la tabla (fórmula en bloque `$$ … $$` en
líneas propias); `## Solución` con 3 a 7 pasos numerados (`1.`, `2.`, …) que justifican cada regla
usada; última línea `**Respuesta:** <respuesta de la tabla en LaTeX>`. Seno es `\operatorname{sen}`;
nada de letras con tilde dentro de `$…$` (usa `\text{}`, como en `\text{cm/s}`); ningún `$` fuera de
matemáticas. La respuesta final de cada archivo es la de la tabla; el docente revisará los 30 antes
del lanzamiento.

| Archivo | `titulo` | `dificultad` | `orden` | Enunciado | Respuesta |
|---|---|---|---|---|---|
| `derivadas/derivacion-implicita.md` | Derivación implícita en una circunferencia | intermedio | 7 | Si `x^2 + y^2 = 25`, halla `\frac{dy}{dx}` y evalúala en `(3, 4)` | `\frac{dy}{dx} = -\frac{x}{y}`; en `(3,4)`: `-\frac{3}{4}` |
| `derivadas/recta-tangente.md` | Ecuación de la recta tangente | basico | 8 | Recta tangente a `f(x) = x^3 - 2x` en `x = 1` | `y = x - 2` |
| `derivadas/segunda-derivada.md` | Segunda derivada y puntos de inflexión | intermedio | 9 | Para `f(x) = x^4 - 6x^2`, halla `f''(x)` y los puntos de inflexión | `f''(x) = 12x^2 - 12`; inflexión en `x = -1` y `x = 1` |
| `derivadas/razon-de-cambio.md` | Razón de cambio relacionada: área de un círculo | avanzado | 10 | El radio de un círculo crece a `2\,\text{cm/s}`. ¿A qué razón crece el área cuando `r = 5\,\text{cm}`? | `\frac{dA}{dt} = 20\pi\,\text{cm}^2/\text{s}` |
| `integrales/integrales-inmediatas.md` | Integral inmediata de un polinomio | basico | 1 | `\int (6x^2 - 4x + 5)\,dx` | `2x^3 - 2x^2 + 5x + C` |

**Archivos**
- `src/content/ejercicios/derivadas/derivacion-implicita.md`
- `src/content/ejercicios/derivadas/recta-tangente.md`
- `src/content/ejercicios/derivadas/segunda-derivada.md`
- `src/content/ejercicios/derivadas/razon-de-cambio.md`
- `src/content/ejercicios/integrales/integrales-inmediatas.md`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `npm run build` runs with the 5 new files **THE SYSTEM SHALL** exit 0, so every new frontmatter passes the strict schema and every body has `## Enunciado` followed by `## Solución`.
2. **WHEN** each of the 5 new files is read **THE SYSTEM SHALL** contain a line starting with `**Respuesta:**`.
3. **WHEN** the content folders are listed after this step **THE SYSTEM SHALL** hold exactly 10 `.md` files in `src/content/ejercicios/derivadas/` and exactly 1 in `src/content/ejercicios/integrales/`.
4. **WHEN** `npm test` runs after the build **THE SYSTEM SHALL** exit 0 with 0 failed, including `tests/ejercicio.test.mjs` over every exercise on disk (KaTeX present, no `$$`, `Ver solución` present).

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/derivacion-implicita.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/recta-tangente.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/segunda-derivada.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/razon-de-cambio.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/integrales-inmediatas.md
test "$(ls src/content/ejercicios/derivadas/*.md | wc -l)" -eq 10
test "$(ls src/content/ejercicios/integrales/*.md | wc -l)" -eq 1
npm run build
npm test
npm run format:check
```

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 10: semilla 4 derivadas 7 a 10 e integrales 1"
git tag step-10-semilla-4
```

Si la tarea siguiente sale mal: `git reset --hard step-10-semilla-4`.

---
### `E2-T3` — Semilla 5: Integrales, orden 2 a 6

**Paso de `blueprint.md`:** 11 · **Depende de:** `E2-T2` · **Prioridad:** p0 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Escribe 5 ejercicios nuevos en `src/content/ejercicios/integrales/`. Reglas de escritura, iguales en
los pasos 7 a 12: cada archivo copia la forma de `src/content/ejercicios/limites/sustitucion-directa.md`
— frontmatter de exactamente 4 líneas (`titulo: "…"`, `tema: "…"`, `dificultad: "…"`, `orden: N`,
strings entre comillas dobles, `orden` sin comillas); `## Enunciado` con el enunciado de la tabla
(fórmula en bloque `$$ … $$` en líneas propias); `## Solución` con 3 a 7 pasos numerados (`1.`, `2.`,
…) que justifican cada regla usada; última línea `**Respuesta:** <respuesta de la tabla en LaTeX>`.
Seno es `\operatorname{sen}`; nada de letras con tilde dentro de `$…$` (usa `\text{}`); ningún `$`
fuera de matemáticas. La respuesta final de cada archivo es la de la tabla; el docente revisará los 30
antes del lanzamiento.

| Archivo | `titulo` | `dificultad` | `orden` | Enunciado | Respuesta |
|---|---|---|---|---|---|
| `sustitucion-simple.md` | Cambio de variable en una potencia | basico | 2 | `\int 2x(x^2 + 1)^5\,dx` | `\frac{(x^2 + 1)^6}{6} + C` |
| `integral-trigonometrica-basica.md` | Integral trigonométrica básica | basico | 3 | `\int \operatorname{sen}(3x)\,dx` | `-\frac{\cos(3x)}{3} + C` |
| `sustitucion-exponencial.md` | Cambio de variable con exponencial | intermedio | 4 | `\int x e^{x^2}\,dx` | `\frac{e^{x^2}}{2} + C` |
| `integracion-por-partes.md` | Integración por partes con exponencial | intermedio | 5 | `\int x e^{x}\,dx` | `e^{x}(x - 1) + C` |
| `por-partes-logaritmo.md` | Integración por partes del logaritmo natural | intermedio | 6 | `\int \ln x\,dx` | `x\ln x - x + C` |

**Archivos**
- `src/content/ejercicios/integrales/sustitucion-simple.md`
- `src/content/ejercicios/integrales/integral-trigonometrica-basica.md`
- `src/content/ejercicios/integrales/sustitucion-exponencial.md`
- `src/content/ejercicios/integrales/integracion-por-partes.md`
- `src/content/ejercicios/integrales/por-partes-logaritmo.md`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `npm run build` runs with the 5 new files in `src/content/ejercicios/integrales/` **THE SYSTEM SHALL** exit 0, so every new frontmatter passes the strict schema and every body has `## Enunciado` followed by `## Solución`.
2. **WHEN** each of the 5 new files is read **THE SYSTEM SHALL** contain a line starting with `**Respuesta:**`.
3. **WHEN** `src/content/ejercicios/integrales/` is listed after this step **THE SYSTEM SHALL** hold exactly 6 `.md` files.
4. **WHEN** `npm test` runs after the build **THE SYSTEM SHALL** exit 0 with 0 failed, including `tests/ejercicio.test.mjs` over every exercise on disk (KaTeX present, no `$$`, `Ver solución` present).

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/sustitucion-simple.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/integral-trigonometrica-basica.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/sustitucion-exponencial.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/integracion-por-partes.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/por-partes-logaritmo.md
test "$(ls src/content/ejercicios/integrales/*.md | wc -l)" -eq 6
npm run build
npm test
npm run format:check
```

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 11: semilla 5 integrales 2 a 6"
git tag step-11-semilla-5
```

Si la tarea siguiente sale mal: `git reset --hard step-11-semilla-5`.

---
### `E2-T4` — Semilla 6: Integrales 7 a 10 y prueba de contenido

**Paso de `blueprint.md`:** 12 · **Depende de:** `E2-T3` · **Prioridad:** p0 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Escribe los últimos 4 ejercicios en `src/content/ejercicios/integrales/` con las mismas reglas de
escritura de los pasos 7 a 11: cada archivo copia la forma de
`src/content/ejercicios/limites/sustitucion-directa.md` — frontmatter de exactamente 4 líneas
(`titulo: "…"`, `tema: "…"`, `dificultad: "…"`, `orden: N`, strings entre comillas dobles, `orden` sin
comillas); `## Enunciado` con el enunciado de la tabla (fórmula en bloque `$$ … $$` en líneas
propias); `## Solución` con 3 a 7 pasos numerados que justifican cada regla; última línea
`**Respuesta:** <respuesta de la tabla en LaTeX>`. Nada de letras con tilde dentro de `$…$`; ningún
`$` fuera de matemáticas; en el Markdown escribe `|x|` (la tabla usa `\lvert \rvert` solo porque `|`
rompe tablas).

| Archivo | `titulo` | `dificultad` | `orden` | Enunciado | Respuesta |
|---|---|---|---|---|---|
| `fracciones-parciales.md` | Fracciones parciales con factores lineales | avanzado | 7 | `\int \frac{1}{x^2 - 1}\,dx` | `\frac{1}{2}\ln\left\lvert\frac{x - 1}{x + 1}\right\rvert + C` |
| `integral-definida-tfc.md` | Integral definida con el teorema fundamental del cálculo | basico | 8 | `\int_{0}^{2} (3x^2 + 1)\,dx` | `10` |
| `area-entre-curvas.md` | Área entre dos curvas | intermedio | 9 | Área de la región entre `y = x` e `y = x^2` | `\frac{1}{6}` |
| `integral-definida-sustitucion.md` | Integral definida con cambio de variable | avanzado | 10 | `\int_{0}^{1} \frac{x}{x^2 + 1}\,dx` | `\frac{1}{2}\ln 2` |

Crea también `tests/contenido.test.mjs` con la lista literal de los 30 archivos (como
`"<tema>/<archivo>"`):

```text
limites/sustitucion-directa.md            limites/factorizacion-cero-entre-cero.md
limites/racionalizacion.md                limites/limite-al-infinito-polinomios.md
limites/limite-al-infinito-raices.md      limites/limite-trigonometrico-sen-x-sobre-x.md
limites/limites-laterales-valor-absoluto.md   limites/limite-numero-e.md
limites/continuidad-funcion-a-trozos.md   limites/teorema-del-sandwich.md
derivadas/regla-de-la-potencia.md         derivadas/regla-del-producto.md
derivadas/regla-del-cociente.md           derivadas/regla-de-la-cadena.md
derivadas/derivadas-trigonometricas.md    derivadas/exponencial-y-logaritmo.md
derivadas/derivacion-implicita.md         derivadas/recta-tangente.md
derivadas/segunda-derivada.md             derivadas/razon-de-cambio.md
integrales/integrales-inmediatas.md       integrales/sustitucion-simple.md
integrales/integral-trigonometrica-basica.md  integrales/sustitucion-exponencial.md
integrales/integracion-por-partes.md      integrales/por-partes-logaritmo.md
integrales/fracciones-parciales.md        integrales/integral-definida-tfc.md
integrales/area-entre-curvas.md           integrales/integral-definida-sustitucion.md
```

Casos de la prueba (usa `ejerciciosEnDisco()`, `leerFrontmatter()` y `CONTENIDO` de
`tests/ayudantes.mjs`, `temas` de `../src/data/temas.ts` y `esquemaEjercicio` de
`../src/lib/esquema.ts`): (1) cada uno de los 30 existe en `src/content/ejercicios/`; (2) cada tema de
`temas` tiene en disco exactamente los archivos que la lista le asigna, ni más ni menos — 10 por tema;
(3) para cada archivo en disco, `esquemaEjercicio.safeParse(datos)` es válido, `datos.tema` es igual a
la carpeta, los `orden` no se repiten dentro de un tema y los `titulo` no se repiten en todo el sitio;
(4) el cuerpo contiene `## Enunciado` antes de `## Solución`, y contiene `1. ` y `**Respuesta:**`
después de `## Solución`.

**Archivos**
- `src/content/ejercicios/integrales/fracciones-parciales.md`
- `src/content/ejercicios/integrales/integral-definida-tfc.md`
- `src/content/ejercicios/integrales/area-entre-curvas.md`
- `src/content/ejercicios/integrales/integral-definida-sustitucion.md`
- `tests/contenido.test.mjs`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** each of the 4 new files is read **THE SYSTEM SHALL** contain a line starting with `**Respuesta:**`.
2. **WHEN** `tests/contenido.test.mjs` runs **THE SYSTEM SHALL** find all 30 named files, exactly 10 per tema, each with frontmatter valid under the strict schema whose `tema` equals its folder, with no repeated `orden` within a tema and no repeated `titulo` in the site.
3. **WHEN** any exercise body is read by `tests/contenido.test.mjs` **THE SYSTEM SHALL** find `## Enunciado` before `## Solución`, and a numbered step `1. ` and a `**Respuesta:**` line after `## Solución`.
4. **WHEN** `npm test` runs after `npm run build` **THE SYSTEM SHALL** exit 0 with 0 failed, with each tema page holding as many `data-indice` items as that tema has files.

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/fracciones-parciales.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/integral-definida-tfc.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/area-entre-curvas.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/integral-definida-sustitucion.md
npm run build
node --test tests/contenido.test.mjs
npm test
npm run format:check
```

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 12: semilla 6 integrales 7 a 10 y prueba de contenido"
git tag step-12-semilla-6
```

Si la tarea siguiente sale mal: `git reset --hard step-12-semilla-6`.

---
### `E2-T5` — Búsqueda con Pagefind

**Paso de `blueprint.md`:** 13 · **Depende de:** `E2-T4` · **Prioridad:** p1 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Modifica o crea:
- `src/pages/ejercicio/[...id].astro` — envuelve `<Ejercicio …/>` en `<div data-pagefind-body>`. Solo las páginas permanentes llevan ese atributo, así Pagefind indexa únicamente ejercicios (cuando al menos una página lo tiene, Pagefind ignora las demás).
- `src/pages/index.astro` — entre el hero y la grilla, agrega:
  ```astro
  <section class="busqueda" aria-labelledby="titulo-busqueda">
    <h2 id="titulo-busqueda">Buscar un ejercicio</h2>
    <link rel="stylesheet" href={url("pagefind/pagefind-ui.css")} />
    <div id="buscador"></div>
    <noscript>La búsqueda necesita JavaScript; elige un tema más abajo.</noscript>
    <script is:inline src={url("pagefind/pagefind-ui.js")}></script>
    <script is:inline define:vars={{ baseUrl: url("") }}>
      window.addEventListener("DOMContentLoaded", () => {
        new PagefindUI({
          element: "#buscador",
          baseUrl,
          showSubResults: true,
          showImages: false,
        });
      });
    </script>
  </section>
  ```
  `baseUrl` es obligatorio: Pagefind arma las URLs de resultados relativas a `dist/`, sin la base de GitHub Pages.
- `tests/busqueda.test.mjs` — existen `dist/pagefind/pagefind-ui.js`, `dist/pagefind/pagefind-ui.css` y `dist/pagefind/pagefind-entry.json` (solo esos tres: son los que la prueba real con Pagefind 1.5.2 confirmó); `dist/index.html` contiene `id="buscador"`, `${PREFIJO}pagefind/pagefind-ui.js`, `PagefindUI` y el texto `JSON.stringify(PREFIJO)` (la base inyectada por `define:vars`); cada página permanente de `ejerciciosEnDisco()` contiene `data-pagefind-body`; ni `dist/index.html` ni ninguna `dist/tema/*/index.html` lo contiene.

Luego `npm run format`.

**Archivos**
- `src/pages/index.astro`
- `src/pages/ejercicio/[...id].astro`
- `tests/busqueda.test.mjs`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `npm run build` runs **THE SYSTEM SHALL** produce `dist/pagefind/pagefind-ui.js`, `dist/pagefind/pagefind-ui.css` and `dist/pagefind/pagefind-entry.json`.
2. **WHEN** `dist/index.html` is generated **THE SYSTEM SHALL** load `pagefind-ui.js` from `${base}pagefind/` and initialise `PagefindUI` with `baseUrl` equal to the base.
3. **WHEN** the site is built **THE SYSTEM SHALL** mark every exercise permalink page with `data-pagefind-body` and no home or tema page.
4. **WHEN** `npm test` runs after the build **THE SYSTEM SHALL** exit 0 with 0 failed.

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
npm run build
test -f dist/pagefind/pagefind-ui.js
test -f dist/pagefind/pagefind-entry.json
npm test
npm run format:check
```

Que una búsqueda real devuelva resultados en el navegador es comportamiento de cliente (WebAssembly):
está en la lista manual de §20.1.

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 13: busqueda con pagefind"
git tag step-13-busqueda
```

Si la tarea siguiente sale mal: `git reset --hard step-13-busqueda`.

---
### `E2-T6` — SEO: sitemap, robots, 404 y metadatos

**Paso de `blueprint.md`:** 14 · **Depende de:** `E2-T5` · **Prioridad:** p1 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

El sitemap ya lo genera `@astrojs/sitemap` (configurado en `astro.config.mjs`, que llegó con
`workspace/`, con un filtro que excluye `/404`). Crea:
- `src/pages/robots.txt.ts`:
  ```ts
  import type { APIRoute } from "astro";
  import { url } from "../lib/url.ts";

  export const GET: APIRoute = ({ site }) => {
    const mapa = new URL(url("sitemap-index.xml"), site).href;
    const cuerpo = `User-agent: *\nAllow: /\n\nSitemap: ${mapa}\n`;
    return new Response(cuerpo, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  };
  ```
- `src/pages/404.astro` — `Base` con `titulo="Página no encontrada | Ejercicios de Cálculo"`, `descripcion="La página que buscas no existe. Vuelve al inicio para elegir un tema de Cálculo."` y `noindex={true}`; contenido `<h1>Página no encontrada</h1>`, un párrafo y `<a href={url("")}>Ir al inicio</a>`.
- `tests/seo.test.mjs` — todas las URLs absolutas se comparan contra `SITIO` de `tests/ayudantes.mjs`, que es el **origen normalizado** (`new URL(SITE_URL).origin`, sin barra final): (1) `dist/404.html` existe, contiene `noindex` y un `href` igual a `PREFIJO`; (2) `dist/robots.txt` contiene `User-agent: *` y la línea `Sitemap: ${SITIO}${PREFIJO}sitemap-index.xml`; (3) `dist/sitemap-index.xml` y `dist/sitemap-0.xml` existen; `sitemap-0.xml` contiene `<loc>${SITIO}${PREFIJO}</loc>`, un `<loc>` por cada tema (`${SITIO}${PREFIJO}tema/<slug>/`) y por cada ejercicio en disco (`${SITIO}${PREFIJO}ejercicio/<tema>/<slug>/`), y ningún `<loc>` que contenga `404`; (4) para cada HTML de `listarHtml()` excepto `404.html`, el `href` del `<link rel="canonical"` es igual a `canonicalEsperado(archivo)`; (5) los textos de `<title>` y de `meta description` son únicos entre todas las páginas.

Luego `npm run format`.

**Archivos**
- `src/pages/robots.txt.ts`
- `src/pages/404.astro`
- `tests/seo.test.mjs`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `npm run build` runs **THE SYSTEM SHALL** write `dist/robots.txt` with `User-agent: *` and `Sitemap: <origin><base>sitemap-index.xml`.
2. **WHEN** the sitemap is generated **THE SYSTEM SHALL** list the home, every tema page and every exercise page as `<origin><base><path>`, and SHALL NOT list the 404 page.
3. **WHEN** `dist/404.html` is generated **THE SYSTEM SHALL** include `<meta name="robots" content="noindex" />` and a link to the home.
4. **WHEN** `tests/seo.test.mjs` compares every page except 404 **THE SYSTEM SHALL** find a canonical equal to `<origin><base><path>` (origin normalized with `new URL(SITE_URL).origin`) and no duplicated `<title>` or meta description.
5. **WHEN** `npm test` runs after the build **THE SYSTEM SHALL** exit 0 with 0 failed.

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
npm run build
test -f dist/404.html
test -f dist/robots.txt
grep -q "User-agent: \*" dist/robots.txt
npm test
npm run format:check
```

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 14: seo sitemap robots y 404"
git tag step-14-seo
```

Si la tarea siguiente sale mal: `git reset --hard step-14-seo`.

---
### `E2-T7` — Suite de humo y accesibilidad básica

**Paso de `blueprint.md`:** 15 · **Depende de:** `E2-T6` · **Prioridad:** p1 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Crea:
- `tests/smoke.test.mjs` — (1) existen `dist/index.html`, `dist/404.html`, `dist/tema/<slug>/index.html` por cada tema y `dist/ejercicio/<tema>/<slug>/index.html` por cada ejercicio en disco; (2) en cada HTML, cada URL local que termina en `/` resuelve con `archivoDeUrl()` a un `index.html` existente (sin enlaces internos rotos); (3) ningún HTML contiene `$$` ni `katex-error`; (4) cada tema de `temas` tiene en disco al menos `MINIMO` ejercicios (importado de `../src/lib/aleatorio.ts`) y su página tiene `data-total` ≥ `MINIMO`; (5) cada página de tema y de ejercicio contiene `class="katex"`.
- `tests/accesibilidad.test.mjs` — por cada HTML: `<html lang="es"`; exactamente un `<h1`; `<meta name="viewport"`; un enlace `href="#contenido"` y un `id="contenido"`; cada `<img` tiene `alt=`; cada `<button` tiene texto no vacío entre sus etiquetas; cada `<details` contiene un `<summary`. Además, contraste: lee `src/styles/global.css`, toma el primer bloque `:root { … }` (claro) y el `:root { … }` dentro de `@media (prefers-color-scheme: dark)` (oscuro), resuelve los hex (sin distinguir mayúsculas) y calcula la razón WCAG `(L1 + 0.05) / (L2 + 0.05)` con luminancia relativa sRGB para estos pares en ambos modos: `--fg`/`--bg`, `--fg`/`--surface`, `--fg-muted`/`--bg`, `--fg-muted`/`--surface`, `--primary`/`--bg`, `--primary`/`--surface`, `--primary-fg`/`--primary`, `--accent-fg`/`--accent`; cada razón debe ser ≥ 4.5.

**Si estas pruebas revelan un defecto**, la corrección solo puede tocar estos tres archivos, que son
donde viven todas las propiedades que las pruebas miden: `src/layouts/Base.astro` (lang, viewport,
enlace de salto, `main id="contenido"`, canonical), `src/styles/global.css` (tokens de contraste) y
`src/components/Ejercicio.astro` (`h1`/`h2`, `details`/`summary`, KaTeX). Si la corrección requiere
otro archivo, detente y repórtalo: es un defecto del blueprint, no algo que arreglar improvisando. No
agregues funcionalidad. Luego `npm run format`.

**Archivos**
- `tests/smoke.test.mjs`
- `tests/accesibilidad.test.mjs`
- `src/layouts/Base.astro`
- `src/styles/global.css`
- `src/components/Ejercicio.astro`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `npm test` runs after the build **THE SYSTEM SHALL** find a generated file for the home, the 404, every tema and every exercise, and zero internal page links that resolve to a missing file.
2. **WHEN** any generated HTML is scanned **THE SYSTEM SHALL** find `lang="es"`, exactly one `<h1`, a viewport meta, a skip link to `#contenido`, no raw `$$` and no `katex-error`.
3. **WHEN** every tema page is scanned **THE SYSTEM SHALL** find `data-total` of at least 5 (`MINIMO`).
4. **WHEN** the eight token pairs are computed from `src/styles/global.css` in light and dark mode **THE SYSTEM SHALL** find every contrast ratio ≥ 4.5.
5. **WHEN** the whole suite runs with `node --test --test-reporter=tap "tests/**/*.test.mjs"` **THE SYSTEM SHALL** exit 0 and its report SHALL contain the lines `# skipped 0` and `# todo 0`.

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
npm run build
npm test
out="$(mktemp)" && node --test --test-reporter=tap "tests/**/*.test.mjs" >"$out" 2>&1 && grep -qx "# skipped 0" "$out" && grep -qx "# todo 0" "$out" || false
npm run format:check
```

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 15: suite de humo y accesibilidad"
git tag step-15-calidad
```

Si la tarea siguiente sale mal: `git reset --hard step-15-calidad`.

---
### `E2-T8` — Workflow de despliegue a GitHub Pages

**Paso de `blueprint.md`:** 16 · **Depende de:** `E2-T7` · **Prioridad:** p0 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Crea:
- `.github/workflows/deploy.yml`:
  ```yaml
  name: Desplegar en GitHub Pages

  on:
    push:
      branches: [main]
    workflow_dispatch:

  permissions:
    contents: read
    pages: write
    id-token: write

  concurrency:
    group: pages
    cancel-in-progress: false

  jobs:
    build:
      runs-on: ubuntu-latest
      env:
        SITE_URL: https://${{ github.repository_owner }}.github.io
        BASE_PATH: /${{ github.event.repository.name }}
      steps:
        - uses: actions/checkout@v7
        - uses: actions/setup-node@v7
          with:
            node-version-file: .nvmrc
            cache: npm
        - run: npm ci
        - run: npm run format:check
        - run: npm run build
        - run: npm test
        - uses: actions/configure-pages@v6
        - uses: actions/upload-pages-artifact@v5
          with:
            path: dist

    deploy:
      needs: build
      runs-on: ubuntu-latest
      environment:
        name: github-pages
        url: ${{ steps.deployment.outputs.page_url }}
      steps:
        - id: deployment
          uses: actions/deploy-pages@v5
  ```
  El despliegue por Actions no ejecuta Jekyll, así que la carpeta `dist/_astro/` (empieza con guion bajo) se publica tal cual; no hace falta `.nojekyll`.
- `README.md` — en español: qué es el sitio; comandos (`npm install`, `npm run dev`, `npm run build`, `npm test`); «Cómo agregar un ejercicio» (resume la skill `.claude/skills/agregar-ejercicio/SKILL.md`); «Cómo publicar» con los pasos manuales (crear repositorio **público** `ejercicios-calculo` en GitHub, `git remote add origin https://github.com/<usuario>/ejercicios-calculo.git`, `git push -u origin main --follow-tags`, en *Settings → Pages → Build and deployment → Source* elegir **GitHub Actions**) y la URL final `https://<usuario>.github.io/ejercicios-calculo/`, donde `<usuario>` es el nombre de usuario de GitHub del docente.

Luego `npm run format`.

**Archivos**
- `.github/workflows/deploy.yml`
- `README.md`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `.github/workflows/deploy.yml` is read **THE SYSTEM SHALL** reference `actions/checkout@v7`, `actions/setup-node@v7`, `actions/configure-pages@v6`, `actions/upload-pages-artifact@v5` and `actions/deploy-pages@v5`, and contain `node-version-file: .nvmrc`.
2. **WHEN** `.github/workflows/deploy.yml` is read **THE SYSTEM SHALL** contain `run: npm ci`, `run: npm run format:check`, `run: npm run build` and `run: npm test`, in that order, each on a line before `actions/upload-pages-artifact`.
3. **WHEN** `SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm run build` and then the same-env `npm test` run **THE SYSTEM SHALL** exit 0, with every local link in `dist/` prefixed by `/ejercicios-calculo/`.
4. **WHEN** that base build is inspected **THE SYSTEM SHALL** contain `href="/ejercicios-calculo/tema/limites/"` in `dist/index.html` and the canonical `https://ejemplo.github.io/ejercicios-calculo/`.

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
test -f .github/workflows/deploy.yml
grep -q "actions/checkout@v7" .github/workflows/deploy.yml
grep -q "actions/setup-node@v7" .github/workflows/deploy.yml
grep -q "actions/configure-pages@v6" .github/workflows/deploy.yml
grep -q "actions/upload-pages-artifact@v5" .github/workflows/deploy.yml
grep -q "actions/deploy-pages@v5" .github/workflows/deploy.yml
grep -q "node-version-file: .nvmrc" .github/workflows/deploy.yml
grep -q "run: npm ci" .github/workflows/deploy.yml
grep -q "run: npm run format:check" .github/workflows/deploy.yml
grep -q "run: npm run build" .github/workflows/deploy.yml
grep -q "run: npm test" .github/workflows/deploy.yml
awk '/run: npm ci/{a=NR} /run: npm run format:check/{b=NR} /run: npm run build/{c=NR} /run: npm test/{d=NR} /actions\/upload-pages-artifact/{e=NR} END{exit !(a && a<b && b<c && c<d && d<e)}' .github/workflows/deploy.yml
SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm run build
SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm test
grep -q 'href="/ejercicios-calculo/tema/limites/"' dist/index.html
grep -q "https://ejemplo.github.io/ejercicios-calculo/" dist/index.html
npm run build
npm test
npm run format:check
```

Publicar de verdad (crear el repositorio, `git push`, activar Pages) necesita la cuenta de GitHub del
docente y la red; `gh` no está instalado. Va en §20.1.

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 16: workflow de despliegue a github pages"
git tag step-16-despliegue
git ls-files --error-unmatch .github/workflows/deploy.yml   # expect: exit 0 — versionado por el commit de arriba
```

Si la tarea siguiente sale mal: `git reset --hard step-16-despliegue`.

---
## Aceptación del epic

Ejecuta cada línea por separado; cada una debe salir con 0.

El epic está terminado cuando todas sus tareas están `done` **y**:

1. **WHEN** the full suite runs with the TAP reporter after `E2-T8` **THE SYSTEM SHALL** exit 0 and report `# skipped 0` and `# todo 0`.
2. **WHEN** the site is built with `SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo` **THE SYSTEM SHALL** pass every test, so no internal link escapes the base path.

```bash
npm run format:check && npm run build && npm test || false
out="$(mktemp)" && node --test --test-reporter=tap "tests/**/*.test.mjs" >"$out" 2>&1 && grep -qx "# skipped 0" "$out" && grep -qx "# todo 0" "$out" || false
SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm run build
SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm test
npm run build
```

Ejecuta desde la raíz del proyecto.

## Trampas

- **Olvidar `baseUrl` en `PagefindUI`** — los resultados apuntarían a `/ejercicio/...` sin `/ejercicios-calculo/` y darían 404 en GitHub Pages.
- **Afirmar archivos de Pagefind que no se verificaron** — la prueba solo exige `pagefind-ui.js`, `pagefind-ui.css` y `pagefind-entry.json`.
- **Comparar URLs con `SITE_URL` crudo** — usa `SITIO` (origen normalizado) de `tests/ayudantes.mjs`.
- **Arreglar la suite de humo tocando cualquier archivo** — `E2-T7` solo puede corregir `src/layouts/Base.astro`, `src/styles/global.css` y `src/components/Ejercicio.astro`; si hace falta otro, detente y repórtalo.
- **Publicar desde el constructor** — `git push` está denegado en `.claude/settings.json`; publicar es del docente.

## Antes de seguir

- [ ] Cada tarea de este epic está `done` en `tasks.json`; ninguna quedó `in_progress`.
- [ ] Pasaron todos los comandos `verify` de cada tarea, no solo el primero.
- [ ] Ningún comando `verify` se editó ni se omitió porque faltara un archivo.
- [ ] **Cada tarea de este epic tiene su tag** (`git tag -l 'step-*'` los lista), igual al campo `checkpoint` de `tasks.json`.
- [ ] La puerta `npm run format:check && npm run build && npm test` pasa limpia desde la raíz.
- [ ] Cada contrato «Producido» de arriba existe con la firma indicada.
- [ ] No se modificó ningún archivo fuera del subárbol.
- [ ] Este proyecto no tiene variables de entorno obligatorias ni `.env.example`: nada que actualizar.
- [ ] Un commit por tarea, cada uno seguido de su tag.
