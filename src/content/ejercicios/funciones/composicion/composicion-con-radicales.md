---
titulo: "Composición con radicales en ambos órdenes"
tema: "funciones"
seccion: "composicion"
dificultad: "intermedio"
metodo: "Composición y dominio de la compuesta"
orden: 4
---

## Enunciado

Sean $f(x) = \sqrt{x}$ y $g(x) = 4 - x^2$. Halla $f \circ g$ y $g \circ f$ con sus dominios.

## Solución

1. $(f \circ g)(x) = \sqrt{4 - x^2}$. Se necesita $x \in \operatorname{Dom} g = \mathbb{R}$ y $g(x) \ge 0$: $4 - x^2 \ge 0$, es decir, $-2 \le x \le 2$.
2. $(g \circ f)(x) = g(\sqrt{x}) = 4 - (\sqrt{x})^2$. Se necesita $x \in \operatorname{Dom} f = [0, \infty)$.
3. Para $x \ge 0$ se cumple $(\sqrt{x})^2 = x$, así que $(g \circ f)(x) = 4 - x$.
4. Aunque $4 - x$ esté definida para todo real, el dominio de $g \circ f$ es $[0, \infty)$, heredado de $f$.

**Resultado final:** $(f \circ g)(x) = \sqrt{4 - x^2}$ con dominio $[-2, 2]$; $(g \circ f)(x) = 4 - x$ con dominio $[0, \infty)$.
