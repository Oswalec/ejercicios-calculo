---
titulo: "Indeterminación 1^∞ con coseno"
tema: "limites"
seccion: "exponenciales-logaritmicos"
dificultad: "avanzado"
metodo: "Logaritmo del límite y límites fundamentales"
orden: 7
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} (\cos x)^{1/x^2}
$$

## Solución

1. Cuando $x \to 0$, $\cos x \to 1$ y $\frac{1}{x^2} \to \infty$: indeterminación $1^{\infty}$. Cerca de $0$ se cumple $\cos x > 0$, así que $(\cos x)^{1/x^2} = e^{\ln(\cos x)/x^2}$.
2. Sea $u = \cos x - 1$. Para $x \neq 0$ cercano a $0$ se cumple $u \neq 0$ y $u \to 0$. Escribimos: $\frac{\ln(\cos x)}{x^2} = \frac{\ln(1 + u)}{u} \cdot \frac{\cos x - 1}{x^2}$.
3. Primer factor: $\frac{\ln(1 + u)}{u} \to 1$ (límite fundamental logarítmico).
4. Segundo factor: multiplicando por $1 + \cos x$, $\frac{\cos x - 1}{x^2} = -\left(\frac{\operatorname{sen} x}{x}\right)^2 \frac{1}{1 + \cos x} \to -1 \cdot \frac{1}{2} = -\frac{1}{2}$.
5. El exponente tiende a $1 \cdot \left(-\frac{1}{2}\right) = -\frac{1}{2}$, y por la continuidad de la exponencial el límite es $e^{-1/2} = \frac{1}{\sqrt{e}}$.

**Resultado final:** $\displaystyle \lim_{x \to 0} (\cos x)^{1/x^2} = e^{-1/2} = \frac{1}{\sqrt{e}}$
