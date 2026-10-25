---
titulo: "Escribir la ecuación a partir de las transformaciones"
tema: "funciones"
seccion: "transformaciones-graficas"
dificultad: "intermedio"
metodo: "Composición de transformaciones sobre |x|"
orden: 9
grafica:
  ubicacion: "solucion"
  x: [-9, 5]
  y: [-3, 7]
  curvas:
    - expr: "abs(x)"
      etiqueta: 'f(x) = |x|'
      estilo: "referencia"
    - expr: "-abs(x + 2) + 5"
      etiqueta: 'g(x) = -|x + 2| + 5'
  puntos:
    - { x: -2, y: 5, etiqueta: "(−2, 5)" }
    - { x: -7, y: 0, etiqueta: "(−7, 0)" }
    - { x: 3, y: 0, etiqueta: "(3, 0)" }
  descripcion: "g es una V invertida con vértice en (-2, 5) que corta al eje x en (-7, 0) y (3, 0)."
---

## Enunciado

La gráfica de $f(x) = |x|$ se traslada $2$ unidades a la izquierda, se refleja respecto del eje $x$ y se traslada $5$ unidades hacia arriba. Escribe la nueva función $g$, su vértice y sus intersecciones con el eje $x$.

## Solución

1. Izquierda $2$: $|x + 2|$. Reflexión en el eje $x$: $-|x + 2|$. Arriba $5$: $g(x) = -|x + 2| + 5$.
2. El vértice pasa de $(0, 0)$ a $(-2, 5)$; la gráfica es una «V» invertida, con máximo $5$.
3. Intersecciones con el eje $x$: $-|x + 2| + 5 = 0$, es decir, $|x + 2| = 5$.
4. Entonces $x + 2 = 5$ o $x + 2 = -5$, de donde $x = 3$ o $x = -7$.

**Resultado final:** $g(x) = -|x + 2| + 5$, con vértice $(-2, 5)$; corta al eje $x$ en $(-7, 0)$ y $(3, 0)$.
