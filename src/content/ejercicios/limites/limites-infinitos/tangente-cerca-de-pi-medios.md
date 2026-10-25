---
titulo: "La tangente cerca de π/2"
tema: "limites"
seccion: "limites-infinitos"
dificultad: "intermedio"
metodo: "Análisis del signo del coseno"
orden: 7
---

## Enunciado

Calcula los límites laterales en $x = \frac{\pi}{2}$ de

$$
f(x) = \tan x
$$

## Solución

1. Escribimos $\tan x = \frac{\operatorname{sen} x}{\cos x}$. En $x = \frac{\pi}{2}$: $\operatorname{sen}\frac{\pi}{2} = 1$ y $\cos\frac{\pi}{2} = 0$. Es de la forma $\frac{1}{0}$.
2. Por la izquierda ($0 < x < \frac{\pi}{2}$, primer cuadrante): $\cos x > 0$ y tiende a $0$, y $\operatorname{sen} x \to 1$. Entonces $\displaystyle \lim_{x \to \pi/2^-} \tan x = +\infty$.
3. Por la derecha ($\frac{\pi}{2} < x < \pi$, segundo cuadrante): $\cos x < 0$ y tiende a $0$, y $\operatorname{sen} x \to 1$. Entonces $\displaystyle \lim_{x \to \pi/2^+} \tan x = -\infty$.
4. La recta $x = \frac{\pi}{2}$ es una asíntota vertical de la tangente.

**Resultado final:** $\displaystyle \lim_{x \to \pi/2^-} \tan x = +\infty$ y $\displaystyle \lim_{x \to \pi/2^+} \tan x = -\infty$
