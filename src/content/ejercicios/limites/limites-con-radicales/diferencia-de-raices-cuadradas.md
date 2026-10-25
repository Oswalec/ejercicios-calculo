---
titulo: "Diferencia de dos raíces cuadradas"
tema: "limites"
seccion: "limites-con-radicales"
dificultad: "intermedio"
metodo: "Racionalización con el conjugado de una diferencia de raíces"
orden: 4
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{\sqrt{1 + x} - \sqrt{1 - x}}{x}
$$

## Solución

1. Al sustituir $x = 0$: numerador $1 - 1 = 0$ y denominador $0$. Es una indeterminación $\frac{0}{0}$. Cerca de $0$ ambos radicandos son positivos.
2. Multiplicamos por el conjugado $\sqrt{1 + x} + \sqrt{1 - x}$: el numerador queda $(1 + x) - (1 - x) = 2x$.
3. La expresión es $\frac{2x}{x\left(\sqrt{1 + x} + \sqrt{1 - x}\right)}$, y para $x \neq 0$: $\frac{2}{\sqrt{1 + x} + \sqrt{1 - x}}$.
4. Sustituimos $x = 0$ en la expresión continua: $\frac{2}{1 + 1} = 1$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{\sqrt{1 + x} - \sqrt{1 - x}}{x} = 1$
