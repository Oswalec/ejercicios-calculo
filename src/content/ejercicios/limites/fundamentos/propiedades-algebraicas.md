---
titulo: "Propiedades algebraicas de los límites"
tema: "limites"
seccion: "fundamentos"
dificultad: "basico"
metodo: "Propiedades algebraicas de los límites"
orden: 3
---

## Enunciado

Si $\displaystyle \lim_{x \to a} f(x) = 3$ y $\displaystyle \lim_{x \to a} g(x) = -2$, calcula:

$$
\lim_{x \to a} \frac{2f(x) - \left[g(x)\right]^2}{f(x) + g(x)}
$$

## Solución

1. Como ambos límites existen y son finitos, podemos aplicar las propiedades de suma, producto, múltiplo constante y potencia.
2. Numerador: $\displaystyle \lim_{x \to a} \left(2f(x) - [g(x)]^2\right) = 2 \lim_{x \to a} f(x) - \left[\lim_{x \to a} g(x)\right]^2 = 2(3) - (-2)^2 = 6 - 4 = 2$.
3. Denominador: $\displaystyle \lim_{x \to a} \left(f(x) + g(x)\right) = 3 + (-2) = 1$.
4. La propiedad del cociente exige que el límite del denominador sea distinto de cero. Como $1 \neq 0$, se cumple.
5. Por lo tanto, el límite del cociente es el cociente de los límites: $\frac{2}{1} = 2$.

**Resultado final:** $\displaystyle \lim_{x \to a} \frac{2f(x) - [g(x)]^2}{f(x) + g(x)} = 2$
