---
titulo: "Evaluación de una función definida por partes"
tema: "funciones"
seccion: "tipos-de-funciones"
dificultad: "basico"
metodo: "Selección del tramo según el valor de x"
orden: 9
---

## Enunciado

Sea

$$
f(x) = \begin{cases} x^2 + 1, & x < 0 \\ 3, & 0 \le x \le 2 \\ 7 - 2x, & x > 2 \end{cases}
$$

Calcula $f(-3)$, $f(0)$, $f(2)$ y $f(4)$.

## Solución

1. Para cada valor se elige el tramo cuya condición cumple $x$, y solo ese.
2. $x = -3 < 0$: primer tramo, $f(-3) = 9 + 1 = 10$.
3. $x = 0$ cumple $0 \le x \le 2$: segundo tramo, $f(0) = 3$. Lo mismo para $x = 2$: $f(2) = 3$.
4. $x = 4 > 2$: tercer tramo, $f(4) = 7 - 8 = -1$.

**Resultado final:** $f(-3) = 10$, $f(0) = 3$, $f(2) = 3$, $f(4) = -1$.
