---
titulo: "Indeterminación 0/0 con trinomios"
tema: "limites"
seccion: "limites-algebraicos"
dificultad: "basico"
metodo: "Factorización de trinomios"
orden: 2
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 2} \frac{x^2 - 5x + 6}{x^2 - 4}
$$

## Solución

1. Al sustituir $x = 2$: numerador $4 - 10 + 6 = 0$ y denominador $4 - 4 = 0$. Es una indeterminación $\frac{0}{0}$, así que $x - 2$ es factor de ambos.
2. Factorizamos el numerador buscando dos números cuyo producto sea $6$ y cuya suma sea $-5$: $x^2 - 5x + 6 = (x - 2)(x - 3)$.
3. Factorizamos el denominador como diferencia de cuadrados: $x^2 - 4 = (x - 2)(x + 2)$.
4. Para $x \neq 2$ simplificamos el factor común: $\frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} = \frac{x - 3}{x + 2}$.
5. La expresión simplificada es continua en $x = 2$: $\frac{2 - 3}{2 + 2} = -\frac{1}{4}$.

**Resultado final:** $\displaystyle \lim_{x \to 2} \frac{x^2 - 5x + 6}{x^2 - 4} = -\frac{1}{4}$
