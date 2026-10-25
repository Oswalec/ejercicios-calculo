---
titulo: "Diferencia de dos radicales al infinito"
tema: "limites"
seccion: "limites-al-infinito"
dificultad: "intermedio"
metodo: "Racionalización con el conjugado y división por x"
orden: 6
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \left(\sqrt{x^2 + 3x} - \sqrt{x^2 - x}\right)
$$

## Solución

1. Ambos radicales tienden a $\infty$: indeterminación $\infty - \infty$. Para $x > 1$ ambos radicandos son positivos.
2. Multiplicamos y dividimos por el conjugado $\sqrt{x^2 + 3x} + \sqrt{x^2 - x}$. El numerador queda $(x^2 + 3x) - (x^2 - x) = 4x$.
3. La expresión es $\frac{4x}{\sqrt{x^2 + 3x} + \sqrt{x^2 - x}}$. Para $x > 0$, $\sqrt{x^2 + 3x} = x\sqrt{1 + \frac{3}{x}}$ y $\sqrt{x^2 - x} = x\sqrt{1 - \frac{1}{x}}$.
4. Simplificamos $x$: $\frac{4}{\sqrt{1 + \frac{3}{x}} + \sqrt{1 - \frac{1}{x}}}$.
5. Cuando $x \to \infty$: $\frac{4}{1 + 1} = 2$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \left(\sqrt{x^2 + 3x} - \sqrt{x^2 - x}\right) = 2$
