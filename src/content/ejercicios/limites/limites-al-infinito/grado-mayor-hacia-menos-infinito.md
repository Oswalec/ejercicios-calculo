---
titulo: "Numerador de mayor grado cuando x tiende a −∞"
tema: "limites"
seccion: "limites-al-infinito"
dificultad: "intermedio"
metodo: "División por la mayor potencia del denominador y análisis del signo"
orden: 4
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to -\infty} \frac{x^3 - 2x}{4x^2 + 1}
$$

## Solución

1. El numerador tiene grado $3$ y el denominador grado $2$, así que el cociente no tiene límite finito. Hay que determinar el signo.
2. Dividimos entre $x^2$ (para $x \neq 0$): $\frac{x^3 - 2x}{4x^2 + 1} = \frac{x - \frac{2}{x}}{4 + \frac{1}{x^2}}$.
3. Cuando $x \to -\infty$: el denominador $4 + \frac{1}{x^2} \to 4 > 0$ y el numerador $x - \frac{2}{x} \to -\infty$.
4. Un numerador que tiende a $-\infty$ dividido entre una cantidad que tiende a $4 > 0$ tiende a $-\infty$.

**Resultado final:** $\displaystyle \lim_{x \to -\infty} \frac{x^3 - 2x}{4x^2 + 1} = -\infty$
