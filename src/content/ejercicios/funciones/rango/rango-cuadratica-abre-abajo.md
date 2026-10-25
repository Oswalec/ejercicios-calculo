---
titulo: "Rango de una cuadrática que abre hacia abajo"
tema: "funciones"
seccion: "rango"
dificultad: "basico"
metodo: "Completación de cuadrados"
orden: 3
---

## Enunciado

Halla el rango de

$$
f(x) = -2x^2 + 8x - 3
$$

## Solución

1. Factorizamos $-2$ en los términos con $x$: $f(x) = -2(x^2 - 4x) - 3$.
2. Completamos cuadrados dentro del paréntesis: $x^2 - 4x = (x - 2)^2 - 4$. Entonces $f(x) = -2(x - 2)^2 + 8 - 3 = -2(x - 2)^2 + 5$.
3. Como $-2(x - 2)^2 \le 0$, se cumple $f(x) \le 5$, con igualdad en $x = 2$ (vértice $(2, 5)$).
4. Todo $y \le 5$ se alcanza: $(x - 2)^2 = \frac{5 - y}{2}$ tiene solución cuando $5 - y \ge 0$.

**Resultado final:** $\operatorname{Ran} f = (-\infty, 5]$
