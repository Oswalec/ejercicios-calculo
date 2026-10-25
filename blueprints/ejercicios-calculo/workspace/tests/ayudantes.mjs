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
