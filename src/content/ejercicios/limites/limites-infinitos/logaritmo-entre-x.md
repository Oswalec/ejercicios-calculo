---
titulo: "Logaritmo entre x cerca de cero por la derecha"
tema: "limites"
seccion: "limites-infinitos"
dificultad: "intermedio"
metodo: "Producto de límites infinitos"
orden: 6
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0^+} \frac{\ln x}{x}
$$

## Solución

1. El logaritmo solo está definido para $x > 0$, por eso el límite se toma por la derecha.
2. Escribimos la expresión como un producto: $\frac{\ln x}{x} = \ln x \cdot \frac{1}{x}$.
3. Cuando $x \to 0^+$: $\ln x \to -\infty$ y $\frac{1}{x} \to +\infty$.
4. El producto de una cantidad que tiende a $-\infty$ por otra que tiende a $+\infty$ tiende a $-\infty$. No es una indeterminación: ambos factores crecen en valor absoluto y el signo del producto es negativo.

**Resultado final:** $\displaystyle \lim_{x \to 0^+} \frac{\ln x}{x} = -\infty$
