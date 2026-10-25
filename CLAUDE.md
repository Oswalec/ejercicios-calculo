# Ejercicios Resueltos de Cálculo

Sitio estático y gratuito: el estudiante elige un tema (límites, derivadas, integrales) y recibe de 5 a 10 ejercicios resueltos paso a paso, con fórmulas renderizadas por KaTeX. Contenido escrito por el docente en Markdown + LaTeX. Costo: cero.

## Comandos

| Tarea | Comando |
|---|---|
| Instalar (local) | `npm install` |
| Instalar (CI, exacto desde el lockfile) | `npm ci` |
| Desarrollo | `npm run dev` — http://localhost:4321 (la búsqueda solo funciona con `npm run build` + `npm run preview`) |
| Build completo | `npm run build` (= `astro check && astro build && pagefind --site dist`) |
| Previsualizar el build | `npm run preview` |
| Solo tipos | `npm run check` |
| Formatear · verificar formato | `npm run format` · `npm run format:check` |
| Pruebas (sobre `dist/`; antes `npm run build`) | `npm test` · un archivo: `node --test tests/aleatorio.test.mjs` |
| Build y pruebas como en GitHub Pages | `SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm run build` y luego `SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm test` |

En Git Bash para Windows, antepón `MSYS2_ENV_CONV_EXCL=BASE_PATH` a esos dos comandos: si no, Git Bash convierte `/ejercicios-calculo` en `C:/Program Files/Git/ejercicios-calculo` y los enlaces salen rotos. En GitHub Actions (Linux) no hace falta.

**Puerta:** `npm run format:check && npm run build && npm test` sale con 0 antes de dar por terminada cualquier tarea.

Node se fija en `.nvmrc` (línea 24) y `.npmrc` tiene `engine-strict=true`. Las versiones viven en `package-lock.json`: léelo, nunca adivines una versión. El estado de la construcción está en `blueprints/ejercicios-calculo/tasks.json`, el detalle de cada tarea en `blueprints/ejercicios-calculo/epics/` y el diseño en `blueprints/ejercicios-calculo/blueprint.md`. No edites nada dentro de `blueprints/` salvo el campo `status` de `tasks.json`.

## Stack

Astro 7 estático · TypeScript 6 estricto · CSS propio con tokens · Markdown con `unified()` + remark-math + rehype-katex · Pagefind · node:test · GitHub Pages por GitHub Actions. Sin base de datos, sin cuentas, sin APIs, sin LLM.

## Arquitectura

