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
