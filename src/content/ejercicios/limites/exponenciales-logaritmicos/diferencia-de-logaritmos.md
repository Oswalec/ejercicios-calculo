---
titulo: "Diferencia de logaritmos al infinito"
tema: "limites"
seccion: "exponenciales-logaritmicos"
dificultad: "basico"
metodo: "Propiedades del logaritmo y continuidad"
orden: 10
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \left[\ln(2x + 1) - \ln x\right]
$$

## Solución

1. Cada logaritmo tiende a $\infty$, así que es una indeterminación $\infty - \infty$. Para $x > 0$ ambos logaritmos están definidos.
2. Por la propiedad del logaritmo de un cociente: $\ln(2x + 1) - \ln x = \ln\left(\frac{2x + 1}{x}\right) = \ln\left(2 + \frac{1}{x}\right)$.
3. Cuando $x \to \infty$, $2 + \frac{1}{x} \to 2$.
4. Como el logaritmo es continuo en $2$: $\displaystyle \lim_{x \to \infty} \ln\left(2 + \frac{1}{x}\right) = \ln 2$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \left[\ln(2x + 1) - \ln x\right] = \ln 2$
