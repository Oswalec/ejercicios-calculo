---
titulo: "Integral de 1/(x²√(9 − x²))"
tema: "integrales"
seccion: "sustitucion-trigonometrica"
dificultad: "intermedio"
metodo: "Sustitución x = 3 sen θ y triángulo de referencia"
orden: 2
---

## Enunciado

Calcula $\displaystyle \int \frac{dx}{x^2\sqrt{9 - x^2}}$, para $0 < |x| < 3$.

## Solución

1. $x = 3\operatorname{sen}\theta$, $dx = 3\cos\theta\,d\theta$ y $\sqrt{9 - x^2} = 3\cos\theta$.
2. $\int \frac{3\cos\theta\,d\theta}{9\operatorname{sen}^2\theta \cdot 3\cos\theta} = \frac{1}{9}\int\csc^2\theta\,d\theta = -\frac{1}{9}\cot\theta$.
3. Triángulo de referencia: cateto opuesto $x$, hipotenusa $3$, cateto adyacente $\sqrt{9 - x^2}$. Entonces $\cot\theta = \frac{\sqrt{9 - x^2}}{x}$.
4. Resultado: $-\frac{\sqrt{9 - x^2}}{9x} + C$.

**Resultado final:** $\displaystyle \int \frac{dx}{x^2\sqrt{9 - x^2}} = -\frac{\sqrt{9 - x^2}}{9x} + C$
