---
titulo: "Dominio de una función compuesta"
tema: "funciones"
seccion: "dominio"
dificultad: "intermedio"
metodo: "Condición x ∈ Dom g y g(x) ∈ Dom f"
orden: 7
---

## Enunciado

Sean $f(x) = \sqrt{x}$ y $g(x) = \dfrac{1}{x - 2}$. Halla el dominio de $f \circ g$.

## Solución

1. $\operatorname{Dom}(f \circ g) = \{x \in \operatorname{Dom} g : g(x) \in \operatorname{Dom} f\}$.
2. $\operatorname{Dom} g = \mathbb{R} \setminus \{2\}$ y $\operatorname{Dom} f = [0, \infty)$.
3. Necesitamos $g(x) \ge 0$: $\frac{1}{x - 2} \ge 0$. Una fracción con numerador $1 > 0$ es positiva cuando el denominador es positivo, y nunca vale $0$. Entonces $x - 2 > 0$, es decir, $x > 2$.
4. Además $x \neq 2$, que ya está incluido.

**Resultado final:** $\operatorname{Dom}(f \circ g) = (2, \infty)$, y $(f \circ g)(x) = \dfrac{1}{\sqrt{x - 2}}$
