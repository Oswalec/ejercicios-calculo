---
titulo: "Composición de exponencial y logaritmo"
tema: "funciones"
seccion: "composicion"
dificultad: "intermedio"
metodo: "Propiedades e^(ln u) = u y dominio de la compuesta"
orden: 5
---

## Enunciado

Sean $f(x) = e^{x}$ y $g(x) = \ln(x + 1)$. Halla $f \circ g$ y $g \circ f$ con sus dominios.

## Solución

1. $(f \circ g)(x) = e^{\ln(x + 1)}$. Se necesita $x \in \operatorname{Dom} g$: $x + 1 > 0$, es decir, $x > -1$. Como $f$ está definida en todo $\mathbb{R}$, no hay más restricciones.
2. Como $e^{\ln u} = u$ para $u > 0$: $(f \circ g)(x) = x + 1$ para $x > -1$.
3. $(g \circ f)(x) = \ln(e^{x} + 1)$. Se necesita $e^{x} + 1 > 0$, lo que se cumple para todo $x$ porque $e^{x} > 0$.
4. Por lo tanto $\operatorname{Dom}(g \circ f) = \mathbb{R}$.

**Resultado final:** $(f \circ g)(x) = x + 1$ con dominio $(-1, \infty)$; $(g \circ f)(x) = \ln(e^{x} + 1)$ con dominio $\mathbb{R}$.
