# Ejercicios Resueltos de Cálculo — instrucciones para agentes

Sitio estático y gratuito (Astro 7 + KaTeX + Pagefind en GitHub Pages) con ejercicios de Cálculo resueltos paso a paso; el contenido son archivos Markdown en `src/content/ejercicios/<tema>/`.

## Comandos

| Tarea | Comando |
|---|---|
| Instalar | `npm install` (CI: `npm ci`) |
| Desarrollo | `npm run dev` — http://localhost:4321 |
| Build completo | `npm run build` |
| Pruebas (tras el build) | `npm test` · un archivo: `node --test tests/contenido.test.mjs` |
| Formato | `npm run format` · `npm run format:check` |
| Como en GitHub Pages | `SITE_URL=https://ejemplo.github.io BASE_PATH=/ejercicios-calculo npm run build` |

Puerta: `npm run format:check && npm run build && npm test` debe salir con 0.

## No negociable

1. Nunca publiques una respuesta matemática sin procedimiento paso a paso y línea final `**Resultado final:**`.
2. Nunca agregues un servicio, API, analítica o dependencia que cueste dinero.
3. Todo enlace interno pasa por `url()` de `src/lib/url.ts`.
4. TypeScript se queda en 6.x, KaTeX en 0.16.x y `processor: unified()` no se quita.
5. Nunca versiones `dist/`, `.astro/` ni `node_modules/`.
6. Nunca des por terminada una tarea con la puerta en rojo.

La arquitectura completa, las fronteras y los tokens de diseño están en `CLAUDE.md` de este directorio.
