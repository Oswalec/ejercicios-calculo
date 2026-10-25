---
titulo: "Indeterminación 1^∞ con un cociente de polinomios"
tema: "limites"
seccion: "exponenciales-logaritmicos"
dificultad: "avanzado"
metodo: "Logaritmo del límite y límite fundamental logarítmico"
orden: 6
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \left(\frac{x + 1}{x - 2}\right)^{x}
$$

## Solución

1. Cuando $x \to \infty$, $\frac{x + 1}{x - 2} \to 1$ y el exponente tiende a $\infty$: es una indeterminación $1^{\infty}$. Para $x > 2$ la base es positiva y podemos escribir $\left(\frac{x + 1}{x - 2}\right)^{x} = e^{\,x \ln\left(\frac{x + 1}{x - 2}\right)}$.
2. Escribimos la base como $1 + u$: $\frac{x + 1}{x - 2} = 1 + \frac{3}{x - 2}$, con $u = \frac{3}{x - 2} \to 0$ y $u \neq 0$.
3. El exponente es $x \ln(1 + u) = \frac{\ln(1 + u)}{u} \cdot u\,x = \frac{\ln(1 + u)}{u} \cdot \frac{3x}{x - 2}$.
4. Límites de cada factor: $\frac{\ln(1 + u)}{u} \to 1$ (límite fundamental) y $\frac{3x}{x - 2} = \frac{3}{1 - \frac{2}{x}} \to 3$. Así, el exponente tiende a $3$.
5. Como la exponencial es continua: $\displaystyle \lim_{x \to \infty} e^{\,x \ln\left(\frac{x + 1}{x - 2}\right)} = e^{3}$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \left(\frac{x + 1}{x - 2}\right)^{x} = e^{3}$
