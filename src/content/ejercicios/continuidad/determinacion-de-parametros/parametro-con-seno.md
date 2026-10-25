---
titulo: "Parámetro con el límite trigonométrico fundamental"
tema: "continuidad"
seccion: "determinacion-de-parametros"
dificultad: "basico"
metodo: "Límite fundamental sen u / u"
orden: 7
---

## Enunciado

Halla $k$ para que sea continua en $x = 0$:

$$
f(x) = \begin{cases} \dfrac{\operatorname{sen}(3x)}{x}, & x \neq 0 \\ k, & x = 0 \end{cases}
$$

## Solución

1. Se necesita $k = \displaystyle \lim_{x \to 0} \frac{\operatorname{sen}(3x)}{x}$.
2. Multiplicamos y dividimos por $3$: $\frac{\operatorname{sen}(3x)}{x} = 3 \cdot \frac{\operatorname{sen}(3x)}{3x}$.
3. Con $u = 3x \to 0$, $\frac{\operatorname{sen} u}{u} \to 1$, así que el límite es $3$.
4. Por lo tanto, $k = 3$.

**Resultado final:** $k = 3$
