# Ejercicios Resueltos de Cálculo — Blueprint

> Generado por The Architect el 2026-10-24
> Forma (shape): marketing-site (sitio de contenido estático) · `knowledge/shapes/marketing-site.md`
> Runtime track: ts-node · `knowledge/runtime-tracks/ts-node.md`
> Modo de emisión: bundle (16 pasos de construcción ≥ 12) — `blueprints/ejercicios-calculo/`
> Versión del blueprint: 2
> Versiones verificadas por última vez: 2026-10-24 — ver §11 para la procedencia de cada paquete

**Cómo usar este bundle.** Eres un agente constructor sin contexto previo. El bundle vive en
`<raíz-del-proyecto>/blueprints/ejercicios-calculo/`, donde la raíz del proyecto es
`C:/Users/Oswaldo/ejercicios-calculo` (en Git Bash: `/c/Users/Oswaldo/ejercicios-calculo`):

```
blueprints/ejercicios-calculo/
├── blueprint.md      # este documento: el porqué y el diseño (20 secciones)
├── tasks.json        # el DAG de 16 tareas: decide qué sigue y guarda el estado
├── epics/
│   ├── 01-sitio-base.md                # pasos 1–8
│   └── 02-contenido-y-publicacion.md   # pasos 9–16
└── workspace/        # se copia (sin sobrescribir) a la raíz del proyecto antes del paso 1
```

Primero ejecutas el bloque Bootstrap de §10 (su paso 0 copia `workspace/` a la raíz sin sobrescribir
nada), luego las tareas de `tasks.json` en orden de arreglo, cada una con su archivo de `epics/`.
Te detienes cuando §20.1 está en verde. Todos los comandos se ejecutan **desde la raíz del proyecto,
en Git Bash**; cada línea `Verify` es autónoma (no depende de variables de una línea anterior) y sale
con 0 cuando el paso es correcto, también bajo `set -e`.

---

## 1. Visión general y No-Objetivos

### Visión

**Ejercicios Resueltos de Cálculo** es un sitio web estático y gratuito para estudiantes
universitarios de los primeros ciclos. El estudiante entra, elige un tema (Límites, Derivadas o
Integrales) y en ese mismo instante ve entre 5 y 10 ejercicios de ese tema, elegidos al azar, cada uno
con su enunciado visible y su solución paso a paso escondida detrás de un botón nativo «Ver solución»,
con la notación matemática renderizada correctamente (KaTeX, sin imágenes). Si quiere practicar más,
pulsa «Dame otros ejercicios» y recibe otra selección. Cada ejercicio tiene además su propia página
compartible, para mandarla por WhatsApp al grupo del curso.

El autor es un único docente de Cálculo que escribe cada ejercicio como un archivo Markdown + LaTeX
dentro del repositorio. No hay servidor, base de datos, cuentas, IA ni dominio propio: el sitio se
construye en GitHub Actions y se publica en GitHub Pages, con **costo mensual de cero soles**. Esa
restricción es dura y decide casi todo lo demás: la «generación» de ejercicios es una selección
aleatoria en el navegador sobre ejercicios ya escritos y verificados por el docente.

### Usuarios

| Persona | A qué viene | Frecuencia |
|---|---|---|
| Estudiante de primeros ciclos (anónimo, solo lectura; cientos a pocos miles) | Practicar un tema concreto antes de una práctica calificada o examen y revisar la solución paso a paso | Semanal, con picos en semanas de evaluación |
| Docente autor (el usuario) | Agregar o corregir ejercicios escribiendo un `.md` y haciendo `git push` | Mensual |

### Objetivos — alcance v1

1. El sitio muestra una portada con los temas disponibles, cada uno con su cantidad de ejercicios.
2. Cada tema tiene una página que muestra una selección aleatoria de 5 a 10 ejercicios resueltos (sin JavaScript se ven los 10 primeros por `orden`), con un botón para pedir otra selección.
3. Cada ejercicio tiene una página permanente propia con enlace de regreso a su tema.
4. Toda la notación matemática se renderiza en el build con KaTeX (HTML + MathML accesible), sin LaTeX crudo visible.
5. El sitio tiene búsqueda estática de ejercicios (Pagefind), sitemap, robots.txt, página 404 y metadatos únicos por página.
6. Agregar un ejercicio es crear un `.md` válido; un frontmatter inválido rompe el build con un error que nombra el campo.
7. Cada `git push` a `main` construye, prueba y publica en GitHub Pages sin costo.

### No-Objetivos — fuera del alcance de v1

| No construimos | Por qué ahora no | Revisar cuando |
|---|---|---|
| Cuentas de usuario / inicio de sesión | Exige backend y almacenamiento con costo; el estudiante solo lee | Haya un pedido explícito de varios docentes de seguir a sus alumnos |
| Seguimiento de progreso (ejercicios hechos, puntajes) | Requiere estado por usuario; `localStorage` sería un a medias sin valor validado | Los estudiantes lo pidan en una encuesta del curso |
| Comentarios o foro | Moderación y backend; la conversación ya ocurre en el grupo del curso | Haya un moderador además del docente |
| Generación de ejercicios con IA | Cuesta dinero por llamada y puede producir matemáticas incorrectas sin revisión | Exista un modelo gratuito y fiable **y** un flujo de revisión docente previo a publicar |
| Panel de administración / CMS | El docente edita archivos en el repo; un CMS es un servicio más | Una persona no técnica necesite editar semanalmente |
| Analítica pagada o con banner de cookies | Viola el costo cero y agrega trabajo legal | Se necesite medir uso para justificar el proyecto ante la universidad |
| Dominio propio | Cuesta dinero cada año | Haya presupuesto institucional |
| Temas adicionales (series, integrales múltiples…) | v1 valida el formato con tres temas | El docente tenga 10 ejercicios revisados de un tema nuevo |

**El constructor no debe implementar nada de esta tabla**, aunque parezca un agregado pequeño mientras
trabaja en un paso cercano. Si un paso parece requerir un no-objetivo, eso es un defecto del blueprint:
detente y repórtalo en lugar de ampliar el alcance.

### Métricas de éxito

| Métrica | Meta | Cómo se mide |
|---|---|---|
| Costo mensual | S/ 0.00 desde el lanzamiento | Página de facturación de GitHub del usuario: 0 cargos (repositorio público, Pages y Actions gratis) |
| Ejercicios publicados | 30 (10 por tema) al lanzamiento | `npm test` (prueba `tests/contenido.test.mjs`) pasa y el sitio en vivo muestra los 3 temas |
| Tiempo para publicar un ejercicio nuevo | ≤ 10 minutos desde escribir el `.md` hasta verlo en vivo | Docente cronometra el primer ejercicio nuevo tras el lanzamiento (skill `agregar-ejercicio`, §19.4) |
| Errores matemáticos reportados | 0 abiertos más de 7 días | Issues del repositorio con la etiqueta `error-matematico` |

No hay métrica de visitas en v1: la analítica está excluida (ver No-Objetivos y §16).

---

## 2. Stack tecnológico

**Runtime track: ts-node.** Esta tabla nombra *decisiones*, no versiones. Toda versión fijada vive en
§11 y en ningún otro lugar de la prosa.

Las versiones vienen del informe de `stack-researcher` de esta sesión (2026-10-24), que es la
autoridad. `knowledge/runtime-tracks/ts-node.md` solo sería respaldo; en este proyecto el informe
resolvió todos los paquetes.

| Capa | Decisión | Por qué esto y no lo otro |
|---|---|---|
| Lenguaje / runtime | TypeScript estricto sobre Node 24 LTS | Node 24 es la línea LTS instalada en la máquina del docente (v24.19.0) y ejecuta TypeScript borrable de forma nativa, lo que permite probar módulos `.ts` con `node --test` sin dependencias extra. Node 22 se descartó porque obliga a flags para el type stripping en versiones antiguas. |
| Framework | Astro 7, salida estática | Genera HTML puro sin JavaScript por defecto; colecciones de contenido con validación zod integrada. Next.js se descartó: hidratación innecesaria y orientado a servidor. |
| Procesador Markdown | `unified()` de `@astrojs/markdown-remark` + `remark-math` + `rehype-katex` + plugin propio `rehype-solucion` | Astro 7 usa por defecto Sätteri, que no ejecuta plugins remark/rehype; `unified()` restaura la cadena remark/rehype que KaTeX necesita. El plugin propio separa la solución en `<details>` sin tocar el Markdown del docente. |
| Matemáticas | KaTeX renderizado en build | Cero JavaScript en el cliente para las fórmulas y salida MathML accesible. MathJax en cliente se descartó: pesa más y renderiza tarde. |
| Estilos | CSS propio con custom properties en `src/styles/global.css` | Un sitio de ~5 plantillas no justifica Tailwind; tokens literales del docente (verde/blanco) y modo oscuro con `prefers-color-scheme`. |
| Capa de componentes | Componentes `.astro` propios | Nada interactivo salvo un script vanilla; un framework de UI agregaría peso sin beneficio. |
| Base de datos | NOT APPLICABLE — el contenido son archivos Markdown en el repositorio | Una BD cuesta dinero o mantenimiento; 30–300 ejercicios caben holgadamente en archivos. |
| ORM / acceso a datos | `getCollection()` de `astro:content` | Lee y valida la colección en build; no hay acceso a datos en runtime. |
| Autenticación | NOT APPLICABLE — sitio público de solo lectura | No hay cuentas ni datos privados que proteger. |
| Trabajo en segundo plano | NOT APPLICABLE — nada corre fuera del build | El único «job» es el workflow de GitHub Actions. |
| Pagos | NOT APPLICABLE | Sitio gratuito. |
| Almacenamiento de archivos | NOT APPLICABLE | No se suben archivos. |
| Email / notificaciones | NOT APPLICABLE | No hay usuarios a quienes notificar. |
| Búsqueda | Pagefind (índice estático generado tras el build) | Funciona en hosting estático gratuito, sin servidor. Algolia se descartó: servicio externo con límites y cuenta. |
| Hosting | GitHub Pages (sitio de proyecto) desplegado con GitHub Actions | Gratis para repositorios públicos, sin tarjeta. Cloudflare Pages también es gratis pero suma una cuenta y un panel más (ver §20.3). |
| Pruebas | Runner nativo `node:test` sobre el HTML de `dist/` | Cero dependencias y sin navegador; las propiedades que importan (rutas, metadatos, KaTeX, sin `$$` crudo) son visibles en el HTML. |
| Formato | Prettier + `prettier-plugin-astro` | Formatea plantillas `.astro` completas; Biome (default del track) solo formatea parcialmente archivos `.astro`. |
| Gestor de paquetes | npm | Es el único instalado en la máquina del docente (pnpm no está instalado); `npm ci` en CI desde `package-lock.json` versionado. |

### Verificación de compatibilidad

Revisado contra `knowledge/stack-compatibility.md` — sin combinaciones conocidas como problemáticas.
Notas: (1) la fila «Self-hosted search engine + static host» no aplica: Pagefind no es un motor con
proceso persistente, es un índice estático en `dist/pagefind/`. (2) La fila del linter que parsea CSS
no aplica: no hay Tailwind ni Biome. (3) Restricciones de pares verificadas por el investigador:
`astro@7.4.2` exige el peer `@astrojs/markdown-remark@^7.3.0`; `@astrojs/check@0.9.12` exige
`typescript` `^5.0.0 || ^6.0.0` (por eso TypeScript se queda en la línea 6, nunca 7); `rehype-katex@7`
depende de `katex@^0.16.0`, así que `katex` se fija en la línea 0.16 para tener una sola copia.

---

## 3. Estructura de directorios

```
ejercicios-calculo/
  .claude/                          # §19.3–19.5 — configuración del agente (versionada)
    settings.json                   # permisos: cada comando Verify pre-aprobado
    skills/agregar-ejercicio/SKILL.md   # procedimiento repetible para agregar un ejercicio
    rules/contenido.md              # reglas diferidas para src/content/**
    rules/interfaz.md               # reglas diferidas para .astro y CSS
    rules/pruebas.md                # reglas diferidas para tests/**
  .github/workflows/deploy.yml      # paso 16 — build + pruebas + despliegue a GitHub Pages
  blueprints/
    ejercicios-calculo/             # este bundle (excluido de Prettier y de tsc; ninguna herramienta lo recorre)
      blueprint.md                  # este documento
      tasks.json                    # DAG de 16 tareas con su estado (lo actualiza el constructor)
      epics/01-sitio-base.md        # pasos 1–8
      epics/02-contenido-y-publicacion.md   # pasos 9–16
      workspace/                    # fuente de los 20 archivos que copia el paso 0 de Bootstrap
  public/
    favicon.svg                     # §19.6 — ícono; lo referencia Base.astro
  src/
    components/
      Ejercicio.astro               # paso 3 — un ejercicio: título, insignia, enunciado, <details> solución
      InsigniaDificultad.astro      # paso 3 — etiqueta Básico / Intermedio / Avanzado
      TarjetaTema.astro             # paso 4 — tarjeta de tema en la portada
    content/
      ejercicios/
        limites/*.md                # pasos 2, 7 y 8 — 10 ejercicios
        derivadas/*.md              # pasos 8, 9 y 10 — 10 ejercicios
        integrales/*.md             # pasos 10, 11 y 12 — 10 ejercicios
    content.config.ts               # paso 2 — colección "ejercicios" (loader glob + esquema)
    data/temas.ts                   # paso 2 — lista tipada de temas (fuente única)
    layouts/Base.astro              # paso 1 — <head> con title/description/canonical, header, main, footer
    lib/
      aleatorio.ts                  # paso 6 — selección aleatoria pura (probada con node:test)
      ejercicios.ts                 # paso 4 — ejerciciosDeTema(): consulta ordenada por `orden`
      esquema.ts                    # paso 2 — esquema zod estricto del frontmatter
      rehype-solucion.mjs           # §19.6 — plugin rehype: quita "## Enunciado", envuelve "## Solución" en <details>
      url.ts                        # paso 1 — url() y unirRuta(): todo enlace interno respeta la base
    pages/
      404.astro                     # paso 14
      ejercicio/[...id].astro       # paso 3 — /ejercicio/<tema>/<slug>/
      index.astro                   # paso 1 (marcador), paso 4 (grilla), paso 13 (buscador)
      robots.txt.ts                 # paso 14 — endpoint estático
      tema/[slug].astro             # paso 5 (lista), paso 6 (script aleatorio)
    styles/global.css               # paso 1 — tokens de §7 y estilos base
  tests/
    ayudantes.mjs                   # §19.6 — utilidades compartidas (no es una prueba)
    fixtures/ejercicio-invalido.md  # §19.6 — frontmatter inválido para el Verify del paso 2
    estructura.test.mjs             # paso 1
    esquema.test.mjs                # paso 2
    ejercicio.test.mjs              # paso 3
    rehype-solucion.test.mjs        # paso 3
    inicio.test.mjs                 # paso 4
    tema.test.mjs                   # paso 5 (modificado en el paso 6)
    aleatorio.test.mjs              # paso 6
    contenido.test.mjs              # paso 12
    busqueda.test.mjs               # paso 13
    seo.test.mjs                    # paso 14
    smoke.test.mjs                  # paso 15
    accesibilidad.test.mjs          # paso 15
  .gitattributes                    # §19.6 — fin de línea LF en todo el repo
  .gitignore                        # §19.6 — existe ANTES del primer commit
  .npmrc                            # §19.6 — engine-strict=true
  .nvmrc                            # §19.6 — "24"
  .prettierignore                   # §19.6 — excluye dist/, .astro/, node_modules/, lockfile, blueprints/, .claude/, *.md
  .prettierrc                       # §19.6
  AGENTS.md                         # §19.2
  CLAUDE.md                         # §19.1
  README.md                         # paso 16 — cómo publicar y cómo agregar ejercicios
  astro.config.mjs                  # §19.6 — site/base desde el entorno, unified() + KaTeX, sitemap
  package.json                      # §19.6 — manifiesto completo con scripts
  package-lock.json                 # generado por `npm install` en Bootstrap (versionado)
  tsconfig.json                     # §19.6 — extiende astro/tsconfigs/strict
  # generados, NO versionados: node_modules/, dist/ (incluye dist/pagefind/), .astro/
```

**Reglas de frontera**
- Todo enlace o recurso interno se construye con `url()` de `src/lib/url.ts`. Ningún `href="/..."` literal.
- `src/lib/aleatorio.ts`, `src/lib/url.ts`, `src/lib/esquema.ts` y `src/data/temas.ts` no importan nada de `astro:*`: las pruebas de Node los importan directamente.
- Solo `src/lib/ejercicios.ts`, `src/content.config.ts`, las páginas y `Ejercicio.astro` tocan `astro:content`.
- La convención de imports (relativos, con extensión explícita, sin alias) es una *convención de resolución*: su forma única y su reconciliación con cada cargador están en §19.6, *Matriz de convención de resolución*.
- La carpeta de salida es `dist` (literal tomado de la tabla *Reconciliación de valores entre artefactos* de §19.6).

Cada archivo del árbol tiene exactamente un origen: o un paso de §9 lo crea (aparece en su **Do**), o
se emite en §19 y se extrae antes de Bootstrap. `package-lock.json`, `node_modules/`, `.astro/` y
`dist/` los generan herramientas.

---

## 4. Modelo de datos

No hay base de datos. El modelo son dos entidades en archivos.

### Entidades

**Tema** — un tema del curso; se define en código en `src/data/temas.ts` y cambia solo cuando el docente agrega un tema.

| Campo | Tipo | Restricciones | Notas |
|---|---|---|---|
| `slug` | `"limites" \| "derivadas" \| "integrales"` | único, minúsculas ASCII, kebab-case | Segmento de URL `/tema/<slug>/` y nombre de la carpeta en `src/content/ejercicios/` |
| `nombre` | string | no vacío | Texto visible con tildes: «Límites», «Derivadas», «Integrales» |
| `descripcion` | string | no vacío, ≤ 160 caracteres | Se usa en la tarjeta de la portada y en la meta description de la página del tema |
| `orden` | entero ≥ 1 | único | Orden de las tarjetas en la portada |

**Ejercicio** — un ejercicio resuelto; un archivo `src/content/ejercicios/<tema>/<slug>.md`. Vive mientras exista el archivo.

