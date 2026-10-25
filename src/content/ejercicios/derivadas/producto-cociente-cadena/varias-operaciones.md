---
titulo: "Derivada de x por una raíz compuesta"
tema: "derivadas"
seccion: "producto-cociente-cadena"
dificultad: "intermedio"
metodo: "Regla del producto, regla de la cadena y denominador común"
orden: 9
---

## Enunciado

Deriva y simplifica $f(x) = x\sqrt{1 - x^2}$, para $-1 < x < 1$.

## Solución

1. Regla del producto con $u = x$ y $v = \sqrt{1 - x^2}$: $f' = u'v + uv'$.
2. $u' = 1$. Por la cadena: $v' = \frac{1}{2\sqrt{1 - x^2}} \cdot (-2x) = \frac{-x}{\sqrt{1 - x^2}}$.
3. $f'(x) = \sqrt{1 - x^2} - \frac{x^2}{\sqrt{1 - x^2}}$.
4. Con denominador común $\sqrt{1 - x^2}$: $f'(x) = \frac{(1 - x^2) - x^2}{\sqrt{1 - x^2}} = \frac{1 - 2x^2}{\sqrt{1 - x^2}}$.

**Resultado final:** $f'(x) = \dfrac{1 - 2x^2}{\sqrt{1 - x^2}}$
