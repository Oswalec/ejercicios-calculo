---
titulo: "Dominio de una compuesta que exige una inecuación racional"
tema: "funciones"
seccion: "composicion"
dificultad: "avanzado"
metodo: "Condición g(x) ∈ Dom f e inecuación racional"
orden: 7
---

## Enunciado

Sean $f(x) = \sqrt{x - 1}$ y $g(x) = \dfrac{1}{x - 3}$. Halla el dominio de $f \circ g$.

## Solución

1. $(f \circ g)(x) = \sqrt{\frac{1}{x - 3} - 1}$. Se necesita $x \neq 3$ (dominio de $g$) y $g(x) \ge 1$ (dominio de $f$).
2. Resolvemos $\frac{1}{x - 3} - 1 \ge 0$ escribiéndolo con un solo denominador: $\frac{1 - (x - 3)}{x - 3} = \frac{4 - x}{x - 3} \ge 0$.
3. Puntos críticos: $x = 4$ (anula el numerador) y $x = 3$ (anula el denominador; se excluye).
4. Signo del cociente: si $x < 3$, numerador positivo y denominador negativo, cociente negativo; si $3 < x < 4$, ambos positivos, cociente positivo; si $x > 4$, numerador negativo y denominador positivo, cociente negativo. En $x = 4$ vale $0$ y se incluye.
5. La solución es $3 < x \le 4$. No se puede multiplicar directamente por $x - 3$, porque su signo cambia.

**Resultado final:** $\operatorname{Dom}(f \circ g) = (3, 4]$
