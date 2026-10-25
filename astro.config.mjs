import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeGrafica from "./src/lib/rehype-grafica.mjs";
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
    // rehype-grafica va antes de KaTeX (leyendas en LaTeX) y de rehype-solucion.
    rehypePlugins: [rehypeGrafica, rehypeKatex, rehypeSolucion],
  },
});
