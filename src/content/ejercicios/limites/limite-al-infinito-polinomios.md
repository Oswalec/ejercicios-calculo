---
titulo: "Límite al infinito de un cociente de polinomios"
tema: "limites"
dificultad: "basico"
orden: 4
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \frac{3x^2 - x + 2}{5x^2 + 4}
$$

## Solución

1. Numerador y denominador tienden a $\infty$: es una indeterminación del tipo $\frac{\infty}{\infty}$.
2. Dividimos numerador y denominador entre la mayor potencia del denominador, $x^2$:
   $$
   \frac{3x^2 - x + 2}{5x^2 + 4} = \frac{3 - \frac{1}{x} + \frac{2}{x^2}}{5 + \frac{4}{x^2}}
   $$
3. Cuando $x \to \infty$, los términos $\frac{1}{x}$, $\frac{2}{x^2}$ y $\frac{4}{x^2}$ tienden a $0$.
4. Por lo tanto el límite es $\frac{3 - 0 + 0}{5 + 0} = \frac{3}{5}$: el cociente de los coeficientes principales, porque ambos polinomios tienen el mismo grado.

**Respuesta:** $\displaystyle \lim_{x \to \infty} \frac{3x^2 - x + 2}{5x^2 + 4} = \frac{3}{5}$
