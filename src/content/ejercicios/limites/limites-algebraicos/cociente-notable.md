---
titulo: "Indeterminación 0/0 con un cociente notable"
tema: "limites"
seccion: "limites-algebraicos"
dificultad: "intermedio"
metodo: "Cociente notable"
orden: 8
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 1} \frac{x^5 - 1}{x - 1}
$$

## Solución

1. Al sustituir $x = 1$: numerador $1 - 1 = 0$ y denominador $0$. Es una indeterminación $\frac{0}{0}$.
2. Usamos el cociente notable $x^n - 1 = (x - 1)(x^{n-1} + x^{n-2} + \cdots + x + 1)$ con $n = 5$: $x^5 - 1 = (x - 1)(x^4 + x^3 + x^2 + x + 1)$.
3. Comprobación: al multiplicar $(x - 1)(x^4 + x^3 + x^2 + x + 1)$, los términos intermedios se cancelan y queda $x^5 - 1$.
4. Para $x \neq 1$ simplificamos: $\frac{x^5 - 1}{x - 1} = x^4 + x^3 + x^2 + x + 1$.
5. Sustituimos $x = 1$: $1 + 1 + 1 + 1 + 1 = 5$.

**Resultado final:** $\displaystyle \lim_{x \to 1} \frac{x^5 - 1}{x - 1} = 5$
