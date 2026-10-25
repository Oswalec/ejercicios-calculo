---
titulo: "Radicales en el numerador y en el denominador"
tema: "limites"
seccion: "limites-con-radicales"
dificultad: "intermedio"
metodo: "Doble racionalización con conjugados"
orden: 3
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 1} \frac{\sqrt{x + 3} - 2}{\sqrt{x} - 1}
$$

## Solución

1. Al sustituir $x = 1$: numerador $\sqrt{4} - 2 = 0$ y denominador $1 - 1 = 0$. Es una indeterminación $\frac{0}{0}$ con radicales arriba y abajo.
2. Racionalizamos el numerador: $\sqrt{x + 3} - 2 = \frac{(x + 3) - 4}{\sqrt{x + 3} + 2} = \frac{x - 1}{\sqrt{x + 3} + 2}$.
3. Racionalizamos el denominador: $\sqrt{x} - 1 = \frac{x - 1}{\sqrt{x} + 1}$.
4. Dividimos, y para $x \neq 1$ el factor $x - 1$ se cancela: $\frac{\sqrt{x + 3} - 2}{\sqrt{x} - 1} = \frac{x - 1}{\sqrt{x + 3} + 2} \cdot \frac{\sqrt{x} + 1}{x - 1} = \frac{\sqrt{x} + 1}{\sqrt{x + 3} + 2}$.
5. La expresión es continua en $x = 1$: $\frac{1 + 1}{2 + 2} = \frac{1}{2}$.

**Resultado final:** $\displaystyle \lim_{x \to 1} \frac{\sqrt{x + 3} - 2}{\sqrt{x} - 1} = \frac{1}{2}$
