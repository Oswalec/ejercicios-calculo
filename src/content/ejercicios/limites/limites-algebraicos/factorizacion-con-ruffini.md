---
titulo: "Factor repetido hallado con Ruffini"
tema: "limites"
seccion: "limites-algebraicos"
dificultad: "intermedio"
metodo: "Factorización por división sintética (Ruffini)"
orden: 4
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 1} \frac{x^3 - 3x + 2}{x^3 - x^2 - x + 1}
$$

## Solución

1. Al sustituir $x = 1$: numerador $1 - 3 + 2 = 0$ y denominador $1 - 1 - 1 + 1 = 0$. Es una indeterminación $\frac{0}{0}$.
2. Numerador: dividiendo $x^3 - 3x + 2$ entre $x - 1$ por Ruffini (coeficientes $1, 0, -3, 2$) se obtiene $x^2 + x - 2 = (x - 1)(x + 2)$. Entonces $x^3 - 3x + 2 = (x - 1)^2(x + 2)$.
3. Denominador: agrupamos, $x^3 - x^2 - x + 1 = x^2(x - 1) - (x - 1) = (x - 1)(x^2 - 1) = (x - 1)^2(x + 1)$.
4. Para $x \neq 1$ simplificamos el factor común $(x - 1)^2$: $\frac{(x - 1)^2(x + 2)}{(x - 1)^2(x + 1)} = \frac{x + 2}{x + 1}$.
5. La expresión es continua en $x = 1$: $\frac{1 + 2}{1 + 1} = \frac{3}{2}$.

**Resultado final:** $\displaystyle \lim_{x \to 1} \frac{x^3 - 3x + 2}{x^3 - x^2 - x + 1} = \frac{3}{2}$
