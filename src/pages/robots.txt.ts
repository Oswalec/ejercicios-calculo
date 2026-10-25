import type { APIRoute } from "astro";
import { url } from "../lib/url.ts";

export const GET: APIRoute = ({ site }) => {
  const mapa = new URL(url("sitemap-index.xml"), site).href;
  const cuerpo = `User-agent: *\nAllow: /\n\nSitemap: ${mapa}\n`;
  return new Response(cuerpo, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
