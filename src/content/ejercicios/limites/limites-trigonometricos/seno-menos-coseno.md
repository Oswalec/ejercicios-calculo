---
titulo: "Diferencia de seno y coseno cerca de π/4"
tema: "limites"
seccion: "limites-trigonometricos"
dificultad: "avanzado"
metodo: "Identidad del seno de una diferencia y cambio de variable"
orden: 8
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \pi/4} \frac{\operatorname{sen} x - \cos x}{x - \frac{\pi}{4}}
$$

## Solución

1. Al sustituir $x = \frac{\pi}{4}$: $\operatorname{sen}\frac{\pi}{4} - \cos\frac{\pi}{4} = 0$, así que es $\frac{0}{0}$.
2. Como $\cos\frac{\pi}{4} = \operatorname{sen}\frac{\pi}{4} = \frac{1}{\sqrt{2}}$: $\operatorname{sen} x - \cos x = \sqrt{2}\left(\operatorname{sen} x \cos\frac{\pi}{4} - \cos x \operatorname{sen}\frac{\pi}{4}\right) = \sqrt{2}\operatorname{sen}\left(x - \frac{\pi}{4}\right)$.
3. Hacemos $t = x - \frac{\pi}{4}$; cuando $x \to \frac{\pi}{4}$, $t \to 0$.
4. El límite se transforma en $\displaystyle \lim_{t \to 0} \frac{\sqrt{2}\operatorname{sen} t}{t} = \sqrt{2} \cdot 1 = \sqrt{2}$.

**Resultado final:** $\displaystyle \lim_{x \to \pi/4} \frac{\operatorname{sen} x - \cos x}{x - \frac{\pi}{4}} = \sqrt{2}$
