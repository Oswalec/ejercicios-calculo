---
titulo: "Indeterminación con una fracción compleja"
tema: "limites"
seccion: "limites-algebraicos"
dificultad: "intermedio"
metodo: "Simplificación de fracciones complejas"
orden: 6
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 2} \frac{\frac{1}{x} - \frac{1}{2}}{x - 2}
$$

## Solución

1. Al sustituir $x = 2$: numerador $\frac{1}{2} - \frac{1}{2} = 0$ y denominador $0$. Es una indeterminación $\frac{0}{0}$.
2. Restamos las fracciones del numerador con denominador común $2x$: $\frac{1}{x} - \frac{1}{2} = \frac{2 - x}{2x}$.
3. La expresión queda $\frac{2 - x}{2x(x - 2)}$. Como $2 - x = -(x - 2)$, para $x \neq 2$: $\frac{-(x - 2)}{2x(x - 2)} = -\frac{1}{2x}$.
4. Esta expresión es continua en $x = 2$ (pues $x \neq 0$ allí): $-\frac{1}{2(2)} = -\frac{1}{4}$.

**Resultado final:** $\displaystyle \lim_{x \to 2} \frac{\frac{1}{x} - \frac{1}{2}}{x - 2} = -\frac{1}{4}$
