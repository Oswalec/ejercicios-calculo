---
titulo: "Traslación horizontal f(x − h)"
tema: "funciones"
seccion: "transformaciones-graficas"
dificultad: "basico"
metodo: "Traslación horizontal"
orden: 2
grafica:
  ubicacion: "solucion"
  x: [-3, 7]
  y: [-1, 9]
  curvas:
    - expr: "x^2"
      etiqueta: 'f(x) = x^2'
      estilo: "referencia"
    - expr: "(x - 4)^2"
      etiqueta: 'g(x) = (x - 4)^2'
  puntos:
    - { x: 0, y: 0, etiqueta: "(0, 0)" }
    - { x: 4, y: 0, etiqueta: "(4, 0)" }
  descripcion: "La parábola g es la parábola f desplazada 4 unidades a la derecha; el vértice pasa de (0, 0) a (4, 0)."
---

## Enunciado

Sea $f(x) = x^2$. Describe la gráfica de $g(x) = (x - 4)^2$ respecto de la de $f$.

## Solución

1. $g(x) = f(x - 4)$. El valor que $f$ toma en $0$, $g$ lo toma cuando $x - 4 = 0$, es decir, en $x = 4$.
2. Por eso la gráfica se traslada $4$ unidades **hacia la derecha**: cada punto $(x, y)$ pasa a $(x + 4, y)$.
3. El signo engaña: $f(x - h)$ con $h > 0$ desplaza a la derecha, no a la izquierda.
4. El vértice pasa de $(0, 0)$ a $(4, 0)$; el rango no cambia.

**Resultado final:** La gráfica de $g$ es la de $f$ trasladada $4$ unidades hacia la derecha, con vértice en $(4, 0)$.
