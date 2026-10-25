---
titulo: "Pendiente de una recta secante"
tema: "derivadas"
seccion: "fundamentos"
dificultad: "basico"
metodo: "Cociente de incrementos"
orden: 1
grafica:
  ubicacion: "solucion"
  x: [-0.5, 4]
  y: [-1, 11]
  curvas:
    - expr: "x^2"
      etiqueta: 'f(x) = x^2'
    - expr: "4x - 3"
      etiqueta: 'secante: y = 4x - 3'
      estilo: "secundaria"
  puntos:
    - { x: 1, y: 1, etiqueta: "(1, 1)" }
    - { x: 3, y: 9, etiqueta: "(3, 9)" }
  descripcion: "La parábola y = x² y la recta secante que pasa por (1, 1) y (3, 9), con pendiente 4."
---

## Enunciado

Halla la pendiente de la recta secante a $f(x) = x^2$ que pasa por los puntos de abscisas $x = 1$ y $x = 3$, y escribe su ecuación.

## Solución

1. La pendiente de la secante entre $(a, f(a))$ y $(b, f(b))$ es el cociente de incrementos $m = \frac{f(b) - f(a)}{b - a}$.
2. $f(1) = 1$ y $f(3) = 9$, así que $m = \frac{9 - 1}{3 - 1} = 4$.
3. Ecuación punto-pendiente con $(1, 1)$: $y - 1 = 4(x - 1)$, es decir, $y = 4x - 3$.
4. Comprobación con el otro punto: $4(3) - 3 = 9$.

**Resultado final:** La pendiente es $4$ y la secante es $y = 4x - 3$.
