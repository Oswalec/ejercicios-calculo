---
titulo: "Indeterminación 0/0 por factorización"
tema: "limites"
seccion: "limites-algebraicos"
dificultad: "basico"
metodo: "Factorización por diferencia de cuadrados"
orden: 1
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 3} \frac{x^2 - 9}{x - 3}
$$

## Solución

1. Al sustituir $x = 3$ obtenemos $\frac{9 - 9}{3 - 3} = \frac{0}{0}$, una indeterminación. Hay que simplificar antes de sustituir.
2. Factorizamos el numerador como diferencia de cuadrados: $x^2 - 9 = (x - 3)(x + 3)$.
3. Como $x \to 3$ pero $x \neq 3$, el factor $x - 3$ no es cero y podemos simplificarlo: $\frac{(x - 3)(x + 3)}{x - 3} = x + 3$.
4. Ahora la expresión es un polinomio continuo y sustituimos: $3 + 3 = 6$.

**Resultado final:** $\displaystyle \lim_{x \to 3} \frac{x^2 - 9}{x - 3} = 6$