| Campo | Tipo | Restricciones | Notas |
|---|---|---|---|
| `id` (derivado) | string | único; lo genera el loader `glob` | Ruta relativa sin extensión, p. ej. `limites/sustitucion-directa`; forma la URL `/ejercicio/<id>/` |
| `titulo` | string | no vacío; único en todo el sitio | Encabezado del ejercicio y base del `<title>` de su página |
| `tema` | enum de `slug` de Tema | obligatorio; **debe coincidir con la carpeta** | Si no coincide, el build falla (comprobación en `src/pages/ejercicio/[...id].astro`) |
| `dificultad` | `"basico" \| "intermedio" \| "avanzado"` | obligatorio | Sin tildes en el valor; la etiqueta visible es «Básico», «Intermedio», «Avanzado» |
| `orden` | entero ≥ 1 | obligatorio; único dentro del tema | Orden en la lista estática del tema (sin JS se ven los 10 primeros) |
| cuerpo | Markdown + LaTeX | `## Enunciado` y luego `## Solución` con pasos numerados y una línea final `**Respuesta:**` | El plugin `rehype-solucion` exige ambos encabezados; si faltan, el build falla |

Ninguna otra clave de frontmatter es válida: el esquema es estricto y rechaza claves extra.

**Formato literal del frontmatter** (lo leen el esquema de Astro y el analizador mínimo de `tests/ayudantes.mjs`):
exactamente cuatro líneas `clave: valor`, strings entre comillas dobles, `orden` como entero sin comillas.

```markdown
---
titulo: "Límite por sustitución directa"
tema: "limites"
dificultad: "basico"
orden: 1
---
```

### Relaciones

- `Tema —(1:N)→ Ejercicio`, por el campo `tema` y la carpeta. Borrar un tema de `temas.ts` con ejercicios aún en su carpeta hace fallar el build (el enum del esquema ya no lo acepta): no hay borrado en cascada, y eso es intencional.

### Índices

| Tabla | Índice | Por qué |
|---|---|---|
| NOT APPLICABLE — no hay base de datos | — | `getCollection()` filtra en memoria durante el build; con cientos de archivos es instantáneo |

### Esquema

El esquema real que se pega en `src/lib/esquema.ts` (paso 2):

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

### Migraciones

NOT APPLICABLE como base de datos. Regla equivalente para el contenido: renombrar un archivo `.md`
cambia su URL permanente; antes de renombrar uno ya publicado, el docente acepta que el enlace viejo
dará 404 (no hay redirecciones en GitHub Pages).

### Datos semilla

Los 30 ejercicios de los pasos 2 y 7 a 12 (10 por tema) son el contenido semilla; el paso 2 crea el primero
(`limites/sustitucion-directa.md`). No hay comando de seed: el contenido se versiona.

---

## 5. Diseño de API

NOT APPLICABLE — el sitio es estático y no expone ninguna API ni endpoint dinámico. Los únicos
archivos no-HTML que genera son `robots.txt`, el sitemap y el índice de Pagefind, todos estáticos y
especificados en §6 y en los pasos 8–9.

---

## 6. Arquitectura frontend

### Rutas

| Ruta | Página | Fuente de datos | Acceso |
|---|---|---|---|
| `/` | Portada: hero, buscador Pagefind, grilla de temas con cantidad | `temas.ts` + `getCollection("ejercicios")` en build | público |
| `/tema/<slug>/` | Ejercicios del tema (todos en el HTML, 5–10 visibles al azar) | `ejerciciosDeTema(slug)` en build | público |
| `/ejercicio/<tema>/<slug>/` | Página permanente de un ejercicio | `getCollection("ejercicios")` en build | público |
| `/404.html` | Página no encontrada (GitHub Pages la sirve automáticamente) | estática | público |
| `/robots.txt` | Texto plano con la URL del sitemap | endpoint estático | público |
| `/sitemap-index.xml`, `/sitemap-0.xml` | Sitemap | `@astrojs/sitemap` | público |
| `/pagefind/*` | Índice y UI de búsqueda | `pagefind --site dist` | público |

Todas las rutas anteriores van precedidas por la base (`/` en local, `/ejercicios-calculo/` en GitHub Pages).

### Estrategia de renderizado

Todo es estático: Astro con `output` por defecto (`"static"`), `trailingSlash: "always"` y
`build.format` por defecto (`"directory"`, cada página es `<ruta>/index.html`). Las rutas dinámicas
usan `getStaticPaths()`. No hay adaptador SSR, ni revalidación: cada `git push` reconstruye todo.
JavaScript en cliente: (1) el `<script>` procesado por Astro de `tema/[slug].astro` (módulo ES
empaquetado por Vite, sin framework) y (2) los scripts `is:inline` de Pagefind en la portada.

### Jerarquía de componentes

```
index.astro
└── Base.astro (layout: <head>, enlace "Saltar al contenido", header, <main id="contenido">, footer)
    ├── <section> hero (h1)
    ├── <section> buscador: <div id="buscador"> + pagefind-ui.js (is:inline) + init (define:vars)
    └── <ul> grilla → TarjetaTema.astro × 3

tema/[slug].astro
└── Base.astro
    ├── h1 nombre del tema + descripción
    ├── <p id="estado-seleccion" aria-live="polite">
    ├── <button id="otros-ejercicios" hidden>  ← el script lo muestra
    ├── <ol id="lista-ejercicios" data-total>
    │   └── <li class="ejercicio" data-indice hidden?> → Ejercicio.astro (nivelTitulo=2, enlazar)
    │                                                     ├── h2 titulo + InsigniaDificultad
    │                                                     └── <Content/> (enunciado + <details class="solucion">)
    └── <script> (módulo) → src/lib/aleatorio.ts

ejercicio/[...id].astro
└── Base.astro
    ├── enlace "← Volver a <Tema>"
    └── <div data-pagefind-body> → Ejercicio.astro (nivelTitulo=1, sin enlace)
```

### Manejo de estado

No hay estado global ni librería de estado. El único estado de cliente es el conjunto de índices
visibles en la página de tema, que vive en una variable local del script y se refleja en el DOM con el
atributo `hidden`. No se usa `localStorage` (cada visita sortea de nuevo; ver No-Objetivos).

### Estados de carga, vacío y error

| Superficie | Carga | Vacío | Error |
|---|---|---|---|
| Página de tema | No hay carga: el HTML ya trae todos los ejercicios; sin JS se ven los 10 primeros | Tema con 0 ejercicios: `<p class="vacio">Pronto habrá ejercicios de este tema.</p>` y sin lista ni botón | Si el script falla, queda la vista sin JS (10 primeros), que es útil por sí sola |
| Botón «Dame otros ejercicios» | — | Tema con ≤ 5 ejercicios: el botón permanece oculto (no hay otra selección distinta posible) | — |
| Buscador (portada) | Pagefind UI muestra su propio estado | Pagefind UI muestra «sin resultados» en español (deduce el idioma de `lang="es"`) | `<noscript>`: «La búsqueda necesita JavaScript; elige un tema más abajo.» En `npm run dev` el índice no existe: usar `npm run build && npm run preview` |
| Fórmula LaTeX mal escrita | — | — | `rehype-katex` la pinta con la clase `katex-error`; la prueba de humo del paso 15 falla si aparece esa clase |
| URL inexistente | — | — | `404.astro` con enlace a la portada |

---

## 7. Sistema de diseño

Paleta de marca del docente (verde/blanco). Todos los valores son literales y viven en
`src/styles/global.css` (paso 1). Prettier normaliza los hex a minúsculas, por eso el CSS los escribe
en minúsculas; las pruebas comparan sin distinguir mayúsculas.

### Colores

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--primary` | `#1b7f4c` | `#3fbf7f` | Enlaces, botón principal, anillo de foco, insignia «Intermedio» |
| `--primary-dark` | `#13603a` | `#66d19a` | Hover de enlaces y botones |
| `--primary-fg` | `#ffffff` | `#0f1612` | Texto sobre `--primary` |
| `--accent` | `#f2b705` | `#f2b705` | Fondo de la insignia «Avanzado»; subrayado decorativo del hero. Nunca como color de texto ni de foco |
| `--accent-fg` | `#1a1f1c` | `#1a1f1c` | Texto sobre `--accent` |
| `--bg` | `#ffffff` | `#0f1612` | Fondo de página |
| `--surface` | `#f4f8f5` | `#17211b` | Tarjetas, bloque de solución, insignia «Básico» |
| `--border` | `#d6e2da` | `#2a3a30` | Bordes decorativos de tarjetas y separadores |
| `--fg` | `#1a1f1c` | `#e8f0ea` | Texto principal |
| `--fg-muted` | `#5b6660` | `#9aaba0` | Texto secundario (descripciones, contador) |
| `--destructive` | `#b42318` | `#f97066` | Reservado; v1 no tiene estados de error visibles para el usuario |
| `--success` | `#1b7f4c` | `#3fbf7f` | Igual a `--primary`; reservado |

**Contraste (WCAG 2.2 AA, calculado con la fórmula de luminancia relativa):** los tres pares de mayor
riesgo son `--fg-muted` sobre `--surface` en claro ≈ **5.58:1**, `--primary` sobre `--bg` en claro ≈
**5.02:1** (y `--primary-fg` sobre `--primary` igual, 5.02:1) y `--primary` sobre `--surface` en claro
≈ **4.68:1**. En oscuro el par más bajo es `--fg-muted` sobre `--surface` ≈ **6.86:1**. `--accent-fg`
sobre `--accent` ≈ 9.19:1. Por eso `--primary-fg` en oscuro es `#0f1612` (blanco sobre `#3fbf7f` daría
≈ 2.3:1 y falla). `--accent` sobre blanco da ≈ 1.8:1: **nunca** se usa como foco ni como texto. La
prueba `tests/accesibilidad.test.mjs` (paso 15) recalcula estos pares desde el CSS y exige ≥ 4.5:1.

### Tipografía

| Rol | Familia | Tamaño / interlineado | Peso | Tracking |
|---|---|---|---|---|
| Display (h1) | `var(--font-sans)` | `clamp(1.75rem, 1.2rem + 2.5vw, 2.5rem)` / 1.15 | 800 | `-0.01em` |
| Encabezado (h2) | `var(--font-sans)` | `1.375rem` / 1.25 | 700 | `0` |
| Cuerpo | `var(--font-sans)` | `1.0625rem` (17 px) / 1.6 | 400 | `0` |
| Pequeño (insignias, pie) | `var(--font-sans)` | `0.875rem` / 1.4 | 600 | `0.02em` |
| Mono | `var(--font-mono)` | `0.95em` / 1.5 | 400 | `0` |

`--font-sans: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;`
`--font-mono: ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, monospace;`

**Carga de fuentes:** ninguna fuente web para el texto (pila del sistema, cero peticiones externas). Las
únicas fuentes descargadas son las de KaTeX, importadas desde `katex/dist/katex.min.css` en
`Base.astro`; Vite las empaqueta en `dist/_astro/` (autoalojadas, `font-display` según el CSS de KaTeX).

### Espaciado, radios, elevación

- Escala de espaciado (base 4 px): `--espacio-1: 0.25rem`, `--espacio-2: 0.5rem`, `--espacio-3: 0.75rem`, `--espacio-4: 1rem`, `--espacio-6: 1.5rem`, `--espacio-8: 2rem`, `--espacio-12: 3rem`, `--espacio-16: 4rem`.
- Radios: `--radio-sm: 6px` (botones, insignias), `--radio-md: 12px` (tarjetas, bloque de solución), `--radio-full: 999px` (insignias tipo píldora).
- Sombras: `--sombra-1: 0 1px 2px rgb(15 22 18 / 0.08)` (tarjetas); nada más — el resto es plano con bordes.
- Ancho máximo de contenido: `--ancho-max: 46rem` (lectura de fórmulas). Breakpoints mobile-first: base 360 px; `40rem` (grilla de temas a 2 columnas); `64rem` (grilla a 3 columnas).

### Movimiento

Solo transiciones de color en hover/foco: `120ms ease-out`. Nada de animaciones de entrada. Dentro de
`@media (prefers-reduced-motion: reduce)` todas las transiciones se anulan (`transition: none`).
El script de tema usa `scrollIntoView({ block: "start" })` sin `behavior: "smooth"`.

### Estilo de componentes

Sobrio y académico: fondo blanco, tarjetas `--surface` con borde `--border` de 1 px y radio 12 px,
verde solo para lo accionable. Cada ejercicio parece una ficha de práctica: título, insignia de
dificultad, enunciado con la fórmula grande y un bloque «Ver solución» plegable. Un componente nuevo
encaja si usa solo tokens, no agrega sombras nuevas y su único color fuerte es `--primary`.

---

## 8. Autenticación y autorización

NOT APPLICABLE — el sitio no tiene cuentas: todo el contenido es público y de solo lectura, y no hay
servidor donde validar sesiones.

---

## 9. ORDEN DE CONSTRUCCIÓN

**Esta es la sección para la que existe todo el blueprint.** Un constructor que sigue §9 al pie de la
letra y avanza solo cuando cada puerta está en verde entrega el proyecto.

### Reglas de un paso

1. **Una sesión por paso.** Máximo 5 archivos de código y 2–6 criterios de aceptación por paso. Por eso los 29 ejercicios semilla se reparten en seis pasos (7 a 12) de 5, 5, 5, 5, 5 y 4 archivos `.md`; el paso 12 suma la prueba de contenido.
2. **Cada paso tiene los cuatro campos:** `Do`, `Done when`, `Verify`, `Checkpoint`. El Checkpoint es un bloque literal: `git add -A && git commit -m "step N: slug"` y `git tag step-NN-slug`.
3. **«Done when» es observable y verificable por máquina**, en forma EARS: **WHEN** `<disparador>` **THE SYSTEM SHALL** `<respuesta observable>`.
4. **«Se ve bien» está prohibido.**
5. **`Verify` es shell literal** (Git Bash, desde la raíz, como bajo `set -e`); el código de salida del propio comando impone el resultado.
6. **Un paso no está terminado hasta que pasan sus Verify** *y* los de todos los pasos anteriores. Como `npm test` ejecuta todas las pruebas de `tests/`, cada `npm test` re-verifica los pasos previos.
7. **Checkpoint en cada paso.** Si un paso sale mal: `git reset --hard step-<NN-1>-<slug-anterior>` (el tag real del paso anterior, p. ej. `step-05-tema`) y reintenta.
8. **Nunca saltes adelante.** Si el paso 7 se bloquea, detente y repórtalo.
9. **Ningún paso rompe retroactivamente un Verify anterior.** Este proyecto no tiene variables de entorno obligatorias (ver §10); las pruebas nuevas solo comprueban lo que su propio paso construye o propiedades que ya se cumplen.
10. **Sin números derivados no contados.** Las pruebas calculan cantidades desde el disco (`src/content/ejercicios/`) y desde `temas.ts`. Las únicas cantidades literales son 10 ejercicios por tema / 30 en total (contadas en las tablas de los pasos 7 a 12, más el ejercicio del paso 2), los conteos por carpeta de esos pasos (derivados de esas mismas tablas) y 16 tags de paso (§20.1).
11. **Todo `Verify` sale con 0 si el paso es correcto.** El único camino de error que se comprueba (build con frontmatter inválido, paso 2) captura el código con `status=0; cmd || status=$?` y nunca deja escapar el fallo; cada línea `Verify` es autónoma (no usa variables de otra línea), porque `tasks.json` ejecuta cada una por separado.
12. **Cada comprobación es posible en su medio.** Las pruebas sobre `dist/` miran HTML (lo que existe tras el build); la lógica aleatoria se prueba como función pura; el comportamiento del navegador (clic real) va a la lista manual de §20.1.
13. **Lo que se produce se ejercita en el mismo paso.** El artefacto de este proyecto es `dist/`. El paso 1 no solo construye: su prueba abre `dist/index.html` y comprueba que cada recurso local que referencia existe en `dist/` bajo la base configurada (contrato `astro.config.mjs` ↔ salida). El paso 16 repite la comprobación con `BASE_PATH=/ejercicios-calculo`.
14. **Ningún `Verify` depende del Checkpoint de su paso.** Ninguna línea Verify consulta `git status`, `git ls-files` ni tags; las aserciones de archivos versionados están en los bloques Checkpoint (tras el commit) y en §20.1.
15. **Este blueprint no escribe salidas byte a byte** (ver §19.6, *Reconciliación de artefactos byte a byte*): las pruebas comparan propiedades calculadas.
16. **Toda puerta falla por la razón que dice.** No hay `!` ni `test $? -ne 0` desnudos. El único fallo esperado (paso 2) acepta cualquier código distinto de 0 **porque en Windows Astro aborta al salir con una aserción de libuv y devuelve 127 en lugar de 1** (comprobado en esta máquina); para que la puerta no sea vacua, exige además que la salida contenga `dificultad` e `Invalid option`, textos que un error de uso o un fallo ajeno al esquema no imprimen.

### Un paso, una unidad

**16 pasos de §9 = 16 tareas en `tasks.json` = 16 bloques de tarea en `epics/` = 16 tags
`step-NN-*`.** Con 16 pasos el rango legal de epics es 2 o 3 (`ceil(16 ÷ 9)` = 2, `floor(16 ÷ 5)` = 3);
este bundle usa 2 de 8 pasos cada uno: `01-sitio-base` (pasos 1–8, tareas `E1-T1` … `E1-T8`) y
`02-contenido-y-publicacion` (pasos 9–16, tareas `E2-T1` … `E2-T8`). La reanudación la decide
`tasks.json`: primera tarea `pending` cuyas dependencias estén `done`, en orden de arreglo.

### Mapa de pasos

