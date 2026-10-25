---
titulo: "Regreso a x con el triángulo de referencia"
tema: "integrales"
seccion: "sustitucion-trigonometrica"
dificultad: "intermedio"
metodo: "Sustitución x = 2 tan θ y triángulo de referencia"
orden: 10
---

## Enunciado

Calcula $\displaystyle \int \frac{dx}{x^2\sqrt{x^2 + 4}}$, para $x > 0$.

## Solución

1. $x = 2\tan\theta$ con $\theta \in \left(0, \frac{\pi}{2}\right)$: $dx = 2\sec^2\theta\,d\theta$ y $\sqrt{x^2 + 4} = 2\sec\theta$.
2. $\int \frac{2\sec^2\theta}{4\tan^2\theta \cdot 2\sec\theta}\,d\theta = \frac{1}{4}\int \frac{\sec\theta}{\tan^2\theta}\,d\theta = \frac{1}{4}\int \frac{\cos\theta}{\operatorname{sen}^2\theta}\,d\theta$.
3. Con $u = \operatorname{sen}\theta$: $\frac{1}{4}\int u^{-2}\,du = -\frac{1}{4u} = -\frac{1}{4\operatorname{sen}\theta}$.
4. Triángulo: cateto opuesto $x$, adyacente $2$, hipotenusa $\sqrt{x^2 + 4}$. Entonces $\operatorname{sen}\theta = \frac{x}{\sqrt{x^2 + 4}}$, y el resultado es $-\frac{\sqrt{x^2 + 4}}{4x} + C$.

**Resultado final:** $\displaystyle \int \frac{dx}{x^2\sqrt{x^2 + 4}} = -\frac{\sqrt{x^2 + 4}}{4x} + C$
