// Gráficas exactas generadas desde la fórmula del ejercicio.
// 1. compilarExpresion("2(x - 3)^2 - 5") → función x ↦ y (sin eval: analizador propio).
// 2. construirGrafica(spec) → nodo hast <figure class="grafica"> con un SVG y su leyenda.
// La usa src/lib/rehype-grafica.mjs al construir el sitio; no envía JavaScript al navegador.

const FUNCIONES = {
  sen: Math.sin,
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  sqrt: Math.sqrt,
  raiz: Math.sqrt,
  cbrt: Math.cbrt,
  abs: Math.abs,
  ln: Math.log,
  log: Math.log,
  exp: Math.exp,
  floor: Math.floor,
};
const CONSTANTES = { pi: Math.PI, e: Math.E };

function tokenizar(texto) {
  const tokens = [];
  let i = 0;
  while (i < texto.length) {
    const c = texto[i];
    if (/\s/.test(c)) {
      i++;
    } else if (/[0-9.]/.test(c)) {
      let j = i;
      while (j < texto.length && /[0-9.]/.test(texto[j])) j++;
      const valor = Number(texto.slice(i, j));
      if (Number.isNaN(valor))
        throw new Error(`Número no válido en «${texto}»`);
      tokens.push({ tipo: "num", valor });
      i = j;
    } else if (/[a-z]/i.test(c)) {
      let j = i;
      while (j < texto.length && /[a-z]/i.test(texto[j])) j++;
      const nombre = texto.slice(i, j).toLowerCase();
      if (nombre !== "x" && !(nombre in FUNCIONES) && !(nombre in CONSTANTES)) {
        throw new Error(`Nombre desconocido «${nombre}» en «${texto}»`);
      }
      tokens.push({ tipo: "id", valor: nombre });
      i = j;
    } else if ("+-*/^()".includes(c)) {
      tokens.push({ tipo: "op", valor: c });
      i++;
    } else {
      throw new Error(`Carácter no permitido «${c}» en «${texto}»`);
    }
  }
  return tokens;
}

// Gramática (de menor a mayor precedencia):
//   suma     := producto (("+" | "-") producto)*
//   producto := unario (("*" | "/") unario | unario implícito)*
//   unario   := "-" unario | potencia
//   potencia := primario ("^" unario)?
//   primario := número | x | constante | función "(" suma ")" | "(" suma ")"
export function compilarExpresion(texto) {
  const tokens = tokenizar(texto);
  let p = 0;
  const ver = () => tokens[p];
  const esOp = (v) => ver()?.tipo === "op" && ver().valor === v;
  const esperar = (v) => {
    if (!esOp(v)) throw new Error(`Se esperaba «${v}» en «${texto}»`);
    p++;
  };
  const iniciaPrimario = () =>
    ver() && (ver().tipo === "num" || ver().tipo === "id" || esOp("("));

  function suma() {
    let izq = producto();
    while (esOp("+") || esOp("-")) {
      const op = tokens[p++].valor;
      const der = producto();
      const a = izq;
      izq = op === "+" ? (x) => a(x) + der(x) : (x) => a(x) - der(x);
    }
    return izq;
  }
  function producto() {
    let izq = unario();
    for (;;) {
      if (esOp("*") || esOp("/")) {
        const op = tokens[p++].valor;
        const der = unario();
        const a = izq;
        izq = op === "*" ? (x) => a(x) * der(x) : (x) => a(x) / der(x);
      } else if (iniciaPrimario()) {
        const der = potencia();
        const a = izq;
        izq = (x) => a(x) * der(x);
      } else {
        return izq;
      }
    }
  }
  function unario() {
    if (esOp("-")) {
      p++;
      const v = unario();
      return (x) => -v(x);
    }
    return potencia();
  }
  function potencia() {
    const base = primario();
    if (esOp("^")) {
      p++;
      const exponente = unario();
      return (x) => Math.pow(base(x), exponente(x));
    }
    return base;
  }
  function primario() {
    const t = ver();
    if (!t) throw new Error(`Expresión incompleta: «${texto}»`);
    if (t.tipo === "num") {
      p++;
      return () => t.valor;
    }
    if (t.tipo === "id") {
      p++;
      if (t.valor === "x") return (x) => x;
      if (t.valor in CONSTANTES) return () => CONSTANTES[t.valor];
      const fn = FUNCIONES[t.valor];
      esperar("(");
      const arg = suma();
      esperar(")");
      return (x) => fn(arg(x));
    }
    if (esOp("(")) {
      p++;
      const v = suma();
      esperar(")");
      return v;
    }
    throw new Error(`Símbolo inesperado «${t.valor}» en «${texto}»`);
  }

  const resultado = suma();
  if (p !== tokens.length) {
    throw new Error(`Sobra texto después de la posición ${p} en «${texto}»`);
  }
  return resultado;
}

