---
titulo: "Integral con potencias fraccionarias"
tema: "integrales"
seccion: "integrales-inmediatas"
dificultad: "intermedio"
metodo: "Reescritura de radicales como potencias"
orden: 4
---

## Enunciado

Calcula $\displaystyle \int \left(\sqrt{x} + \frac{1}{\sqrt[3]{x}}\right)dx$.

## Solución

1. Reescribimos: $x^{1/2} + x^{-1/3}$, para $x > 0$.
2. $\int x^{1/2}\,dx = \frac{x^{3/2}}{3/2} = \frac{2}{3}x^{3/2}$.
3. $\int x^{-1/3}\,dx = \frac{x^{2/3}}{2/3} = \frac{3}{2}x^{2/3}$.
4. Resultado: $\frac{2}{3}x^{3/2} + \frac{3}{2}x^{2/3} + C$.

**Resultado final:** $\displaystyle \int \left(\sqrt{x} + \frac{1}{\sqrt[3]{x}}\right)dx = \frac{2}{3}x\sqrt{x} + \frac{3}{2}\sqrt[3]{x^2} + C$
