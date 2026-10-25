---
titulo: "∞/∞ de igual grado cuando x tiende a −∞"
tema: "limites"
seccion: "infinito-entre-infinito"
dificultad: "basico"
metodo: "División por la mayor potencia de x"
orden: 2
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to -\infty} \frac{5x^2 + 1}{1 - 3x^2}
$$

## Solución

1. Cuando $x \to -\infty$: el numerador tiende a $+\infty$ y el denominador a $-\infty$. Es una indeterminación del tipo $\frac{\infty}{\infty}$.
2. Dividimos entre $x^2$ (positivo para $x \neq 0$): $\frac{5 + \frac{1}{x^2}}{\frac{1}{x^2} - 3}$.
3. Cuando $x \to -\infty$, $\frac{1}{x^2} \to 0$.
4. El límite es $\frac{5}{-3} = -\frac{5}{3}$.

**Resultado final:** $\displaystyle \lim_{x \to -\infty} \frac{5x^2 + 1}{1 - 3x^2} = -\frac{5}{3}$
