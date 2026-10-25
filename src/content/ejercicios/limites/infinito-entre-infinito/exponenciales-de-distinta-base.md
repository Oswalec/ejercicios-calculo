---
titulo: "∞/∞ con exponenciales de distinta base"
tema: "limites"
seccion: "infinito-entre-infinito"
dificultad: "intermedio"
metodo: "División por la exponencial de mayor base"
orden: 10
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \frac{2^{x} + 3^{x}}{3^{x+1} - 2^{x}}
$$

## Solución

1. Numerador y denominador tienden a $\infty$: indeterminación $\frac{\infty}{\infty}$. La exponencial dominante es la de mayor base, $3^{x}$.
2. Escribimos $3^{x+1} = 3 \cdot 3^{x}$ y dividimos numerador y denominador entre $3^{x} > 0$: $\frac{\left(\frac{2}{3}\right)^{x} + 1}{3 - \left(\frac{2}{3}\right)^{x}}$.
3. Como $0 < \frac{2}{3} < 1$, se cumple $\left(\frac{2}{3}\right)^{x} \to 0$ cuando $x \to \infty$.
4. El límite es $\frac{0 + 1}{3 - 0} = \frac{1}{3}$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \frac{2^{x} + 3^{x}}{3^{x+1} - 2^{x}} = \frac{1}{3}$
