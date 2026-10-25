---
titulo: "Integral de x²/√(4 − x²)"
tema: "integrales"
seccion: "sustitucion-trigonometrica"
dificultad: "avanzado"
metodo: "Sustitución x = 2 sen θ y reducción de potencia"
orden: 9
---

## Enunciado

Calcula $\displaystyle \int \frac{x^2}{\sqrt{4 - x^2}}\,dx$, para $|x| < 2$.

## Solución

1. $x = 2\operatorname{sen}\theta$, $dx = 2\cos\theta\,d\theta$ y $\sqrt{4 - x^2} = 2\cos\theta$.
2. $\int \frac{4\operatorname{sen}^2\theta \cdot 2\cos\theta}{2\cos\theta}\,d\theta = 4\int\operatorname{sen}^2\theta\,d\theta = 2\int\left(1 - \cos 2\theta\right)d\theta = 2\theta - \operatorname{sen} 2\theta$.
3. Regreso: $\theta = \operatorname{arcsen}\frac{x}{2}$ y $\operatorname{sen} 2\theta = 2 \cdot \frac{x}{2} \cdot \frac{\sqrt{4 - x^2}}{2} = \frac{x\sqrt{4 - x^2}}{2}$.
4. Resultado: $2\operatorname{arcsen}\frac{x}{2} - \frac{x\sqrt{4 - x^2}}{2} + C$.

**Resultado final:** $\displaystyle \int \frac{x^2}{\sqrt{4 - x^2}}\,dx = 2\operatorname{arcsen}\frac{x}{2} - \frac{x}{2}\sqrt{4 - x^2} + C$
