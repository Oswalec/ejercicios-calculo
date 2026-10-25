---
titulo: "Diferencia de cuadrados aplicada dos veces"
tema: "limites"
seccion: "limites-algebraicos"
dificultad: "intermedio"
metodo: "Diferencia de cuadrados"
orden: 7
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 3} \frac{x^4 - 81}{x - 3}
$$

## Solución

1. Al sustituir $x = 3$: numerador $81 - 81 = 0$ y denominador $0$. Es una indeterminación $\frac{0}{0}$.
2. Primera diferencia de cuadrados: $x^4 - 81 = (x^2 - 9)(x^2 + 9)$.
3. Segunda diferencia de cuadrados: $x^2 - 9 = (x - 3)(x + 3)$. Entonces $x^4 - 81 = (x - 3)(x + 3)(x^2 + 9)$.
4. Para $x \neq 3$ simplificamos: $\frac{(x - 3)(x + 3)(x^2 + 9)}{x - 3} = (x + 3)(x^2 + 9)$.
5. Sustituimos en el polinomio: $(3 + 3)(9 + 9) = 6 \cdot 18 = 108$.

**Resultado final:** $\displaystyle \lim_{x \to 3} \frac{x^4 - 81}{x - 3} = 108$
