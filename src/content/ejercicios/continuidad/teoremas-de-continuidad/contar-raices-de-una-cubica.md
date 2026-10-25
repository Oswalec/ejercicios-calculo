---
titulo: "Contar las raíces reales de una cúbica"
tema: "continuidad"
seccion: "teoremas-de-continuidad"
dificultad: "avanzado"
metodo: "Bolzano en varios intervalos y cota del número de raíces"
orden: 4
grafica:
  ubicacion: "solucion"
  x: [-3.5, 3.5]
  y: [-10, 12]
  curvas:
    - expr: "x^3 - 6x + 2"
      etiqueta: 'p(x) = x^3 - 6x + 2'
  puntos:
    - { x: -3, y: -7 }
    - { x: 0, y: 2 }
    - { x: 1, y: -3 }
    - { x: 3, y: 11 }
  descripcion: "La cúbica cruza el eje x tres veces: entre -3 y 0, entre 0 y 1, y entre 1 y 3."
---

## Enunciado

Demuestra que $p(x) = x^3 - 6x + 2$ tiene exactamente tres raíces reales.

## Solución

1. $p$ es un polinomio, continuo en $\mathbb{R}$. Evaluamos en algunos puntos: $p(-3) = -27 + 18 + 2 = -7$, $p(0) = 2$, $p(1) = 1 - 6 + 2 = -3$ y $p(3) = 27 - 18 + 2 = 11$.
2. Hay cambios de signo en $[-3, 0]$, en $[0, 1]$ y en $[1, 3]$.
3. Por el teorema de Bolzano, hay al menos una raíz en cada uno de los intervalos $(-3, 0)$, $(0, 1)$ y $(1, 3)$. Como son disjuntos, hay al menos tres raíces distintas.
4. Un polinomio de grado $3$ tiene a lo sumo $3$ raíces reales.
5. Por lo tanto, tiene exactamente tres.

**Resultado final:** $p$ tiene exactamente tres raíces reales, una en cada intervalo $(-3, 0)$, $(0, 1)$ y $(1, 3)$.
