---
titulo: "∞/∞ con el denominador de mayor grado"
tema: "limites"
seccion: "infinito-entre-infinito"
dificultad: "basico"
metodo: "División por la mayor potencia de x"
orden: 3
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \frac{x^2 + 1}{x^3 - x}
$$

## Solución

1. Numerador y denominador tienden a $\infty$: indeterminación $\frac{\infty}{\infty}$. El numerador es de grado $2$ y el denominador de grado $3$.
2. Dividimos entre la mayor potencia, $x^3$: $\frac{\frac{1}{x} + \frac{1}{x^3}}{1 - \frac{1}{x^2}}$.
3. Cuando $x \to \infty$, el numerador tiende a $0$ y el denominador a $1$.
4. El límite es $\frac{0}{1} = 0$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \frac{x^2 + 1}{x^3 - x} = 0$
