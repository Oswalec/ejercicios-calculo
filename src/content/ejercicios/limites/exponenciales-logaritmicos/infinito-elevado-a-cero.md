---
titulo: "Indeterminación ∞^0: el límite de x^(1/x)"
tema: "limites"
seccion: "exponenciales-logaritmicos"
dificultad: "avanzado"
metodo: "Logaritmo del límite, cambio de variable y teorema del encaje"
orden: 9
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} x^{1/x}
$$

## Solución

1. Cuando $x \to \infty$ la base tiende a $\infty$ y el exponente a $0$: indeterminación $\infty^{0}$. Para $x > 0$ escribimos $x^{1/x} = e^{\ln x / x}$, así que basta calcular $\displaystyle \lim_{x \to \infty} \frac{\ln x}{x}$.
2. Hacemos $t = \ln x$. Cuando $x \to \infty$, $t \to \infty$, y $x = e^{t}$. Entonces $\frac{\ln x}{x} = \frac{t}{e^{t}}$.
3. Para $t > 0$ se cumple $e^{t} > \frac{t^2}{2}$ (la función $e^{t} - 1 - t - \frac{t^2}{2}$ vale $0$ en $t = 0$ y crece para $t > 0$). Entonces $0 < \frac{t}{e^{t}} < \frac{2}{t}$.
4. Como $\frac{2}{t} \to 0$, por el teorema del encaje $\frac{t}{e^{t}} \to 0$; es decir, $\frac{\ln x}{x} \to 0$.
5. Por la continuidad de la exponencial: $\displaystyle \lim_{x \to \infty} x^{1/x} = e^{0} = 1$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} x^{1/x} = 1$
