---
titulo: "Integral de √(x² − 1)/x con secante"
tema: "integrales"
seccion: "sustitucion-trigonometrica"
dificultad: "avanzado"
metodo: "Sustitución x = sec θ e identidad tan² θ = sec² θ − 1"
orden: 6
---

## Enunciado

Calcula $\displaystyle \int \frac{\sqrt{x^2 - 1}}{x}\,dx$, para $x > 1$.

## Solución

1. $x = \sec\theta$ con $\theta \in \left(0, \frac{\pi}{2}\right)$: $dx = \sec\theta\tan\theta\,d\theta$ y $\sqrt{x^2 - 1} = \tan\theta$.
2. $\int \frac{\tan\theta}{\sec\theta}\sec\theta\tan\theta\,d\theta = \int\tan^2\theta\,d\theta = \int\left(\sec^2\theta - 1\right)d\theta = \tan\theta - \theta$.
3. Regreso: $\tan\theta = \sqrt{x^2 - 1}$ y $\theta = \operatorname{arcsec} x$.
4. Resultado: $\sqrt{x^2 - 1} - \operatorname{arcsec} x + C$. Comprobación: la derivada es $\frac{x}{\sqrt{x^2 - 1}} - \frac{1}{x\sqrt{x^2 - 1}} = \frac{x^2 - 1}{x\sqrt{x^2 - 1}} = \frac{\sqrt{x^2 - 1}}{x}$.

**Resultado final:** $\displaystyle \int \frac{\sqrt{x^2 - 1}}{x}\,dx = \sqrt{x^2 - 1} - \operatorname{arcsec} x + C$
