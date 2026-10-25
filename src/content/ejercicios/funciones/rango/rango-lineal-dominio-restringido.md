---
titulo: "Rango de una función lineal con dominio restringido"
tema: "funciones"
seccion: "rango"
dificultad: "basico"
metodo: "Monotonía de la función lineal"
orden: 1
---

## Enunciado

Halla el rango de $f(x) = 3x - 2$ con dominio $[-1, 4]$.

## Solución

1. La pendiente es $3 > 0$, así que $f$ es creciente: el menor valor se alcanza en el extremo izquierdo y el mayor en el derecho.
2. $f(-1) = -3 - 2 = -5$ y $f(4) = 12 - 2 = 10$.
3. Partiendo de $-1 \le x \le 4$: multiplicamos por $3$, $-3 \le 3x \le 12$, y restamos $2$: $-5 \le 3x - 2 \le 10$.
4. Todo $y \in [-5, 10]$ se alcanza: $x = \frac{y + 2}{3}$ cumple $f(x) = y$, y como $-3 \le y + 2 \le 12$, ese $x$ está en $[-1, 4]$.

**Resultado final:** $\operatorname{Ran} f = [-5, 10]$