**Camino de una página.** `src/content/ejercicios/<tema>/<slug>.md` → validado por `src/lib/esquema.ts` (registrado en `src/content.config.ts`) → Markdown procesado por `unified()` + `remark-math` + `rehype-katex` + `src/lib/rehype-solucion.mjs` (quita «## Enunciado» y envuelve «## Solución» en `<details class="solucion">`) → `src/components/Ejercicio.astro` dentro de `src/pages/tema/[slug].astro` y `src/pages/ejercicio/[...id].astro` → HTML en `dist/` → `pagefind --site dist` → GitHub Pages.

**Selección aleatoria.** El HTML de cada tema trae TODOS sus ejercicios (sin JS se ven los 10 primeros por `orden`). Un `<script>` de Astro importa `src/lib/aleatorio.ts` y oculta con `hidden` los no elegidos (entre 5 y 10).

**Fronteras.**

| Capa | Puede importar | Nunca |
|---|---|---|
| `src/pages/**` | components, layouts, lib, data, `astro:content` | lógica de selección inline (va en `src/lib/aleatorio.ts`) |
| `src/components/**` | lib, data, otros componentes, `render()` de `astro:content` | `getCollection()` |
| `src/lib/aleatorio.ts`, `url.ts`, `esquema.ts`, `src/data/temas.ts` | entre sí y `astro/zod` | `astro:*` — las pruebas de Node los importan directamente |
| `tests/**` | `tests/ayudantes.mjs`, los módulos de la fila anterior, `src/lib/rehype-solucion.mjs`, `dist/` | `.astro`, `astro:*`, `src/lib/ejercicios.ts` |

**Fuente única de verdad.**

| Asunto | Archivo |
|---|---|
| Temas (slug, nombre, descripción, orden) | `src/data/temas.ts` |
| Esquema del frontmatter | `src/lib/esquema.ts` |
| Enlaces internos con base | `src/lib/url.ts` → `url("tema/limites/")` |
| Tokens de diseño | `src/styles/global.css` |
| Base y sitio (`BASE_PATH`, `SITE_URL`) | `astro.config.mjs` (mismos valores por defecto en `tests/ayudantes.mjs`) |
| Utilidades de pruebas | `tests/ayudantes.mjs` |

## Reglas de código

1. Imports relativos **con extensión explícita**: `../lib/url.ts`, `../data/temas.ts`, `./src/lib/rehype-solucion.mjs`, `../layouts/Base.astro`. Sin alias `@/`, sin barrels.
2. Los módulos que importan las pruebas usan solo TypeScript borrable (sin `enum`, `namespace` ni parameter properties); `erasableSyntaxOnly` en `tsconfig.json` lo impone.
3. Todo enlace o recurso interno pasa por `url()`. Nunca `href="/..."` literal: rompe en GitHub Pages.
4. Sin frameworks de UI. JavaScript de cliente: solo el `<script>` de `tema/[slug].astro` y los de Pagefind en `index.astro`.
5. Un componente por archivo, máximo 150 líneas.
6. Ningún color, tamaño de fuente ni sombra literal fuera de `src/styles/global.css`: usa `var(--token)`.
7. Una sola `<h1>` por página; el layout no la incluye.
8. Ninguna dependencia nueva sin justificarla en el mensaje de commit.

## Sistema de diseño

| Rol | Claro | Oscuro | Uso |
|---|---|---|---|
| `--primary` | `#1b7f4c` | `#3fbf7f` | Enlaces, botón, foco |
| `--primary-dark` | `#13603a` | `#66d19a` | Hover |
| `--primary-fg` | `#ffffff` | `#0f1612` | Texto sobre primary |
| `--accent` / `--accent-fg` | `#f2b705` / `#1a1f1c` | igual | Insignia «Avanzado»; nunca texto ni foco |
| `--bg` | `#ffffff` | `#0f1612` | Página |
| `--surface` | `#f4f8f5` | `#17211b` | Tarjetas, solución |
| `--border` | `#d6e2da` | `#2a3a30` | Bordes |
| `--fg` | `#1a1f1c` | `#e8f0ea` | Texto |
| `--fg-muted` | `#5b6660` | `#9aaba0` | Texto secundario |

- **Tipo:** pila del sistema (`system-ui, -apple-system, "Segoe UI", Roboto, …`); cuerpo 1.0625rem/1.6; h1 `clamp(1.75rem, 1.2rem + 2.5vw, 2.5rem)` 800; h2 1.375rem 700. Cero fuentes web salvo las de KaTeX (empaquetadas).
- **Espaciado:** base 4 px — `--espacio-1/2/3/4/6/8/12/16` = 0.25/0.5/0.75/1/1.5/2/3/4 rem.
- **Radios:** 6 px botones e insignias, 12 px tarjetas, 999px píldoras. **Sombra:** solo `--sombra-1`.
- **Movimiento:** transiciones de color de 120ms ease-out; anuladas con `prefers-reduced-motion`.
- **Layout:** `--ancho-max: 46rem`; mobile-first desde 360 px; grilla de temas 2 columnas desde 40rem, 3 desde 64rem.

## Entorno

| Variable | Requerida | La usa | Fuente |
|---|---|---|---|
| `SITE_URL` | no (por defecto `http://localhost:4321`) | `astro.config.mjs`, `tests/ayudantes.mjs` | `deploy.yml`; en local se pasa como prefijo del comando |
| `BASE_PATH` | no (por defecto `/`) | `astro.config.mjs`, `tests/ayudantes.mjs` | `deploy.yml`; en local se pasa como prefijo del comando |

No hay `.env` ni secretos.

## Reglas diferidas

| Archivo | Aplica a |
|---|---|
| `.claude/rules/contenido.md` | `src/content/**`, `tests/fixtures/**` |
| `.claude/rules/interfaz.md` | `src/**/*.astro`, `src/styles/**` |
| `.claude/rules/pruebas.md` | `tests/**` |

Para agregar un ejercicio, sigue la skill `agregar-ejercicio` (`.claude/skills/agregar-ejercicio/SKILL.md`).

## No negociable

1. Nunca publiques una respuesta matemática sin que el procedimiento la justifique paso a paso y termine en `**Respuesta:**`.
2. Nunca agregues un servicio, API, analítica o dependencia que cueste dinero o pida tarjeta.
3. Nunca escribas un enlace interno sin `url()`.
4. Nunca subas TypeScript a 7.x ni KaTeX fuera de la línea 0.16; nunca quites `processor: unified()` de `astro.config.mjs`.
5. Nunca versiones `dist/`, `.astro/` ni `node_modules/`.
6. Nunca des por terminada una tarea con la puerta en rojo, ni borres una prueba para ponerla en verde.
