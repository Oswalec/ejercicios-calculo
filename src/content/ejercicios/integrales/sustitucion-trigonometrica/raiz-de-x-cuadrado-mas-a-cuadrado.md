---
titulo: "Integral de 1/√(x² + 4) con x = 2 tan θ"
tema: "integrales"
seccion: "sustitucion-trigonometrica"
dificultad: "intermedio"
metodo: "Sustitución x = a tan θ"
orden: 3
---

## Enunciado

Calcula $\displaystyle \int \frac{dx}{\sqrt{x^2 + 4}}$.

## Solución

1. Para $\sqrt{x^2 + a^2}$ se usa $x = a\tan\theta$ con $\theta \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$. Aquí $x = 2\tan\theta$, $dx = 2\sec^2\theta\,d\theta$ y $\sqrt{x^2 + 4} = 2\sec\theta$.
2. $\int \frac{2\sec^2\theta}{2\sec\theta}\,d\theta = \int\sec\theta\,d\theta = \ln|\sec\theta + \tan\theta|$.
3. Regreso: $\tan\theta = \frac{x}{2}$ y $\sec\theta = \frac{\sqrt{x^2 + 4}}{2}$, así que $\ln\left|\frac{x + \sqrt{x^2 + 4}}{2}\right|$.
4. Como $-\ln 2$ es constante, se absorbe en $C$: $\ln\left(x + \sqrt{x^2 + 4}\right) + C$ (el argumento es siempre positivo).

**Resultado final:** $\displaystyle \int \frac{dx}{\sqrt{x^2 + 4}} = \ln\left(x + \sqrt{x^2 + 4}\right) + C$
