---
titulo: "Cociente de exponenciales cuando x tiende a −∞"
tema: "limites"
seccion: "limites-al-infinito"
dificultad: "intermedio"
metodo: "Comportamiento de e^x cuando x → −∞"
orden: 9
---

## Enunciado

Calcula el siguiente límite y compáralo con el de $x \to +\infty$ de la misma función:

$$
\lim_{x \to -\infty} \frac{3e^{x} + 2}{e^{x} - 1}
$$

## Solución

1. Cuando $x \to -\infty$, $e^{x} \to 0$. A diferencia del caso $x \to +\infty$, ahora no hay indeterminación.
2. Numerador: $3e^{x} + 2 \to 3 \cdot 0 + 2 = 2$.
3. Denominador: $e^{x} - 1 \to 0 - 1 = -1$, que es distinto de cero.
4. Por la propiedad del cociente: $\frac{2}{-1} = -2$.
5. Comparación: cuando $x \to +\infty$ el límite es $3$. La función tiene dos asíntotas horizontales distintas: $y = 3$ a la derecha e $y = -2$ a la izquierda.

**Resultado final:** $\displaystyle \lim_{x \to -\infty} \frac{3e^{x} + 2}{e^{x} - 1} = -2$
