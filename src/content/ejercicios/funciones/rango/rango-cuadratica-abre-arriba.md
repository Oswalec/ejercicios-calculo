---
titulo: "Rango de una cuadrática que abre hacia arriba"
tema: "funciones"
seccion: "rango"
dificultad: "basico"
metodo: "Completación de cuadrados"
orden: 2
---

## Enunciado

Halla el rango de

$$
f(x) = x^2 - 6x + 11
$$

## Solución

1. Completamos cuadrados: $x^2 - 6x + 11 = (x^2 - 6x + 9) + 2 = (x - 3)^2 + 2$.
2. Para todo $x$ real se cumple $(x - 3)^2 \ge 0$, así que $f(x) \ge 2$.
3. El valor $2$ se alcanza en $x = 3$ (vértice $(3, 2)$).
4. Todo valor $y \ge 2$ se alcanza: basta resolver $(x - 3)^2 = y - 2$, que tiene solución $x = 3 + \sqrt{y - 2}$.

**Resultado final:** $\operatorname{Ran} f = [2, \infty)$
