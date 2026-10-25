---
titulo: "Límite fundamental logarítmico con argumento 5x"
tema: "limites"
seccion: "exponenciales-logaritmicos"
dificultad: "basico"
metodo: "Límite fundamental ln(1 + u)/u"
orden: 3
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{\ln(1 + 5x)}{x}
$$

## Solución

1. Al sustituir $x = 0$ se obtiene $\frac{\ln 1}{0} = \frac{0}{0}$. Cerca de $0$ se cumple $1 + 5x > 0$, así que la función está definida. Usaremos $\displaystyle \lim_{u \to 0} \frac{\ln(1 + u)}{u} = 1$.
2. Multiplicamos y dividimos por $5$: $\frac{\ln(1 + 5x)}{x} = 5 \cdot \frac{\ln(1 + 5x)}{5x}$.
3. Con $u = 5x \to 0$: $\frac{\ln(1 + 5x)}{5x} \to 1$.
4. Por lo tanto el límite es $5 \cdot 1 = 5$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{\ln(1 + 5x)}{x} = 5$
