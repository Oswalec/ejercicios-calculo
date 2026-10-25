---
titulo: "Crecimiento del logaritmo frente a la raíz cuadrada"
tema: "limites"
seccion: "infinito-entre-infinito"
dificultad: "avanzado"
metodo: "Cambio de variable y teorema del encaje"
orden: 8
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \frac{\ln x}{\sqrt{x}}
$$

## Solución

1. Numerador y denominador tienden a $\infty$: indeterminación $\frac{\infty}{\infty}$. Mostraremos que la raíz crece más rápido que el logaritmo.
2. Hacemos $t = \frac{\ln x}{2}$. Cuando $x \to \infty$, $t \to \infty$, y $x = e^{2t}$. Entonces $\sqrt{x} = e^{t}$ y $\ln x = 2t$, así que $\frac{\ln x}{\sqrt{x}} = \frac{2t}{e^{t}}$.
3. Para $t > 0$ se cumple $e^{t} > \frac{t^2}{2}$. La función $g(t) = e^{t} - 1 - t - \frac{t^2}{2}$ vale $0$ en $t = 0$ y tiene derivada $g'(t) = e^{t} - 1 - t > 0$ para $t > 0$, así que es creciente y positiva.
4. Entonces, para $t > 0$: $0 < \frac{2t}{e^{t}} < \frac{2t}{t^2/2} = \frac{4}{t}$, y $\frac{4}{t} \to 0$.
5. Por el teorema del encaje, $\frac{2t}{e^{t}} \to 0$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \frac{\ln x}{\sqrt{x}} = 0$
