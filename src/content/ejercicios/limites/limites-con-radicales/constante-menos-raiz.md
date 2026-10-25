---
titulo: "Una constante menos un radical"
tema: "limites"
seccion: "limites-con-radicales"
dificultad: "basico"
metodo: "Racionalización con el conjugado"
orden: 9
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 4} \frac{3 - \sqrt{x + 5}}{x - 4}
$$

## Solución

1. Al sustituir $x = 4$: numerador $3 - \sqrt{9} = 0$ y denominador $0$. Es una indeterminación $\frac{0}{0}$.
2. Multiplicamos por el conjugado $3 + \sqrt{x + 5}$: el numerador queda $9 - (x + 5) = 4 - x = -(x - 4)$.
3. La expresión es $\frac{-(x - 4)}{(x - 4)\left(3 + \sqrt{x + 5}\right)}$, y para $x \neq 4$: $-\frac{1}{3 + \sqrt{x + 5}}$.
4. Sustituimos $x = 4$: $-\frac{1}{3 + 3} = -\frac{1}{6}$.

**Resultado final:** $\displaystyle \lim_{x \to 4} \frac{3 - \sqrt{x + 5}}{x - 4} = -\frac{1}{6}$
