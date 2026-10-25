---
titulo: "Fracción compleja con variable en el denominador"
tema: "limites"
seccion: "limites-algebraicos"
dificultad: "intermedio"
metodo: "Simplificación de fracciones complejas"
orden: 9
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{\frac{1}{x + 4} - \frac{1}{4}}{x}
$$

## Solución

1. Al sustituir $x = 0$: numerador $\frac{1}{4} - \frac{1}{4} = 0$ y denominador $0$. Es una indeterminación $\frac{0}{0}$.
2. Restamos las fracciones del numerador con denominador común $4(x + 4)$: $\frac{1}{x + 4} - \frac{1}{4} = \frac{4 - (x + 4)}{4(x + 4)} = \frac{-x}{4(x + 4)}$.
3. Dividimos entre $x$: $\frac{-x}{4x(x + 4)}$, y para $x \neq 0$ simplificamos: $-\frac{1}{4(x + 4)}$.
4. La expresión es continua en $x = 0$: $-\frac{1}{4(0 + 4)} = -\frac{1}{16}$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{\frac{1}{x + 4} - \frac{1}{4}}{x} = -\frac{1}{16}$