| # | Paso | Depende de | Toca | Puerta |
|---|---|---|---|---|
| 1 | Andamiaje, tokens y layout base | Bootstrap §10 | `src/styles/global.css`, `src/layouts/Base.astro`, `src/lib/url.ts`, `src/pages/index.astro`, `tests/estructura.test.mjs` | `npm run build && npm test` |
| 2 | Colección de contenido y esquema | 1 | `src/data/temas.ts`, `src/lib/esquema.ts`, `src/content.config.ts`, `src/content/ejercicios/limites/sustitucion-directa.md`, `tests/esquema.test.mjs` | build con fixture inválido sale 1 nombrando `dificultad` |
| 3 | Pipeline matemático y página permanente | 2 | `src/components/Ejercicio.astro`, `src/components/InsigniaDificultad.astro`, `src/pages/ejercicio/[...id].astro`, `tests/ejercicio.test.mjs`, `tests/rehype-solucion.test.mjs` | `npm test` encuentra `class="katex"` en el HTML |
| 4 | Portada con grilla de temas | 3 | `src/components/TarjetaTema.astro`, `src/lib/ejercicios.ts`, `src/pages/index.astro`, `tests/inicio.test.mjs` | `npm test` |
| 5 | Página de tema con lista estática | 4 | `src/pages/tema/[slug].astro`, `tests/tema.test.mjs` | `npm test` |
| 6 | Selección aleatoria y «Dame otros ejercicios» | 5 | `src/lib/aleatorio.ts`, `src/pages/tema/[slug].astro`, `tests/aleatorio.test.mjs`, `tests/tema.test.mjs` | `npm test` |
| 7 | Semilla 1: Límites, orden 2 a 6 | 6 | `src/content/ejercicios/limites/factorizacion-cero-entre-cero.md`, `src/content/ejercicios/limites/racionalizacion.md`, `src/content/ejercicios/limites/limite-al-infinito-polinomios.md`, `src/content/ejercicios/limites/limite-al-infinito-raices.md`, `src/content/ejercicios/limites/limite-trigonometrico-sen-x-sobre-x.md` | `npm run build && npm test` |
| 8 | Semilla 2: Límites 7 a 10 y Derivadas 1 | 7 | `src/content/ejercicios/limites/limites-laterales-valor-absoluto.md`, `src/content/ejercicios/limites/limite-numero-e.md`, `src/content/ejercicios/limites/continuidad-funcion-a-trozos.md`, `src/content/ejercicios/limites/teorema-del-sandwich.md`, `src/content/ejercicios/derivadas/regla-de-la-potencia.md` | `npm run build && npm test` |
| 9 | Semilla 3: Derivadas, orden 2 a 6 | 8 | `src/content/ejercicios/derivadas/regla-del-producto.md`, `src/content/ejercicios/derivadas/regla-del-cociente.md`, `src/content/ejercicios/derivadas/regla-de-la-cadena.md`, `src/content/ejercicios/derivadas/derivadas-trigonometricas.md`, `src/content/ejercicios/derivadas/exponencial-y-logaritmo.md` | `npm run build && npm test` |
| 10 | Semilla 4: Derivadas 7 a 10 e Integrales 1 | 9 | `src/content/ejercicios/derivadas/derivacion-implicita.md`, `src/content/ejercicios/derivadas/recta-tangente.md`, `src/content/ejercicios/derivadas/segunda-derivada.md`, `src/content/ejercicios/derivadas/razon-de-cambio.md`, `src/content/ejercicios/integrales/integrales-inmediatas.md` | `npm run build && npm test` |
| 11 | Semilla 5: Integrales, orden 2 a 6 | 10 | `src/content/ejercicios/integrales/sustitucion-simple.md`, `src/content/ejercicios/integrales/integral-trigonometrica-basica.md`, `src/content/ejercicios/integrales/sustitucion-exponencial.md`, `src/content/ejercicios/integrales/integracion-por-partes.md`, `src/content/ejercicios/integrales/por-partes-logaritmo.md` | `npm run build && npm test` |
| 12 | Semilla 6: Integrales 7 a 10 y prueba de contenido | 11 | `src/content/ejercicios/integrales/fracciones-parciales.md`, `src/content/ejercicios/integrales/integral-definida-tfc.md`, `src/content/ejercicios/integrales/area-entre-curvas.md`, `src/content/ejercicios/integrales/integral-definida-sustitucion.md`, `tests/contenido.test.mjs` | `node --test tests/contenido.test.mjs` |
| 13 | Búsqueda con Pagefind | 12 | `src/pages/index.astro`, `src/pages/ejercicio/[...id].astro`, `tests/busqueda.test.mjs` | `npm test` |
| 14 | SEO: sitemap, robots, 404 y metadatos | 13 | `src/pages/robots.txt.ts`, `src/pages/404.astro`, `tests/seo.test.mjs` | `npm test` |
| 15 | Suite de humo y accesibilidad básica | 14 | `tests/smoke.test.mjs`, `tests/accesibilidad.test.mjs`, `src/layouts/Base.astro`, `src/styles/global.css`, `src/components/Ejercicio.astro` | TAP con `# skipped 0` |
| 16 | Workflow de despliegue a GitHub Pages | 15 | `.github/workflows/deploy.yml`, `README.md` | build + test con `BASE_PATH=/ejercicios-calculo` |

Orden elegido: andamiaje → datos → **una rebanada vertical completa (un ejercicio con KaTeX en su
página permanente, paso 3)** → portada → tema → interacción → contenido → búsqueda → SEO →
endurecimiento → despliegue. El contenido semilla va en seis pasos de como máximo 5 archivos para que
cada uno quepa en una sesión. La página permanente se adelanta al paso 3 (el pedido original la ponía en
el 6) porque es la forma más barata de probar el pipeline matemático en HTML real lo antes posible.

---

#### Step 1 — Andamiaje, tokens y layout base

**Do**
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

**Done when**
- [ ] WHEN `npm run build` runs THE SYSTEM SHALL exit 0 and write `dist/index.html`.
- [ ] WHEN `npm test` runs after the build THE SYSTEM SHALL exit 0 with 0 failed, asserting `dist/index.html` has `lang="es"`, a non-empty `<title>`, a meta description and a canonical link.
- [ ] WHEN `unirRuta("/ejercicios-calculo", "tema/limites/")` is called in `tests/estructura.test.mjs` THE SYSTEM SHALL return `"/ejercicios-calculo/tema/limites/"`.
- [ ] WHEN `tests/estructura.test.mjs` scans every HTML file in `dist/` THE SYSTEM SHALL find that every local `href`/`src` starts with the configured base and every local asset URL with a file extension resolves to an existing file in `dist/`.
- [ ] WHEN `npm run format:check` runs THE SYSTEM SHALL exit 0.

**Verify**
```bash
npm run format:check                                        # expect: exit 0
npm run build                                               # expect: exit 0 (astro check + astro build + pagefind)
test -f dist/index.html                                     # expect: exit 0
npm test                                                    # expect: exit 0, 0 failed — ejecuta la página construida contra el contrato de base/assets
grep -qi -- "--primary: #1b7f4c" src/styles/global.css      # expect: exit 0 — token de marca presente
```

**Checkpoint**
```bash
git add -A && git commit -m "step 1: andamiaje, tokens y layout base"
git tag step-01-andamiaje
git ls-files --error-unmatch src/styles/global.css          # expect: exit 0 — versionado por el commit de arriba
# rollback si el paso 2 sale mal: git reset --hard step-01-andamiaje
```

---

#### Step 2 — Colección de contenido y esquema

**Do**
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

**Done when**
- [ ] WHEN `npm run build` runs with the collection and the sample exercise THE SYSTEM SHALL exit 0.
- [ ] WHEN `tests/fixtures/ejercicio-invalido.md` is copied into `src/content/ejercicios/limites/` and `npx astro build` runs THE SYSTEM SHALL exit with a non-zero code and print an error containing both `dificultad` and `Invalid option`.
- [ ] WHEN `tests/esquema.test.mjs` runs THE SYSTEM SHALL reject `dificultad: "facil"`, `tema: "series"`, `orden: 1.5` and an extra key, and accept the valid object.
- [ ] WHEN `npm test` runs after `npm run build` THE SYSTEM SHALL exit 0 with 0 failed.

**Verify**
```bash
log="$(mktemp)"; cp tests/fixtures/ejercicio-invalido.md src/content/ejercicios/limites/zz-invalido.md; status=0; npx astro build >"$log" 2>&1 || status=$?; rm -f src/content/ejercicios/limites/zz-invalido.md; test "$status" -ne 0 && grep -q "dificultad" "$log" && grep -q "Invalid option" "$log" || false   # expect: exit 0 — el build falló Y la salida nombra el campo y el error de zod
npm run build                                                # expect: exit 0 — reconstruye dist/ completo sin el fixture
npm test                                                     # expect: exit 0, 0 failed
npm run format:check                                         # expect: exit 0
```

**Checkpoint**
```bash
git add -A && git commit -m "step 2: coleccion de contenido y esquema"
git tag step-02-contenido
git ls-files --error-unmatch src/content/ejercicios/limites/sustitucion-directa.md   # expect: exit 0
status=0; git ls-files --error-unmatch src/content/ejercicios/limites/zz-invalido.md >/dev/null 2>&1 || status=$?; test "$status" -eq 1
                                                             # expect: exit 0 — 1 = el fixture inválido NO quedó versionado
```

---

#### Step 3 — Pipeline matemático y página permanente del ejercicio

**Do**
El plugin `src/lib/rehype-solucion.mjs` y la configuración `unified()` + `remark-math` + `rehype-katex`
ya existen (§19.6). Este paso los ejercita en HTML real. Crea:
- `src/components/InsigniaDificultad.astro` — prop `dificultad: "basico" | "intermedio" | "avanzado"`; renderiza `<span class={`insignia insignia--${dificultad}`}>{etiqueta}</span>` (atributo con expresión de plantilla, nunca `{…}` dentro de comillas) con etiquetas `basico → "Básico"`, `intermedio → "Intermedio"`, `avanzado → "Avanzado"`. Colores: básico `--surface` + texto `--fg` + borde `--border`; intermedio `--primary` + `--primary-fg`; avanzado `--accent` + `--accent-fg`.
- `src/components/Ejercicio.astro` — props `{ ejercicio: CollectionEntry<"ejercicios">; nivelTitulo: 1 | 2; enlazar: boolean }`. En el frontmatter: `const { Content } = await render(ejercicio);` (de `astro:content`). Renderiza `<article class="tarjeta-ejercicio">` con el encabezado dinámico (`const Titulo = nivelTitulo === 1 ? "h1" : "h2";` → `<Titulo>{ejercicio.data.titulo}</Titulo>`), `<InsigniaDificultad>`, `<div class="cuerpo-ejercicio"><Content /></div>` y, si `enlazar`, `<a href={url(`ejercicio/${ejercicio.id}/`)}>Abrir este ejercicio en su propia página</a>`. Estilo de `details.solucion`: fondo `--surface`, radio `--radio-md`, `summary` con `cursor: pointer`, color `--primary`, peso 700 y altura mínima 44 px (objetivo táctil ≥ 24×24).
- `src/pages/ejercicio/[...id].astro` — `getStaticPaths()` devuelve, por cada entrada de `getCollection("ejercicios")`, `{ params: { id: entrada.id }, props: { ejercicio: entrada } }`. Antes de devolverlas, por cada entrada: `const carpeta = entrada.id.split("/")[0]; if (carpeta !== entrada.data.tema) throw new Error(`El ejercicio ${entrada.id} declara tema "${entrada.data.tema}" pero está en la carpeta "${carpeta}".`);`. La página usa `Base` con `titulo={`${ejercicio.data.titulo} | Ejercicios de ${tema.nombre}`}` y `descripcion={`Ejercicio resuelto paso a paso de ${tema.nombre}: ${ejercicio.data.titulo}.`}` (`tema` vía `buscarTema` de `../../data/temas.ts`); arriba un enlace `<a href={url(`tema/${tema.slug}/`)}>← Volver a {tema.nombre}</a>`; luego `<Ejercicio ejercicio={ejercicio} nivelTitulo={1} enlazar={false} />`.
- `tests/rehype-solucion.test.mjs` — importa `../src/lib/rehype-solucion.mjs`. Construye a mano un árbol hast `root` con hijos `[h2 "Enunciado", p, h2 "Solución", ol, p]`, ejecuta `rehypeSolucion()(arbol, { path: "x.md" })` y comprueba que los hijos resultantes son `[p, details]`, que `details.properties.className` incluye `"solucion"`, que su primer hijo es `summary` con texto `Ver solución` y que el `ol` y el último `p` están dentro del `details`. Un árbol sin `h2 "Solución"` hace que la llamada lance un `Error` cuyo mensaje contiene `## Solución`.
- `tests/ejercicio.test.mjs` — para **cada** ejercicio de `ejerciciosEnDisco()`: existe `dist/ejercicio/<tema>/<slug>/index.html`; contiene `class="katex"`; contiene `<details` y `Ver solución`; no contiene `$$`; no contiene `Enunciado</h2>` (el plugin quitó ese encabezado); contiene un `href` igual a `${PREFIJO}tema/<tema>/`; contiene exactamente un `<h1`.

Luego `npm run format`.

**Done when**
- [ ] WHEN `npm run build` runs THE SYSTEM SHALL write `dist/ejercicio/limites/sustitucion-directa/index.html` containing KaTeX output (`class="katex"`) and no raw `$$`.
- [ ] WHEN that page is generated THE SYSTEM SHALL place the solution inside `<details class="solucion">` whose `<summary>` reads `Ver solución`, and SHALL link back to `${base}tema/limites/`.
- [ ] WHEN `rehypeSolucion` receives a tree without a `Solución` h2 THE SYSTEM SHALL throw an error whose message contains `## Solución`.
- [ ] WHEN an exercise's `tema` differs from its folder name THE SYSTEM SHALL fail the build with an error naming the exercise id (enforced in `getStaticPaths`).
- [ ] WHEN `npm test` runs after the build THE SYSTEM SHALL exit 0 with 0 failed.

**Verify**
```bash
npm run build                                                          # expect: exit 0
test -f dist/ejercicio/limites/sustitucion-directa/index.html          # expect: exit 0
grep -q 'class="katex"' dist/ejercicio/limites/sustitucion-directa/index.html   # expect: exit 0 — KaTeX corrió
npm test                                                               # expect: exit 0, 0 failed
npm run format:check                                                   # expect: exit 0
```

**Checkpoint**
```bash
git add -A && git commit -m "step 3: pipeline matematico y pagina permanente"
git tag step-03-ejercicio
```

---

#### Step 4 — Portada con grilla de temas

**Do**
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

**Done when**
- [ ] WHEN `npm run build` runs THE SYSTEM SHALL render one card per tema in `src/data/temas.ts` on `dist/index.html`, each linking to `${base}tema/<slug>/`.
- [ ] WHEN a tema folder holds N `.md` files THE SYSTEM SHALL render that tema's card with `data-cantidad="N"` (verified against the disk by `tests/inicio.test.mjs`, so a tema with 0 files shows 0).
- [ ] WHEN `npm test` runs after the build THE SYSTEM SHALL exit 0 with 0 failed.

**Verify**
```bash
npm run build                                 # expect: exit 0
npm test                                      # expect: exit 0, 0 failed
grep -q 'data-tema="derivadas"' dist/index.html   # expect: exit 0 — tarjeta presente aunque el tema aún no tenga ejercicios
npm run format:check                          # expect: exit 0
```

**Checkpoint**
```bash
git add -A && git commit -m "step 4: portada con grilla de temas"
git tag step-04-portada
```

---

#### Step 5 — Página de tema con lista estática

**Do**
Crea:
- `src/pages/tema/[slug].astro` — `getStaticPaths()` devuelve un path por cada tema de `temas` (`params: { slug }`, `props: { tema }`). Obtiene `const lista = await ejerciciosDeTema(tema.slug);` y `const total = lista.length; const visibles = Math.min(total, 10);`. Usa `Base` con `titulo={`Ejercicios resueltos de ${tema.nombre} | Ejercicios de Cálculo`}` y `descripcion={tema.descripcion}`. Contenido: `<h1>{tema.nombre}</h1>`, `<p>{tema.descripcion}</p>`; si `total === 0`, `<p class="vacio">Pronto habrá ejercicios de este tema.</p>` y nada más; si no: `<p id="estado-seleccion" aria-live="polite">Mostrando {visibles} de {total} ejercicios.</p>`, `<ol id="lista-ejercicios" class="lista-ejercicios" data-total={total}>` con, por cada ejercicio en índice `i`, `<li class="ejercicio" data-indice={i} hidden={i >= 10}><Ejercicio ejercicio={e} nivelTitulo={2} enlazar={true} /></li>`. Al pie, `<a href={url("")}>← Todos los temas</a>`.
- `tests/tema.test.mjs` — para **cada** tema de `temas`: existe `dist/tema/<slug>/index.html`; contiene `<h1` con el `nombre`; el número de coincidencias de `/<li\b[^>]*\bdata-indice="\d+"/g` es igual al número de ejercicios del tema en disco; si ese número es 0, contiene `Pronto habrá ejercicios de este tema.`; si es > 0, `data-total="<N>"` coincide, cada `<li` con `data-indice` ≥ 10 lleva `hidden`, el HTML contiene `<details` y `Ver solución` y un `href` a `${PREFIJO}ejercicio/<tema>/<slug>/` por cada ejercicio.

Luego `npm run format`.

**Done when**
- [ ] WHEN `npm run build` runs THE SYSTEM SHALL write `dist/tema/<slug>/index.html` for every tema in `src/data/temas.ts`.
- [ ] WHEN a tema has N exercises THE SYSTEM SHALL render all N in the HTML in ascending `orden`, with `data-total="N"` on the list and the `hidden` attribute on every item whose index is 10 or more.
- [ ] WHEN a tema has 0 exercises THE SYSTEM SHALL render the text `Pronto habrá ejercicios de este tema.` and no list.
- [ ] WHEN `npm test` runs after the build THE SYSTEM SHALL exit 0 with 0 failed.

**Verify**
```bash
npm run build                                       # expect: exit 0
test -f dist/tema/limites/index.html                # expect: exit 0
test -f dist/tema/integrales/index.html             # expect: exit 0
npm test                                            # expect: exit 0, 0 failed
npm run format:check                                # expect: exit 0
```

**Checkpoint**
```bash
git add -A && git commit -m "step 5: pagina de tema con lista estatica"
git tag step-05-tema
```

---

#### Step 6 — Selección aleatoria y «Dame otros ejercicios»

**Do**
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

**Done when**
- [ ] WHEN `elegirAleatorios(total, rng)` is called with any `total ≥ 0` THE SYSTEM SHALL return distinct ascending indices in `[0, total)` whose count is between `min(total, 5)` and `min(total, 10)`.
- [ ] WHEN `otroConjunto(10, rng, anterior)` is called 50 times in a chain with a seeded `rng` THE SYSTEM SHALL never return the same set as the previous call.
- [ ] WHEN `dist/tema/<slug>/index.html` is generated for a tema with exercises THE SYSTEM SHALL contain the button `id="otros-ejercicios"` with `hidden`, the live region `id="estado-seleccion"` with `aria-live="polite"`, and a `<script type="module"`.
- [ ] WHEN `npm test` runs after the build THE SYSTEM SHALL exit 0 with 0 failed.

**Verify**
```bash
npm run build                                        # expect: exit 0
node --test tests/aleatorio.test.mjs                 # expect: exit 0, 0 failed — lógica pura, sin dist/
npm test                                             # expect: exit 0, 0 failed
grep -q 'id="otros-ejercicios"' dist/tema/limites/index.html   # expect: exit 0
npm run format:check                                 # expect: exit 0
```

El clic real en el navegador (que la selección cambie al pulsar) no es observable en HTML: está en la
lista manual de §20.1.

**Checkpoint**
```bash
git add -A && git commit -m "step 6: seleccion aleatoria y boton dame otros"
git tag step-06-aleatorio
```

---

#### Step 7 — Semilla 1: Límites, orden 2 a 6

**Do**
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

