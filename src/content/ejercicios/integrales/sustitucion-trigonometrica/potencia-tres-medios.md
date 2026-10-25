---
titulo: "Integral de 1/(x² + 9)^(3/2)"
tema: "integrales"
seccion: "sustitucion-trigonometrica"
dificultad: "intermedio"
metodo: "Sustitución x = 3 tan θ"
orden: 4
---

## Enunciado

Calcula $\displaystyle \int \frac{dx}{\left(x^2 + 9\right)^{3/2}}$.

## Solución

1. $x = 3\tan\theta$, $dx = 3\sec^2\theta\,d\theta$ y $\left(x^2 + 9\right)^{3/2} = (9\sec^2\theta)^{3/2} = 27\sec^3\theta$.
2. $\int \frac{3\sec^2\theta}{27\sec^3\theta}\,d\theta = \frac{1}{9}\int\cos\theta\,d\theta = \frac{1}{9}\operatorname{sen}\theta$.
3. Triángulo: cateto opuesto $x$, cateto adyacente $3$, hipotenusa $\sqrt{x^2 + 9}$. Entonces $\operatorname{sen}\theta = \frac{x}{\sqrt{x^2 + 9}}$.
4. Resultado: $\frac{x}{9\sqrt{x^2 + 9}} + C$.

**Resultado final:** $\displaystyle \int \frac{dx}{\left(x^2 + 9\right)^{3/2}} = \frac{x}{9\sqrt{x^2 + 9}} + C$
