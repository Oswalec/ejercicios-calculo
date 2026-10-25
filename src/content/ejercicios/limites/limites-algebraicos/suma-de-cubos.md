---
titulo: "Indeterminación 0/0 con suma de cubos"
tema: "limites"
seccion: "limites-algebraicos"
dificultad: "basico"
metodo: "Factorización por suma de cubos"
orden: 3
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to -1} \frac{x^3 + 1}{x + 1}
$$

## Solución

1. Al sustituir $x = -1$: numerador $-1 + 1 = 0$ y denominador $0$. Es una indeterminación $\frac{0}{0}$.
2. Usamos la suma de cubos $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$ con $a = x$ y $b = 1$: $x^3 + 1 = (x + 1)(x^2 - x + 1)$.
3. Para $x \neq -1$ simplificamos: $\frac{(x + 1)(x^2 - x + 1)}{x + 1} = x^2 - x + 1$.
4. El polinomio es continuo, así que sustituimos: $(-1)^2 - (-1) + 1 = 1 + 1 + 1 = 3$.

**Resultado final:** $\displaystyle \lim_{x \to -1} \frac{x^3 + 1}{x + 1} = 3$