**Done when**
- [ ] WHEN `npm run build` runs with the 5 new files in `src/content/ejercicios/limites/` THE SYSTEM SHALL exit 0, so every new frontmatter passes the strict schema and every body has `## Enunciado` followed by `## Solución`.
- [ ] WHEN each of the 5 new files is read THE SYSTEM SHALL contain a line starting with `**Respuesta:**`.
- [ ] WHEN `src/content/ejercicios/limites/` is listed after this step THE SYSTEM SHALL hold exactly 6 `.md` files (1 from step 2 plus 5 new).
- [ ] WHEN `npm test` runs after the build THE SYSTEM SHALL exit 0 with 0 failed, including `tests/ejercicio.test.mjs` over every exercise on disk (KaTeX present, no `$$`, `Ver solución` present).

**Verify**
```bash
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/factorizacion-cero-entre-cero.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/racionalizacion.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/limite-al-infinito-polinomios.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/limite-al-infinito-raices.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/limite-trigonometrico-sen-x-sobre-x.md   # expect: exit 0
test "$(ls src/content/ejercicios/limites/*.md | wc -l)" -eq 6   # expect: exit 0 — 1 + 5
npm run build   # expect: exit 0
npm test   # expect: exit 0, 0 failed
npm run format:check   # expect: exit 0
```

**Checkpoint**
```bash
git add -A && git commit -m "step 7: semilla 1 limites orden 2 a 6"
git tag step-07-semilla-1
```

---

#### Step 8 — Semilla 2: Límites, orden 7 a 10, y Derivadas, orden 1

**Do**
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

**Done when**
- [ ] WHEN `npm run build` runs with the 5 new files THE SYSTEM SHALL exit 0, so every new frontmatter passes the strict schema and every body has `## Enunciado` followed by `## Solución`.
- [ ] WHEN each of the 5 new files is read THE SYSTEM SHALL contain a line starting with `**Respuesta:**`.
- [ ] WHEN the content folders are listed after this step THE SYSTEM SHALL hold exactly 10 `.md` files in `src/content/ejercicios/limites/` and exactly 1 in `src/content/ejercicios/derivadas/`.
- [ ] WHEN `npm test` runs after the build THE SYSTEM SHALL exit 0 with 0 failed, including `tests/ejercicio.test.mjs` over every exercise on disk (KaTeX present, no `$$`, `Ver solución` present).

**Verify**
```bash
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/limites-laterales-valor-absoluto.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/limite-numero-e.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/continuidad-funcion-a-trozos.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/limites/teorema-del-sandwich.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/regla-de-la-potencia.md   # expect: exit 0
test "$(ls src/content/ejercicios/limites/*.md | wc -l)" -eq 10   # expect: exit 0
test "$(ls src/content/ejercicios/derivadas/*.md | wc -l)" -eq 1   # expect: exit 0
npm run build   # expect: exit 0
npm test   # expect: exit 0, 0 failed
npm run format:check   # expect: exit 0
```

**Checkpoint**
```bash
git add -A && git commit -m "step 8: semilla 2 limites 7 a 10 y derivadas 1"
git tag step-08-semilla-2
```

---

#### Step 9 — Semilla 3: Derivadas, orden 2 a 6

**Do**
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

**Done when**
- [ ] WHEN `npm run build` runs with the 5 new files in `src/content/ejercicios/derivadas/` THE SYSTEM SHALL exit 0, so every new frontmatter passes the strict schema and every body has `## Enunciado` followed by `## Solución`.
- [ ] WHEN each of the 5 new files is read THE SYSTEM SHALL contain a line starting with `**Respuesta:**`.
- [ ] WHEN `src/content/ejercicios/derivadas/` is listed after this step THE SYSTEM SHALL hold exactly 6 `.md` files.
- [ ] WHEN `npm test` runs after the build THE SYSTEM SHALL exit 0 with 0 failed, including `tests/ejercicio.test.mjs` over every exercise on disk (KaTeX present, no `$$`, `Ver solución` present).

**Verify**
```bash
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/regla-del-producto.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/regla-del-cociente.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/regla-de-la-cadena.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/derivadas-trigonometricas.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/exponencial-y-logaritmo.md   # expect: exit 0
test "$(ls src/content/ejercicios/derivadas/*.md | wc -l)" -eq 6   # expect: exit 0
npm run build   # expect: exit 0
npm test   # expect: exit 0, 0 failed
npm run format:check   # expect: exit 0
```

**Checkpoint**
```bash
git add -A && git commit -m "step 9: semilla 3 derivadas 2 a 6"
git tag step-09-semilla-3
```

---

#### Step 10 — Semilla 4: Derivadas, orden 7 a 10, e Integrales, orden 1

**Do**
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

**Done when**
- [ ] WHEN `npm run build` runs with the 5 new files THE SYSTEM SHALL exit 0, so every new frontmatter passes the strict schema and every body has `## Enunciado` followed by `## Solución`.
- [ ] WHEN each of the 5 new files is read THE SYSTEM SHALL contain a line starting with `**Respuesta:**`.
- [ ] WHEN the content folders are listed after this step THE SYSTEM SHALL hold exactly 10 `.md` files in `src/content/ejercicios/derivadas/` and exactly 1 in `src/content/ejercicios/integrales/`.
- [ ] WHEN `npm test` runs after the build THE SYSTEM SHALL exit 0 with 0 failed, including `tests/ejercicio.test.mjs` over every exercise on disk (KaTeX present, no `$$`, `Ver solución` present).

**Verify**
```bash
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/derivacion-implicita.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/recta-tangente.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/segunda-derivada.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/derivadas/razon-de-cambio.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/integrales-inmediatas.md   # expect: exit 0
test "$(ls src/content/ejercicios/derivadas/*.md | wc -l)" -eq 10   # expect: exit 0
test "$(ls src/content/ejercicios/integrales/*.md | wc -l)" -eq 1   # expect: exit 0
npm run build   # expect: exit 0
npm test   # expect: exit 0, 0 failed
npm run format:check   # expect: exit 0
```

**Checkpoint**
```bash
git add -A && git commit -m "step 10: semilla 4 derivadas 7 a 10 e integrales 1"
git tag step-10-semilla-4
```

---

#### Step 11 — Semilla 5: Integrales, orden 2 a 6

**Do**
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

**Done when**
- [ ] WHEN `npm run build` runs with the 5 new files in `src/content/ejercicios/integrales/` THE SYSTEM SHALL exit 0, so every new frontmatter passes the strict schema and every body has `## Enunciado` followed by `## Solución`.
- [ ] WHEN each of the 5 new files is read THE SYSTEM SHALL contain a line starting with `**Respuesta:**`.
- [ ] WHEN `src/content/ejercicios/integrales/` is listed after this step THE SYSTEM SHALL hold exactly 6 `.md` files.
- [ ] WHEN `npm test` runs after the build THE SYSTEM SHALL exit 0 with 0 failed, including `tests/ejercicio.test.mjs` over every exercise on disk (KaTeX present, no `$$`, `Ver solución` present).

**Verify**
```bash
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/sustitucion-simple.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/integral-trigonometrica-basica.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/sustitucion-exponencial.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/integracion-por-partes.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/por-partes-logaritmo.md   # expect: exit 0
test "$(ls src/content/ejercicios/integrales/*.md | wc -l)" -eq 6   # expect: exit 0
npm run build   # expect: exit 0
npm test   # expect: exit 0, 0 failed
npm run format:check   # expect: exit 0
```

**Checkpoint**
```bash
git add -A && git commit -m "step 11: semilla 5 integrales 2 a 6"
git tag step-11-semilla-5
```

---

#### Step 12 — Semilla 6: Integrales, orden 7 a 10, y prueba de contenido completo

**Do**
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

**Done when**
- [ ] WHEN each of the 4 new files is read THE SYSTEM SHALL contain a line starting with `**Respuesta:**`.
- [ ] WHEN `tests/contenido.test.mjs` runs THE SYSTEM SHALL find all 30 named files, exactly 10 per tema, each with frontmatter valid under the strict schema whose `tema` equals its folder, with no repeated `orden` within a tema and no repeated `titulo` in the site.
- [ ] WHEN any exercise body is read by `tests/contenido.test.mjs` THE SYSTEM SHALL find `## Enunciado` before `## Solución`, and a numbered step `1. ` and a `**Respuesta:**` line after `## Solución`.
- [ ] WHEN `npm test` runs after `npm run build` THE SYSTEM SHALL exit 0 with 0 failed, with each tema page holding as many `data-indice` items as that tema has files.

**Verify**
```bash
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/fracciones-parciales.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/integral-definida-tfc.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/area-entre-curvas.md   # expect: exit 0
grep -q '^\*\*Respuesta:\*\*' src/content/ejercicios/integrales/integral-definida-sustitucion.md   # expect: exit 0
npm run build   # expect: exit 0
node --test tests/contenido.test.mjs   # expect: exit 0, 0 failed — afirma los 30 nombres y 10 por tema
npm test   # expect: exit 0, 0 failed
npm run format:check   # expect: exit 0
```

**Checkpoint**
```bash
git add -A && git commit -m "step 12: semilla 6 integrales 7 a 10 y prueba de contenido"
git tag step-12-semilla-6
```

---

#### Step 13 — Búsqueda con Pagefind

**Do**
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

**Done when**
- [ ] WHEN `npm run build` runs THE SYSTEM SHALL produce `dist/pagefind/pagefind-ui.js`, `dist/pagefind/pagefind-ui.css` and `dist/pagefind/pagefind-entry.json`.
- [ ] WHEN `dist/index.html` is generated THE SYSTEM SHALL load `pagefind-ui.js` from `${base}pagefind/` and initialise `PagefindUI` with `baseUrl` equal to the base.
- [ ] WHEN the site is built THE SYSTEM SHALL mark every exercise permalink page with `data-pagefind-body` and no home or tema page.
- [ ] WHEN `npm test` runs after the build THE SYSTEM SHALL exit 0 with 0 failed.

**Verify**
```bash
npm run build   # expect: exit 0 — incluye pagefind --site dist
test -f dist/pagefind/pagefind-ui.js   # expect: exit 0
test -f dist/pagefind/pagefind-entry.json   # expect: exit 0
npm test   # expect: exit 0, 0 failed
npm run format:check   # expect: exit 0
```

Que una búsqueda real devuelva resultados en el navegador es comportamiento de cliente (WebAssembly):
está en la lista manual de §20.1.

**Checkpoint**
```bash
git add -A && git commit -m "step 13: busqueda con pagefind"
git tag step-13-busqueda
```

---

#### Step 14 — SEO: sitemap, robots, 404 y metadatos

**Do**
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

**Done when**
- [ ] WHEN `npm run build` runs THE SYSTEM SHALL write `dist/robots.txt` with `User-agent: *` and `Sitemap: <origin><base>sitemap-index.xml`.
- [ ] WHEN the sitemap is generated THE SYSTEM SHALL list the home, every tema page and every exercise page as `<origin><base><path>`, and SHALL NOT list the 404 page.
- [ ] WHEN `dist/404.html` is generated THE SYSTEM SHALL include `<meta name="robots" content="noindex" />` and a link to the home.
- [ ] WHEN `tests/seo.test.mjs` compares every page except 404 THE SYSTEM SHALL find a canonical equal to `<origin><base><path>` (origin normalized with `new URL(SITE_URL).origin`) and no duplicated `<title>` or meta description.
- [ ] WHEN `npm test` runs after the build THE SYSTEM SHALL exit 0 with 0 failed.

**Verify**
```bash
npm run build   # expect: exit 0
test -f dist/404.html   # expect: exit 0
test -f dist/robots.txt   # expect: exit 0
grep -q "User-agent: \*" dist/robots.txt   # expect: exit 0
npm test   # expect: exit 0, 0 failed
npm run format:check   # expect: exit 0
```

**Checkpoint**
```bash
git add -A && git commit -m "step 14: seo sitemap robots y 404"
git tag step-14-seo
```

---

#### Step 15 — Suite de humo y accesibilidad básica

**Do**
Crea:
- `tests/smoke.test.mjs` — (1) existen `dist/index.html`, `dist/404.html`, `dist/tema/<slug>/index.html` por cada tema y `dist/ejercicio/<tema>/<slug>/index.html` por cada ejercicio en disco; (2) en cada HTML, cada URL local que termina en `/` resuelve con `archivoDeUrl()` a un `index.html` existente (sin enlaces internos rotos); (3) ningún HTML contiene `$$` ni `katex-error`; (4) cada tema de `temas` tiene en disco al menos `MINIMO` ejercicios (importado de `../src/lib/aleatorio.ts`) y su página tiene `data-total` ≥ `MINIMO`; (5) cada página de tema y de ejercicio contiene `class="katex"`.
- `tests/accesibilidad.test.mjs` — por cada HTML: `<html lang="es"`; exactamente un `<h1`; `<meta name="viewport"`; un enlace `href="#contenido"` y un `id="contenido"`; cada `<img` tiene `alt=`; cada `<button` tiene texto no vacío entre sus etiquetas; cada `<details` contiene un `<summary`. Además, contraste: lee `src/styles/global.css`, toma el primer bloque `:root { … }` (claro) y el `:root { … }` dentro de `@media (prefers-color-scheme: dark)` (oscuro), resuelve los hex (sin distinguir mayúsculas) y calcula la razón WCAG `(L1 + 0.05) / (L2 + 0.05)` con luminancia relativa sRGB para estos pares en ambos modos: `--fg`/`--bg`, `--fg`/`--surface`, `--fg-muted`/`--bg`, `--fg-muted`/`--surface`, `--primary`/`--bg`, `--primary`/`--surface`, `--primary-fg`/`--primary`, `--accent-fg`/`--accent`; cada razón debe ser ≥ 4.5.

**Si estas pruebas revelan un defecto**, la corrección solo puede tocar estos tres archivos, que son
donde viven todas las propiedades que las pruebas miden: `src/layouts/Base.astro` (lang, viewport,
enlace de salto, `main id="contenido"`, canonical), `src/styles/global.css` (tokens de contraste) y
`src/components/Ejercicio.astro` (`h1`/`h2`, `details`/`summary`, KaTeX). Si la corrección requiere
otro archivo, detente y repórtalo: es un defecto del blueprint, no algo que arreglar improvisando. No
agregues funcionalidad. Luego `npm run format`.

**Done when**
- [ ] WHEN `npm test` runs after the build THE SYSTEM SHALL find a generated file for the home, the 404, every tema and every exercise, and zero internal page links that resolve to a missing file.
- [ ] WHEN any generated HTML is scanned THE SYSTEM SHALL find `lang="es"`, exactly one `<h1`, a viewport meta, a skip link to `#contenido`, no raw `$$` and no `katex-error`.
- [ ] WHEN every tema page is scanned THE SYSTEM SHALL find `data-total` of at least 5 (`MINIMO`).
- [ ] WHEN the eight token pairs are computed from `src/styles/global.css` in light and dark mode THE SYSTEM SHALL find every contrast ratio ≥ 4.5.
- [ ] WHEN the whole suite runs with `node --test --test-reporter=tap "tests/**/*.test.mjs"` THE SYSTEM SHALL exit 0 and its report SHALL contain the lines `# skipped 0` and `# todo 0`.

**Verify**
```bash
npm run build   # expect: exit 0
npm test   # expect: exit 0, 0 failed
out="$(mktemp)" && node --test --test-reporter=tap "tests/**/*.test.mjs" >"$out" 2>&1 && grep -qx "# skipped 0" "$out" && grep -qx "# todo 0" "$out" || false   # expect: exit 0 — 0 omitidas, 0 pendientes
npm run format:check   # expect: exit 0
```

**Checkpoint**
```bash
git add -A && git commit -m "step 15: suite de humo y accesibilidad"
git tag step-15-calidad
```

---

#### Step 16 — Workflow de despliegue a GitHub Pages

**Do**
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

**Done when**
- [ ] WHEN `.github/workflows/deploy.yml` is read THE SYSTEM SHALL reference `actions/checkout@v7`, `actions/setup-node@v7`, `actions/configure-pages@v6`, `actions/upload-pages-artifact@v5` and `actions/deploy-pages@v5`, and contain `node-version-file: .nvmrc`.
- [ ] WHEN `.github/workflows/deploy.yml` is read THE SYSTEM SHALL contain `run: npm ci`, `run: npm run format:check`, `run: npm run build` and `run: npm test`, in that order, each on a line before `actions/upload-pages-artifact`.
- [ ] WHEN `SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm run build` and then the same-env `npm test` run THE SYSTEM SHALL exit 0, with every local link in `dist/` prefixed by `/ejercicios-calculo/`.
- [ ] WHEN that base build is inspected THE SYSTEM SHALL contain `href="/ejercicios-calculo/tema/limites/"` in `dist/index.html` and the canonical `https://ejemplo.github.io/ejercicios-calculo/`.

**Verify**
```bash
test -f .github/workflows/deploy.yml   # expect: exit 0
grep -q "actions/checkout@v7" .github/workflows/deploy.yml   # expect: exit 0
grep -q "actions/setup-node@v7" .github/workflows/deploy.yml   # expect: exit 0
grep -q "actions/configure-pages@v6" .github/workflows/deploy.yml   # expect: exit 0
grep -q "actions/upload-pages-artifact@v5" .github/workflows/deploy.yml   # expect: exit 0
grep -q "actions/deploy-pages@v5" .github/workflows/deploy.yml   # expect: exit 0
grep -q "node-version-file: .nvmrc" .github/workflows/deploy.yml   # expect: exit 0
grep -q "run: npm ci" .github/workflows/deploy.yml   # expect: exit 0
grep -q "run: npm run format:check" .github/workflows/deploy.yml   # expect: exit 0
grep -q "run: npm run build" .github/workflows/deploy.yml   # expect: exit 0
grep -q "run: npm test" .github/workflows/deploy.yml   # expect: exit 0
awk '/run: npm ci/{a=NR} /run: npm run format:check/{b=NR} /run: npm run build/{c=NR} /run: npm test/{d=NR} /actions\/upload-pages-artifact/{e=NR} END{exit !(a && a<b && b<c && c<d && d<e)}' .github/workflows/deploy.yml   # expect: exit 0 — el orden ci → format:check → build → test → upload
SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm run build   # expect: exit 0
SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm test   # expect: exit 0, 0 failed — todas las pruebas con la base de GitHub Pages
grep -q 'href="/ejercicios-calculo/tema/limites/"' dist/index.html   # expect: exit 0
grep -q "https://ejemplo.github.io/ejercicios-calculo/" dist/index.html   # expect: exit 0 — canonical/og:url con la base
npm run build   # expect: exit 0 — deja dist/ en modo local
npm test   # expect: exit 0, 0 failed
npm run format:check   # expect: exit 0
```

Publicar de verdad (crear el repositorio, `git push`, activar Pages) necesita la cuenta de GitHub del
docente y la red; `gh` no está instalado. Va en §20.1.

