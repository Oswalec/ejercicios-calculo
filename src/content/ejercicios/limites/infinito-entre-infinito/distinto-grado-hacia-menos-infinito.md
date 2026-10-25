---
titulo: "∞/∞ de distinto grado cuando x tiende a −∞"
tema: "limites"
seccion: "infinito-entre-infinito"
dificultad: "intermedio"
metodo: "División por la mayor potencia del denominador y análisis del signo"
orden: 5
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to -\infty} \frac{2x^3 + x}{x^2 - 1}
$$

## Solución

1. Cuando $x \to -\infty$: el numerador tiende a $-\infty$ y el denominador a $+\infty$. Es una indeterminación del tipo $\frac{\infty}{\infty}$.
2. Dividimos entre $x^2$: $\frac{2x + \frac{1}{x}}{1 - \frac{1}{x^2}}$.
3. Cuando $x \to -\infty$: el numerador $2x + \frac{1}{x} \to -\infty$ y el denominador tiende a $1 > 0$.
4. El cociente tiende a $-\infty$. El signo lo determina el término dominante $\frac{2x^3}{x^2} = 2x$, que es negativo para $x < 0$.

**Resultado final:** $\displaystyle \lim_{x \to -\infty} \frac{2x^3 + x}{x^2 - 1} = -\infty$
