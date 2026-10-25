---
titulo: "Raíz cuarta mediante cambio de variable"
tema: "limites"
seccion: "limites-con-radicales"
dificultad: "avanzado"
metodo: "Cambio de variable para eliminar el radical"
orden: 7
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 1} \frac{\sqrt[4]{x} - 1}{x - 1}
$$

## Solución

1. Al sustituir $x = 1$ se obtiene $\frac{0}{0}$. Para eliminar el radical de índice $4$ hacemos $t = \sqrt[4]{x}$, con $x > 0$; entonces $x = t^4$.
2. Cuando $x \to 1$, también $t \to 1$ (la raíz cuarta es continua en $1$), y $t \neq 1$ si $x \neq 1$.
3. El límite se transforma en $\displaystyle \lim_{t \to 1} \frac{t - 1}{t^4 - 1}$.
4. Factorizamos: $t^4 - 1 = (t^2 - 1)(t^2 + 1) = (t - 1)(t + 1)(t^2 + 1)$. Para $t \neq 1$: $\frac{t - 1}{(t - 1)(t + 1)(t^2 + 1)} = \frac{1}{(t + 1)(t^2 + 1)}$.
5. Sustituimos $t = 1$: $\frac{1}{(2)(2)} = \frac{1}{4}$.

**Resultado final:** $\displaystyle \lim_{x \to 1} \frac{\sqrt[4]{x} - 1}{x - 1} = \frac{1}{4}$
