---
titulo: "Factores repetidos en numerador y denominador"
tema: "limites"
seccion: "limites-algebraicos"
dificultad: "avanzado"
metodo: "Factorización por agrupación y trinomio cuadrado perfecto"
orden: 10
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 2} \frac{x^3 - 2x^2 - 4x + 8}{x^4 - 8x^2 + 16}
$$

## Solución

1. Al sustituir $x = 2$: numerador $8 - 8 - 8 + 8 = 0$ y denominador $16 - 32 + 16 = 0$. Es una indeterminación $\frac{0}{0}$.
2. Numerador por agrupación: $x^3 - 2x^2 - 4x + 8 = x^2(x - 2) - 4(x - 2) = (x - 2)(x^2 - 4) = (x - 2)^2(x + 2)$.
3. Denominador como trinomio cuadrado perfecto en $x^2$: $x^4 - 8x^2 + 16 = (x^2 - 4)^2 = (x - 2)^2(x + 2)^2$.
4. Para $x \neq 2$ (y cerca de $2$, donde $x + 2 \neq 0$) simplificamos: $\frac{(x - 2)^2(x + 2)}{(x - 2)^2(x + 2)^2} = \frac{1}{x + 2}$.
5. Sustituimos $x = 2$: $\frac{1}{2 + 2} = \frac{1}{4}$.

**Resultado final:** $\displaystyle \lim_{x \to 2} \frac{x^3 - 2x^2 - 4x + 8}{x^4 - 8x^2 + 16} = \frac{1}{4}$
