---
titulo: "Derivada con potencias fraccionarias"
tema: "derivadas"
seccion: "reglas-basicas"
dificultad: "intermedio"
metodo: "Reescritura de radicales como potencias y regla de la potencia"
orden: 4
---

## Enunciado

Deriva

$$
f(x) = 4\sqrt{x} - 6\sqrt[3]{x^2}
$$

## Solución

1. Reescribimos los radicales como potencias: $f(x) = 4x^{1/2} - 6x^{2/3}$, para $x > 0$.
2. $\frac{d}{dx}\left(4x^{1/2}\right) = 4 \cdot \frac{1}{2}x^{-1/2} = 2x^{-1/2}$.
3. $\frac{d}{dx}\left(6x^{2/3}\right) = 6 \cdot \frac{2}{3}x^{-1/3} = 4x^{-1/3}$.
4. Entonces $f'(x) = 2x^{-1/2} - 4x^{-1/3} = \frac{2}{\sqrt{x}} - \frac{4}{\sqrt[3]{x}}$.

**Resultado final:** $f'(x) = \dfrac{2}{\sqrt{x}} - \dfrac{4}{\sqrt[3]{x}}$
