---
titulo: "Ecuación de la recta normal"
tema: "derivadas"
seccion: "aplicaciones-geometricas"
dificultad: "basico"
metodo: "Pendiente perpendicular −1/f'(a)"
orden: 3
grafica:
  ubicacion: "solucion"
  x: [-2, 3]
  y: [-1, 4]
  curvas:
    - expr: "x^2"
      etiqueta: 'f(x) = x^2'
    - expr: "-x/2 + 3/2"
      etiqueta: 'normal: y = -\tfrac{1}{2}x + \tfrac{3}{2}'
      estilo: "secundaria"
    - expr: "2x - 1"
      etiqueta: 'tangente: y = 2x - 1'
      estilo: "referencia"
  puntos:
    - { x: 1, y: 1, etiqueta: "(1, 1)" }
  descripcion: "La parábola y = x², su tangente en (1, 1) con pendiente 2 y la recta normal, perpendicular a ella, con pendiente -1/2."
---

## Enunciado

Halla la ecuación de la recta normal a $f(x) = x^2$ en el punto $(1, 1)$.

## Solución

1. La recta normal es perpendicular a la tangente en el punto de tangencia. Si la tangente tiene pendiente $m \neq 0$, la normal tiene pendiente $-\frac{1}{m}$.
2. $f'(x) = 2x$, así que la pendiente de la tangente es $f'(1) = 2$.
3. Pendiente de la normal: $-\frac{1}{2}$.
4. Ecuación punto-pendiente: $y - 1 = -\frac{1}{2}(x - 1)$, es decir, $y = -\frac{1}{2}x + \frac{3}{2}$.

**Resultado final:** Recta normal: $y = -\dfrac{1}{2}x + \dfrac{3}{2}$
