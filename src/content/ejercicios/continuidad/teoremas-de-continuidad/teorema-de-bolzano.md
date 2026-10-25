---
titulo: "Existencia de una raíz con el teorema de Bolzano"
tema: "continuidad"
seccion: "teoremas-de-continuidad"
dificultad: "basico"
metodo: "Teorema de Bolzano"
orden: 1
grafica:
  ubicacion: "solucion"
  x: [-0.5, 1.5]
  y: [-1.5, 1.5]
  curvas:
    - expr: "x^3 - 3x + 1"
      etiqueta: 'f(x) = x^3 - 3x + 1'
  puntos:
    - { x: 0, y: 1, etiqueta: "(0, 1)" }
    - { x: 1, y: -1, etiqueta: "(1, −1)" }
  descripcion: "La curva pasa de (0, 1), por encima del eje x, a (1, -1), por debajo, y lo cruza entre 0 y 1."
---

## Enunciado

Demuestra que la ecuación $x^3 - 3x + 1 = 0$ tiene al menos una solución en $(0, 1)$.

## Solución

1. Teorema de Bolzano: si $f$ es continua en $[a, b]$ y $f(a)\,f(b) < 0$, existe $c \in (a, b)$ con $f(c) = 0$.
2. $f(x) = x^3 - 3x + 1$ es un polinomio, continuo en $[0, 1]$.
3. $f(0) = 1 > 0$ y $f(1) = 1 - 3 + 1 = -1 < 0$, así que $f(0)\,f(1) < 0$.
4. Por el teorema, existe $c \in (0, 1)$ con $c^3 - 3c + 1 = 0$.

**Resultado final:** La ecuación tiene al menos una solución en $(0, 1)$.
