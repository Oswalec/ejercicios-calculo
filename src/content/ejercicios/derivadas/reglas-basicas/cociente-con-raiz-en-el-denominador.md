---
titulo: "Fracción con raíz en el denominador"
tema: "derivadas"
seccion: "reglas-basicas"
dificultad: "intermedio"
metodo: "Reescritura con exponentes fraccionarios"
orden: 9
---

## Enunciado

Deriva

$$
f(x) = \frac{x^2 + 1}{\sqrt{x}}
$$

## Solución

1. Dividimos cada término entre $\sqrt{x} = x^{1/2}$ (para $x > 0$): $f(x) = x^{2 - 1/2} + x^{-1/2} = x^{3/2} + x^{-1/2}$.
2. $\frac{d}{dx}x^{3/2} = \frac{3}{2}x^{1/2}$ y $\frac{d}{dx}x^{-1/2} = -\frac{1}{2}x^{-3/2}$.
3. Entonces $f'(x) = \frac{3}{2}\sqrt{x} - \frac{1}{2x\sqrt{x}}$.
4. Con denominador común $2x\sqrt{x}$: $f'(x) = \frac{3x^2 - 1}{2x\sqrt{x}}$.

**Resultado final:** $f'(x) = \dfrac{3}{2}\sqrt{x} - \dfrac{1}{2x\sqrt{x}} = \dfrac{3x^2 - 1}{2x\sqrt{x}}$
