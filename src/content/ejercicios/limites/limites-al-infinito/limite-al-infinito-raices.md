---
titulo: "Límite al infinito con raíz: forma infinito menos infinito"
tema: "limites"
seccion: "limites-al-infinito"
dificultad: "intermedio"
metodo: "Racionalización con el conjugado"
orden: 2
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \left(\sqrt{x^2 + 6x} - x\right)
$$

## Solución

1. Ambos términos tienden a $\infty$, así que tenemos la indeterminación $\infty - \infty$.
2. Multiplicamos y dividimos por el conjugado $\sqrt{x^2 + 6x} + x$:
   $$
   \left(\sqrt{x^2 + 6x} - x\right) \cdot \frac{\sqrt{x^2 + 6x} + x}{\sqrt{x^2 + 6x} + x} = \frac{(x^2 + 6x) - x^2}{\sqrt{x^2 + 6x} + x} = \frac{6x}{\sqrt{x^2 + 6x} + x}
   $$
3. Dividimos numerador y denominador entre $x$ (para $x > 0$, $\sqrt{x^2 + 6x} = x\sqrt{1 + \frac{6}{x}}$):
   $$
   \frac{6x}{\sqrt{x^2 + 6x} + x} = \frac{6}{\sqrt{1 + \frac{6}{x}} + 1}
   $$
4. Cuando $x \to \infty$, $\frac{6}{x} \to 0$, de modo que el límite es $\frac{6}{\sqrt{1} + 1} = \frac{6}{2} = 3$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \left(\sqrt{x^2 + 6x} - x\right) = 3$
