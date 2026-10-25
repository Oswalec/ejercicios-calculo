---
titulo: "Discontinuidades de una función definida por partes"
tema: "continuidad"
seccion: "tipos-de-discontinuidad"
dificultad: "intermedio"
metodo: "Límites laterales en cada punto de cambio"
orden: 6
grafica:
  ubicacion: "solucion"
  x: [-2, 4]
  y: [-1, 6]
  curvas:
    - expr: "x^2"
      hasta: 0
      etiqueta: 'f(x)'
    - expr: "x + 1"
      desde: 0
      hasta: 2
      estilo: "principal"
    - expr: "5"
      desde: 2
      estilo: "principal"
  puntos:
    - { x: 0, y: 0, abierto: true }
    - { x: 0, y: 1, etiqueta: "(0, 1)" }
    - { x: 2, y: 3, abierto: true }
    - { x: 2, y: 5, etiqueta: "(2, 5)" }
  descripcion: "Tres tramos: parábola hasta x = 0, recta de (0, 1) a (2, 3) y valor constante 5 desde x = 2. Hay saltos en x = 0 y en x = 2."
---

## Enunciado

Estudia la continuidad de

$$
f(x) = \begin{cases} x^2, & x < 0 \\ x + 1, & 0 \le x < 2 \\ 5, & x \ge 2 \end{cases}
$$

## Solución

1. En cada tramo abierto la función es un polinomio o una constante, así que es continua. Solo hay que revisar los puntos de cambio $x = 0$ y $x = 2$.
2. En $x = 0$: $f(0) = 1$; $\displaystyle \lim_{x \to 0^-} x^2 = 0$ y $\displaystyle \lim_{x \to 0^+} (x + 1) = 1$. Límites laterales finitos y distintos: **salto** de magnitud $1$.
3. En $x = 2$: $f(2) = 5$; $\displaystyle \lim_{x \to 2^-} (x + 1) = 3$ y $\displaystyle \lim_{x \to 2^+} 5 = 5$. **Salto** de magnitud $2$.
4. En ambos puntos $f$ es continua por la derecha (el valor coincide con el límite derecho), pero no por la izquierda.

**Resultado final:** $f$ es continua en $\mathbb{R} \setminus \{0, 2\}$; tiene discontinuidades de salto en $x = 0$ y $x = 2$.
