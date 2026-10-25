---
titulo: "∞/∞ con el numerador de mayor grado"
tema: "limites"
seccion: "infinito-entre-infinito"
dificultad: "intermedio"
metodo: "División por la mayor potencia del denominador"
orden: 4
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \frac{x^4 - 2}{3x^3 + x}
$$

## Solución

1. Numerador y denominador tienden a $\infty$: indeterminación $\frac{\infty}{\infty}$. El numerador es de grado $4$ y el denominador de grado $3$.
2. Dividimos entre $x^3$, la mayor potencia del denominador: $\frac{x - \frac{2}{x^3}}{3 + \frac{1}{x^2}}$.
3. Cuando $x \to \infty$: el numerador $x - \frac{2}{x^3} \to +\infty$ y el denominador tiende a $3 > 0$.
4. Una cantidad que tiende a $+\infty$ dividida entre otra que tiende a $3 > 0$ tiende a $+\infty$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \frac{x^4 - 2}{3x^3 + x} = +\infty$
