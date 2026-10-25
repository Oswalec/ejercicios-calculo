---
titulo: "Integral de 1/√(x² − 9) con x = 3 sec θ"
tema: "integrales"
seccion: "sustitucion-trigonometrica"
dificultad: "intermedio"
metodo: "Sustitución x = a sec θ"
orden: 5
---

## Enunciado

Calcula $\displaystyle \int \frac{dx}{\sqrt{x^2 - 9}}$, para $x > 3$.

## Solución

1. Para $\sqrt{x^2 - a^2}$ se usa $x = a\sec\theta$. Con $x > 3$ tomamos $\theta \in \left(0, \frac{\pi}{2}\right)$: $x = 3\sec\theta$, $dx = 3\sec\theta\tan\theta\,d\theta$ y $\sqrt{x^2 - 9} = 3\tan\theta$ (con $\tan\theta > 0$).
2. $\int \frac{3\sec\theta\tan\theta}{3\tan\theta}\,d\theta = \int\sec\theta\,d\theta = \ln|\sec\theta + \tan\theta|$.
3. Regreso: $\sec\theta = \frac{x}{3}$ y $\tan\theta = \frac{\sqrt{x^2 - 9}}{3}$, así que $\ln\left|\frac{x + \sqrt{x^2 - 9}}{3}\right|$.
4. Absorbiendo $-\ln 3$ en la constante: $\ln\left(x + \sqrt{x^2 - 9}\right) + C$.

**Resultado final:** $\displaystyle \int \frac{dx}{\sqrt{x^2 - 9}} = \ln\left(x + \sqrt{x^2 - 9}\right) + C$, para $x > 3$.
