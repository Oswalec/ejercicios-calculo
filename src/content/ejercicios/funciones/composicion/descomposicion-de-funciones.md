---
titulo: "Descomposición de una función como compuesta"
tema: "funciones"
seccion: "composicion"
dificultad: "basico"
metodo: "Identificación de la función interior y la exterior"
orden: 9
---

## Enunciado

Expresa cada función como una composición $f \circ g$ de dos funciones más simples:

$$
H(x) = \sqrt{3x^2 + 1}, \qquad K(x) = e^{\cos x}
$$

## Solución

1. Se identifica la operación que se hace **primero** (función interior $g$) y la que se hace **al final** (función exterior $f$).
2. En $H$: primero se calcula $3x^2 + 1$ y luego se saca la raíz. Tomamos $g(x) = 3x^2 + 1$ y $f(u) = \sqrt{u}$. Comprobación: $f(g(x)) = \sqrt{3x^2 + 1}$.
3. En $K$: primero se calcula $\cos x$ y luego la exponencial. Tomamos $g(x) = \cos x$ y $f(u) = e^{u}$. Comprobación: $f(g(x)) = e^{\cos x}$.
4. La descomposición no es única, pero esta es la más natural y es la que se usa con la regla de la cadena.

**Resultado final:** $H = f \circ g$ con $g(x) = 3x^2 + 1$, $f(u) = \sqrt{u}$; $K = f \circ g$ con $g(x) = \cos x$, $f(u) = e^{u}$.
