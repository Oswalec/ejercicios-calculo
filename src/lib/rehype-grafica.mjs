// Plugin rehype del proyecto. Si el frontmatter del ejercicio trae `grafica`,
// inserta la figura SVG generada por src/lib/grafica.mjs:
//   - ubicacion "enunciado" (por defecto): justo antes de "## Solución";
//   - ubicacion "solucion": al final, dentro de la solución desplegable.
// Debe ir ANTES de rehype-katex (para renderizar las etiquetas de la leyenda)
// y de rehype-solucion (que envuelve la solución en <details>).

import { construirGrafica } from "./grafica.mjs";

const SOLUCION = "Solución".normalize("NFC");

function textoDe(nodo) {
  if (nodo.type === "text") return nodo.value;
  if (Array.isArray(nodo.children)) return nodo.children.map(textoDe).join("");
  return "";
}

export default function rehypeGrafica() {
  return (arbol, archivo) => {
    const spec = archivo?.data?.astro?.frontmatter?.grafica;
    if (!spec) return;
    const figura = construirGrafica(spec);
    if (spec.ubicacion === "solucion") {
      arbol.children.push(figura);
      return;
    }
    const i = arbol.children.findIndex(
      (nodo) =>
        nodo.type === "element" &&
        nodo.tagName === "h2" &&
        textoDe(nodo).normalize("NFC").trim() === SOLUCION,
    );
    if (i === -1) arbol.children.push(figura);
    else arbol.children.splice(i, 0, figura);
  };
}