**Checkpoint**
```bash
git add -A && git commit -m "step 16: workflow de despliegue a github pages"
git tag step-16-despliegue
git ls-files --error-unmatch .github/workflows/deploy.yml   # expect: exit 0 — versionado por el commit de arriba
```

---

### 9.1 Paridad y transición

NOT APPLICABLE — greenfield build, no system is being replaced.

---

## 10. Configuración del entorno

### Prerrequisitos

| Herramienta | Versión | Comprobación |
|---|---|---|
| Node.js | línea 24 LTS (máquina local: v24.19.0; `.nvmrc` = `24`) | `node --version` → `v24.x` |
| npm | 11.x (máquina local: 11.17.0) | `npm --version` |
| Git (con Git Bash en Windows) | cualquiera reciente con `git init -b` | `git --version` |

### Cuentas que crear primero

| Servicio | URL | Primer paso que lo requiere |
|---|---|---|
| GitHub (cuenta gratuita del docente) | https://github.com/signup | Ninguno de §9; solo la publicación manual de §20.1 |

No se necesita ninguna otra cuenta, tarjeta ni API key.

### Variables de entorno

| Variable | Propósito | Dónde obtenerla | Requerida desde el paso | ¿Secreta? |
|---|---|---|---|---|
| `SITE_URL` | Origen absoluto del sitio para canonical, `og:url`, sitemap y robots. Por defecto `http://localhost:4321` | En CI: `https://${{ github.repository_owner }}.github.io` (lo pone `deploy.yml`). En local, valor de prueba `https://ejemplo.github.io` | Nunca obligatoria (tiene valor por defecto); el Verify del paso 16 la fija en la línea del comando | no |
| `BASE_PATH` | Base de rutas del sitio de proyecto. Por defecto `/` | En CI: `/${{ github.event.repository.name }}` (lo pone `deploy.yml`). En local, valor de prueba `/ejercicios-calculo` | Nunca obligatoria; el Verify del paso 16 la fija en la línea del comando | no |

No hay `.env` ni `.env.example`: no hay secretos. **Mecanismo de carga:** ninguna herramienta lee un
archivo `.env` aquí. `astro.config.mjs` y `tests/ayudantes.mjs` leen `process.env.SITE_URL` y
`process.env.BASE_PATH` directamente, con el mismo valor por defecto; el valor llega como prefijo en la
misma línea del comando (`SITE_URL=… BASE_PATH=… npm run build` y `… npm test`) en el paso 16, en
§19.1 y en §20.1, y como bloque `env:` del job en `deploy.yml`. Las dos invocaciones (build y test)
llevan siempre ambos prefijos juntos.

### Archivos que deben versionarse

| Archivo | Por qué se versiona | Línea de excepción en `.gitignore` |
|---|---|---|
| `package.json`, `package-lock.json` | Manifiesto y lockfile; `npm ci` en CI los exige | — no coincide con ningún patrón |
| `.npmrc`, `.nvmrc`, `.gitattributes` | Motor estricto, versión de Node, fin de línea LF | — no coincide con ningún patrón (`.env.*` no coincide con `.npmrc`) |
| `.gitignore`, `.prettierrc`, `.prettierignore` | Gobiernan qué se versiona y qué se formatea | — no coincide con ningún patrón |
| `astro.config.mjs`, `tsconfig.json` | Configuración de build y tipos | — no coincide con ningún patrón |
| `CLAUDE.md`, `AGENTS.md`, `.claude/settings.json`, `.claude/rules/*.md`, `.claude/skills/agregar-ejercicio/SKILL.md` | Espacio de trabajo del agente | — no coincide con ningún patrón |
| `tests/ayudantes.mjs`, `tests/fixtures/ejercicio-invalido.md`, `public/favicon.svg`, `src/lib/rehype-solucion.mjs` | Emitidos en §19.6; las puertas los necesitan | — no coincide con ningún patrón |
| `.github/workflows/deploy.yml` | CI/CD | — no coincide con ningún patrón |
| `blueprints/ejercicios-calculo/` (bundle completo: `blueprint.md`, `tasks.json`, `epics/`, `workspace/`) | El diseño y el estado de la construcción (`tasks.json`) | — no coincide con ningún patrón (el `.gitignore` anidado en `workspace/` solo ignora rutas que no existen dentro de `workspace/`) |

El `.gitignore` de §19.6 no tiene ningún patrón que alcance estos archivos, así que no hace falta
ninguna línea de negación. Ningún scaffolder genera otro `.gitignore` (no se usa scaffolder).

### Bootstrap

**Paso 0 — copiar `workspace/` a la raíz sin sobrescribir.** `blueprints/ejercicios-calculo/workspace/`
contiene, como archivos reales en su ruta del proyecto, los 20 archivos de §19: `CLAUDE.md`,
`AGENTS.md`, `.claude/settings.json`, `.claude/skills/agregar-ejercicio/SKILL.md`,
`.claude/rules/contenido.md`, `.claude/rules/interfaz.md`, `.claude/rules/pruebas.md`, `package.json`,
`.npmrc`, `.nvmrc`, `.gitignore`, `.gitattributes`, `.prettierrc`, `.prettierignore`,
`astro.config.mjs`, `tsconfig.json`, `src/lib/rehype-solucion.mjs`, `tests/ayudantes.mjs`,
`tests/fixtures/ejercicio-invalido.md` y `public/favicon.svg`. El bucle de abajo copia cada uno **solo
si no existe todavía en la raíz**: una segunda corrida no revierte `package.json` (ni `package-lock.json`,
que no está en `workspace/`) ni ningún archivo que un paso haya editado. No usa `cp -n` (en BSD/macOS
sale con 1 cuando omite un archivo): la guarda es `[ -e ] ||`, que sale con 0 en el camino que protege.
Son 20 archivos; los que nunca se sobrescriben una vez creados son todos ellos.

**Desde la raíz del proyecto en Git Bash:**

```bash
# el orden importa: copiar workspace/ (trae .gitignore, .gitattributes, .prettierignore, .npmrc)
#   → comprobar que están → repo git → identidad git → npm install → primer commit
find blueprints/ejercicios-calculo/workspace -type f | while IFS= read -r origen; do destino="${origen#blueprints/ejercicios-calculo/workspace/}"; [ -e "$destino" ] || { mkdir -p "$(dirname "$destino")" && cp "$origen" "$destino"; }; done
                                                   # no destructivo: copia solo lo que falta; sale 0 también si todo ya existe
ls CLAUDE.md AGENTS.md .claude/settings.json .claude/skills/agregar-ejercicio/SKILL.md .claude/rules/contenido.md .claude/rules/interfaz.md .claude/rules/pruebas.md package.json .npmrc .nvmrc .gitignore .gitattributes .prettierrc .prettierignore astro.config.mjs tsconfig.json src/lib/rehype-solucion.mjs tests/ayudantes.mjs tests/fixtures/ejercicio-invalido.md public/favicon.svg >/dev/null
                                                   # expect: exit 0 — los 20 archivos existen en la raíz (ls sale ≠0 si falta alguno)
node --version                                     # expect: v24.x — .npmrc tiene engine-strict, npm install fallará con otra línea
git rev-parse --git-dir >/dev/null 2>&1 || git init -b main
                                                   # idempotente: no hace nada si el repo ya existe; sale 0 en ambos casos
git config user.name >/dev/null 2>&1 || git config user.name "Docente Ejercicios de Calculo"
git config user.email >/dev/null 2>&1 || git config user.email "docente@ejercicios-calculo.invalid"
                                                   # solo si no hay identidad global; la identidad real del docente tiene prioridad
npm install                                        # crea package-lock.json la primera vez; en una segunda corrida no cambia nada y sale 0
git rev-parse --verify HEAD >/dev/null 2>&1 || { git add -A && git commit -m "chore: bootstrap"; }
                                                   # primer commit solo si aún no hay ninguno; .gitignore ya existe, así que
                                                   # node_modules/ nunca entra al historial. Segunda corrida: HEAD existe → no hace nada, sale 0
```

No hay servicios locales, migraciones ni seeds. Ningún comando es interactivo. El bloque completo es
seguro de ejecutar dos veces: cada guarda (`||`) sale 0 en el camino que protege, en GNU y en Git Bash
para Windows (no se usa `cp -n`).

---

## 11. Dependencias

Única sección de la prosa con números de versión. Todas las filas vienen del informe de
`stack-researcher` de esta sesión, verificado el **2026-10-24**. Todas las instala `npm install` del
Bootstrap de §10 leyendo el `package.json` emitido en §19.6 (o `npm ci` en CI, desde el lockfile).

### Runtime

| Paquete | Versión | Fuente | Verificado | Instalado por | Propósito |
|---|---|---|---|---|---|
| `astro` | `^7.4.2` | https://registry.npmjs.org/-/package/astro/dist-tags | 2026-10-24 | §10 Bootstrap — `npm install` (package.json §19.6) | Framework y generador estático; `engines.node >=22.23.4`. Compilador Rust más estricto con etiquetas sin cerrar y anidamiento inválido; `src/fetch.ts` es un nombre reservado (no crearlo) |
| `@astrojs/markdown-remark` | `^7.3.4` | https://registry.npmjs.org/-/package/@astrojs/markdown-remark/dist-tags | 2026-10-24 | §10 Bootstrap — `npm install` | Provee `unified()`; peer obligatorio de `astro@7.4.2` (`^7.3.0`). Sin él, Astro 7 usa Sätteri y los plugins remark/rehype no corren (https://docs.astro.build/en/guides/upgrade-to/v7/) |
| `remark-math` | `^6.0.0` | https://registry.npmjs.org/-/package/remark-math/dist-tags | 2026-10-24 | §10 Bootstrap — `npm install` | Reconoce `$…$` y `$$…$$` en Markdown |
| `rehype-katex` | `^7.0.1` | https://registry.npmjs.org/-/package/rehype-katex/dist-tags | 2026-10-24 | §10 Bootstrap — `npm install` | Renderiza las fórmulas a HTML + MathML en build; depende de `katex ^0.16.0` |
| `katex` | `^0.16.47` | https://registry.npmjs.org/-/package/katex/dist-tags | 2026-10-24 | §10 Bootstrap — `npm install` | Se importa directamente `katex/dist/katex.min.css` en `Base.astro`. Fijado en la línea 0.16 (no 0.19) para que exista una sola copia compatible con `rehype-katex` |
| `@astrojs/sitemap` | `^3.7.4` | https://registry.npmjs.org/-/package/@astrojs/sitemap/dist-tags — rango de peer con `astro@7` no declarado en el informe; `npm install` con este `package.json` terminó sin ERESOLVE en la prueba real de esta máquina (2026-10-24) | 2026-10-24 | §10 Bootstrap — `npm install` | Genera `sitemap-index.xml` y `sitemap-0.xml`. Si en el futuro `npm install` muestra un conflicto de peer, se aplica el respaldo de §20.2 (endpoints propios); nunca `--force` |

### Desarrollo

| Paquete | Versión | Fuente | Verificado | Instalado por | Propósito |
|---|---|---|---|---|---|
| `@astrojs/check` | `0.9.12` (exacta) | https://registry.npmjs.org/-/package/@astrojs/check/dist-tags | 2026-10-24 | §10 Bootstrap — `npm install` | `astro check` dentro de `npm run build`; peer `typescript` `^5.0.0 \|\| ^6.0.0` |
| `typescript` | `^6.0.3` | https://registry.npmjs.org/-/package/typescript/dist-tags | 2026-10-24 | §10 Bootstrap — `npm install` | Tipos estrictos. **No** 7.x: `@astrojs/check` no lo acepta |
| `pagefind` | `^1.5.2` | https://registry.npmjs.org/-/package/pagefind/dist-tags | 2026-10-24 | §10 Bootstrap — `npm install` | Índice de búsqueda estático; se ejecuta como `pagefind --site dist` tras `astro build` |
| `@pagefind/windows-x64` | la que resuelva `pagefind` | transitiva (dependencia opcional de `pagefind`) | 2026-10-24 | §10 Bootstrap — `npm install` (transitiva) | Binario de Pagefind para Windows; no se declara en `package.json`. En CI (Linux) npm instala el binario linux equivalente |
| `prettier` | `^3.9.10` | https://registry.npmjs.org/-/package/prettier/dist-tags | 2026-10-24 | §10 Bootstrap — `npm install` | Formato y `format:check` |
| `prettier-plugin-astro` | `^1.1.2` | https://registry.npmjs.org/-/package/prettier-plugin-astro/dist-tags | 2026-10-24 | §10 Bootstrap — `npm install` | Formateo de archivos `.astro` |

### Runtimes y acciones (no son paquetes npm)

| Elemento | Versión | Fuente | Verificado | Instalado por | Propósito |
|---|---|---|---|---|---|
| Node.js | línea `24` (última 24.x: v24.22.1) | https://nodejs.org/dist/index.json | 2026-10-24 | Prerrequisito §10 (lo instala el docente); en CI `actions/setup-node` con `.nvmrc` | Runtime; type stripping nativo para las pruebas |
| `actions/checkout` | `v7` | https://api.github.com/repos/actions/checkout/releases/latest | 2026-10-24 | `.github/workflows/deploy.yml` (paso 16) | Clona el repo en CI |
| `actions/setup-node` | `v7` | https://api.github.com/repos/actions/setup-node/releases/latest | 2026-10-24 | `.github/workflows/deploy.yml` (paso 16) | Node desde `.nvmrc` + caché npm |
| `actions/configure-pages` | `v6` | https://api.github.com/repos/actions/configure-pages/releases/latest | 2026-10-24 | `.github/workflows/deploy.yml` (paso 16) | Prepara Pages |
| `actions/upload-pages-artifact` | `v5` | https://api.github.com/repos/actions/upload-pages-artifact/releases/latest | 2026-10-24 | `.github/workflows/deploy.yml` (paso 16) | Sube `dist` |
| `actions/deploy-pages` | `v5` | https://api.github.com/repos/actions/deploy-pages/releases/latest | 2026-10-24 | `.github/workflows/deploy.yml` (paso 16) | Publica en Pages |

`zod` llega transitivamente con `astro` y se importa solo como `astro/zod`; no se declara.

### Deliberadamente no usados

| Rechazado | En su lugar | Por qué |
|---|---|---|
| `typescript@7` | `typescript@^6.0.3` | `@astrojs/check` solo acepta 5.x/6.x |
| `katex@0.19` | `katex@^0.16.47` | Dos copias de KaTeX y CSS desalineado con el que usa `rehype-katex` |
| `@biomejs/biome` | Prettier + `prettier-plugin-astro` | Formateo parcial de `.astro`; una herramienta basta |
| `vitest`, `@playwright/test` | `node:test` | Cero dependencias extra; las propiedades se ven en el HTML |
| `tailwindcss` | CSS con custom properties | Cinco plantillas no justifican un framework de utilidades |
| `mathjax` | KaTeX en build | Más pesado y renderiza en el cliente |
| `@astrojs/react` / `vue` / `svelte` | `<script>` vanilla | La única interacción es ocultar/mostrar elementos |
| `pnpm` | `npm` | pnpm no está instalado en la máquina del docente |
| Cualquier SDK de LLM | Ejercicios escritos por el docente | Costo cero y exactitud matemática |

---

## 12. Estrategia de despliegue

### Hosting

GitHub Pages, sitio de proyecto, repositorio **público** (gratis). Build en GitHub Actions
(`ubuntu-latest`), comando `npm run build` (= `astro check && astro build && pagefind --site dist`),
directorio publicado `dist`, Node desde `.nvmrc`. URL final:
`https://<usuario>.github.io/ejercicios-calculo/` (el nombre del repo debe ser `ejercicios-calculo`
para que coincida con la base de la prueba del paso 16; si el docente elige otro nombre, el workflow
usa ese nombre automáticamente porque `BASE_PATH` sale de `github.event.repository.name`).

### Entornos

| Entorno | Rama | URL | Base de datos | Modo de terceros |
|---|---|---|---|---|
| Local | — | http://localhost:4321/ (`npm run dev` o `npm run preview`) | NOT APPLICABLE | NOT APPLICABLE |
| Preview | NOT APPLICABLE — GitHub Pages no ofrece despliegues por PR; el docente previsualiza con `npm run build && npm run preview` | — | — | — |
| Producción | `main` | `https://<usuario>.github.io/ejercicios-calculo/` | NOT APPLICABLE | NOT APPLICABLE |

### CI/CD

Workflow `.github/workflows/deploy.yml` (paso 16), en cada push a `main` y manual
(`workflow_dispatch`): `npm ci` → `npm run format:check` → `npm run build` → `npm test` →
`configure-pages` → `upload-pages-artifact` (`dist`) → job `deploy` con `deploy-pages`. Es la misma
puerta de §20.1 (con la base de GitHub Pages).

### Publicación y rollback

Publicar = `git push` a `main`; tarda lo que el workflow (≈ 2–4 min). Un despliegue malo se revierte
con `git revert <commit>` + `git push` (otro workflow, ≈ 2–4 min), o re-ejecutando en la pestaña
*Actions* el workflow de un commit anterior. Si el build o las pruebas fallan, el job `deploy` no
corre y el sitio en vivo queda intacto. No hay migraciones.

### Dominio, DNS, TLS

Sin dominio propio (No-Objetivo). GitHub provee `*.github.io` con HTTPS automático; activar
*Enforce HTTPS* en *Settings → Pages* si no viene marcado. No hay registros DNS que crear.

---

## 13. Estrategia de pruebas

Las pruebas existen para que los «Done when» de §9 sean verificables. Todas corren con
`npm test` (= `node --test "tests/**/*.test.mjs"`), son archivos `.mjs` y comparten `tests/ayudantes.mjs`.

| Capa | Framework | Qué cubre | Dónde | Corre |
|---|---|---|---|---|
| Unitaria | `node:test` + `node:assert/strict` | `unirRuta`, `elegirAleatorios`/`otroConjunto`, esquema zod, plugin `rehype-solucion` | `tests/estructura`, `aleatorio`, `esquema`, `rehype-solucion` `.test.mjs` | Cada paso y cada push |
| Integración (HTML construido) | `node:test` sobre `dist/` | Rutas generadas, KaTeX, `<details>`, metadatos, sitemap, robots, Pagefind, base de rutas, enlaces internos, a11y básica | `tests/ejercicio`, `inicio`, `tema`, `busqueda`, `seo`, `smoke`, `accesibilidad` `.test.mjs` | Cada paso (tras `npm run build`) y cada push |
| Contenido | `node:test` sobre `src/content/` | Los 30 archivos, frontmatter válido, estructura Enunciado/Solución/Respuesta | `tests/contenido.test.mjs` | Cada paso desde el 12 |
| E2E en navegador | NOT APPLICABLE en la puerta automática | Clic en «Dame otros», búsqueda real | Lista manual de §20.1 | Antes del lanzamiento |

