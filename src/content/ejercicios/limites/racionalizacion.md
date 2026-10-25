---
titulo: "Indeterminación 0/0 por racionalización"
tema: "limites"
dificultad: "intermedio"
orden: 3
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{\sqrt{x + 4} - 2}{x}
$$

## Solución

1. Al sustituir $x = 0$ obtenemos $\frac{\sqrt{4} - 2}{0} = \frac{0}{0}$, una indeterminación.
2. Multiplicamos numerador y denominador por el conjugado $\sqrt{x + 4} + 2$:
   $$
   \frac{\sqrt{x + 4} - 2}{x} \cdot \frac{\sqrt{x + 4} + 2}{\sqrt{x + 4} + 2} = \frac{(x + 4) - 4}{x\left(\sqrt{x + 4} + 2\right)}
   $$
3. El numerador se reduce a $x$, y como $x \neq 0$ lo simplificamos: $\frac{x}{x\left(\sqrt{x + 4} + 2\right)} = \frac{1}{\sqrt{x + 4} + 2}$.
4. Esta expresión es continua en $x = 0$, así que sustituimos: $\frac{1}{\sqrt{4} + 2} = \frac{1}{2 + 2} = \frac{1}{4}$.

**Respuesta:** $\displaystyle \lim_{x \to 0} \frac{\sqrt{x + 4} - 2}{x} = \frac{1}{4}$
