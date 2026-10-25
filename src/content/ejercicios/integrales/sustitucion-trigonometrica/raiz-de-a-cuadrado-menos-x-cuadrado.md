---
titulo: "Integral de √(4 − x²) con x = 2 sen θ"
tema: "integrales"
seccion: "sustitucion-trigonometrica"
dificultad: "intermedio"
metodo: "Sustitución x = a sen θ"
orden: 1
---

## Enunciado

Calcula $\displaystyle \int \sqrt{4 - x^2}\,dx$, para $|x| \le 2$.

## Solución

1. Para $\sqrt{a^2 - x^2}$ se usa $x = a\operatorname{sen}\theta$ con $\theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$. Aquí $x = 2\operatorname{sen}\theta$, $dx = 2\cos\theta\,d\theta$ y $\sqrt{4 - x^2} = 2\cos\theta$ (con $\cos\theta \ge 0$).
2. $\int 2\cos\theta \cdot 2\cos\theta\,d\theta = 4\int\cos^2\theta\,d\theta = 2\int\left(1 + \cos 2\theta\right)d\theta = 2\theta + \operatorname{sen} 2\theta$.
3. Regreso a $x$ con el triángulo de referencia: $\operatorname{sen}\theta = \frac{x}{2}$, $\cos\theta = \frac{\sqrt{4 - x^2}}{2}$ y $\operatorname{sen} 2\theta = 2\operatorname{sen}\theta\cos\theta = \frac{x\sqrt{4 - x^2}}{2}$.
4. Resultado: $2\operatorname{arcsen}\frac{x}{2} + \frac{x\sqrt{4 - x^2}}{2} + C$.

**Resultado final:** $\displaystyle \int \sqrt{4 - x^2}\,dx = 2\operatorname{arcsen}\frac{x}{2} + \frac{x}{2}\sqrt{4 - x^2} + C$
