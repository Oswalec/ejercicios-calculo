---
titulo: "Combinación de transformaciones en una parábola"
tema: "funciones"
seccion: "transformaciones-graficas"
dificultad: "intermedio"
metodo: "Combinación de transformaciones en orden"
orden: 6
grafica:
  ubicacion: "solucion"
  x: [-4, 3]
  y: [-5, 5]
  curvas:
    - expr: "x^2"
      etiqueta: 'f(x) = x^2'
      estilo: "referencia"
    - expr: "-2(x + 1)^2 + 3"
      etiqueta: 'g(x) = -2(x + 1)^2 + 3'
  puntos:
    - { x: -1, y: 3, etiqueta: "(−1, 3)" }
  descripcion: "g es una parábola que abre hacia abajo, más estrecha que f, con vértice en (-1, 3)."
---

## Enunciado

Describe cómo se obtiene la gráfica de $g(x) = -2(x + 1)^2 + 3$ a partir de $f(x) = x^2$. Indica su vértice, su orientación y su rango.

## Solución

1. $(x + 1)^2 = f(x + 1)$: traslación de $1$ unidad hacia la **izquierda**.
2. $2(x + 1)^2$: estiramiento vertical de factor $2$.
3. $-2(x + 1)^2$: reflexión respecto del eje $x$, así que la parábola abre hacia abajo.
4. $-2(x + 1)^2 + 3$: traslación de $3$ unidades hacia **arriba**.
5. El vértice pasa de $(0, 0)$ a $(-1, 3)$. Como abre hacia abajo, $g(x) \le 3$ y el rango es $(-\infty, 3]$.

**Resultado final:** Izquierda $1$, estiramiento $\times 2$, reflexión en el eje $x$ y arriba $3$; vértice $(-1, 3)$, abre hacia abajo, rango $(-\infty, 3]$.
