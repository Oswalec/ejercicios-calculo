---
titulo: "Estimación de un límite con una tabla de valores"
tema: "limites"
seccion: "fundamentos"
dificultad: "basico"
metodo: "Tabla de valores y confirmación algebraica"
orden: 2
---

## Enunciado

Estima con una tabla de valores y luego calcula de forma exacta:

$$
\lim_{x \to 2} \frac{x^3 - 8}{x - 2}
$$

## Solución

1. La función no está definida en $x = 2$ (el denominador se anula), pero el límite solo depende de los valores de $f(x)$ para $x$ cercano a $2$ con $x \neq 2$.
2. Evaluamos la función a ambos lados de $2$:

   | $x$ | $1.9$ | $1.99$ | $1.999$ | $2.001$ | $2.01$ | $2.1$ |
   |---|---|---|---|---|---|---|
   | $f(x)$ | $11.41$ | $11.9401$ | $11.994001$ | $12.006001$ | $12.0601$ | $12.61$ |

3. Los valores se acercan a $12$ por ambos lados, lo que sugiere que el límite es $12$. Una tabla no es una prueba, así que lo confirmamos algebraicamente.
4. Factorizamos la diferencia de cubos: $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$. Para $x \neq 2$: $\frac{x^3 - 8}{x - 2} = x^2 + 2x + 4$.
5. El polinomio $x^2 + 2x + 4$ es continuo, así que $\displaystyle \lim_{x \to 2} (x^2 + 2x + 4) = 4 + 4 + 4 = 12$, lo que confirma la estimación.

**Resultado final:** $\displaystyle \lim_{x \to 2} \frac{x^3 - 8}{x - 2} = 12$