### Flujos críticos (E2E manual, §20.1)

1. Portada → tarjeta «Límites» → se ven entre 5 y 10 ejercicios → «Ver solución» abre el paso a paso → «Dame otros ejercicios» cambia la selección.
2. Portada → buscador → escribir «cadena» → aparece «Regla de la cadena con una potencia» → el enlace abre `/ejercicios-calculo/ejercicio/derivadas/regla-de-la-cadena/`.
3. Página permanente de un ejercicio compartida por enlace → «← Volver a Derivadas» lleva al tema.

### Datos de prueba

Las pruebas leen el contenido real de `src/content/ejercicios/` (no hay base de datos ni estado
mutable). La única mutación es el Verify del paso 2, que copia `tests/fixtures/ejercicio-invalido.md`
y lo borra en la línea siguiente al build. Las pruebas no dependen del orden: cada archivo calcula sus
expectativas desde el disco y desde `temas.ts`. Ninguna capa usa servicios reales.

### Lo que deliberadamente no se prueba

- Comportamiento del navegador (JS en ejecución, WebAssembly de Pagefind): lista manual de §20.1.
- Corrección matemática de los ejercicios: la revisa el docente (§20.1); las pruebas solo comprueban estructura y que KaTeX renderiza sin errores.
- Rendimiento/Lighthouse: sitio estático sin imágenes; se revisa manualmente una vez tras el lanzamiento.

---

## 14. Seguridad y secretos

| Preocupación | Control | Implementado en |
|---|---|---|
| Almacenamiento de secretos | No hay secretos. El despliegue usa el `GITHUB_TOKEN` efímero con permisos `pages: write` e `id-token: write` | `.github/workflows/deploy.yml` (`permissions:`) |
| Rotación de secretos | NOT APPLICABLE — no hay secretos propios | — |
| Validación de entradas | El único input es el contenido del docente: esquema zod estricto en build | `src/lib/esquema.ts`, `src/content.config.ts` |
| Codificación de salida / XSS | Astro escapa toda expresión `{…}`; el Markdown lo escribe solo el docente; no hay `set:html` con datos externos | Componentes `.astro` |
| Inyección SQL | NOT APPLICABLE — no hay base de datos | — |
| AuthN / AuthZ | NOT APPLICABLE — sitio sin cuentas | — |
| CSRF | NOT APPLICABLE — no hay formularios ni estado de servidor | — |
| Rate limiting / abuso | Lo gestiona GitHub Pages (límites de su CDN) | GitHub |
| Verificación de webhooks | NOT APPLICABLE | — |
| Auditoría de dependencias | `npm audit --omit=dev` mensual por el docente; Dependabot opcional (gratis) | Manual |
| Cabeceras de seguridad | GitHub Pages no permite cabeceras propias; no se agrega CSP en `<meta>` porque Pagefind necesita WebAssembly y un script en línea de inicialización | — |
| Datos personales | No se guarda ninguno: sin cookies, sin analítica, sin formularios | — |
| Higiene de logs | Los logs de Actions no contienen secretos (no existen) | GitHub Actions |

**Reglas duras**
- Ningún secreto se versiona, se imprime en un log ni llega al cliente; este proyecto no tiene ninguno y no debe adquirir ninguno en v1.
- Los permisos del workflow se limitan a los tres de `deploy.yml`.

No maneja datos regulados (ni de salud, ni financieros, ni personales de menores): el sitio es anónimo.

---

## 15. Accesibilidad

**Meta: WCAG 2.2 nivel AA.**

### Requisitos base

| Requisito | Regla en este proyecto |
|---|---|
| HTML semántico | `header`/`main`/`footer`; un único `h1` por página (el layout no lo incluye); en tema, `h1` tema → `h2` por ejercicio; listas `ol`/`ul` reales |
| Teclado | Todo es enlace, botón o `details/summary` nativo; enlace «Saltar al contenido» a `#contenido` |
| Foco visible | `:focus-visible { outline: 3px solid var(--primary) }` — 5.02:1 sobre blanco, 7.84:1 sobre `#0f1612` |
| Contraste | Pares de §7 ≥ 4.5:1 en claro y oscuro; lo comprueba `tests/accesibilidad.test.mjs` |
| Formularios | Solo el buscador de Pagefind UI, que trae su propio `label`/`aria` |
| Imágenes | No hay imágenes de contenido; si se agregan, `alt` obligatorio (lo comprueba la prueba) |
| Movimiento | Sin animaciones; transiciones anuladas con `prefers-reduced-motion: reduce` |
| Zoom / reflow | Mobile-first a 360 px; fórmulas anchas con `overflow-x: auto` dentro de `.katex-display`, nunca la página |
| Regiones vivas | `#estado-seleccion` con `aria-live="polite"` anuncia «Mostrando N de M ejercicios.» |
| Matemáticas | KaTeX emite MathML junto al HTML visual, legible por lectores de pantalla |

### Agregados de WCAG 2.2

| SC | Requisito |
|---|---|
| 2.4.11 Foco no oculto | Sin cabeceras fijas ni banners: nada tapa el foco |
| 2.5.7 Movimientos de arrastre | No hay arrastre |
| 2.5.8 Tamaño del objetivo | Botón y `summary` con `min-height: 44px`; tarjetas de tema completas como enlace |
| 3.3.7 Entrada redundante | No hay flujos de varios pasos |
| 3.3.8 Autenticación accesible | No hay autenticación |

### Verificación

```bash
npm run build && npm test     # expect: exit 0 — tests/accesibilidad.test.mjs: lang, un h1, viewport,
                              #         enlace de salto, alt, botones con texto, summary, contraste ≥ 4.5
```

Las comprobaciones automáticas captan una parte de los problemas reales. Antes del lanzamiento (§20.1):
recorrido solo con teclado del flujo 1 de §13, una pasada con lector de pantalla (NVDA en Windows) por
una página de tema con una solución abierta, y una pasada a 200 % de zoom a 360 px de ancho.

---

## 16. Observabilidad y costo

### Instrumentación

| Señal | Herramienta | Qué captura | Quién la mira |
|---|---|---|---|
| Errores | NOT APPLICABLE — no hay runtime de servidor; los errores de contenido fallan el build | — | — |
| Logs | Logs de GitHub Actions | Salida de build, pruebas y despliegue de cada push | Docente, cuando un workflow sale en rojo (GitHub le envía un correo) |
| Métricas | NOT APPLICABLE — sin analítica en v1 (decisión §20.3 #6) | — | — |
| Disponibilidad | NOT APPLICABLE — la provee GitHub Pages; sin monitor externo en v1 | — | — |

### Las métricas que importan

NOT APPLICABLE en v1: no hay instrumentación de uso por la restricción de costo cero y para evitar un
banner de cookies. La única señal operativa es el estado del workflow (verde/rojo).

### Health check

NOT APPLICABLE — sitio estático; la comprobación equivalente es manual: abrir la URL de producción
tras cada despliegue (§20.1).

### Modelo de costos

| Servicio | Capa gratuita | Costo a escala v1 (cientos–miles de estudiantes) | Costo a 10× | Umbral a vigilar |
|---|---|---|---|---|
| GitHub Pages | Repos públicos: sitio ≤ 1 GB, ancho de banda blando ~100 GB/mes, ~10 builds/hora | S/ 0 | S/ 0 (un sitio de KB por página queda muy por debajo de 100 GB) | ~100 GB/mes de tráfico: GitHub podría pedir mudarse; salida: Cloudflare Pages (también gratis) |
| GitHub Actions | Minutos ilimitados para repositorios públicos | S/ 0 | S/ 0 | Que el repo pase a privado: entonces cuenta contra 2 000 min/mes gratis |
| Pagefind, KaTeX, Astro | Software libre que corre en build | S/ 0 | S/ 0 | — |

**Costo mensual estimado al lanzamiento: S/ 0.00.** No hay partida mayor. El único riesgo de costo
es volver privado el repositorio; mantenerlo público es la palanca.

---

## 17. Enrutamiento de modelos

NOT APPLICABLE — this project does not call an LLM at runtime.

---

## 18. Skills para usar durante la construcción

Ninguna es obligatoria: si una no está disponible, el constructor sigue la guía de este blueprint,
anota la ausencia en una línea y continúa. Sin barra = se activa sola; escribirla con barra no hace nada.

| Skill | Pasos de §9 | Por qué | Instalación |
|---|---|---|---|
| `ui-ux-pro-max` | 1, 3, 4 | Revisar jerarquía visual y espaciado con la paleta ya fijada en §7 (no cambiar los hex) | `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill` y luego `/plugin install ui-ux-pro-max@ui-ux-pro-max-skill` |
| `frontend-design` | 1, 4, 5 | Plantillas `.astro` limpias y distintivas | `/plugin marketplace add anthropics/skills` y luego `/plugin install example-skills@anthropic-agent-skills` |
| `/claude-seo-ai:audit` | Tras el paso 14 y tras publicar | Auditoría SEO y de visibilidad en motores de respuesta | `/plugin marketplace add Hainrixz/claude-seo-ai`, `/plugin install claude-seo-ai@claude-seo-ai`, `/reload-plugins` |
| `/humanizalo` | 4, 14, 16 (textos de interfaz, descripciones y README) | Redacción natural en español; **no** se usa sobre las soluciones matemáticas. El registro lo marca como desactualizado (último push 2026-03-22): si falla, omitir | `git clone https://github.com/Hainrixz/humanizalo.git ~/.claude/skills/humanizalo` |

---

## 19. Espacio de trabajo del agente

**Modo bundle:** cada archivo de abajo existe además como archivo real en
`blueprints/ejercicios-calculo/workspace/<ruta>`, con contenido idéntico byte a byte al bloque (cada
bloque va precedido por una línea `Archivo: \`<ruta>\``). El paso 0 del Bootstrap de §10 copia
`workspace/` a la raíz sin sobrescribir nada. No existe — ni debe crearse — `.claude/commands/`: el
constructor es autónomo y no teclea comandos de barra; los flujos repetibles van en `.claude/skills/`.

**Las copias dentro de `blueprints/` no las ve ninguna herramienta del proyecto:** Prettier ignora
`blueprints/` (`.prettierignore`), `astro check`/`tsc` lo excluye (`tsconfig.json`), Astro solo lee
`src/` y `public/`, `node --test` solo expande `tests/**/*.test.mjs` desde la raíz, Pagefind solo lee
`dist/`, npm solo lee el `package.json` y el `.npmrc` de la raíz (no hay `workspaces`), y git aplica el
`.gitignore` anidado solo a rutas dentro de `workspace/`, donde no hay nada que ignorar.

**Estilo:** todo lo que Prettier revisa (JSON, `.mjs`, YAML, `.astro`, `.ts`, `.css`) está escrito con
el estilo por defecto de Prettier 3 — 2 espacios, comillas dobles, punto y coma, comas finales,
ancho 80, LF —, que es la configuración que deja en disco el `.prettierrc` de §19.6 (no fija ninguna
opción de estilo salvo `endOfLine`). Los `.md` y `.claude/` están excluidos en `.prettierignore`. Como
red de seguridad, el paso 1 ejecuta `npm run format` antes de su primer `format:check`.

### 19.1 `CLAUDE.md`

Archivo: `CLAUDE.md`

````markdown
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
````

### 19.2 `AGENTS.md`

Archivo: `AGENTS.md`

```markdown
# Ejercicios Resueltos de Cálculo — instrucciones para agentes

Sitio estático y gratuito (Astro 7 + KaTeX + Pagefind en GitHub Pages) con ejercicios de Cálculo resueltos paso a paso; el contenido son archivos Markdown en `src/content/ejercicios/<tema>/`.

## Comandos

| Tarea | Comando |
|---|---|
| Instalar | `npm install` (CI: `npm ci`) |
| Desarrollo | `npm run dev` — http://localhost:4321 |
| Build completo | `npm run build` |
| Pruebas (tras el build) | `npm test` · un archivo: `node --test tests/aleatorio.test.mjs` |
| Formato | `npm run format` · `npm run format:check` |
| Como en GitHub Pages | `SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm run build` |

Puerta: `npm run format:check && npm run build && npm test` debe salir con 0.

## No negociable

1. Nunca publiques una respuesta matemática sin procedimiento paso a paso y línea final `**Respuesta:**`.
2. Nunca agregues un servicio, API, analítica o dependencia que cueste dinero.
3. Todo enlace interno pasa por `url()` de `src/lib/url.ts`.
4. TypeScript se queda en 6.x, KaTeX en 0.16.x y `processor: unified()` no se quita.
5. Nunca versiones `dist/`, `.astro/` ni `node_modules/`.
6. Nunca des por terminada una tarea con la puerta en rojo.

La arquitectura completa, las fronteras y los tokens de diseño están en `CLAUDE.md` de este directorio.
```

### 19.3 `.claude/settings.json`

Cada comando de los bloques Verify, Checkpoint, Bootstrap y §20.1 (salvo los de publicación que ejecuta el docente: `git remote`, `git push`, `curl` a la URL en vivo), separado en subcomandos, tiene su
entrada exacta; `git reset --hard step-…` cubre el rollback de §9 regla 7. Sin intérpretes desnudos, sin `npx:*`, sin `curl`. `node --test:*` solo ejecuta
archivos de prueba. Las entradas `SITE_URL=…` son las líneas exactas del paso 16 y de §20.1.

Archivo: `.claude/settings.json`

```json
{
  "permissions": {
    "allow": [
      "Bash(npm install)",
      "Bash(npm ci)",
      "Bash(npm run build)",
      "Bash(npm run check)",
      "Bash(npm run dev)",
      "Bash(npm run preview)",
      "Bash(npm run format)",
      "Bash(npm run format:check)",
      "Bash(npm test)",
      "Bash(npm --version)",
      "Bash(node --version)",
      "Bash(node --test:*)",
      "Bash(npx astro build)",
      "Bash(SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm run build)",
      "Bash(SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm test)",
      "Bash(cp tests/fixtures/ejercicio-invalido.md src/content/ejercicios/limites/zz-invalido.md)",
      "Bash(rm -f src/content/ejercicios/limites/zz-invalido.md)",
      "Bash(mktemp)",
      "Bash(test:*)",
      "Bash(ls:*)",
      "Bash(cat:*)",
      "Bash(grep:*)",
      "Bash(wc:*)",
      "Bash(tail:*)",
      "Bash(head:*)",
      "Bash(git --version)",
      "Bash(git rev-parse:*)",
      "Bash(git init -b main)",
      "Bash(git config user.name:*)",
      "Bash(git config user.email:*)",
      "Bash(git add -A)",
      "Bash(git commit -m:*)",
      "Bash(git tag:*)",
      "Bash(git status:*)",
      "Bash(git diff:*)",
      "Bash(git log:*)",
      "Bash(git ls-files:*)",
      "Bash(git check-ignore:*)",
      "Bash(git rev-list:*)",
      "Bash(git reset --hard step-:*)",
      "Bash(find blueprints/ejercicios-calculo/workspace -type f)",
      "Bash(dirname:*)",
      "Bash(mkdir -p:*)",
      "Bash(cp blueprints/ejercicios-calculo/workspace/:*)",
      "Bash([ -e:*)",
      "Bash(awk '/run: npm ci/{a=NR} /run: npm run format:check/{b=NR} /run: npm run build/{c=NR} /run: npm test/{d=NR} /actions\\/upload-pages-artifact/{e=NR} END{exit !(a && a<b && b<c && c<d && d<e)}' .github/workflows/deploy.yml)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Bash(git push:*)",
      "Bash(git push --force:*)",
      "Bash(npm publish:*)",
      "Bash(rm -rf:*)"
    ]
  }
}
```

`git push` está denegado a propósito: publicar es una acción del docente (§20.1).

### 19.4 Skills del proyecto — `.claude/skills/<nombre>/SKILL.md`

| Skill | Se activa con | Qué automatiza |
|---|---|---|
| `agregar-ejercicio` | «agrega un ejercicio», «nuevo ejercicio de derivadas», «sube este problema resuelto» | Crear el `.md` con el formato exacto, validar y comprobar que aparece en el sitio |

Archivo: `.claude/skills/agregar-ejercicio/SKILL.md`

````markdown
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
````

### 19.5 `.claude/rules/*.md`

| Archivo | Globs `paths` | Cubre |
|---|---|---|
| `.claude/rules/contenido.md` | `src/content/**`, `tests/fixtures/**` | Formato de ejercicios y LaTeX |
| `.claude/rules/interfaz.md` | `src/**/*.astro`, `src/styles/**` | Tokens, enlaces con base, accesibilidad, marcado válido para Astro 7 |
| `.claude/rules/pruebas.md` | `tests/**` | Convenciones de `node:test` y de `tests/ayudantes.mjs` |

Archivo: `.claude/rules/contenido.md`

```markdown
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
```

Archivo: `.claude/rules/interfaz.md`

```markdown
---
description: Convenciones de plantillas Astro y estilos
paths:
  - "src/**/*.astro"
  - "src/styles/**"
---

# Interfaz

- Todo enlace o recurso interno usa `url()` de `src/lib/url.ts`; nunca `href="/..."`.
- Colores, espacios, radios y sombras solo como `var(--token)` de `src/styles/global.css`. `--accent` nunca es color de texto ni de foco.
- Una sola `<h1>` por página; `Base.astro` no la incluye. En páginas de tema, cada ejercicio es `<h2>`.
- Astro 7 compila con Rust y rechaza etiquetas sin cerrar y anidamiento inválido (p. ej. `<p>` dentro de `<p>`, `<div>` dentro de `<summary>`): escribe HTML válido.
- No crees `src/fetch.ts` (nombre reservado en Astro 7).
- Interacción solo con el `<script>` de `src/pages/tema/[slug].astro`; la lógica vive en `src/lib/aleatorio.ts`.
- Objetivos táctiles (`button`, `summary`) con `min-height: 44px`; foco visible con `outline: 3px solid var(--primary)`.
- Mobile-first: el diseño base es para 360 px; los `@media (min-width: …)` agregan columnas.
```

Archivo: `.claude/rules/pruebas.md`

```markdown
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
```

### 19.6 Configuración crítica para Verify e infraestructura local

Cada archivo que un comando `Verify` necesita para ejecutarse, con contenido completo, en su ruta del
proyecto. No hay servicios locales (sin base de datos, cola ni contenedores): la subsección de
servicios no aplica.

| Archivo | Ruta en el proyecto | Qué Verify lo necesita | Resolución / entorno que lleva | Exclusión del blueprint |
|---|---|---|---|---|
| Manifiesto | `package.json` | todos (scripts `build`, `test`, `format:check`) | `"type": "module"` (los `.mjs`/`.ts` son ESM); script `test` con glob entre comillas para que lo expanda Node | n/a — npm no recorre el árbol buscando workspaces (no hay `workspaces`) |
| Config npm | `.npmrc` | Bootstrap | `engine-strict=true` | n/a |
| Versión de Node | `.nvmrc` | Bootstrap, CI | `24` | n/a |
| Ignore de git | `.gitignore` | Checkpoints, §20.1 | — | n/a — el blueprint **sí** se versiona |
| Fin de línea | `.gitattributes` | `format:check` (todos) | `* text=auto eol=lf` evita CRLF en Windows | n/a |
| Config Prettier | `.prettierrc` | `format:check` (todos) | carga `prettier-plugin-astro` | ver `.prettierignore` |
| Ignore de Prettier | `.prettierignore` | `format:check` (todos) | — | `blueprints/` (línea literal) |
| Config Astro | `astro.config.mjs` | `npm run build`, `npx astro build` (todos) | `processor: unified()`; `remarkMath`; `rehypeKatex`, `rehypeSolucion`; `site`/`base` desde `process.env` con valores por defecto (no lee `.env`) | n/a — Astro solo lee `src/` y `public/` |
| Config TypeScript | `tsconfig.json` | `npm run build` (`astro check`) | `allowImportingTsExtensions`, `noEmit`, `erasableSyntaxOnly` | `"exclude": [..., "blueprints"]` |
| Plugin rehype | `src/lib/rehype-solucion.mjs` | todos los builds (lo importa `astro.config.mjs`); paso 3 | JS plano, sin dependencias | n/a |
| Ayudantes de pruebas | `tests/ayudantes.mjs` | `npm test` desde el paso 1 | lee `process.env.SITE_URL` / `BASE_PATH` con los mismos valores por defecto que `astro.config.mjs`; `SITIO` es `new URL(SITE_URL).origin` | n/a — no recorre `blueprints/` (solo `dist/` y `src/content/ejercicios/`) |
| Fixture inválido | `tests/fixtures/ejercicio-invalido.md` | paso 2 (argumento de `cp`) | — | n/a |
| Favicon | `public/favicon.svg` | paso 1 (`tests/estructura.test.mjs` exige que todo asset local exista) | — | n/a |

Archivo: `package.json`

```json
{
  "name": "ejercicios-calculo",
  "version": "1.0.0",
  "private": true,
  "description": "Ejercicios resueltos de Cálculo paso a paso para estudiantes de los primeros ciclos.",
  "type": "module",
  "engines": {
    "node": ">=24"
  },
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build && pagefind --site dist",
    "preview": "astro preview",
    "check": "astro check",
    "test": "node --test \"tests/**/*.test.mjs\"",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  },
  "dependencies": {
    "@astrojs/markdown-remark": "^7.3.4",
    "@astrojs/sitemap": "^3.7.4",
    "astro": "^7.4.2",
    "katex": "^0.16.47",
    "rehype-katex": "^7.0.1",
    "remark-math": "^6.0.0"
  },
  "devDependencies": {
    "@astrojs/check": "0.9.12",
    "pagefind": "^1.5.2",
    "prettier": "^3.9.10",
    "prettier-plugin-astro": "^1.1.2",
    "typescript": "^6.0.3"
  }
}
```

Archivo: `.npmrc`

```ini
engine-strict=true
```

Archivo: `.nvmrc`

```text
24
```

Archivo: `.gitignore`

```gitignore
# dependencias y salidas generadas
node_modules/
dist/
.astro/

# entorno local (este proyecto no usa archivos .env)
.env
.env.*

# registros
npm-debug.log*

# sistema operativo
.DS_Store
Thumbs.db
```

Archivo: `.gitattributes`

```gitattributes
* text=auto eol=lf
```

Archivo: `.prettierrc`

```json
{
  "plugins": ["prettier-plugin-astro"],
  "endOfLine": "lf"
}
```

Archivo: `.prettierignore`

```gitignore
dist/
.astro/
node_modules/
package-lock.json
blueprints/
.claude/
*.md
```

Los `.md` se excluyen porque Prettier reescribiría el Markdown del docente (listas, énfasis, líneas
largas con LaTeX); su calidad la vigilan `tests/contenido.test.mjs` y el build.

Archivo: `astro.config.mjs`

```js
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSolucion from "./src/lib/rehype-solucion.mjs";

// SITE_URL y BASE_PATH los define el workflow de GitHub Pages.
// En local valen los mismos valores por defecto que tests/ayudantes.mjs.
const site = process.env.SITE_URL ?? "http://localhost:4321";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (pagina) => !pagina.includes("/404"),
    }),
  ],
  markdown: {
    // Astro 7 usa Sätteri por defecto; unified() restaura remark/rehype para KaTeX.
    processor: unified(),
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeSolucion],
  },
});
```

Archivo: `tsconfig.json`

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist", "node_modules", "blueprints"],
  "compilerOptions": {
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "erasableSyntaxOnly": true
  }
}
```

Archivo: `src/lib/rehype-solucion.mjs`

```js
// Plugin rehype del proyecto. Sobre el árbol HTML de cada ejercicio:
// 1. quita el encabezado "## Enunciado" (el título del ejercicio ya lo encabeza);
// 2. envuelve "## Solución" y todo lo que le sigue en <details class="solucion">
//    con <summary>Ver solución</summary>.
// Si falta cualquiera de los dos encabezados, lanza un error y el build falla.

