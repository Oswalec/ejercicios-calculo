---
titulo: "Crecimiento de x − 2 sen x en un período"
tema: "aplicaciones-derivada"
seccion: "crecimiento"
dificultad: "intermedio"
metodo: "Signo de la primera derivada"
orden: 8
---

## Enunciado

Estudia el crecimiento de $f(x) = x - 2\operatorname{sen} x$ en $[0, 2\pi]$ y halla sus extremos locales.

## Solución

1. $f'(x) = 1 - 2\cos x$, que se anula cuando $\cos x = \frac{1}{2}$: en $[0, 2\pi]$, $x = \frac{\pi}{3}$ y $x = \frac{5\pi}{3}$.
2. Signo: $f'(0) = -1 < 0$, $f'(\pi) = 3 > 0$ y $f'(2\pi) = -1 < 0$. Entonces $f$ decrece en $\left(0, \frac{\pi}{3}\right)$, crece en $\left(\frac{\pi}{3}, \frac{5\pi}{3}\right)$ y decrece en $\left(\frac{5\pi}{3}, 2\pi\right)$.
3. Mínimo local en $\frac{\pi}{3}$: $f\left(\frac{\pi}{3}\right) = \frac{\pi}{3} - \sqrt{3} \approx -0.685$.
4. Máximo local en $\frac{5\pi}{3}$: $f\left(\frac{5\pi}{3}\right) = \frac{5\pi}{3} + \sqrt{3} \approx 6.968$.

**Resultado final:** Mínimo local $\dfrac{\pi}{3} - \sqrt{3}$ en $x = \dfrac{\pi}{3}$; máximo local $\dfrac{5\pi}{3} + \sqrt{3}$ en $x = \dfrac{5\pi}{3}$.
