---
titulo: "Área de un cuarto de círculo con sustitución trigonométrica"
tema: "integrales"
seccion: "sustitucion-trigonometrica"
dificultad: "basico"
metodo: "Sustitución x = sen θ con cambio de límites"
orden: 8
---

## Enunciado

Calcula $\displaystyle \int_{0}^{1} \sqrt{1 - x^2}\,dx$ e interpreta el resultado.

## Solución

1. $x = \operatorname{sen}\theta$, $dx = \cos\theta\,d\theta$ y $\sqrt{1 - x^2} = \cos\theta$. Límites: $x = 0 \Rightarrow \theta = 0$; $x = 1 \Rightarrow \theta = \frac{\pi}{2}$.
2. $\int_{0}^{\pi/2}\cos^2\theta\,d\theta = \frac{1}{2}\int_{0}^{\pi/2}\left(1 + \cos 2\theta\right)d\theta = \frac{1}{2}\left[\theta + \frac{\operatorname{sen} 2\theta}{2}\right]_{0}^{\pi/2}$.
3. $= \frac{1}{2} \cdot \frac{\pi}{2} = \frac{\pi}{4}$.
4. Interpretación: $y = \sqrt{1 - x^2}$ es la semicircunferencia de radio $1$, y el área bajo ella en $[0, 1]$ es un cuarto del círculo: $\frac{\pi \cdot 1^2}{4}$.

**Resultado final:** $\displaystyle \int_{0}^{1} \sqrt{1 - x^2}\,dx = \frac{\pi}{4}$ (área de un cuarto de círculo de radio $1$).
