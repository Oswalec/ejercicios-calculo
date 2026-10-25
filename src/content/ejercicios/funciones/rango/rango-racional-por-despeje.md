---
titulo: "Rango de una función racional por despeje"
tema: "funciones"
seccion: "rango"
dificultad: "intermedio"
metodo: "Despeje de x en función de y"
orden: 4
---

## Enunciado

Halla el rango de

$$
f(x) = \frac{2x + 1}{x - 3}
$$

## Solución

1. Un valor $y$ está en el rango si la ecuación $y = \frac{2x + 1}{x - 3}$ tiene solución con $x \neq 3$.
2. Multiplicamos por $x - 3$: $y(x - 3) = 2x + 1$, es decir, $yx - 3y = 2x + 1$.
3. Agrupamos los términos con $x$: $x(y - 2) = 3y + 1$. Si $y \neq 2$: $x = \frac{3y + 1}{y - 2}$.
4. Ese $x$ nunca vale $3$: si $\frac{3y + 1}{y - 2} = 3$, entonces $3y + 1 = 3y - 6$, lo cual es imposible.
5. Si $y = 2$, la ecuación queda $0 \cdot x = 7$, que no tiene solución. Por lo tanto $2$ no está en el rango.

**Resultado final:** $\operatorname{Ran} f = \mathbb{R} \setminus \{2\}$