// ---------- SVG ----------

const ANCHO = 480;
const ALTO = 320;
const MARGEN = 28;
const MUESTRAS = 600;

function h(tagName, properties = {}, children = []) {
  return { type: "element", tagName, properties, children };
}
const t = (value) => ({ type: "text", value });
const r = (n) => Math.round(n * 100) / 100;

function pasoDeMarcas(rango) {
  for (const paso of [0.5, 1, 2, 5, 10, 20, 50, 100]) {
    if (rango / paso <= 12) return paso;
  }
  return 100;
}

function formatear(n) {
  const v = Math.round(n * 100) / 100;
  return v < 0 ? `−${Math.abs(v)}` : String(v);
}

export function construirGrafica(spec) {
  const [xmin, xmax] = spec.x;
  const [ymin, ymax] = spec.y;
  if (!(xmin < xmax) || !(ymin < ymax)) {
    throw new Error(
      "La gráfica necesita x: [mín, máx] e y: [mín, máx] con mín < máx",
    );
  }
  const px = (x) =>
    MARGEN + ((x - xmin) / (xmax - xmin)) * (ANCHO - 2 * MARGEN);
  const py = (y) =>
    ALTO - MARGEN - ((y - ymin) / (ymax - ymin)) * (ALTO - 2 * MARGEN);
  const id = `g${Math.abs(hash(JSON.stringify(spec)))}`;

  const fondo = [];
  // Cuadrícula y marcas.
  const pasoX = pasoDeMarcas(xmax - xmin);
  const pasoY = pasoDeMarcas(ymax - ymin);
  const ejeY = xmin <= 0 && 0 <= xmax ? px(0) : px(xmin);
  const ejeX = ymin <= 0 && 0 <= ymax ? py(0) : py(ymin);
  for (let x = Math.ceil(xmin / pasoX) * pasoX; x <= xmax + 1e-9; x += pasoX) {
    fondo.push(
      h("line", {
        className: ["cuadricula"],
        x1: r(px(x)),
        y1: MARGEN,
        x2: r(px(x)),
        y2: ALTO - MARGEN,
      }),
    );
    if (Math.abs(x) > 1e-9) {
      fondo.push(
        h(
          "text",
          {
            className: ["marca"],
            x: r(px(x)),
            y: r(Math.min(ejeX + 14, ALTO - 6)),
            textAnchor: "middle",
          },
          [t(formatear(x))],
        ),
      );
    }
  }
  for (let y = Math.ceil(ymin / pasoY) * pasoY; y <= ymax + 1e-9; y += pasoY) {
    fondo.push(
      h("line", {
        className: ["cuadricula"],
        x1: MARGEN,
        y1: r(py(y)),
        x2: ANCHO - MARGEN,
        y2: r(py(y)),
      }),
    );
    if (Math.abs(y) > 1e-9) {
      fondo.push(
        h(
          "text",
          {
            className: ["marca"],
            x: r(Math.max(ejeY - 5, 12)),
            y: r(py(y) + 4),
            textAnchor: "end",
          },
          [t(formatear(y))],
        ),
      );
    }
  }
  // Ejes.
  fondo.push(
    h("line", {
      className: ["eje"],
      x1: MARGEN,
      y1: r(ejeX),
      x2: ANCHO - MARGEN,
      y2: r(ejeX),
    }),
  );
  fondo.push(
    h("line", {
      className: ["eje"],
      x1: r(ejeY),
      y1: MARGEN,
      x2: r(ejeY),
      y2: ALTO - MARGEN,
    }),
  );
  fondo.push(
    h(
      "text",
      { className: ["nombre-eje"], x: ANCHO - MARGEN + 4, y: r(ejeX + 4) },
      [t("x")],
    ),
  );
  fondo.push(
    h("text", { className: ["nombre-eje"], x: r(ejeY + 6), y: MARGEN - 10 }, [
      t("y"),
    ]),
  );

  // Curvas: se cortan donde la función no existe o salta (asíntotas).
  const curvas = [];
  const leyenda = [];
  const margenY = (ymax - ymin) * 1.5;
  // Sin estilo explícito: la primera curva que no es de referencia es la principal
  // y las siguientes, secundarias.
  let destacadas = 0;
  (spec.curvas ?? []).forEach((curva) => {
    const f = compilarExpresion(curva.expr);
    const desde = curva.desde ?? xmin;
    const hasta = curva.hasta ?? xmax;
    const tramos = [];
    let actual = [];
    let anterior = null;
    for (let i = 0; i <= MUESTRAS; i++) {
      const x = desde + ((hasta - desde) * i) / MUESTRAS;
      const y = f(x);
      const valido =
        Number.isFinite(y) && y > ymin - margenY && y < ymax + margenY;
      const salto = anterior !== null && Math.abs(y - anterior) > ymax - ymin;
      if (!valido || salto) {
        if (actual.length > 1) tramos.push(actual);
        actual = valido ? [[x, y]] : [];
      } else {
        actual.push([x, y]);
      }
      anterior = valido ? y : null;
    }
    if (actual.length > 1) tramos.push(actual);
    const estilo =
      curva.estilo ?? (destacadas === 0 ? "principal" : "secundaria");
    if (estilo !== "referencia") destacadas++;
    for (const tramo of tramos) {
      const d = tramo
        .map(([x, y], i) => `${i === 0 ? "M" : "L"}${r(px(x))} ${r(py(y))}`)
        .join(" ");
      curvas.push(h("path", { className: ["curva", `curva--${estilo}`], d }));
    }
    if (curva.etiqueta) {
      leyenda.push(
        h("li", {}, [
          h("span", {
            className: ["muestra", `muestra--${estilo}`],
            ariaHidden: "true",
          }),
          h("span", { className: ["math-inline"] }, [t(curva.etiqueta)]),
        ]),
      );
    }
  });

  // Puntos destacados.
  const puntos = (spec.puntos ?? []).flatMap((punto) => {
    const nodos = [
      h("circle", {
        className: ["punto"],
        cx: r(px(punto.x)),
        cy: r(py(punto.y)),
        r: 4,
      }),
    ];
    if (punto.etiqueta) {
      nodos.push(
        h(
          "text",
          {
            className: ["etiqueta-punto"],
            x: r(px(punto.x) + 7),
            y: r(py(punto.y) - 7),
          },
          [t(punto.etiqueta)],
        ),
      );
    }
    return nodos;
  });

  const svg = h(
    "svg",
    {
      className: ["grafica-svg"],
      viewBox: `0 0 ${ANCHO} ${ALTO}`,
      role: "img",
      ariaLabelledBy: `${id}-desc`,
    },
    [
      h("defs", {}, [
        h("clipPath", { id: `${id}-area` }, [
          h("rect", {
            x: MARGEN,
            y: MARGEN,
            width: ANCHO - 2 * MARGEN,
            height: ALTO - 2 * MARGEN,
          }),
        ]),
      ]),
      ...fondo,
      h("g", { clipPath: `url(#${id}-area)` }, curvas),
      ...puntos,
    ],
  );

  const pie = [
    h("p", { className: ["grafica-descripcion"], id: `${id}-desc` }, [
      t(spec.descripcion),
    ]),
  ];
  if (leyenda.length > 0)
    pie.unshift(h("ul", { className: ["grafica-leyenda"] }, leyenda));
  return h("figure", { className: ["grafica"] }, [
    svg,
    h("figcaption", {}, pie),
  ]);
}

function hash(texto) {
  let v = 0;
  for (let i = 0; i < texto.length; i++) v = (v * 31 + texto.charCodeAt(i)) | 0;
  return v;
}