const ENUNCIADO = "Enunciado".normalize("NFC");
const SOLUCION = "Solución".normalize("NFC");

function textoDe(nodo) {
  if (nodo.type === "text") return nodo.value;
  if (Array.isArray(nodo.children)) return nodo.children.map(textoDe).join("");
  return "";
}

function esEncabezado(nodo, texto) {
  return (
    nodo.type === "element" &&
    nodo.tagName === "h2" &&
    textoDe(nodo).normalize("NFC").trim() === texto
  );
}

export default function rehypeSolucion() {
  return (arbol, archivo) => {
    const hijos = arbol.children;
    const iEnunciado = hijos.findIndex((nodo) => esEncabezado(nodo, ENUNCIADO));
    const iSolucion = hijos.findIndex((nodo) => esEncabezado(nodo, SOLUCION));
    if (iEnunciado === -1 || iSolucion === -1 || iSolucion < iEnunciado) {
      const origen = archivo?.path ?? "un ejercicio";
      throw new Error(
        `${origen} debe tener "## Enunciado" seguido de "## Solución".`,
      );
    }
    const detalles = {
      type: "element",
      tagName: "details",
      properties: { className: ["solucion"] },
      children: [
        {
          type: "element",
          tagName: "summary",
          properties: {},
          children: [{ type: "text", value: "Ver solución" }],
        },
        ...hijos.slice(iSolucion + 1),
      ],
    };
    arbol.children = [
      ...hijos.slice(0, iEnunciado),
      ...hijos.slice(iEnunciado + 1, iSolucion),
      detalles,
    ];
  };
}
```

Archivo: `tests/ayudantes.mjs`

```js
// Utilidades compartidas por tests/*.test.mjs. No termina en .test.mjs,
// así que `npm test` no lo ejecuta como prueba.
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";

export const RAIZ = process.cwd();
export const DIST = join(RAIZ, "dist");
export const CONTENIDO = join(RAIZ, "src", "content", "ejercicios");

// Mismos valores por defecto que astro.config.mjs.
const basePath = (process.env.BASE_PATH ?? "/").replace(/\/+$/, "");
export const PREFIJO = `${basePath}/`;
// Origen normalizado (esquema + host + puerto, sin barra final). Las pruebas
// SEO comparan canonical, sitemap y robots contra este valor.
export const SITIO = new URL(process.env.SITE_URL ?? "http://localhost:4321")
  .origin;

export function exigirDist() {
  if (!existsSync(join(DIST, "index.html"))) {
    throw new Error(
      "No existe dist/index.html: ejecuta `npm run build` antes de `npm test`.",
    );
  }
}

export function leer(ruta) {
  return readFileSync(ruta, "utf8");
}

export function listarArchivos(directorio, extension) {
  if (!existsSync(directorio)) return [];
  return readdirSync(directorio, { recursive: true })
    .map((relativa) => String(relativa))
    .filter((relativa) => relativa.endsWith(extension))
    .map((relativa) => join(directorio, relativa))
    .sort();
}

export function listarHtml() {
  exigirDist();
  return listarArchivos(DIST, ".html").filter(
    (ruta) => !ruta.includes(`${sep}pagefind${sep}`),
  );
}

export function ejerciciosEnDisco() {
  if (!existsSync(CONTENIDO)) return [];
  const resultado = [];
  const temas = readdirSync(CONTENIDO, { withFileTypes: true })
    .filter((entrada) => entrada.isDirectory())
    .map((entrada) => entrada.name)
    .sort();
  for (const tema of temas) {
    const carpeta = join(CONTENIDO, tema);
    for (const archivo of readdirSync(carpeta).sort()) {
      if (archivo.endsWith(".md")) {
        resultado.push({
          tema,
          slug: archivo.slice(0, -".md".length),
          ruta: join(carpeta, archivo),
        });
      }
    }
  }
  return resultado;
}

export function urlsLocales(html) {
  return [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)]
    .map((coincidencia) => coincidencia[1])
    .filter((valor) => valor.startsWith("/") && !valor.startsWith("//"));
}

