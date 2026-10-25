---
titulo: "Teorema del valor intermedio para un valor dado"
tema: "continuidad"
seccion: "teoremas-de-continuidad"
dificultad: "intermedio"
metodo: "Teorema del valor intermedio"
orden: 2
---

## Enunciado

Demuestra que existe $c \in (0, \pi)$ tal que $c^2 + \cos c = 2$.

## Solución

1. Teorema del valor intermedio: si $f$ es continua en $[a, b]$ y $k$ está entre $f(a)$ y $f(b)$, existe $c \in (a, b)$ con $f(c) = k$.
2. $f(x) = x^2 + \cos x$ es suma de funciones continuas, así que es continua en $[0, \pi]$.
3. $f(0) = 0 + 1 = 1$ y $f(\pi) = \pi^2 - 1$. Como $\pi > 3$, $\pi^2 - 1 > 8$.
4. El valor $k = 2$ cumple $1 < 2 < \pi^2 - 1$. Por el teorema, existe $c \in (0, \pi)$ con $f(c) = 2$.

**Resultado final:** Existe $c \in (0, \pi)$ con $c^2 + \cos c = 2$.
