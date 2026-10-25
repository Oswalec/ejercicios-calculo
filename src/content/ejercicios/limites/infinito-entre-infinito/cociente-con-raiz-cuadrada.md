---
titulo: "∞/∞ con una raíz cuadrada en el numerador"
tema: "limites"
seccion: "infinito-entre-infinito"
dificultad: "intermedio"
metodo: "Extracción de x del radical"
orden: 6
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \frac{\sqrt{4x^2 + x}}{3x - 1}
$$

## Solución

1. Numerador y denominador tienden a $\infty$: indeterminación $\frac{\infty}{\infty}$.
2. Para $x > 0$ sacamos $x$ del radical: $\sqrt{4x^2 + x} = \sqrt{x^2\left(4 + \frac{1}{x}\right)} = x\sqrt{4 + \frac{1}{x}}$, porque $\sqrt{x^2} = |x| = x$.
3. En el denominador: $3x - 1 = x\left(3 - \frac{1}{x}\right)$.
4. Simplificamos $x$: $\frac{\sqrt{4 + \frac{1}{x}}}{3 - \frac{1}{x}}$.
5. Cuando $x \to \infty$: $\frac{\sqrt{4}}{3} = \frac{2}{3}$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \frac{\sqrt{4x^2 + x}}{3x - 1} = \frac{2}{3}$