export function archivoDeUrl(url) {
  if (!url.startsWith(PREFIJO)) return null;
  const ruta = decodeURIComponent(url.slice(PREFIJO.length).split(/[?#]/)[0]);
  if (ruta === "" || ruta.endsWith("/")) return join(DIST, ruta, "index.html");
  return join(DIST, ruta);
}

export function urlDeArchivo(archivoHtml) {
  const relativa = relative(DIST, archivoHtml).split(sep).join("/");
  if (relativa === "index.html") return PREFIJO;
  if (relativa.endsWith("/index.html")) {
    return `${PREFIJO}${relativa.slice(0, -"index.html".length)}`;
  }
  return `${PREFIJO}${relativa}`;
}

export function canonicalEsperado(archivoHtml) {
  return `${SITIO}${urlDeArchivo(archivoHtml)}`;
}

export function leerFrontmatter(texto) {
  const bloque = texto.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!bloque) throw new Error("Falta el bloque de frontmatter --- … ---");
  const datos = {};
  for (const linea of bloque[1].split(/\r?\n/)) {
    if (linea.trim() === "") continue;
    const par = linea.match(/^([a-z]+):\s*(.+)$/);
    if (!par) throw new Error(`Línea de frontmatter no válida: ${linea}`);
    const valor = par[2].trim();
    datos[par[1]] = /^-?\d+$/.test(valor)
      ? Number(valor)
      : valor.replace(/^"(.*)"$/, "$1");
  }
  return { datos, cuerpo: texto.slice(bloque[0].length) };
}
```

Archivo: `tests/fixtures/ejercicio-invalido.md`

```markdown
---
titulo: "Ejercicio con frontmatter inválido"
tema: "limites"
dificultad: "facil"
orden: 99
---

## Enunciado

Calcula $\lim_{x \to 1} x$.

## Solución

1. Sustitución directa: $x = 1$.

**Respuesta:** $1$
```

Archivo: `public/favicon.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#1b7f4c"/><text x="16" y="23" font-family="Georgia, serif" font-size="20" font-weight="700" text-anchor="middle" fill="#ffffff">∫</text></svg>
```

#### Matriz de convención de resolución

**La convención, declarada una vez:** imports relativos con la **extensión real explícita**
(`.ts`, `.mjs`, `.astro`), sin alias de ruta ni barrels; los paquetes se importan por nombre
(`astro/zod`, `astro:content`). Los módulos que importan las pruebas (`src/lib/url.ts`,
`src/lib/aleatorio.ts`, `src/lib/esquema.ts`, `src/data/temas.ts`, `src/lib/rehype-solucion.mjs`) no
importan `astro:*` y usan solo sintaxis TypeScript borrable.

| Contexto | Comando que lo ejercita | Forma de la convención ahí | Config + ajuste literal que la hace funcionar |
|---|---|---|---|
| Código de la app | `npm run build` (`astro build`, Vite) | `import { url } from "../lib/url.ts"` | Vite resuelve `.ts` explícito sin configuración; `tsconfig.json` — `"allowImportingTsExtensions": true` |
| Verificación de tipos | `npm run build` (`astro check`) | igual | `tsconfig.json` — `"allowImportingTsExtensions": true` (exige `"noEmit": true`, presente) y `"erasableSyntaxOnly": true` |
| Pruebas | `npm test` (`node --test "tests/**/*.test.mjs"`, Node 24) | `import { elegirAleatorios } from "../src/lib/aleatorio.ts"`; `esquema.ts` importa `"../data/temas.ts"` y `"astro/zod"` | Node 24 quita tipos de forma nativa y resuelve el especificador **literalmente**: por eso la extensión `.ts` es obligatoria; `package.json` — `"type": "module"`; `astro/zod` se resuelve por el campo `exports` de `astro` |
| Scripts independientes | `node --test tests/aleatorio.test.mjs` (único tipo de script del proyecto) | igual que pruebas | igual que pruebas; no hay otros scripts |
| Carga de la config | `npm run build` (Astro carga `astro.config.mjs`) | `import rehypeSolucion from "./src/lib/rehype-solucion.mjs"` | JS plano: ningún ajuste necesario |
| Script de cliente | `npm run build` (Vite empaqueta el `<script>` de `tema/[slug].astro`) | `import { … } from "../../lib/aleatorio.ts"` | Vite; ningún ajuste adicional |

#### Reconciliación de valores entre artefactos

| Valor compartido | Fuente única | Valor literal | Dónde más aparece | Comparado |
|---|---|---|---|---|
| Carpeta de salida | `astro.config.mjs` — `outDir` por defecto de Astro | `dist` | `package.json` `scripts.build` (`pagefind --site dist`) · `deploy.yml` `path: dist` · `tests/ayudantes.mjs` `DIST` · `.gitignore` `dist/` · `.prettierignore` `dist/` · `tsconfig.json` `exclude` · §3 · §9 pasos 1–16 | sí |
| Base por defecto | `astro.config.mjs` — `process.env.BASE_PATH ?? "/"` | `/` | `tests/ayudantes.mjs` `process.env.BASE_PATH ?? "/"` | sí |
| Base de GitHub Pages en pruebas locales | paso 16 Verify | `/ejercicios-calculo` | §19.3 allowlist · §20.1 · §19.1 comandos · `deploy.yml` la deriva de `github.event.repository.name` (repo `ejercicios-calculo`) | sí |
| Sitio por defecto | `astro.config.mjs` — `process.env.SITE_URL ?? "http://localhost:4321"` | `http://localhost:4321` | `tests/ayudantes.mjs` · §10 | sí |
| Origen del sitio en pruebas (`SITIO`) | `tests/ayudantes.mjs` — `new URL(process.env.SITE_URL ?? "http://localhost:4321").origin` | `http://localhost:4321` (local) · `https://ejemplo.github.io` (paso 16) | Astro arma canonical/`og:url` con `new URL(Astro.url.pathname, Astro.site)`, cuyo origen es el mismo · `tests/seo.test.mjs` (canonical, sitemap, robots) · `deploy.yml` `SITE_URL` sin barra final | sí |
| Sitio de prueba | paso 16 Verify | `https://ejemplo.github.io` | §19.3 allowlist · §20.1 · §19.1 | sí |
| Carpeta de contenido | `src/content.config.ts` — `base: "./src/content/ejercicios"` | `src/content/ejercicios` | `tests/ayudantes.mjs` `CONTENIDO` · paso 2 Verify (`cp`/`rm`) · §19.3 allowlist · `.claude/rules/contenido.md` | sí |
| Nombre de la colección | `src/content.config.ts` — `collections` | `ejercicios` | `getCollection("ejercicios")` en `src/lib/ejercicios.ts` y `src/pages/ejercicio/[...id].astro` · `CollectionEntry<"ejercicios">` en `Ejercicio.astro` | sí |
| Línea de Node | `.nvmrc` | `24` | `package.json` `engines.node` `>=24` · `deploy.yml` `node-version-file: .nvmrc` | sí |
| Glob de pruebas | `package.json` `scripts.test` | `tests/**/*.test.mjs` | §19.1 · §13 · `tests/ayudantes.mjs` no coincide (sufijo distinto) · invocación TAP del paso 15 / §20.1 / E2-T7 (`node --test --test-reporter=tap "tests/**/*.test.mjs"`) | sí |
| Prueba de contenido | paso 12 `files` | `tests/contenido.test.mjs` | paso 12 Verify · `.claude/skills/agregar-ejercicio/SKILL.md` · `.claude/rules/pruebas.md` · §1 | sí |
| Ayudantes de prueba | §19.6 `Archivo:` | `tests/ayudantes.mjs` | §19.1 `CLAUDE.md` · `.claude/rules/pruebas.md` · `ls` del Bootstrap · §3 | sí |
| Ruta del plugin rehype | `astro.config.mjs` import | `./src/lib/rehype-solucion.mjs` | `tests/rehype-solucion.test.mjs` importa `../src/lib/rehype-solucion.mjs` · §3 | sí |
| Ruta de la UI de Pagefind | salida de `pagefind --site dist` | `pagefind/pagefind-ui.js` (y `.css`) | `src/pages/index.astro` `url("pagefind/pagefind-ui.js")` · `tests/busqueda.test.mjs` | sí |
| Archivo del sitemap | salida de `@astrojs/sitemap` | `sitemap-index.xml` | `src/pages/robots.txt.ts` · `tests/seo.test.mjs` | sí |
| IDs del DOM de tema | `src/pages/tema/[slug].astro` | `lista-ejercicios`, `otros-ejercicios`, `estado-seleccion` | `<script>` del mismo archivo · `tests/tema.test.mjs` · paso 6 Verify | sí |
| Mínimo/máximo visibles | `src/lib/aleatorio.ts` `MINIMO`/`MAXIMO` | `5` / `10` | página de tema (`i >= 10`, `Math.min(total, 10)`) · `tests/aleatorio.test.mjs` · `tests/smoke.test.mjs` | sí |
| Slugs de temas | `src/data/temas.ts` `SLUGS_TEMAS` | `limites`, `derivadas`, `integrales` | carpetas de `src/content/ejercicios/` · `tests/contenido.test.mjs` · pasos 7–12 | sí |
| Ruta del bundle | ubicación de este bundle | `blueprints/` (bundle en `blueprints/ejercicios-calculo/`) | `.prettierignore` `blueprints/` · `tsconfig.json` `exclude` `"blueprints"` · paso 0 de §10 (`find blueprints/ejercicios-calculo/workspace`) · §19.3 allowlist | sí |
| Nombres de scripts npm | `package.json` `scripts` | `dev`, `build`, `preview`, `check`, `test`, `format`, `format:check` | §19.1 y §19.2 tablas de comandos · `deploy.yml` (`npm run format:check`, `npm run build`, `npm test`) · §19.3 allowlist (`npm run build`, `npm run check`, `npm run dev`, `npm run preview`, `npm run format`, `npm run format:check`, `npm test`) · Verify de los pasos 1–16 · §20.1 | sí |
| Build de Astro sin Pagefind | `astro` bin del paquete `astro` | `npx astro build` | Verify del paso 2 · §19.3 allowlist `Bash(npx astro build)` | sí |
| Fixture inválido y su destino | `tests/fixtures/ejercicio-invalido.md` (§19.6) | `tests/fixtures/ejercicio-invalido.md` → `src/content/ejercicios/limites/zz-invalido.md` | Verify del paso 2 (`cp` y `rm -f`) · Checkpoint del paso 2 (`git ls-files` del destino) · §19.3 allowlist (`cp …` y `rm -f …` exactos) · `.claude/rules/contenido.md` | sí |
| Prueba unitaria aleatoria | paso 6 `files` | `tests/aleatorio.test.mjs` | Verify del paso 6 (`node --test tests/aleatorio.test.mjs`) · §19.1 y §19.2 ejemplo de un archivo · §3 | sí |
| Workflow de despliegue | paso 16 `files` | `.github/workflows/deploy.yml` | Verify y Checkpoint del paso 16 · §19.3 allowlist (`awk … .github/workflows/deploy.yml`) · §12 · §3 · §10 archivos versionados · §20.1 | sí |
| Favicon | `public/favicon.svg` (§19.6) | `favicon.svg` | `src/layouts/Base.astro` `url("favicon.svg")` · `tests/estructura.test.mjs` (asset local debe existir) · paso 0 de §10 (`ls`) | sí |

Los contratos entre artefactos se ejercitan en el primer paso donde existen ambos lados: base ↔
salida y assets ↔ `dist/` en el paso 1 (`tests/estructura.test.mjs`); colección ↔ esquema ↔ carpeta en
los pasos 2–3; config ↔ plugin rehype en el paso 1 (el build importa el plugin) y en el paso 3 (su
efecto en HTML); Pagefind ↔ portada en el paso 13; sitemap ↔ robots en el paso 14; base de GitHub Pages
en el paso 16.

#### El bundle está dentro del proyecto

El bundle vive en `<raíz>/blueprints/ejercicios-calculo/` y su `workspace/` contiene una segunda copia
de `package.json`, `tsconfig.json`, `.prettierrc`, `.prettierignore`, `.gitignore`, `.npmrc` y
`astro.config.mjs`. Herramienta por herramienta:

| Herramienta | ¿Ve `blueprints/`? | Por qué no rompe |
|---|---|---|
| Prettier (`npm run format:check`) | No | `.prettierignore` de la raíz → línea literal `blueprints/` (además de `*.md`); Prettier no lee configs dentro de rutas ignoradas |
| `astro check` / `tsc` | No | `tsconfig.json` → `"exclude": ["dist", "node_modules", "blueprints"]`; el `tsconfig.json` anidado no es un proyecto referenciado |
| `astro build` / Vite | No | Astro solo lee `src/`, `public/` y el `astro.config.mjs` de la raíz; la colección usa `base: "./src/content/ejercicios"` |
| `node --test "tests/**/*.test.mjs"` | No | El glob está anclado en `tests/` de la raíz; `workspace/tests/` no contiene ningún `*.test.mjs` |
| npm | No | Solo lee el `package.json` y `.npmrc` de la raíz; no hay `workspaces` |
| Pagefind | No | `--site dist` |
| git | Sí (versiona el bundle) | El `.gitignore` anidado solo afecta a rutas dentro de `workspace/`, donde no hay `node_modules/` ni `dist/` |

#### Reconciliación de artefactos byte a byte

NOT APPLICABLE — this blueprint authors no byte-exact expected output. Ninguna prueba compara una
salida contra un archivo dorado: todas calculan sus expectativas (rutas, canonical, cantidades) desde
`dist/`, el disco y `src/data/temas.ts`. Los literales que un Verify busca con `grep` son cadenas que
el propio código de este blueprint emite (`class="katex"` lo emite KaTeX; `id="otros-ejercicios"`,
`href="/ejercicios-calculo/tema/limites/"` y `User-agent: *` los escriben los pasos 6, 4 y 14), más dos
fragmentos del error de esquema de Astro en el paso 2: el nombre de campo `dificultad` (lo define
nuestro esquema) e `Invalid option` (mensaje de zod para un valor fuera del enum). Ambos se observaron
en la prueba real con el `astro` 7.4.2 fijado (salida: `dificultad: Invalid option: expected one of
"basico"|"intermedio"|"avanzado"`), el Verify del paso 2 los comprueba contra ese runtime, y ningún
archivo dorado depende de la redacción completa del mensaje.

---

## 20. Puerta de aceptación, riesgos y registro de decisiones

### 20.1 Puerta global de aceptación

El proyecto está **terminado** cuando cada comando de abajo sale con 0 en un checkout limpio, desde la
raíz, en Git Bash. Es el mismo conjunto que corre CI (con la base de GitHub Pages).

```bash
npm ci                                                                  # expect: exit 0
npm run format:check                                                    # expect: exit 0
npm run build                                                           # expect: exit 0 (astro check sin errores + astro build + pagefind)
npm test                                                                # expect: exit 0, 0 failed
out="$(mktemp)" && node --test --test-reporter=tap "tests/**/*.test.mjs" >"$out" 2>&1 && grep -qx "# skipped 0" "$out" && grep -qx "# todo 0" "$out" || false   # expect: exit 0 — 0 omitidas, 0 pendientes
SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm run build   # expect: exit 0
SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm test        # expect: exit 0, 0 failed — la salida que se publica,
                                                                        #   con cada enlace bajo /ejercicios-calculo/ y cada asset existente
npm run build                                                           # expect: exit 0 — deja dist/ en modo local
```

Toda expectativa es una propiedad, no un conteo; todas salen con 0 en un build correcto y ninguna
acepta «cualquier código distinto de 0».

Más estas puertas manuales — la lista de lanzamiento — cada una revisada una vez antes de lanzar:

- [ ] Cada paso de §9 tiene su tag: `git rev-parse --git-dir >/dev/null && test "$(git tag -l 'step-*' | wc -l)" -eq 16` sale 0 (16 pasos en §9). El repositorio lo crea el Bootstrap de §10.
- [ ] Cada archivo de la tabla *Archivos que deben versionarse* de §10 está versionado — una ruta por invocación, p. ej. `git ls-files --error-unmatch package-lock.json`, `git ls-files --error-unmatch .claude/settings.json`, `git ls-files --error-unmatch tests/ayudantes.mjs`, `git ls-files --error-unmatch .github/workflows/deploy.yml` — y no está ignorado: `status=0; git check-ignore -q package-lock.json || status=$?; test "$status" -eq 1` (1 = no ignorado; 128 = error de uso, que ahora falla), repetido por ruta.
- [ ] El ignore estaba antes del primer commit: `git rev-parse --git-dir >/dev/null && test "$(git log --diff-filter=A --format=%H -- .gitignore | tail -n 1)" = "$(git rev-list --max-parents=0 HEAD)"` sale 0.
- [ ] `node_modules/` nunca entró al historial: `git rev-parse --git-dir >/dev/null && test -z "$(git log --all --format=%H -- node_modules | head -n 1)"` sale 0.
- [ ] El bloque Bootstrap de §10 (incluido el Paso 0, la copia no destructiva de `workspace/`) se re-ejecutó una vez sobre el árbol ya construido, **salió con 0** y no cambió nada: `package.json` conserva sus dependencias y `npm run build` sigue encontrando `astro`.
- [ ] Cada fila de la *Reconciliación de valores entre artefactos* de §19.6 dice `Comparado: sí`, y `npm run format:check` y `npm run build` se ejecutaron desde la raíz **con `blueprints/` presente**.
- [ ] La tabla *Reconciliación de artefactos byte a byte* de §19.6 sigue siendo NOT APPLICABLE (ninguna prueba agregada compara contra un archivo dorado).
- [ ] **Revisión docente:** el docente leyó los 30 ejercicios en `npm run preview` y confirma enunciado, procedimiento y respuesta de cada uno (las respuestas de referencia están en las tablas de los pasos 7 a 12 y en el paso 2).
- [ ] **Navegador (flujos de §13):** en `npm run build && npm run preview` → `http://localhost:4321/tema/limites/` se ven entre 5 y 10 ejercicios; «Dame otros ejercicios» cambia la selección y el lector de pantalla anuncia «Mostrando N de 10 ejercicios.»; «Ver solución» se abre con Enter/Espacio; el buscador de la portada encuentra «cadena».
- [ ] Recorrido solo con teclado del flujo 1, una pasada con NVDA y una pasada a 200 % de zoom a 360 px (§15).
- [ ] **Publicación (cuenta de GitHub del docente; `gh` no está instalado):** crear en https://github.com/new el repositorio **público** `ejercicios-calculo` sin README; `git remote add origin https://github.com/<usuario>/ejercicios-calculo.git`; `git push -u origin main --follow-tags`; en *Settings → Pages → Build and deployment → Source* elegir **GitHub Actions**; esperar el workflow en verde en la pestaña *Actions*.
- [ ] En vivo: `test "$(curl -s -o /dev/null -w '%{http_code}' https://<usuario>.github.io/ejercicios-calculo/)" = 200` sale 0, y lo mismo para `…/ejercicios-calculo/tema/limites/` y `…/ejercicios-calculo/ejercicio/derivadas/regla-de-la-cadena/`; la búsqueda en vivo devuelve resultados cuyos enlaces incluyen `/ejercicios-calculo/`.
- [ ] Un rollback hecho a propósito una vez: `git revert` de un commit trivial, push, verificar que el workflow despliega, y revertir la reversión.
- [ ] Cada no-objetivo de §1 sigue sin construir; la página de facturación de GitHub muestra 0 cargos.
- [ ] (Opcional) Enviar `https://<usuario>.github.io/ejercicios-calculo/sitemap-index.xml` a Google Search Console.

**No se ignoran advertencias.** Una advertencia tolerada se vuelve permanente y esconde la siguiente.

### 20.2 Registro de riesgos

| Riesgo | Probabilidad | Impacto | Señal temprana | Mitigación |
|---|---|---|---|---|
| Error matemático en un ejercicio semilla escrito por el constructor | M | A (pérdida de confianza de los estudiantes) | El docente encuentra una respuesta distinta a la de las tablas de los pasos 7 a 12 | Respuestas de referencia fijadas en el blueprint; revisión docente obligatoria en §20.1; issue `error-matematico` con corrección en < 7 días. Responsable: docente |
| Enlaces rotos por la base de GitHub Pages (`/ejercicios-calculo/`) | M | A | Un enlace interno sin base en el HTML | `url()` obligatorio; `tests/estructura.test.mjs` exige el prefijo en cada enlace; el paso 16 y CI prueban con `BASE_PATH`. Responsable: constructor |
| Cambio de procesador Markdown de Astro 7 (Sätteri) deja `$…$` sin renderizar | M | A | HTML con `$$` o sin `class="katex"` | `processor: unified()` explícito en `astro.config.mjs`; los pasos 3, 7 y 10 lo detectan. Responsable: constructor |
| `npm ci` en Linux no encuentra el binario opcional de Pagefind porque el lockfile se generó en Windows | B | M | CI falla en `pagefind --site dist` con «binary not found» | npm 11 registra todos los binarios opcionales por plataforma; si ocurre, regenerar el lockfile (`rm package-lock.json && npm install`) y repetir. Responsable: docente con el constructor |
| `@astrojs/sitemap` 3.x entra en conflicto de peer con una versión futura de Astro 7 | B | M | `npm install` muestra ERESOLVE (no ocurrió en la prueba real del 2026-10-24) | Respaldo documentado abajo: quitar la integración y generar el sitemap con dos endpoints propios; nunca `--force`. Responsable: constructor |
| En Windows, `astro build` con un error de contenido sale con 127 (aserción de libuv) en lugar de 1 | A (observado) | B | Código 127 tras `Invalid option` | La puerta del paso 2 acepta cualquier código ≠ 0 y exige los textos `dificultad` e `Invalid option` |
| Un ejercicio nuevo con LaTeX inválido llega a producción | M | B | `katex-error` en el HTML | `tests/smoke.test.mjs` falla con `katex-error` y CI bloquea el despliegue |
| Presión por agregar IA o cuentas | M | M | Pedidos de «que genere ejercicios nuevos» | No-Objetivos de §1 con disparadores explícitos; costo cero como restricción dura |

**Respaldo si `@astrojs/sitemap` no instala.** Pasos exactos, sin cambiar ninguna URL que comprueban
las pruebas: (1) en `package.json` borra la línea `"@astrojs/sitemap": "^3.7.4",`; (2) en
`astro.config.mjs` borra `import sitemap from "@astrojs/sitemap";` y el bloque `integrations: [ … ],`;
(3) `npm install`; (4) crea estos dos archivos. `tests/seo.test.mjs` sigue pasando porque produce los
mismos `dist/sitemap-index.xml` y `dist/sitemap-0.xml` con las mismas `<loc>` y sin la 404.

`src/pages/sitemap-0.xml.ts`:

```ts
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { temas } from "../data/temas.ts";
import { url } from "../lib/url.ts";

export const GET: APIRoute = async ({ site }) => {
  const ejercicios = await getCollection("ejercicios");
  const rutas = [
    "",
    ...temas.map((tema) => `tema/${tema.slug}/`),
    ...ejercicios.map((ejercicio) => `ejercicio/${ejercicio.id}/`),
  ];
  const urls = rutas
    .map((ruta) => `  <url><loc>${new URL(url(ruta), site).href}</loc></url>`)
    .join("\n");
  const cuerpo = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(cuerpo, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
```

`src/pages/sitemap-index.xml.ts`:

```ts
import type { APIRoute } from "astro";
import { url } from "../lib/url.ts";

export const GET: APIRoute = ({ site }) => {
  const mapa = new URL(url("sitemap-0.xml"), site).href;
  const cuerpo = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${mapa}</loc></sitemap>\n</sitemapindex>\n`;
  return new Response(cuerpo, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
```

### 20.3 Registro de decisiones

| # | Decisión | Alternativa rechazada | Por qué | Se revertiría si |
|---|---|---|---|---|
| 1 | Ejercicios estáticos escritos por el docente + selección aleatoria en el cliente | Generar ejercicios con IA en runtime (forma agent-app) | Costo cero obligatorio y exactitud matemática revisada por el docente | Existiera un modelo gratuito sin límites relevantes **y** un flujo de revisión docente antes de publicar |
| 2 | GitHub Pages + GitHub Actions | Cloudflare Pages | Una sola cuenta (GitHub), sin tarjeta; el repo ya está ahí | Se necesitaran previews por PR, cabeceras propias (CSP) o el tráfico superara ~100 GB/mes |
| 3 | npm | pnpm | pnpm no está instalado; npm viene con Node | El proyecto pasara a monorepo o la instalación en CI superara 2 minutos |
| 4 | `node --test` sobre el HTML de `dist/` | Vitest + Playwright | Cero dependencias, sin descargar navegadores; las propiedades críticas se ven en el HTML | Apareciera lógica de cliente compleja (más de un script) o un bug que solo se reproduzca en el navegador |
| 5 | Todos los ejercicios en el HTML + ocultar con `hidden` | Cargar un JSON y renderizar en cliente | Funciona sin JS (10 primeros), Pagefind y buscadores ven todo el contenido, cero fetch | Un tema superara ~60 ejercicios y la página pesara más de ~500 KB |
| 6 | Sin analítica en v1 | Analítica gratuita sin cookies | Costo cero y sin banner; el éxito v1 se mide por contenido publicado | La universidad pidiera métricas de uso para avalar el proyecto |
| 7 | Plugin rehype propio para la solución en `<details>` | Poner la solución en el frontmatter o en dos archivos | El docente escribe un solo Markdown natural; el build falla si falta una sección | El docente necesitara varias secciones plegables por ejercicio |
| 8 | Prettier + `prettier-plugin-astro` | Biome (default del track ts-node) | Prettier formatea por completo las plantillas `.astro`; Biome solo parcialmente | Biome soportara `.astro` completo |
| 9 | Pagefind | Algolia DocSearch | Índice estático, sin cuenta ni servicio externo | Se necesitara búsqueda por fórmula/LaTeX, que Pagefind no indexa bien |
| 10 | KaTeX 0.16 en build | MathJax en cliente | Sin JS de matemáticas, salida MathML accesible, más liviano | Se necesitaran macros o entornos que KaTeX no soporte |
| 11 | Observabilidad: solo logs de GitHub Actions | Monitor de disponibilidad externo | Sitio estático en un CDN gestionado; nada que monitorear con costo cero | El sitio pasara a ser oficial de la universidad con un SLA |
| 12 | Página permanente del ejercicio en el paso 3 (no en el 6) | Seguir el orden pedido originalmente | Prueba el pipeline matemático en HTML real en el tercer paso | — (decisión de orden de construcción, sin efecto en el producto) |
| 13 | La puerta del fixture inválido (paso 2) acepta cualquier código ≠ 0 más los textos `dificultad` e `Invalid option` | Exigir exactamente el código 1 | En Windows 11 + Node v24.19.0, Astro 7.4.2 aborta al salir con `Assertion failed: !(handle->flags & UV_HANDLE_CLOSING)` (libuv) y devuelve 127; exigir 1 haría fallar un paso correcto en la máquina del docente. Los dos textos impiden que un error de uso pase la puerta | Astro o Node dejaran de abortar en Windows y el código fuera 1 en todas las plataformas |
| 14 | Contenido semilla en seis pasos de ≤ 5 archivos y emisión en bundle | Un solo paso de 29 archivos en archivo único | Cada paso cabe en una sesión; con 16 pasos el modo pasa a bundle y `tasks.json` permite reanudar | — (decisión de empaquetado) |

### 20.4 Qué construir después

1. **Temas nuevos** (series, aplicaciones de la integral) — cuando el docente tenga 10 ejercicios revisados de un tema (No-Objetivos: «Temas adicionales»).
2. **Analítica sin cookies y gratuita** — cuando la universidad pida métricas de uso (No-Objetivos: «Analítica»).
3. **Seguimiento de progreso local** — cuando los estudiantes lo pidan en una encuesta del curso (No-Objetivos: «Seguimiento de progreso»).
4. **Dominio propio** — cuando haya presupuesto institucional (No-Objetivos: «Dominio propio»).
5. **Generación asistida por IA con revisión docente** — solo si aparece un modelo gratuito y un flujo de revisión previo a publicar (No-Objetivos: «Generación con IA»).

---

*Fin del blueprint. El orden de construcción es §9. Detente cuando §20.1 esté en verde.*
