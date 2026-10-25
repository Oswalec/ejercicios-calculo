---
titulo: "La composición no es conmutativa"
tema: "funciones"
seccion: "composicion"
dificultad: "basico"
metodo: "Definición (f ∘ g)(x) = f(g(x))"
orden: 1
---

## Enunciado

Sean $f(x) = 2x + 1$ y $g(x) = x^2$. Halla $(f \circ g)(x)$ y $(g \circ f)(x)$ y compáralas.

## Solución

1. Por definición, $(f \circ g)(x) = f(g(x))$: primero se aplica $g$ y luego $f$.
2. $(f \circ g)(x) = f(x^2) = 2x^2 + 1$.
3. $(g \circ f)(x) = g(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1$.
4. Las expresiones son distintas; por ejemplo, en $x = 1$: $(f \circ g)(1) = 3$ y $(g \circ f)(1) = 9$. En general $f \circ g \neq g \circ f$.

**Resultado final:** $(f \circ g)(x) = 2x^2 + 1$ y $(g \circ f)(x) = 4x^2 + 4x + 1$; son distintas.
