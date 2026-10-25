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
