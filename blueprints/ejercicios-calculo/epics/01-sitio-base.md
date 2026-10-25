# Epic 01: Sitio base

> Al terminar existe el sitio completo de punta a punta — layout con tokens, colección validada,
> KaTeX, página permanente, portada, páginas de tema con selección aleatoria — y los primeros 11
> ejercicios (Límites completo y el primero de Derivadas).

| | |
|---|---|
| **Epic id** | `01-sitio-base` |
| **Tareas** | `E1-T1` … `E1-T8` (pasos 1–8 de `blueprint.md`) |
| **Depende de** | nada — se empieza aquí, después del Bootstrap de `blueprint.md` §10 |
| **Desbloquea** | `02-contenido-y-publicacion` |
| **En paralelo con** | ninguno (las tareas comparten `src/pages/` y `tests/`) |

No necesitas ningún otro archivo para completar este epic. Todo lo de abajo se repite aquí a propósito.

**Requisito previo — Bootstrap (una sola vez, desde la raíz del proyecto en Git Bash).** Si
`git rev-parse --verify HEAD` falla o falta `node_modules/`, ejecuta este bloque; es seguro repetirlo:

```bash
find blueprints/ejercicios-calculo/workspace -type f | while IFS= read -r origen; do destino="${origen#blueprints/ejercicios-calculo/workspace/}"; [ -e "$destino" ] || { mkdir -p "$(dirname "$destino")" && cp "$origen" "$destino"; }; done
ls CLAUDE.md AGENTS.md .claude/settings.json .claude/skills/agregar-ejercicio/SKILL.md .claude/rules/contenido.md .claude/rules/interfaz.md .claude/rules/pruebas.md package.json .npmrc .nvmrc .gitignore .gitattributes .prettierrc .prettierignore astro.config.mjs tsconfig.json src/lib/rehype-solucion.mjs tests/ayudantes.mjs tests/fixtures/ejercicio-invalido.md public/favicon.svg >/dev/null
node --version
git rev-parse --git-dir >/dev/null 2>&1 || git init -b main
git config user.name >/dev/null 2>&1 || git config user.name "Docente Ejercicios de Calculo"
git config user.email >/dev/null 2>&1 || git config user.email "docente@ejercicios-calculo.invalid"
npm install
git rev-parse --verify HEAD >/dev/null 2>&1 || { git add -A && git commit -m "chore: bootstrap"; }
```

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
public/favicon.svg                 # existe (workspace) — solo lectura
src/
  components/
    Ejercicio.astro                # NUEVO (E1-T3) — título, insignia, enunciado, <details> solución
    InsigniaDificultad.astro       # NUEVO (E1-T3)
    TarjetaTema.astro              # NUEVO (E1-T4)
  content/ejercicios/
    limites/*.md                   # NUEVOS (E1-T2: 1, E1-T7: 5, E1-T8: 4)
    derivadas/regla-de-la-potencia.md   # NUEVO (E1-T8)
  content.config.ts                # NUEVO (E1-T2)
  data/temas.ts                    # NUEVO (E1-T2)
  layouts/Base.astro               # NUEVO (E1-T1)
  lib/
    aleatorio.ts                   # NUEVO (E1-T6)
    ejercicios.ts                  # NUEVO (E1-T4)
    esquema.ts                     # NUEVO (E1-T2)
    rehype-solucion.mjs            # existe (workspace) — solo lectura
    url.ts                         # NUEVO (E1-T1)
  pages/
    ejercicio/[...id].astro        # NUEVO (E1-T3)
    index.astro                    # NUEVO (E1-T1), editado (E1-T4)
    tema/[slug].astro              # NUEVO (E1-T5), editado (E1-T6)
  styles/global.css                # NUEVO (E1-T1)
tests/
  ayudantes.mjs                    # existe (workspace) — solo lectura
  fixtures/ejercicio-invalido.md   # existe (workspace) — solo lectura, inválido a propósito
  estructura.test.mjs              # NUEVO (E1-T1) — base de rutas y assets
  esquema.test.mjs                 # NUEVO (E1-T2) — esquema zod
  ejercicio.test.mjs               # NUEVO (E1-T3) — KaTeX y <details> por ejercicio
  rehype-solucion.test.mjs         # NUEVO (E1-T3)
  inicio.test.mjs                  # NUEVO (E1-T4)
  tema.test.mjs                    # NUEVO (E1-T5), editado (E1-T6)
  aleatorio.test.mjs               # NUEVO (E1-T6)
```

Todo lo que está fuera de este subárbol queda fuera de alcance. Si una tarea parece requerir editar
otro archivo, detente y repórtalo: el límite del epic está mal.

## Modelo de datos que toca este epic

| Entidad | Campos | Notas |
|---|---|---|
| Tema (`src/data/temas.ts`) | `slug` (`"limites" \| "derivadas" \| "integrales"`), `nombre`, `descripcion`, `orden` | `SLUGS_TEMAS` alimenta el enum del esquema; `buscarTema(slug)` |
| Ejercicio (`src/content/ejercicios/<tema>/<slug>.md`) | `id` (derivado: `limites/sustitucion-directa`), `titulo`, `tema`, `dificultad` (`"basico" \| "intermedio" \| "avanzado"`), `orden` (entero ≥ 1); cuerpo `## Enunciado` → `## Solución` (pasos numerados) → `**Respuesta:**` | Esquema zod **estricto**: ninguna clave extra. `tema` debe ser igual a la carpeta |

## Contratos

**Consumidos** — ya existen, no los reconstruyas:

| De | Interfaz | Garantía |
|---|---|---|
| `workspace/` (Bootstrap) | `src/lib/rehype-solucion.mjs` → `export default function rehypeSolucion()` | Quita el `h2` «Enunciado» y envuelve «Solución» y lo que sigue en `<details class="solucion"><summary>Ver solución</summary>`; lanza `Error` con `## Solución` en el mensaje si falta una sección |
| `workspace/` (Bootstrap) | `tests/ayudantes.mjs` → `DIST`, `CONTENIDO`, `PREFIJO`, `SITIO` (origen normalizado), `exigirDist()`, `leer()`, `listarArchivos()`, `listarHtml()`, `ejerciciosEnDisco()`, `urlsLocales()`, `archivoDeUrl()`, `urlDeArchivo()`, `canonicalEsperado()`, `leerFrontmatter()` | Expectativas calculadas desde `dist/` y el disco con los mismos valores por defecto de `SITE_URL`/`BASE_PATH` que `astro.config.mjs` |
| `workspace/` (Bootstrap) | `astro.config.mjs` | `site`/`base` desde el entorno, `trailingSlash: "always"`, `processor: unified()`, KaTeX, sitemap |

**Producidos** — el epic 02 depende de estas firmas exactas:

| Export | Firma | Lo usa |
|---|---|---|
| `src/lib/url.ts` → `url`, `unirRuta` | `url(ruta?: string): string` · `unirRuta(base: string, ruta?: string): string` | 02 (robots, 404, buscador) |
| `src/data/temas.ts` → `temas`, `SLUGS_TEMAS`, `buscarTema` | `readonly Tema[]` · `readonly ["limites","derivadas","integrales"]` · `(slug: string) => Tema \| undefined` | 02 (pruebas de contenido, SEO, humo) |
| `src/lib/esquema.ts` → `esquemaEjercicio` | `z.object({ titulo, tema, dificultad, orden }).strict()` | 02 (`tests/contenido.test.mjs`) |
| `src/lib/aleatorio.ts` → `MINIMO`, `MAXIMO`, `elegirAleatorios`, `otroConjunto` | `5` · `10` · `(total, rng) => number[]` · `(total, rng, anterior) => number[]` | 02 (`tests/smoke.test.mjs`) |
| `src/layouts/Base.astro` | props `{ titulo: string; descripcion: string; noindex?: boolean }` | 02 (404) |
| `src/components/Ejercicio.astro` | props `{ ejercicio: CollectionEntry<"ejercicios">; nivelTitulo: 1 \| 2; enlazar: boolean }` | 02 (buscador envuelve su salida) |

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

---

## Tareas

En el mismo orden que `tasks.json`. Ese orden es el orden de construcción: trabaja de arriba abajo y no
reordenes por prioridad ni por lo que parezca rápido.

### `E1-T1` — Andamiaje, tokens y layout base

**Paso de `blueprint.md`:** 1 · **Depende de:** nada (primera tarea; requiere el Bootstrap terminado) · **Prioridad:** p0 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Prerrequisito: Bootstrap de §10 completo (`workspace/` copiado a la raíz, `npm install` hecho, primer commit).
Crea:
- `src/styles/global.css` — los tokens de §7 exactamente con esta forma (la prueba de contraste del paso 15 analiza el primer bloque `:root { … }` como modo claro y el `:root { … }` dentro de `@media (prefers-color-scheme: dark)` como modo oscuro):
  ```css
  :root {
    color-scheme: light dark;
    --primary: #1b7f4c;
    --primary-dark: #13603a;
    --primary-fg: #ffffff;
    --accent: #f2b705;
    --accent-fg: #1a1f1c;
    --bg: #ffffff;
    --surface: #f4f8f5;
    --border: #d6e2da;
    --fg: #1a1f1c;
    --fg-muted: #5b6660;
    --destructive: #b42318;
    --success: #1b7f4c;
    --font-sans: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
      Arial, "Noto Sans", sans-serif;
    --font-mono: ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas,
      monospace;
    --espacio-1: 0.25rem;
    --espacio-2: 0.5rem;
    --espacio-3: 0.75rem;
    --espacio-4: 1rem;
    --espacio-6: 1.5rem;
    --espacio-8: 2rem;
    --espacio-12: 3rem;
    --espacio-16: 4rem;
    --radio-sm: 6px;
    --radio-md: 12px;
    --radio-full: 999px;
    --sombra-1: 0 1px 2px rgb(15 22 18 / 0.08);
    --ancho-max: 46rem;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --primary: #3fbf7f;
      --primary-dark: #66d19a;
      --primary-fg: #0f1612;
      --accent: #f2b705;
      --accent-fg: #1a1f1c;
      --bg: #0f1612;
      --surface: #17211b;
      --border: #2a3a30;
      --fg: #e8f0ea;
      --fg-muted: #9aaba0;
      --destructive: #f97066;
      --success: #3fbf7f;
    }
  }
  ```
  Debajo, los estilos base: `body` con `background: var(--bg); color: var(--fg); font: 400 1.0625rem/1.6 var(--font-sans); margin: 0`; contenedor `.contenedor { max-width: var(--ancho-max); margin-inline: auto; padding-inline: var(--espacio-4); }`; `[hidden] { display: none !important; }`; `:focus-visible { outline: 3px solid var(--primary); outline-offset: 2px; }`; enlace de salto `.saltar` visible solo con foco; `a { color: var(--primary); }` y `a:hover { color: var(--primary-dark); }`; `.katex-display { overflow-x: auto; overflow-y: hidden; }` (las fórmulas anchas se desplazan dentro de su bloque, nunca la página a 360 px); `@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }`. Ningún color literal fuera de los dos bloques de tokens.
- `src/lib/url.ts`:
  ```ts
  export function unirRuta(base: string, ruta = ""): string {
    const baseConBarra = base.endsWith("/") ? base : `${base}/`;
    return `${baseConBarra}${ruta.replace(/^\/+/, "")}`;
  }

  export function url(ruta = ""): string {
    return unirRuta(import.meta.env.BASE_URL, ruta);
  }
  ```
- `src/layouts/Base.astro` — props `{ titulo: string; descripcion: string; noindex?: boolean }`. Importa `"../styles/global.css"` y `"katex/dist/katex.min.css"`. `<html lang="es">`; en `<head>`: `<meta charset="utf-8" />`, `<meta name="viewport" content="width=device-width, initial-scale=1" />`, `<title>{titulo}</title>`, `<meta name="description" content={descripcion} />`, `<link rel="canonical" href={new URL(Astro.url.pathname, Astro.site).href} />`, `og:title`, `og:description`, `og:type` = `website`, `og:url` (mismo valor que el canonical), `<link rel="icon" type="image/svg+xml" href={url("favicon.svg")} />`, y `<meta name="robots" content="noindex" />` solo si `noindex`. En `<body>`: `<a class="saltar" href="#contenido">Saltar al contenido</a>`, `<header>` con `<a class="marca" href={url("")}>Ejercicios de Cálculo</a>` (**no** es un `h1`), `<main id="contenido" class="contenedor"><slot /></main>`, `<footer>` con «Ejercicios resueltos por tu docente de Cálculo · Sitio gratuito y sin anuncios».
- `src/pages/index.astro` — marcador provisional: `Base` con `titulo="Ejercicios resueltos de Cálculo paso a paso"` y `descripcion="Elige un tema de Cálculo (límites, derivadas o integrales) y recibe ejercicios resueltos paso a paso, gratis."`; contenido: `<h1>Ejercicios resueltos de Cálculo</h1>` y `<p class="lead">Elige un tema y recibe ejercicios resueltos paso a paso.</p>`.
- `tests/estructura.test.mjs` — usa `tests/ayudantes.mjs` (§19.6). Casos:
  1. `unirRuta("/", "tema/limites/")` → `"/tema/limites/"`; `unirRuta("/ejercicios-calculo", "tema/limites/")` → `"/ejercicios-calculo/tema/limites/"`; `unirRuta("/ejercicios-calculo/", "/favicon.svg")` → `"/ejercicios-calculo/favicon.svg"`; `unirRuta("/ejercicios-calculo/")` → `"/ejercicios-calculo/"` (importa `../src/lib/url.ts`).
  2. `dist/index.html` existe (llama `exigirDist()`), contiene `<html lang="es"`, un `<title>` no vacío, `<meta name="description"` con `content` no vacío y `<link rel="canonical"`.
  3. Para **cada** HTML de `listarHtml()`: cada valor de `urlsLocales(html)` empieza con `PREFIJO` (enlaces con la base correcta), y cada uno cuya última parte tenga extensión (`/\.[a-z0-9]+$/i` tras quitar `?`/`#`) resuelve con `archivoDeUrl()` a un archivo que existe en `dist/`.

Luego ejecuta `npm run format` una vez (normaliza estos archivos y cualquier archivo de §19.6 al estilo de Prettier).

**Archivos**
- `src/styles/global.css`
- `src/layouts/Base.astro`
- `src/lib/url.ts`
- `src/pages/index.astro`
- `tests/estructura.test.mjs`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `npm run build` runs **THE SYSTEM SHALL** exit 0 and write `dist/index.html`.
2. **WHEN** `npm test` runs after the build **THE SYSTEM SHALL** exit 0 with 0 failed, asserting `dist/index.html` has `lang="es"`, a non-empty `<title>`, a meta description and a canonical link.
3. **WHEN** `unirRuta("/ejercicios-calculo", "tema/limites/")` is called in `tests/estructura.test.mjs` **THE SYSTEM SHALL** return `"/ejercicios-calculo/tema/limites/"`.
4. **WHEN** `tests/estructura.test.mjs` scans every HTML file in `dist/` **THE SYSTEM SHALL** find that every local `href`/`src` starts with the configured base and every local asset URL with a file extension resolves to an existing file in `dist/`.
5. **WHEN** `npm run format:check` runs **THE SYSTEM SHALL** exit 0.

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
npm run format:check
npm run build
test -f dist/index.html
npm test
grep -qi -- "--primary: #1b7f4c" src/styles/global.css
```

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 1: andamiaje, tokens y layout base"
git tag step-01-andamiaje
git ls-files --error-unmatch src/styles/global.css          # expect: exit 0 — versionado por el commit de arriba
```

Si la tarea siguiente sale mal: `git reset --hard step-01-andamiaje`.

---
### `E1-T2` — Colección de contenido y esquema

**Paso de `blueprint.md`:** 2 · **Depende de:** `E1-T1` · **Prioridad:** p0 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Crea:
- `src/data/temas.ts`:
  ```ts
  export const SLUGS_TEMAS = ["limites", "derivadas", "integrales"] as const;

  export type SlugTema = (typeof SLUGS_TEMAS)[number];

  export interface Tema {
    slug: SlugTema;
    nombre: string;
    descripcion: string;
    orden: number;
  }

  export const temas: readonly Tema[] = [
    {
      slug: "limites",
      nombre: "Límites",
      descripcion:
        "Sustitución directa, indeterminaciones 0/0, límites al infinito, límites notables y continuidad.",
      orden: 1,
    },
    {
      slug: "derivadas",
      nombre: "Derivadas",
      descripcion:
        "Reglas de derivación, regla de la cadena, derivación implícita, recta tangente y razones de cambio.",
      orden: 2,
    },
    {
      slug: "integrales",
      nombre: "Integrales",
      descripcion:
        "Integrales inmediatas, cambio de variable, por partes, fracciones parciales, integral definida y áreas.",
      orden: 3,
    },
  ];

  export function buscarTema(slug: string): Tema | undefined {
    return temas.find((tema) => tema.slug === slug);
  }
  ```
- `src/lib/esquema.ts`:
  ```ts
  import { z } from "astro/zod";
  import { SLUGS_TEMAS } from "../data/temas.ts";

  export const DIFICULTADES = ["basico", "intermedio", "avanzado"] as const;

  export const esquemaEjercicio = z
    .object({
      titulo: z.string().min(1),
      tema: z.enum(SLUGS_TEMAS),
      dificultad: z.enum(DIFICULTADES),
      orden: z.number().int().positive(),
    })
    .strict();

  export type DatosEjercicio = z.infer<typeof esquemaEjercicio>;
  ```
- `src/content.config.ts`:
  ```ts
  import { defineCollection } from "astro:content";
  import { glob } from "astro/loaders";
  import { esquemaEjercicio } from "./lib/esquema.ts";

  const ejercicios = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/ejercicios" }),
    schema: esquemaEjercicio,
  });

  export const collections = { ejercicios };
  ```
- `src/content/ejercicios/limites/sustitucion-directa.md` — el primer ejercicio, contenido definitivo (es el primero de los 30; los otros 29 llegan en los pasos 7 a 12):
  ```markdown
  ---
  titulo: "Límite por sustitución directa"
  tema: "limites"
  dificultad: "basico"
  orden: 1
  ---

  ## Enunciado

  Calcula el siguiente límite:

  $$
  \lim_{x \to 2} \left(3x^2 - 5x + 1\right)
  $$

  ## Solución

  1. La función $f(x) = 3x^2 - 5x + 1$ es un polinomio, así que es continua en todo $\mathbb{R}$. Por eso el límite se calcula sustituyendo directamente $x = 2$.
  2. Sustituimos: $3(2)^2 - 5(2) + 1 = 3 \cdot 4 - 10 + 1$.
  3. Operamos: $12 - 10 + 1 = 3$.

  **Respuesta:** $\displaystyle \lim_{x \to 2} \left(3x^2 - 5x + 1\right) = 3$
  ```
- `tests/esquema.test.mjs` — importa `esquemaEjercicio` de `../src/lib/esquema.ts` y `SLUGS_TEMAS` de `../src/data/temas.ts`. Casos (`safeParse`): el objeto `{ titulo: "X", tema: "limites", dificultad: "basico", orden: 1 }` es válido; `dificultad: "facil"` es inválido y algún issue tiene `path[0] === "dificultad"`; `tema: "series"` es inválido con `path[0] === "tema"`; `orden: 1.5` es inválido con `path[0] === "orden"`; una clave extra `autor: "Y"` es inválida (esquema estricto); `SLUGS_TEMAS` es `["limites", "derivadas", "integrales"]`.

Luego `npm run format`.

**Sobre la comprobación del fixture inválido.** Con `astro` 7.4.2 en Windows 11 + Node v24.19.0 (prueba
real, 2026-10-24) el build imprime `dificultad: Invalid option: expected one of "basico"|"intermedio"|"avanzado"`
y luego aborta al salir con `Assertion failed: !(handle->flags & UV_HANDLE_CLOSING), file src\win\async.c`
(libuv), con código **127**, no 1. En Linux sale con 1. Por eso la línea acepta cualquier código distinto
de 0, pero sólo pasa si además aparecen `dificultad` e `Invalid option`: un error de uso o de otra
causa no imprime esos textos. La línea borra el fixture antes de evaluar el resultado, pase lo que pase,
y es una sola línea porque cada comando de `tasks.json` corre por separado.

**Archivos**
- `src/data/temas.ts`
- `src/lib/esquema.ts`
- `src/content.config.ts`
- `src/content/ejercicios/limites/sustitucion-directa.md`
- `tests/esquema.test.mjs`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `npm run build` runs with the collection and the sample exercise **THE SYSTEM SHALL** exit 0.
2. **WHEN** `tests/fixtures/ejercicio-invalido.md` is copied into `src/content/ejercicios/limites/` and `npx astro build` runs **THE SYSTEM SHALL** exit with a non-zero code and print an error containing both `dificultad` and `Invalid option`.
3. **WHEN** `tests/esquema.test.mjs` runs **THE SYSTEM SHALL** reject `dificultad: "facil"`, `tema: "series"`, `orden: 1.5` and an extra key, and accept the valid object.
4. **WHEN** `npm test` runs after `npm run build` **THE SYSTEM SHALL** exit 0 with 0 failed.

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
log="$(mktemp)"; cp tests/fixtures/ejercicio-invalido.md src/content/ejercicios/limites/zz-invalido.md; status=0; npx astro build >"$log" 2>&1 || status=$?; rm -f src/content/ejercicios/limites/zz-invalido.md; test "$status" -ne 0 && grep -q "dificultad" "$log" && grep -q "Invalid option" "$log" || false
npm run build
npm test
npm run format:check
```

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 2: coleccion de contenido y esquema"
git tag step-02-contenido
git ls-files --error-unmatch src/content/ejercicios/limites/sustitucion-directa.md   # expect: exit 0
status=0; git ls-files --error-unmatch src/content/ejercicios/limites/zz-invalido.md >/dev/null 2>&1 || status=$?; test "$status" -eq 1
                                                             # expect: exit 0 — 1 = el fixture inválido NO quedó versionado
```

Si la tarea siguiente sale mal: `git reset --hard step-02-contenido`.

---
### `E1-T3` — Pipeline matemático y página permanente

**Paso de `blueprint.md`:** 3 · **Depende de:** `E1-T2` · **Prioridad:** p0 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

El plugin `src/lib/rehype-solucion.mjs` y la configuración `unified()` + `remark-math` + `rehype-katex`
ya existen (§19.6). Este paso los ejercita en HTML real. Crea:
- `src/components/InsigniaDificultad.astro` — prop `dificultad: "basico" | "intermedio" | "avanzado"`; renderiza `<span class={`insignia insignia--${dificultad}`}>{etiqueta}</span>` (atributo con expresión de plantilla, nunca `{…}` dentro de comillas) con etiquetas `basico → "Básico"`, `intermedio → "Intermedio"`, `avanzado → "Avanzado"`. Colores: básico `--surface` + texto `--fg` + borde `--border`; intermedio `--primary` + `--primary-fg`; avanzado `--accent` + `--accent-fg`.
- `src/components/Ejercicio.astro` — props `{ ejercicio: CollectionEntry<"ejercicios">; nivelTitulo: 1 | 2; enlazar: boolean }`. En el frontmatter: `const { Content } = await render(ejercicio);` (de `astro:content`). Renderiza `<article class="tarjeta-ejercicio">` con el encabezado dinámico (`const Titulo = nivelTitulo === 1 ? "h1" : "h2";` → `<Titulo>{ejercicio.data.titulo}</Titulo>`), `<InsigniaDificultad>`, `<div class="cuerpo-ejercicio"><Content /></div>` y, si `enlazar`, `<a href={url(`ejercicio/${ejercicio.id}/`)}>Abrir este ejercicio en su propia página</a>`. Estilo de `details.solucion`: fondo `--surface`, radio `--radio-md`, `summary` con `cursor: pointer`, color `--primary`, peso 700 y altura mínima 44 px (objetivo táctil ≥ 24×24).
- `src/pages/ejercicio/[...id].astro` — `getStaticPaths()` devuelve, por cada entrada de `getCollection("ejercicios")`, `{ params: { id: entrada.id }, props: { ejercicio: entrada } }`. Antes de devolverlas, por cada entrada: `const carpeta = entrada.id.split("/")[0]; if (carpeta !== entrada.data.tema) throw new Error(`El ejercicio ${entrada.id} declara tema "${entrada.data.tema}" pero está en la carpeta "${carpeta}".`);`. La página usa `Base` con `titulo={`${ejercicio.data.titulo} | Ejercicios de ${tema.nombre}`}` y `descripcion={`Ejercicio resuelto paso a paso de ${tema.nombre}: ${ejercicio.data.titulo}.`}` (`tema` vía `buscarTema` de `../../data/temas.ts`); arriba un enlace `<a href={url(`tema/${tema.slug}/`)}>← Volver a {tema.nombre}</a>`; luego `<Ejercicio ejercicio={ejercicio} nivelTitulo={1} enlazar={false} />`.
- `tests/rehype-solucion.test.mjs` — importa `../src/lib/rehype-solucion.mjs`. Construye a mano un árbol hast `root` con hijos `[h2 "Enunciado", p, h2 "Solución", ol, p]`, ejecuta `rehypeSolucion()(arbol, { path: "x.md" })` y comprueba que los hijos resultantes son `[p, details]`, que `details.properties.className` incluye `"solucion"`, que su primer hijo es `summary` con texto `Ver solución` y que el `ol` y el último `p` están dentro del `details`. Un árbol sin `h2 "Solución"` hace que la llamada lance un `Error` cuyo mensaje contiene `## Solución`.
- `tests/ejercicio.test.mjs` — para **cada** ejercicio de `ejerciciosEnDisco()`: existe `dist/ejercicio/<tema>/<slug>/index.html`; contiene `class="katex"`; contiene `<details` y `Ver solución`; no contiene `$$`; no contiene `Enunciado</h2>` (el plugin quitó ese encabezado); contiene un `href` igual a `${PREFIJO}tema/<tema>/`; contiene exactamente un `<h1`.

Luego `npm run format`.

**Archivos**
- `src/components/Ejercicio.astro`
- `src/components/InsigniaDificultad.astro`
- `src/pages/ejercicio/[...id].astro`
- `tests/ejercicio.test.mjs`
- `tests/rehype-solucion.test.mjs`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `npm run build` runs **THE SYSTEM SHALL** write `dist/ejercicio/limites/sustitucion-directa/index.html` containing KaTeX output (`class="katex"`) and no raw `$$`.
2. **WHEN** that page is generated **THE SYSTEM SHALL** place the solution inside `<details class="solucion">` whose `<summary>` reads `Ver solución`, and SHALL link back to `${base}tema/limites/`.
3. **WHEN** `rehypeSolucion` receives a tree without a `Solución` h2 **THE SYSTEM SHALL** throw an error whose message contains `## Solución`.
4. **WHEN** an exercise's `tema` differs from its folder name **THE SYSTEM SHALL** fail the build with an error naming the exercise id (enforced in `getStaticPaths`).
5. **WHEN** `npm test` runs after the build **THE SYSTEM SHALL** exit 0 with 0 failed.

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
npm run build
test -f dist/ejercicio/limites/sustitucion-directa/index.html
grep -q 'class="katex"' dist/ejercicio/limites/sustitucion-directa/index.html
npm test
npm run format:check
```

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 3: pipeline matematico y pagina permanente"
git tag step-03-ejercicio
```

Si la tarea siguiente sale mal: `git reset --hard step-03-ejercicio`.

---
### `E1-T4` — Portada con grilla de temas

**Paso de `blueprint.md`:** 4 · **Depende de:** `E1-T3` · **Prioridad:** p0 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Crea o modifica:
- `src/lib/ejercicios.ts`:
  ```ts
  import { getCollection, type CollectionEntry } from "astro:content";

  export type EntradaEjercicio = CollectionEntry<"ejercicios">;

  export async function ejerciciosDeTema(
    tema: string,
  ): Promise<EntradaEjercicio[]> {
    const lista = await getCollection(
      "ejercicios",
      (entrada) => entrada.data.tema === tema,
    );
    return lista.sort((a, b) => a.data.orden - b.data.orden);
  }
  ```
- `src/components/TarjetaTema.astro` — props `{ tema: Tema; cantidad: number }`. Renderiza `<a class="tarjeta-tema" href={url(`tema/${tema.slug}/`)} data-tema={tema.slug} data-cantidad={cantidad}>` con `<h2>{tema.nombre}</h2>`, `<p>{tema.descripcion}</p>` y `<p class="cantidad">{cantidad} {cantidad === 1 ? "ejercicio" : "ejercicios"}</p>`. Toda la tarjeta es el enlace (objetivo táctil grande).
- `src/pages/index.astro` — reemplaza el marcador: hero con `<h1>Ejercicios resueltos de Cálculo</h1>` y `<p class="lead">Elige un tema y recibe ejercicios resueltos paso a paso.</p>`; luego `<ul class="grilla-temas">` con un `<li><TarjetaTema … /></li>` por tema de `temas` ordenado por `orden`, con `cantidad = (await ejerciciosDeTema(tema.slug)).length`. Grilla: 1 columna en la base, 2 desde `40rem`, 3 desde `64rem`. Mantén el mismo `titulo` y `descripcion` del paso 1.
- `tests/inicio.test.mjs` — lee `dist/index.html`; para **cada** tema de `temas` (importado de `../src/data/temas.ts`): existe un `<a` cuyo atributo `data-tema` es el slug, su `href` es `${PREFIJO}tema/<slug>/` y su `data-cantidad` es igual al número de ejercicios de ese tema en `ejerciciosEnDisco()`; el HTML contiene el `nombre` del tema. La portada tiene exactamente un `<h1`.

Luego `npm run format`.

**Archivos**
- `src/components/TarjetaTema.astro`
- `src/lib/ejercicios.ts`
- `src/pages/index.astro`
- `tests/inicio.test.mjs`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `npm run build` runs **THE SYSTEM SHALL** render one card per tema in `src/data/temas.ts` on `dist/index.html`, each linking to `${base}tema/<slug>/`.
2. **WHEN** a tema folder holds N `.md` files **THE SYSTEM SHALL** render that tema's card with `data-cantidad="N"` (verified against the disk by `tests/inicio.test.mjs`, so a tema with 0 files shows 0).
3. **WHEN** `npm test` runs after the build **THE SYSTEM SHALL** exit 0 with 0 failed.

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
npm run build
npm test
grep -q 'data-tema="derivadas"' dist/index.html
npm run format:check
```

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 4: portada con grilla de temas"
git tag step-04-portada
```

Si la tarea siguiente sale mal: `git reset --hard step-04-portada`.

---
### `E1-T5` — Página de tema con lista estática

**Paso de `blueprint.md`:** 5 · **Depende de:** `E1-T4` · **Prioridad:** p0 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Crea:
- `src/pages/tema/[slug].astro` — `getStaticPaths()` devuelve un path por cada tema de `temas` (`params: { slug }`, `props: { tema }`). Obtiene `const lista = await ejerciciosDeTema(tema.slug);` y `const total = lista.length; const visibles = Math.min(total, 10);`. Usa `Base` con `titulo={`Ejercicios resueltos de ${tema.nombre} | Ejercicios de Cálculo`}` y `descripcion={tema.descripcion}`. Contenido: `<h1>{tema.nombre}</h1>`, `<p>{tema.descripcion}</p>`; si `total === 0`, `<p class="vacio">Pronto habrá ejercicios de este tema.</p>` y nada más; si no: `<p id="estado-seleccion" aria-live="polite">Mostrando {visibles} de {total} ejercicios.</p>`, `<ol id="lista-ejercicios" class="lista-ejercicios" data-total={total}>` con, por cada ejercicio en índice `i`, `<li class="ejercicio" data-indice={i} hidden={i >= 10}><Ejercicio ejercicio={e} nivelTitulo={2} enlazar={true} /></li>`. Al pie, `<a href={url("")}>← Todos los temas</a>`.
- `tests/tema.test.mjs` — para **cada** tema de `temas`: existe `dist/tema/<slug>/index.html`; contiene `<h1` con el `nombre`; el número de coincidencias de `/<li\b[^>]*\bdata-indice="\d+"/g` es igual al número de ejercicios del tema en disco; si ese número es 0, contiene `Pronto habrá ejercicios de este tema.`; si es > 0, `data-total="<N>"` coincide, cada `<li` con `data-indice` ≥ 10 lleva `hidden`, el HTML contiene `<details` y `Ver solución` y un `href` a `${PREFIJO}ejercicio/<tema>/<slug>/` por cada ejercicio.

Luego `npm run format`.

**Archivos**
- `src/pages/tema/[slug].astro`
- `tests/tema.test.mjs`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `npm run build` runs **THE SYSTEM SHALL** write `dist/tema/<slug>/index.html` for every tema in `src/data/temas.ts`.
2. **WHEN** a tema has N exercises **THE SYSTEM SHALL** render all N in the HTML in ascending `orden`, with `data-total="N"` on the list and the `hidden` attribute on every item whose index is 10 or more.
3. **WHEN** a tema has 0 exercises **THE SYSTEM SHALL** render the text `Pronto habrá ejercicios de este tema.` and no list.
4. **WHEN** `npm test` runs after the build **THE SYSTEM SHALL** exit 0 with 0 failed.

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
npm run build
test -f dist/tema/limites/index.html
test -f dist/tema/integrales/index.html
npm test
npm run format:check
```

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 5: pagina de tema con lista estatica"
git tag step-05-tema
```

Si la tarea siguiente sale mal: `git reset --hard step-05-tema`.

---
### `E1-T6` — Selección aleatoria y «Dame otros ejercicios»

**Paso de `blueprint.md`:** 6 · **Depende de:** `E1-T5` · **Prioridad:** p0 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Crea o modifica:
- `src/lib/aleatorio.ts` (función pura; solo sintaxis TS borrable, sin imports):
  ```ts
  export type Aleatorio = () => number;

  export const MINIMO = 5;
  export const MAXIMO = 10;

  export function cantidadAMostrar(total: number, rng: Aleatorio): number {
    if (total <= 0) return 0;
    const n = MINIMO + Math.floor(rng() * (MAXIMO - MINIMO + 1));
    return Math.min(total, n);
  }

  export function elegirAleatorios(total: number, rng: Aleatorio): number[] {
    const indices = Array.from({ length: Math.max(total, 0) }, (_, i) => i);
    const n = cantidadAMostrar(total, rng);
    for (let i = 0; i < n; i++) {
      const j = i + Math.floor(rng() * (indices.length - i));
      const temporal = indices[i] as number;
      indices[i] = indices[j] as number;
      indices[j] = temporal;
    }
    return indices.slice(0, n).sort((a, b) => a - b);
  }

  export function otroConjunto(
    total: number,
    rng: Aleatorio,
    anterior: readonly number[],
  ): number[] {
    const clave = anterior.join(",");
    let candidato = elegirAleatorios(total, rng);
    for (
      let intento = 0;
      intento < 20 && total > MINIMO && candidato.join(",") === clave;
      intento++
    ) {
      candidato = elegirAleatorios(total, rng);
    }
    return candidato;
  }
  ```
- `src/pages/tema/[slug].astro` — agrega, solo cuando `total > 0`, `<button type="button" id="otros-ejercicios" class="boton" hidden>Dame otros ejercicios</button>` entre el párrafo de estado y la lista, y un `<script>` procesado (sin `is:inline`) colocado en el **nivel superior de la plantilla del componente**, fuera de `{total > 0 && …}` y de cualquier otra expresión condicional (Astro solo procesa y empaqueta los `<script>` de nivel superior); como el script está fuera del condicional, se protege él mismo con `if (lista && boton && estado)`, que es falso en un tema sin ejercicios:
  ```ts
  import { elegirAleatorios, otroConjunto, MINIMO } from "../../lib/aleatorio.ts";

  const lista = document.getElementById("lista-ejercicios");
  const boton = document.getElementById("otros-ejercicios");
  const estado = document.getElementById("estado-seleccion");

  if (lista && boton && estado) {
    const items = Array.from(
      lista.querySelectorAll<HTMLLIElement>("li[data-indice]"),
    );
    const total = items.length;
    const mostrar = (indices: number[]) => {
      const elegidos = new Set(indices);
      items.forEach((item, i) => {
        item.hidden = !elegidos.has(i);
      });
      estado.textContent = `Mostrando ${indices.length} de ${total} ejercicios.`;
    };
    let actual = elegirAleatorios(total, Math.random);
    mostrar(actual);
    if (total > MINIMO) {
      boton.hidden = false;
      boton.addEventListener("click", () => {
        actual = otroConjunto(total, Math.random, actual);
        mostrar(actual);
        lista.scrollIntoView({ block: "start" });
      });
    }
  }
  ```
  Estilo `.boton`: fondo `--primary`, texto `--primary-fg`, radio `--radio-sm`, `min-height: 44px`, padding `--espacio-3 --espacio-6`; hover `--primary-dark`.
- `tests/aleatorio.test.mjs` — importa `../src/lib/aleatorio.ts`. Define un generador con semilla (mulberry32) dentro del archivo. Casos: `elegirAleatorios(0, rng)` es `[]`; `elegirAleatorios(3, rng)` es `[0, 1, 2]`; con `rng = () => 0`, `cantidadAMostrar(30, rng) === MINIMO`; con `rng = () => 0.999999`, `cantidadAMostrar(30, rng) === MAXIMO`; para 200 llamadas con semilla sobre `total = 10` y `total = 30`: la longitud está entre `Math.min(total, MINIMO)` y `Math.min(total, MAXIMO)`, no hay índices repetidos, todos están en `[0, total)` y el arreglo está ordenado ascendente; para `total = 10`, 50 llamadas encadenadas de `otroConjunto` (cada una con el resultado anterior) nunca devuelven un conjunto igual al anterior.
- `tests/tema.test.mjs` — agrega: en cada tema con ejercicios, el HTML contiene `id="otros-ejercicios"` (y ese `<button` lleva `hidden` en el HTML estático), `id="estado-seleccion"` con `aria-live="polite"`, y al menos un `<script type="module"` (Astro puede insertarlo en línea o como archivo; ambos cuentan).

Luego `npm run format`.

**Archivos**
- `src/lib/aleatorio.ts`
- `src/pages/tema/[slug].astro`
- `tests/aleatorio.test.mjs`
- `tests/tema.test.mjs`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `elegirAleatorios(total, rng)` is called with any `total ≥ 0` **THE SYSTEM SHALL** return distinct ascending indices in `[0, total)` whose count is between `min(total, 5)` and `min(total, 10)`.
2. **WHEN** `otroConjunto(10, rng, anterior)` is called 50 times in a chain with a seeded `rng` **THE SYSTEM SHALL** never return the same set as the previous call.
3. **WHEN** `dist/tema/<slug>/index.html` is generated for a tema with exercises **THE SYSTEM SHALL** contain the button `id="otros-ejercicios"` with `hidden`, the live region `id="estado-seleccion"` with `aria-live="polite"`, and a `<script type="module"`.
4. **WHEN** `npm test` runs after the build **THE SYSTEM SHALL** exit 0 with 0 failed.

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
npm run build
node --test tests/aleatorio.test.mjs
npm test
grep -q 'id="otros-ejercicios"' dist/tema/limites/index.html
npm run format:check
```

El clic real en el navegador (que la selección cambie al pulsar) no es observable en HTML: está en la
lista manual de §20.1.

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 6: seleccion aleatoria y boton dame otros"
git tag step-06-aleatorio
```

Si la tarea siguiente sale mal: `git reset --hard step-06-aleatorio`.

---
### `E1-T7` — Semilla 1: Límites, orden 2 a 6

**Paso de `blueprint.md`:** 7 · **Depende de:** `E1-T6` · **Prioridad:** p0 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Escribe 5 ejercicios nuevos en `src/content/ejercicios/limites/` (el de orden 1,
`sustitucion-directa.md`, existe desde el paso 2). Reglas de escritura, iguales en los pasos 7 a 12:
cada archivo copia la forma de `src/content/ejercicios/limites/sustitucion-directa.md` — frontmatter de
exactamente 4 líneas (`titulo: "…"`, `tema: "…"`, `dificultad: "…"`, `orden: N`, strings entre
comillas dobles, `orden` sin comillas); `## Enunciado` con el enunciado de la tabla (fórmula en bloque
`$$ … $$` en líneas propias); `## Solución` con 3 a 7 pasos numerados (`1.`, `2.`, …) que justifican
cada regla usada; última línea `**Respuesta:** <respuesta de la tabla en LaTeX>`. Seno es
`\operatorname{sen}`; nada de letras con tilde dentro de `$…$` (usa `\text{}`); ningún `$` fuera de
matemáticas; en el Markdown escribe `|x|` (las tablas usan `\lvert x\rvert` solo porque `|` rompe
tablas). La respuesta final de cada archivo es la de la tabla; el docente revisará los 30 antes del
lanzamiento. Sin L'Hôpital en Límites: las derivadas se estudian después.

| Archivo | `titulo` | `dificultad` | `orden` | Enunciado | Respuesta |
|---|---|---|---|---|---|
| `factorizacion-cero-entre-cero.md` | Indeterminación 0/0 por factorización | basico | 2 | `\lim_{x \to 3} \frac{x^2 - 9}{x - 3}` | `6` |
| `racionalizacion.md` | Indeterminación 0/0 por racionalización | intermedio | 3 | `\lim_{x \to 0} \frac{\sqrt{x + 4} - 2}{x}` | `\frac{1}{4}` |
| `limite-al-infinito-polinomios.md` | Límite al infinito de un cociente de polinomios | basico | 4 | `\lim_{x \to \infty} \frac{3x^2 - x + 2}{5x^2 + 4}` | `\frac{3}{5}` |
| `limite-al-infinito-raices.md` | Límite al infinito con raíz: forma infinito menos infinito | intermedio | 5 | `\lim_{x \to \infty} \left(\sqrt{x^2 + 6x} - x\right)` | `3` |
| `limite-trigonometrico-sen-x-sobre-x.md` | Límite trigonométrico notable sen x / x | intermedio | 6 | `\lim_{x \to 0} \frac{\operatorname{sen}(5x)}{3x}` | `\frac{5}{3}` |

**Archivos**
- `src/content/ejercicios/limites/factorizacion-cero-entre-cero.md`
- `src/content/ejercicios/limites/racionalizacion.md`
- `src/content/ejercicios/limites/limite-al-infinito-polinomios.md`
- `src/content/ejercicios/limites/limite-al-infinito-raices.md`
- `src/content/ejercicios/limites/limite-trigonometrico-sen-x-sobre-x.md`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `npm run build` runs with the 5 new files in `src/content/ejercicios/limites/` **THE SYSTEM SHALL** exit 0, so every new frontmatter passes the strict schema and every body has `## Enunciado` followed by `## Solución`.
2. **WHEN** each of the 5 new files is read **THE SYSTEM SHALL** contain a line starting with `**Respuesta:**`.
3. **WHEN** `src/content/ejercicios/limites/` is listed after this step **THE SYSTEM SHALL** hold exactly 6 `.md` files (1 from step 2 plus 5 new).
4. **WHEN** `npm test` runs after the build **THE SYSTEM SHALL** exit 0 with 0 failed, including `tests/ejercicio.test.mjs` over every exercise on disk (KaTeX present, no `$$`, `Ver solución` present).

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/factorizacion-cero-entre-cero.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/racionalizacion.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/limite-al-infinito-polinomios.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/limite-al-infinito-raices.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/limite-trigonometrico-sen-x-sobre-x.md
test "$(ls src/content/ejercicios/limites/*.md | wc -l)" -eq 6
npm run build
npm test
npm run format:check
```

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 7: semilla 1 limites orden 2 a 6"
git tag step-07-semilla-1
```

Si la tarea siguiente sale mal: `git reset --hard step-07-semilla-1`.

---
### `E1-T8` — Semilla 2: Límites 7 a 10 y Derivadas 1

**Paso de `blueprint.md`:** 8 · **Depende de:** `E1-T7` · **Prioridad:** p0 — metadato para recortes de alcance, no un orden de ejecución

**Dirección de implementación** (copiada del paso; todo el código necesario está aquí)

Escribe 4 ejercicios nuevos en `src/content/ejercicios/limites/` y 1 en
`src/content/ejercicios/derivadas/`. Reglas de escritura, iguales en los pasos 7 a 12: cada archivo
copia la forma de `src/content/ejercicios/limites/sustitucion-directa.md` — frontmatter de exactamente
4 líneas (`titulo: "…"`, `tema: "…"`, `dificultad: "…"`, `orden: N`, strings entre comillas dobles,
`orden` sin comillas); `## Enunciado` con el enunciado de la tabla (fórmula en bloque `$$ … $$` en
líneas propias); `## Solución` con 3 a 7 pasos numerados (`1.`, `2.`, …) que justifican cada regla
usada; última línea `**Respuesta:** <respuesta de la tabla en LaTeX>`. Seno es `\operatorname{sen}`;
nada de letras con tilde dentro de `$…$` (usa `\text{}`); ningún `$` fuera de matemáticas; en el
Markdown escribe `|x|` (las tablas usan `\lvert x\rvert` solo porque `|` rompe tablas). La respuesta
final de cada archivo es la de la tabla; el docente revisará los 30 antes del lanzamiento.

| Archivo | `titulo` | `dificultad` | `orden` | Enunciado | Respuesta |
|---|---|---|---|---|---|
| `limites/limites-laterales-valor-absoluto.md` | Límites laterales con valor absoluto | intermedio | 7 | `\lim_{x \to 0} \frac{\lvert x\rvert}{x}` | No existe: límite lateral izquierdo `-1`, derecho `1` |
| `limites/limite-numero-e.md` | Límite que define una potencia del número e | avanzado | 8 | `\lim_{x \to \infty} \left(1 + \frac{3}{x}\right)^{x}` | `e^{3}` |
| `limites/continuidad-funcion-a-trozos.md` | Continuidad de una función a trozos | intermedio | 9 | Halla `k` para que `f(x) = x^2 + k` si `x < 1` y `f(x) = 2x + 3` si `x \ge 1` sea continua en `x = 1` | `k = 4` |
| `limites/teorema-del-sandwich.md` | Teorema del sándwich | avanzado | 10 | `\lim_{x \to 0} x^2 \operatorname{sen}\left(\frac{1}{x}\right)` | `0` |
| `derivadas/regla-de-la-potencia.md` | Derivada de un polinomio con la regla de la potencia | basico | 1 | Deriva `f(x) = 4x^5 - 3x^2 + 7x - 2` | `f'(x) = 20x^4 - 6x + 7` |

**Archivos**
- `src/content/ejercicios/limites/limites-laterales-valor-absoluto.md`
- `src/content/ejercicios/limites/limite-numero-e.md`
- `src/content/ejercicios/limites/continuidad-funcion-a-trozos.md`
- `src/content/ejercicios/limites/teorema-del-sandwich.md`
- `src/content/ejercicios/derivadas/regla-de-la-potencia.md`

**Aceptación**

Copiada del arreglo `acceptance` de esta tarea en `tasks.json` (idéntica salvo el énfasis y la numeración). Cada criterio lo decide un comando de abajo, en esta máquina, durante la construcción.

1. **WHEN** `npm run build` runs with the 5 new files **THE SYSTEM SHALL** exit 0, so every new frontmatter passes the strict schema and every body has `## Enunciado` followed by `## Solución`.
2. **WHEN** each of the 5 new files is read **THE SYSTEM SHALL** contain a line starting with `**Respuesta:**`.
3. **WHEN** the content folders are listed after this step **THE SYSTEM SHALL** hold exactly 10 `.md` files in `src/content/ejercicios/limites/` and exactly 1 in `src/content/ejercicios/derivadas/`.
4. **WHEN** `npm test` runs after the build **THE SYSTEM SHALL** exit 0 with 0 failed, including `tests/ejercicio.test.mjs` over every exercise on disk (KaTeX present, no `$$`, `Ver solución` present).

**Verify** — cada comando, en orden, desde la raíz del proyecto. Cada línea sale con 0 cuando la tarea es correcta; la tarea está terminada cuando la última sale con 0. Son exactamente las líneas del arreglo `verify` de `tasks.json`.

```bash
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/limites-laterales-valor-absoluto.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/limite-numero-e.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/continuidad-funcion-a-trozos.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/teorema-del-sandwich.md
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/regla-de-la-potencia.md
test "$(ls src/content/ejercicios/limites/*.md | wc -l)" -eq 10
test "$(ls src/content/ejercicios/derivadas/*.md | wc -l)" -eq 1
npm run build
npm test
npm run format:check
```

**Checkpoint** — después de que el último comando de Verify salga con 0, antes de empezar la siguiente tarea. Las líneas de aserción que siguen al tag van después del commit a propósito.

```bash
git add -A && git commit -m "step 8: semilla 2 limites 7 a 10 y derivadas 1"
git tag step-08-semilla-2
```

Si la tarea siguiente sale mal: `git reset --hard step-08-semilla-2`.

---
## Aceptación del epic

Ejecuta cada línea por separado; cada una debe salir con 0.

El epic está terminado cuando todas sus tareas están `done` **y**:

1. **WHEN** `npm run build` and `npm test` run after `E1-T8` **THE SYSTEM SHALL** exit 0 with every tema page holding as many `data-indice` items as that tema has files on disk (10 for `limites`, 1 for `derivadas`, 0 for `integrales`).
2. **WHEN** a tema has 0 exercises **THE SYSTEM SHALL** render `Pronto habrá ejercicios de este tema.` instead of a list, and the build SHALL still exit 0.

```bash
npm run format:check && npm run build && npm test || false
test "$(ls src/content/ejercicios/limites/*.md | wc -l)" -eq 10
grep -q "Pronto habrá ejercicios de este tema." dist/tema/integrales/index.html
```

Ejecuta desde la raíz del proyecto.

## Trampas

- **Escribir un enlace interno a mano** — en local funciona (base `/`) y en GitHub Pages da 404. Usa siempre `url()`.
- **Meter el `<script>` de la página de tema dentro de `{total > 0 && …}`** — Astro no procesa scripts anidados en expresiones; va en el nivel superior y se protege con `if (lista && boton && estado)`.
- **Corregir el fixture inválido** — `tests/fixtures/ejercicio-invalido.md` es inválido a propósito (`dificultad: "facil"`); la puerta de `E1-T2` depende de que lo sea.
- **Esperar código 1 del build inválido en Windows** — Astro 7.4.2 aborta al salir con una aserción de libuv y devuelve 127; por eso la puerta exige código ≠ 0 más los textos `dificultad` e `Invalid option`.
- **Inventar respuestas** — cada ejercicio semilla termina en la respuesta de su tabla; el docente las revisará.

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
