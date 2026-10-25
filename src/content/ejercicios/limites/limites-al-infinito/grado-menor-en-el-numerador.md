---
titulo: "Cociente con el numerador de menor grado"
tema: "limites"
seccion: "limites-al-infinito"
dificultad: "basico"
metodo: "Comparación de grados y división por la mayor potencia de x"
orden: 3
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \frac{2x + 1}{x^2 + 3}
$$

## Solución

1. El numerador tiene grado $1$ y el denominador grado $2$. Para justificar el resultado, dividimos numerador y denominador entre la mayor potencia del denominador, $x^2$.
2. Para $x \neq 0$: $\frac{2x + 1}{x^2 + 3} = \frac{\frac{2}{x} + \frac{1}{x^2}}{1 + \frac{3}{x^2}}$.
3. Cuando $x \to \infty$, los términos $\frac{2}{x}$, $\frac{1}{x^2}$ y $\frac{3}{x^2}$ tienden a $0$.
4. El límite es $\frac{0 + 0}{1 + 0} = 0$. En general, si el grado del numerador es menor que el del denominador, el límite al infinito es $0$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \frac{2x + 1}{x^2 + 3} = 0$
