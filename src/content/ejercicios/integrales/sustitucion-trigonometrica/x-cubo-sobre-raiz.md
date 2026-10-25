---
titulo: "Integral de x³/√(1 − x²)"
tema: "integrales"
seccion: "sustitucion-trigonometrica"
dificultad: "intermedio"
metodo: "Sustitución x = sen θ y potencia impar del seno"
orden: 7
---

## Enunciado

Calcula $\displaystyle \int \frac{x^3}{\sqrt{1 - x^2}}\,dx$, para $|x| < 1$.

## Solución

1. $x = \operatorname{sen}\theta$, $dx = \cos\theta\,d\theta$ y $\sqrt{1 - x^2} = \cos\theta$. La integral queda $\int \operatorname{sen}^3\theta\,d\theta$.
2. Potencia impar: $\operatorname{sen}^3\theta = \left(1 - \cos^2\theta\right)\operatorname{sen}\theta$. Con $u = \cos\theta$: $-\int\left(1 - u^2\right)du = -\cos\theta + \frac{\cos^3\theta}{3}$.
3. Regreso: $\cos\theta = \sqrt{1 - x^2}$.
4. Resultado: $-\sqrt{1 - x^2} + \frac{\left(1 - x^2\right)^{3/2}}{3} + C$, que también se escribe $-\frac{1}{3}\sqrt{1 - x^2}\left(x^2 + 2\right) + C$.

**Resultado final:** $\displaystyle \int \frac{x^3}{\sqrt{1 - x^2}}\,dx = -\frac{1}{3}\sqrt{1 - x^2}\left(x^2 + 2\right) + C$
