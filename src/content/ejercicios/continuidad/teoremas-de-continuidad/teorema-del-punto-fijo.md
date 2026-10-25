---
titulo: "Existencia de un punto fijo"
tema: "continuidad"
seccion: "teoremas-de-continuidad"
dificultad: "avanzado"
metodo: "Teorema de Bolzano aplicado a g(x) = f(x) − x"
orden: 10
---

## Enunciado

Sea $f\colon [0, 1] \to [0, 1]$ continua. Demuestra que existe $c \in [0, 1]$ tal que $f(c) = c$ (un punto fijo).

## Solución

1. Definimos $g(x) = f(x) - x$, continua en $[0, 1]$ por ser diferencia de funciones continuas. Un punto fijo de $f$ es un cero de $g$.
2. Como $f(0) \in [0, 1]$: $g(0) = f(0) - 0 \ge 0$. Como $f(1) \in [0, 1]$: $g(1) = f(1) - 1 \le 0$.
3. Si $g(0) = 0$ o $g(1) = 0$, el punto fijo es $c = 0$ o $c = 1$.
4. Si no, $g(0) > 0$ y $g(1) < 0$, y por el teorema de Bolzano existe $c \in (0, 1)$ con $g(c) = 0$, es decir, $f(c) = c$.
5. Ejemplo: con $f(x) = \cos x$, que lleva $[0, 1]$ en $[\cos 1, 1] \subset [0, 1]$, existe $c$ con $\cos c = c$.

**Resultado final:** Toda función continua de $[0, 1]$ en $[0, 1]$ tiene al menos un punto fijo.
