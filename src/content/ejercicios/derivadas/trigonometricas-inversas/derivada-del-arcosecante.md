---
titulo: "Derivada del arcosecante"
tema: "derivadas"
seccion: "trigonometricas-inversas"
dificultad: "avanzado"
metodo: "Derivación implícita y análisis del signo de la tangente"
orden: 5
---

## Enunciado

Demuestra que $\dfrac{d}{dx}\operatorname{arcsec} x = \dfrac{1}{|x|\sqrt{x^2 - 1}}$ para $|x| > 1$.

## Solución

1. Sea $y = \operatorname{arcsec} x$, con $y \in \left[0, \frac{\pi}{2}\right) \cup \left(\frac{\pi}{2}, \pi\right]$. Entonces $\sec y = x$.
2. Derivamos implícitamente: $\sec y\tan y \cdot y' = 1$, de donde $y' = \frac{1}{x\tan y}$.
3. Como $\tan^2 y = \sec^2 y - 1 = x^2 - 1$, se cumple $|\tan y| = \sqrt{x^2 - 1}$. Si $x > 1$, $y \in \left(0, \frac{\pi}{2}\right)$ y $\tan y > 0$; si $x < -1$, $y \in \left(\frac{\pi}{2}, \pi\right)$ y $\tan y < 0$.
4. En ambos casos $x\tan y$ es positivo e igual a $|x|\sqrt{x^2 - 1}$.
5. Por lo tanto $y' = \frac{1}{|x|\sqrt{x^2 - 1}}$, que es siempre positiva: la función arcosecante es creciente en cada tramo.

**Resultado final:** $\dfrac{d}{dx}\operatorname{arcsec} x = \dfrac{1}{|x|\sqrt{x^2 - 1}}$, para $|x| > 1$.
