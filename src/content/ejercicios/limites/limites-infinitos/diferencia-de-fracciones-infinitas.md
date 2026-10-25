---
titulo: "Diferencia de dos fracciones que crecen sin cota"
tema: "limites"
seccion: "limites-infinitos"
dificultad: "intermedio"
metodo: "Suma de fracciones y análisis del signo"
orden: 10
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \left(\frac{1}{x} - \frac{1}{x^2}\right)
$$

## Solución

1. Por la derecha, $\frac{1}{x} \to +\infty$ y $\frac{1}{x^2} \to +\infty$: hay una forma $\infty - \infty$ que hay que transformar.
2. Restamos las fracciones con denominador común $x^2$: $\frac{1}{x} - \frac{1}{x^2} = \frac{x - 1}{x^2}$.
3. Cuando $x \to 0$: el numerador tiende a $-1 < 0$ y el denominador $x^2$ es positivo y tiende a $0$, por ambos lados.
4. Un número negativo dividido entre una cantidad positiva que tiende a $0$ tiende a $-\infty$, por ambos lados.

**Resultado final:** $\displaystyle \lim_{x \to 0} \left(\frac{1}{x} - \frac{1}{x^2}\right) = -\infty$
