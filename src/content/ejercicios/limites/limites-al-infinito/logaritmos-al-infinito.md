---
titulo: "Logaritmos al infinito con propiedades"
tema: "limites"
seccion: "limites-al-infinito"
dificultad: "intermedio"
metodo: "Propiedades del logaritmo y continuidad"
orden: 10
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \left[\ln(x^2 + 1) - 2\ln x\right]
$$

## Solución

1. Ambos términos tienden a $\infty$: indeterminación $\infty - \infty$. Para $x > 0$ todo está definido.
2. Por las propiedades del logaritmo, $2\ln x = \ln(x^2)$, así que la expresión es $\ln(x^2 + 1) - \ln(x^2) = \ln\left(\frac{x^2 + 1}{x^2}\right) = \ln\left(1 + \frac{1}{x^2}\right)$.
3. Cuando $x \to \infty$, $1 + \frac{1}{x^2} \to 1$.
4. Por la continuidad del logaritmo en $1$: $\ln 1 = 0$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \left[\ln(x^2 + 1) - 2\ln x\right] = 0$
