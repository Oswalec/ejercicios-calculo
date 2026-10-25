---
titulo: "Teorema del encaje con valor absoluto"
tema: "limites"
seccion: "teoremas-aplicaciones"
dificultad: "intermedio"
metodo: "Teorema del encaje en la forma |f(x)| ≤ g(x)"
orden: 3
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 0} \sqrt{x^3 + x^2}\,\operatorname{sen}\left(\frac{\pi}{x}\right)
$$

## Solución

1. Dominio: $x^3 + x^2 = x^2(x + 1) \ge 0$ para $x \ge -1$, así que cerca de $0$ (con $x \neq 0$) la función está definida.
2. El factor $\operatorname{sen}\left(\frac{\pi}{x}\right)$ no tiene límite en $0$, pero cumple $\left|\operatorname{sen}\left(\frac{\pi}{x}\right)\right| \le 1$.
3. Entonces $0 \le \left|\sqrt{x^3 + x^2}\,\operatorname{sen}\left(\frac{\pi}{x}\right)\right| \le \sqrt{x^3 + x^2}$, es decir, $-\sqrt{x^3 + x^2} \le f(x) \le \sqrt{x^3 + x^2}$.
4. La cota tiende a $0$: por la continuidad de la raíz, $\displaystyle \lim_{x \to 0} \sqrt{x^3 + x^2} = \sqrt{0} = 0$.
5. Por el teorema del encaje, el límite es $0$.

**Resultado final:** $\displaystyle \lim_{x \to 0} \sqrt{x^3 + x^2}\,\operatorname{sen}\left(\frac{\pi}{x}\right) = 0$
