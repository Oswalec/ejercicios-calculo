---
titulo: "∞/∞ con polinomios de igual grado"
tema: "limites"
seccion: "infinito-entre-infinito"
dificultad: "basico"
metodo: "División por la mayor potencia de x"
orden: 1
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \frac{4x^3 - x + 7}{2x^3 + 5x^2}
$$

## Solución

1. Numerador y denominador tienden a $\infty$: indeterminación $\frac{\infty}{\infty}$. Ambos polinomios son de grado $3$.
2. Dividimos numerador y denominador entre $x^3$: $\frac{4 - \frac{1}{x^2} + \frac{7}{x^3}}{2 + \frac{5}{x}}$.
3. Cuando $x \to \infty$, los términos $\frac{1}{x^2}$, $\frac{7}{x^3}$ y $\frac{5}{x}$ tienden a $0$.
4. El límite es $\frac{4}{2} = 2$: el cociente de los coeficientes principales, como corresponde a polinomios de igual grado.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \frac{4x^3 - x + 7}{2x^3 + 5x^2} = 2$
