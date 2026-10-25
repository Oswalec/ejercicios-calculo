---
titulo: "Integral de sen⁴ x"
tema: "integrales"
seccion: "trigonometricas"
dificultad: "avanzado"
metodo: "Reducción de potencia aplicada dos veces"
orden: 10
---

## Enunciado

Calcula $\displaystyle \int \operatorname{sen}^4 x\,dx$.

## Solución

1. $\operatorname{sen}^4 x = \left(\operatorname{sen}^2 x\right)^2 = \left(\frac{1 - \cos(2x)}{2}\right)^2 = \frac{1 - 2\cos(2x) + \cos^2(2x)}{4}$.
2. Reducimos de nuevo: $\cos^2(2x) = \frac{1 + \cos(4x)}{2}$. Entonces $\operatorname{sen}^4 x = \frac{3}{8} - \frac{\cos(2x)}{2} + \frac{\cos(4x)}{8}$.
3. Integramos término a término: $\frac{3x}{8} - \frac{\operatorname{sen}(2x)}{4} + \frac{\operatorname{sen}(4x)}{32} + C$.

**Resultado final:** $\displaystyle \int \operatorname{sen}^4 x\,dx = \frac{3x}{8} - \frac{\operatorname{sen}(2x)}{4} + \frac{\operatorname{sen}(4x)}{32} + C$
