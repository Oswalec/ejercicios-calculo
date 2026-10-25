---
titulo: "∞/∞ con una raíz cúbica en el numerador"
tema: "limites"
seccion: "infinito-entre-infinito"
dificultad: "intermedio"
metodo: "Extracción de x del radical"
orden: 7
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \frac{\sqrt[3]{8x^3 + x^2} + x}{2x + 5}
$$

## Solución

1. Numerador y denominador tienden a $\infty$: indeterminación $\frac{\infty}{\infty}$.
2. Sacamos $x$ de la raíz cúbica (válido para cualquier signo de $x$, pues $\sqrt[3]{x^3} = x$): $\sqrt[3]{8x^3 + x^2} = \sqrt[3]{x^3\left(8 + \frac{1}{x}\right)} = x\sqrt[3]{8 + \frac{1}{x}}$.
3. El numerador queda $x\left(\sqrt[3]{8 + \frac{1}{x}} + 1\right)$ y el denominador $x\left(2 + \frac{5}{x}\right)$.
4. Simplificamos $x$: $\frac{\sqrt[3]{8 + \frac{1}{x}} + 1}{2 + \frac{5}{x}}$.
5. Cuando $x \to \infty$: $\frac{\sqrt[3]{8} + 1}{2} = \frac{2 + 1}{2} = \frac{3}{2}$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \frac{\sqrt[3]{8x^3 + x^2} + x}{2x + 5} = \frac{3}{2}$
