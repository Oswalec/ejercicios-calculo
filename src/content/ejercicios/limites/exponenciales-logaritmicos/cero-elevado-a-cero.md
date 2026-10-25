---
titulo: "Indeterminación 0^0: el límite de x^x"
tema: "limites"
seccion: "exponenciales-logaritmicos"
dificultad: "avanzado"
metodo: "Logaritmo del límite, cambio de variable y teorema del encaje"
orden: 8
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0^+} x^{x}
$$

## Solución

1. Cuando $x \to 0^+$ la base y el exponente tienden a $0$: indeterminación $0^{0}$. Para $x > 0$ escribimos $x^{x} = e^{\,x \ln x}$, así que basta calcular $\displaystyle \lim_{x \to 0^+} x \ln x$.
2. Hacemos $t = -\ln x$. Cuando $x \to 0^+$, $t \to +\infty$, y $x = e^{-t}$. Entonces $x \ln x = e^{-t}(-t) = -\frac{t}{e^{t}}$.
3. Desigualdad auxiliar: para $t > 0$ se cumple $e^{t} > 1 + t + \frac{t^2}{2} > \frac{t^2}{2}$. (La función $g(t) = e^{t} - 1 - t - \frac{t^2}{2}$ vale $0$ en $t = 0$ y es creciente para $t > 0$, porque $g'(t) = e^{t} - 1 - t > 0$ allí.)
4. Por lo tanto, para $t > 0$: $0 < \frac{t}{e^{t}} < \frac{t}{t^2/2} = \frac{2}{t}$. Como $\frac{2}{t} \to 0$, por el teorema del encaje $\frac{t}{e^{t}} \to 0$, y así $x \ln x \to 0$.
5. Por la continuidad de la exponencial: $\displaystyle \lim_{x \to 0^+} x^{x} = e^{0} = 1$.

**Resultado final:** $\displaystyle \lim_{x \to 0^+} x^{x} = 1$
