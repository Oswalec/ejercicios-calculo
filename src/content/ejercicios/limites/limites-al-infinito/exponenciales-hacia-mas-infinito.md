---
titulo: "Cociente de exponenciales cuando x tiende a +∞"
tema: "limites"
seccion: "limites-al-infinito"
dificultad: "basico"
metodo: "División por la exponencial dominante"
orden: 8
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \frac{3e^{x} + 2}{e^{x} - 1}
$$

## Solución

1. Numerador y denominador tienden a $\infty$. Dividimos ambos entre $e^{x}$, que es positivo: $\frac{3e^{x} + 2}{e^{x} - 1} = \frac{3 + 2e^{-x}}{1 - e^{-x}}$.
2. Cuando $x \to \infty$, $e^{-x} \to 0$.
3. El límite es $\frac{3 + 0}{1 - 0} = 3$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \frac{3e^{x} + 2}{e^{x} - 1} = 3$
