---
titulo: "Traslación vertical f(x) + k"
tema: "funciones"
seccion: "transformaciones-graficas"
dificultad: "basico"
metodo: "Traslación vertical"
orden: 1
grafica:
  ubicacion: "solucion"
  x: [-4, 4]
  y: [-1, 11]
  curvas:
    - expr: "x^2"
      etiqueta: 'f(x) = x^2'
      estilo: "referencia"
    - expr: "x^2 + 3"
      etiqueta: 'g(x) = x^2 + 3'
  puntos:
    - { x: 2, y: 4, etiqueta: "(2, 4)" }
    - { x: 2, y: 7, etiqueta: "(2, 7)" }
  descripcion: "La parábola g es la parábola f desplazada 3 unidades hacia arriba; el punto (2, 4) pasa a (2, 7)."
---

## Enunciado

Sea $f(x) = x^2$. Describe la gráfica de $g(x) = x^2 + 3$ respecto de la de $f$ e indica a qué punto va $(2, 4)$.

## Solución

1. $g(x) = f(x) + 3$: a cada valor de la función se le suma $3$, con el mismo $x$.
2. Eso traslada la gráfica $3$ unidades **hacia arriba**: cada punto $(x, y)$ pasa a $(x, y + 3)$.
3. El punto $(2, 4)$ de $f$ pasa a $(2, 7)$, y en efecto $g(2) = 4 + 3 = 7$.
4. El vértice pasa de $(0, 0)$ a $(0, 3)$, y el rango cambia de $[0, \infty)$ a $[3, \infty)$.

**Resultado final:** La gráfica de $g$ es la de $f$ trasladada $3$ unidades hacia arriba; $(2, 4) \mapsto (2, 7)$.
