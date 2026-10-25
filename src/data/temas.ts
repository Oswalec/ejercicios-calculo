// Sílabo del sitio: unidades (temas) → secciones → contenidos.
// Cada sección agrupa hasta 10 ejercicios en
// src/content/ejercicios/<tema>/<seccion>/.

export const SLUGS_TEMAS = [
  "funciones",
  "limites",
  "continuidad",
  "derivadas",
  "aplicaciones-derivada",
  "integrales",
] as const;

export type SlugTema = (typeof SLUGS_TEMAS)[number];

export interface Seccion {
  slug: string;
  numero: string;
  nombre: string;
  contenidos: readonly string[];
}

export interface Tema {
  slug: SlugTema;
  numero: number;
  nombre: string;
  descripcion: string;
  orden: number;
  secciones: readonly Seccion[];
}

export const EJERCICIOS_POR_SECCION = 10;

export const temas: readonly Tema[] = [
  {
    slug: "funciones",
    numero: 1,
    nombre: "Funciones",
    descripcion:
      "Comprender las funciones, determinar sus propiedades, operar con ellas y representarlas gráficamente.",
    orden: 1,
    secciones: [
      {
        slug: "conceptos-fundamentales",
        numero: "1.1",
        nombre: "Conceptos fundamentales",
        contenidos: [
          "Definición de función y notación funcional",
          "Variable independiente y variable dependiente",
          "Dominio, rango, codominio e imagen",
          "Evaluación de funciones f(a)",
          "Ceros o raíces de una función",
          "Intersecciones con los ejes coordenados",
          "Criterio de la recta vertical",
          "Representación gráfica de funciones",
        ],
      },
      {
        slug: "dominio",
        numero: "1.2",
        nombre: "Dominio de funciones",
        contenidos: [
          "Funciones polinómicas y racionales",
          "Funciones radicales de índice par e impar",
          "Funciones con denominadores radicales",
          "Funciones logarítmicas y exponenciales",
          "Funciones trigonométricas y trigonométricas inversas",
          "Funciones con varias restricciones",
          "Funciones compuestas",
        ],
      },
      {
        slug: "rango",
        numero: "1.3",
        nombre: "Rango o recorrido",
        contenidos: [
          "Funciones constantes, lineales y cuadráticas",
          "Funciones polinómicas, racionales y radicales",
          "Funciones con valor absoluto",
          "Funciones exponenciales, logarítmicas y trigonométricas",
          "Rango mediante análisis gráfico",
          "Rango mediante despeje de x en función de y",
        ],
      },
      {
        slug: "tipos-de-funciones",
        numero: "1.4",
        nombre: "Tipos de funciones",
        contenidos: [
          "Constantes, identidad, lineales y afines",
          "Cuadráticas, polinómicas, racionales y radicales",
          "Valor absoluto, definidas por partes y escalonadas",
          "Exponenciales, logarítmicas, trigonométricas e inversas",
          "Pares e impares, periódicas",
          "Crecientes y decrecientes, acotadas",
          "Algebraicas y trascendentes",
        ],
      },
      {
        slug: "operaciones",
        numero: "1.5",
        nombre: "Operaciones con funciones",
        contenidos: [
          "Suma, resta, producto y cociente de funciones",
          "Multiplicación de una función por una constante",
          "Dominio de las operaciones entre funciones",
          "Simplificación de expresiones funcionales",
        ],
      },
      {
        slug: "composicion",
        numero: "1.6",
        nombre: "Composición de funciones",
        contenidos: [
          "Concepto de función compuesta",
          "Cálculo de f∘g y g∘f",
          "Composición de funciones polinómicas, racionales y radicales",
          "Composición de funciones exponenciales, logarítmicas y trigonométricas",
          "Dominio de una función compuesta",
          "Composición de tres o más funciones",
        ],
      },
      {
        slug: "funciones-inversas",
        numero: "1.7",
        nombre: "Funciones inversas",
        contenidos: [
          "Concepto de función inversa y condición de inyectividad",
          "Prueba de la recta horizontal",
          "Cálculo algebraico de la función inversa",
          "Dominio y rango de la inversa",
          "Verificación mediante composición",
          "Inversas de funciones lineales, cuadráticas, racionales, exponenciales y logarítmicas",
        ],
      },
      {
        slug: "inyectividad-sobreyectividad",
        numero: "1.8",
        nombre: "Inyectividad y sobreyectividad",
        contenidos: [
          "Funciones inyectivas, sobreyectivas y biyectivas",
          "Determinación gráfica de la inyectividad",
          "Sobreyectividad según el codominio",
          "Demostración algebraica de la inyectividad",
          "Composición de funciones inyectivas y sobreyectivas",
        ],
      },
      {
        slug: "transformaciones-graficas",
        numero: "1.9",
        nombre: "Transformaciones gráficas",
        contenidos: [
          "Traslaciones horizontales y verticales",
          "Reflexiones respecto de los ejes",
          "Estiramientos y compresiones verticales y horizontales",
          "f(x) + k, f(x − h), a·f(x) y f(bx)",
          "Combinación de transformaciones",
        ],
      },
      {
        slug: "otras-propiedades",
        numero: "1.10",
        nombre: "Otras propiedades de las funciones",
        contenidos: [
          "Funciones definidas por partes",
          "Funciones periódicas y período fundamental",
          "Simetría respecto del eje y y del origen",
          "Funciones acotadas; máximo y mínimo absolutos en una gráfica",
          "Variación directa e inversa",
          "Modelación de situaciones mediante funciones",
        ],
      },
    ],
  },
  {
    slug: "limites",
    numero: 2,
    nombre: "Límites de funciones",
    descripcion:
      "Calcular límites mediante evaluación, álgebra, identidades y teoremas formales.",
    orden: 2,
    secciones: [
      {
        slug: "fundamentos",
        numero: "2.1",
        nombre: "Fundamentos de límites",
        contenidos: [
          "Concepto intuitivo y definición formal de límite",
          "Notación de límites",
          "Límites por tablas y gráficas",
          "Límites por sustitución directa",
          "Límites que existen y que no existen",
          "Propiedades algebraicas de los límites",
          "Teoremas de unicidad, conservación del orden y del encaje",
        ],
      },
      {
        slug: "limites-laterales",
        numero: "2.2",
        nombre: "Límites laterales",
        contenidos: [
          "Límite por la izquierda y por la derecha",
          "Existencia del límite bilateral",
          "Funciones definidas por partes",
          "Funciones con valor absoluto",
          "Funciones racionales y con raíces",
          "Límites laterales infinitos",
        ],
      },
      {
        slug: "limites-algebraicos",
        numero: "2.3",
        nombre: "Límites algebraicos con indeterminaciones",
        contenidos: [
          "Indeterminación 0/0",
          "Factorización de polinomios",
          "Simplificación de factores comunes",
          "Diferencia de cuadrados y productos notables",
          "Simplificación de fracciones complejas",
          "Indeterminaciones algebraicas mediante factorización",
        ],
      },
      {
        slug: "limites-con-radicales",
        numero: "2.4",
        nombre: "Límites con radicales e indeterminaciones",
        contenidos: [
          "Racionalización mediante conjugados",
          "Diferencia de raíces cuadradas",
          "Límites con raíces cúbicas",
          "Límites con raíces de índice superior",
          "Radicales en numerador y denominador",
          "Indeterminaciones con radicales",
        ],
      },
      {
        slug: "limites-trigonometricos",
        numero: "2.5",
        nombre: "Límites trigonométricos",
        contenidos: [
          "Límites trigonométricos fundamentales",
          "Límites con seno y coseno",
          "Límites con tangente",
          "Identidades trigonométricas",
          "Ángulos múltiples",
          "Límites trigonométricos mediante cambio de variable",
        ],
      },
      {
        slug: "exponenciales-logaritmicos",
        numero: "2.6",
        nombre: "Límites exponenciales y logarítmicos",
        contenidos: [
          "Límites exponenciales",
          "Límites logarítmicos",
          "Límites fundamentales con e y ln",
          "Indeterminaciones del tipo 1^∞",
          "Indeterminaciones del tipo 0^0 e ∞^0",
          "Uso de logaritmos para resolver límites de potencias variables",
        ],
      },
      {
        slug: "limites-al-infinito",
        numero: "2.7",
        nombre: "Límites al infinito",
        contenidos: [
          "Límites de funciones racionales cuando x tiende a +∞ o −∞",
          "Comparación de grados de polinomios",
          "División por la mayor potencia de x",
          "Límites con radicales al infinito",
          "Límites con exponenciales y logaritmos",
          "Límites de funciones acotadas",
        ],
      },
      {
        slug: "limites-infinitos",
        numero: "2.8",
        nombre: "Límites infinitos",
        contenidos: [
          "Límites que tienden a +∞ o −∞ cuando x tiende a un número finito",
          "Límites laterales infinitos",
          "Análisis del signo del denominador",
          "Límites de funciones racionales cerca de sus discontinuidades",
          "Determinación del comportamiento alrededor de asíntotas verticales",
        ],
      },
      {
        slug: "infinito-entre-infinito",
        numero: "2.9",
        nombre: "Límites de tipo infinito entre infinito",
        contenidos: [
          "Indeterminación ∞/∞",
          "Cocientes de polinomios de igual grado",
          "Cocientes de polinomios de distinto grado",
          "Cocientes con radicales",
          "Comparación de crecimiento de funciones exponenciales, polinómicas y logarítmicas",
          "Transformaciones algebraicas para resolver ∞/∞",
        ],
      },
      {
        slug: "teoremas-aplicaciones",
        numero: "2.10",
        nombre: "Teoremas y aplicaciones de límites",
        contenidos: [
          "Teorema del encaje",
          "Teorema de conservación del orden",
          "Existencia y unicidad del límite",
          "Límites que permiten demostrar la existencia de raíces",
          "Aplicaciones a problemas contextualizados",
          "Introducción a la definición formal ε-δ, si corresponde al nivel del curso",
        ],
      },
    ],
  },
  {
    slug: "continuidad",
    numero: 3,
    nombre: "Continuidad de funciones",
    descripcion:
      "Determinar dónde una función es continua, clasificar discontinuidades y aplicar teoremas de continuidad.",
    orden: 3,
    secciones: [
      {
        slug: "conceptos-de-continuidad",
        numero: "3.1",
        nombre: "Conceptos de continuidad",
        contenidos: [
          "Definición de continuidad en un punto",
          "Las tres condiciones de continuidad",
          "Continuidad por la izquierda, por la derecha y bilateral",
          "Continuidad en intervalos abiertos y cerrados",
          "Continuidad en el dominio de una función",
        ],
      },
      {
        slug: "tipos-de-discontinuidad",
        numero: "3.2",
        nombre: "Tipos de discontinuidad",
        contenidos: [
          "Discontinuidad removible, de salto, infinita y oscilatoria",
          "Discontinuidades en funciones racionales",
          "Discontinuidades en funciones definidas por partes",
          "Huecos y puntos aislados",
          "Clasificación mediante límites laterales",
        ],
      },
      {
        slug: "funciones-elementales",
        numero: "3.3",
        nombre: "Continuidad de funciones elementales",
        contenidos: [
          "Funciones polinómicas, racionales y radicales",
          "Funciones exponenciales y logarítmicas",
          "Funciones trigonométricas y trigonométricas inversas",
          "Funciones compuestas e inversas",
          "Sumas, productos y cocientes",
        ],
      },
      {
        slug: "determinacion-de-parametros",
        numero: "3.4",
        nombre: "Determinación de parámetros",
        contenidos: [
          "Hallar parámetros para eliminar discontinuidades",
          "Funciones definidas por partes y con valor absoluto",
          "Funciones racionales y radicales con parámetros",
          "Continuidad en uno o varios puntos",
        ],
      },
      {
        slug: "teoremas-de-continuidad",
        numero: "3.5",
        nombre: "Teoremas de continuidad",
        contenidos: [
          "Teorema de conservación del signo",
          "Teorema del valor intermedio y teorema de Bolzano",
          "Existencia de raíces",
          "Teorema de Weierstrass: máximos y mínimos absolutos",
          "Continuidad de funciones compuestas",
        ],
      },
      {
        slug: "continuidad-uniforme-aplicaciones",
        numero: "3.6",
        nombre: "Continuidad uniforme y aplicaciones",
        contenidos: [
          "Concepto de continuidad uniforme",
          "Continuidad uniforme en intervalos cerrados y acotados",
          "Aplicaciones del teorema del valor intermedio",
          "Modelos físicos y funciones de costo, ingreso y demanda",
        ],
      },
    ],
  },
  {
    slug: "derivadas",
    numero: 4,
    nombre: "Derivadas",
    descripcion:
      "Calcular derivadas, demostrar fórmulas y aplicar la derivación al estudio de funciones.",
    orden: 4,
    secciones: [
      {
        slug: "fundamentos",
        numero: "4.1",
        nombre: "Fundamentos de la derivada",
        contenidos: [
          "Recta secante y recta tangente",
          "Velocidad media e instantánea",
          "Definición de derivada por límite",
          "Derivadas laterales y derivabilidad",
          "Relación entre continuidad y derivabilidad",
          "Funciones definidas por partes",
          "Interpretación geométrica y física",
        ],
      },
      {
        slug: "demostraciones-por-definicion",
        numero: "4.2",
        nombre: "Demostraciones por definición",
        contenidos: [
          "Derivada de una constante y de f(x) = x",
          "Derivada de una función lineal y de x²",
          "Derivada de xⁿ, 1/x y √x",
          "Funciones racionales sencillas y con radicales",
          "Derivabilidad en puntos especiales",
        ],
      },
      {
        slug: "reglas-basicas",
        numero: "4.3",
        nombre: "Reglas básicas de derivación",
        contenidos: [
          "Derivada de una constante",
          "Regla de la potencia y del múltiplo constante",
          "Reglas de la suma y la resta",
          "Derivada de polinomios",
          "Funciones racionales sencillas",
          "Potencias negativas y fraccionarias",
        ],
      },
      {
        slug: "producto-cociente-cadena",
        numero: "4.4",
        nombre: "Reglas de producto, cociente y cadena",
        contenidos: [
          "Regla del producto y regla del cociente",
          "Regla de la cadena",
          "Combinaciones de producto, cociente y cadena",
          "Potencias y radicales compuestos",
          "Funciones anidadas",
        ],
      },
      {
        slug: "exponenciales-logaritmicas",
        numero: "4.5",
        nombre: "Derivadas exponenciales y logarítmicas",
        contenidos: [
          "Derivadas de eˣ, aˣ, e^u y a^u",
          "Derivadas de ln x, ln|x| y ln u",
          "Logaritmos de otras bases",
          "Derivación logarítmica",
          "Potencias con base y exponente variables",
        ],
      },
      {
        slug: "trigonometricas",
        numero: "4.6",
        nombre: "Derivadas trigonométricas",
        contenidos: [
          "Derivadas de sen x, cos x, tan x, cot x, sec x y csc x",
          "Regla de la cadena con funciones trigonométricas",
          "Productos y cocientes trigonométricos",
          "Ángulos múltiples y expresiones compuestas",
        ],
      },
      {
        slug: "trigonometricas-inversas",
        numero: "4.7",
        nombre: "Derivadas trigonométricas inversas",
        contenidos: [
          "Derivadas de arcsen x, arccos x y arctan x",
          "Derivadas de arccot x, arcsec x y arccsc x",
          "Funciones trigonométricas inversas compuestas",
          "Productos con funciones trigonométricas inversas",
        ],
      },
      {
        slug: "implicita-y-otras-tecnicas",
        numero: "4.8",
        nombre: "Derivación implícita y otras técnicas",
        contenidos: [
          "Derivación implícita",
          "Funciones definidas paramétricamente",
          "Derivadas de funciones inversas",
          "Derivación logarítmica",
          "Derivadas de orden superior y de orden n",
        ],
      },
      {
        slug: "aplicaciones-geometricas",
        numero: "4.9",
        nombre: "Aplicaciones geométricas de la derivada",
        contenidos: [
          "Pendiente y ecuación de la recta tangente",
          "Ecuación de la recta normal",
          "Ángulo entre curvas",
          "Tangentes horizontales y verticales",
          "Rapidez de cambio y tasas relacionadas",
        ],
      },
      {
        slug: "aplicaciones-fisicas-diferenciales",
        numero: "4.10",
        nombre: "Aplicaciones físicas y diferenciales",
        contenidos: [
          "Posición, velocidad y aceleración",
          "Movimiento rectilíneo",
          "Tasa de cambio promedio e instantánea",
          "Diferenciales y aproximación lineal",
          "Estimación de errores",
          "Regla de L'Hôpital",
        ],
      },
    ],
  },
  {
    slug: "aplicaciones-derivada",
    numero: 5,
    nombre: "Aplicaciones de la derivada",
    descripcion:
      "Analizar el crecimiento y la concavidad de funciones, optimizar y resolver tasas relacionadas.",
    orden: 5,
    secciones: [
      {
        slug: "crecimiento",
        numero: "5.1",
        nombre: "Análisis de crecimiento",
        contenidos: [
          "Intervalos de crecimiento y decrecimiento",
          "Puntos y números críticos",
          "Prueba de la primera derivada",
          "Máximos y mínimos locales y absolutos",
        ],
      },
      {
        slug: "concavidad",
        numero: "5.2",
        nombre: "Concavidad y comportamiento gráfico",
        contenidos: [
          "Concavidad hacia arriba y hacia abajo",
          "Puntos de inflexión",
          "Prueba de la segunda derivada",
          "Análisis completo y esbozo de curvas",
          "Relación entre derivadas y asíntotas",
        ],
      },
      {
        slug: "optimizacion",
        numero: "5.3",
        nombre: "Optimización",
        contenidos: [
          "Optimización de áreas, perímetros y volúmenes",
          "Problemas geométricos y de distancia mínima",
          "Problemas de costo, ingreso y producción",
          "Optimización con restricciones",
        ],
      },
      {
        slug: "tasas-relacionadas-aproximacion",
        numero: "5.4",
        nombre: "Tasas relacionadas y aproximación",
        contenidos: [
          "Tasas relacionadas con triángulos y escaleras deslizantes",
          "Variación de volúmenes y áreas",
          "Aproximación lineal y diferenciales",
          "Método de Newton",
        ],
      },
    ],
  },
  {
    slug: "integrales",
    numero: 6,
    nombre: "Integrales",
    descripcion:
      "Dominar las antiderivadas, las técnicas de integración, las integrales definidas y sus aplicaciones.",
    orden: 6,
    secciones: [
      {
        slug: "fundamentos",
        numero: "6.1",
        nombre: "Fundamentos de integración",
        contenidos: [
          "Antiderivada, primitivas e integral indefinida",
          "Constante de integración",
          "Verificación por derivación",
          "Propiedades lineales de la integral",
          "Relación entre derivación e integración",
        ],
      },
      {
        slug: "integrales-inmediatas",
        numero: "6.2",
        nombre: "Integrales inmediatas",
        contenidos: [
          "Constantes, potencias y polinomios",
          "Potencias negativas y fraccionarias",
          "Integral de 1/x",
          "Integrales exponenciales y logarítmicas",
          "Integrales trigonométricas básicas",
          "Integrales que dan funciones trigonométricas inversas",
        ],
      },
      {
        slug: "sustitucion",
        numero: "6.3",
        nombre: "Integración por sustitución",
        contenidos: [
          "Sustitución simple y con funciones compuestas",
          "Sustitución en integrales exponenciales, logarítmicas y trigonométricas",
          "Sustitución con radicales y en integrales racionales",
          "Sustitución en integrales definidas y cambio de límites",
        ],
      },
      {
        slug: "por-partes",
        numero: "6.4",
        nombre: "Integración por partes",
        contenidos: [
          "Fórmula de integración por partes y elección de u y dv",
          "Polinomios por exponenciales y por funciones trigonométricas",
          "Integrales con logaritmos y trigonométricas inversas",
          "Integración por partes repetida y cíclica",
        ],
      },
      {
        slug: "trigonometricas",
        numero: "6.5",
        nombre: "Integrales trigonométricas",
        contenidos: [
          "Potencias y productos de seno y coseno",
          "Potencias de tangente y secante",
          "Potencias de cotangente y cosecante",
          "Identidades trigonométricas para integrar",
          "Ángulos múltiples y argumentos distintos",
        ],
      },
      {
        slug: "sustitucion-trigonometrica",
        numero: "6.6",
        nombre: "Sustitución trigonométrica",
        contenidos: [
          "Radicales con a² − x², a² + x² y x² − a²",
          "Sustituciones con seno, tangente y secante",
          "Regreso a la variable original",
          "Triángulos de referencia",
        ],
      },
      {
        slug: "fracciones-parciales",
        numero: "6.7",
        nombre: "Fracciones parciales",
        contenidos: [
          "Fracciones racionales propias e impropias",
          "Factores lineales distintos y repetidos",
          "Factores cuadráticos irreducibles y repetidos",
          "Integración de cada término de la descomposición",
        ],
      },
      {
        slug: "otras-tecnicas",
        numero: "6.8",
        nombre: "Otras técnicas de integración",
        contenidos: [
          "Racionalización de integrandos",
          "Sustituciones algebraicas",
          "Integrales con radicales y funciones racionales",
          "Identidades para simplificar integrandos",
          "Elección de la técnica de integración",
        ],
      },
      {
        slug: "integrales-definidas",
        numero: "6.9",
        nombre: "Integrales definidas",
        contenidos: [
          "Sumas de Riemann, sumas inferiores y superiores",
          "Propiedades de las integrales definidas",
          "Teorema fundamental del cálculo y regla de Barrow",
          "Cambio de variable en integrales definidas",
          "Simetría: funciones pares e impares",
        ],
      },
      {
        slug: "impropias-y-aplicaciones",
        numero: "6.10",
        nombre: "Integrales impropias y aplicaciones",
        contenidos: [
          "Integrales impropias: convergencia y divergencia",
          "Área bajo una curva y entre dos curvas",
          "Volúmenes por discos, arandelas y capas cilíndricas",
          "Longitud de arco y área de superficies de revolución",
          "Valor promedio de una función",
          "Trabajo y aplicaciones físicas",
        ],
      },
    ],
  },
];

export function buscarTema(slug: string): Tema | undefined {
  return temas.find((tema) => tema.slug === slug);
}

export function buscarSeccion(
  tema: string,
  seccion: string,
): Seccion | undefined {
  return buscarTema(tema)?.secciones.find((s) => s.slug === seccion);
}
