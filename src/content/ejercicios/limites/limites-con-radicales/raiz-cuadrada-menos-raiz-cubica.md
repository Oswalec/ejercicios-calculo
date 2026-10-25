---
titulo: "Raíz cuadrada menos raíz cúbica"
tema: "limites"
seccion: "limites-con-radicales"
dificultad: "avanzado"
metodo: "Cambio de variable con el mínimo común índice"
orden: 10
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \frac{\sqrt{x + 1} - \sqrt[3]{x + 1}}{x}
$$

## Solución

1. Al sustituir $x = 0$ se obtiene $\frac{1 - 1}{0} = \frac{0}{0}$. El mínimo común múltiplo de los índices $2$ y $3$ es $6$, así que hacemos $t = \sqrt[6]{x + 1}$, con $t > 0$. Entonces $x + 1 = t^6$, $\sqrt{x + 1} = t^3$ y $\sqrt[3]{x + 1} = t^2$.
2. Cuando $x \to 0$, $t \to 1$, con $t \neq 1$ si $x \neq 0$. Además $x = t^6 - 1$.
3. El límite se transforma en $\displaystyle \lim_{t \to 1} \frac{t^3 - t^2}{t^6 - 1}$.
4. Factorizamos: $t^3 - t^2 = t^2(t - 1)$ y $t^6 - 1 = (t - 1)(t^5 + t^4 + t^3 + t^2 + t + 1)$. Para $t \neq 1$: $\frac{t^2}{t^5 + t^4 + t^3 + t^2 + t + 1}$.
5. Sustituimos $t = 1$: $\frac{1}{6}$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \frac{\sqrt{x + 1} - \sqrt[3]{x + 1}}{x} = \frac{1}{6}$
