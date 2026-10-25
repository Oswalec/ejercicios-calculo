---
titulo: "Derivada de la raíz de un cociente"
tema: "derivadas"
seccion: "producto-cociente-cadena"
dificultad: "avanzado"
metodo: "Regla de la cadena y regla del cociente"
orden: 10
---

## Enunciado

Deriva y simplifica, para $x > 1$:

$$
f(x) = \sqrt{\frac{x - 1}{x + 1}}
$$

## Solución

1. Sea $u = \frac{x - 1}{x + 1}$, positiva para $x > 1$. Por la cadena: $f'(x) = \frac{u'}{2\sqrt{u}}$.
2. Regla del cociente: $u' = \frac{(x + 1) - (x - 1)}{(x + 1)^2} = \frac{2}{(x + 1)^2}$.
3. Entonces $f'(x) = \frac{2}{(x + 1)^2} \cdot \frac{1}{2}\sqrt{\frac{x + 1}{x - 1}} = \frac{1}{(x + 1)^2}\sqrt{\frac{x + 1}{x - 1}}$.
4. Como $x + 1 > 0$: $\frac{\sqrt{x + 1}}{(x + 1)^2} = \frac{1}{(x + 1)^{3/2}}$, así que $f'(x) = \frac{1}{(x + 1)^{3/2}\sqrt{x - 1}}$.

**Resultado final:** $f'(x) = \dfrac{1}{(x + 1)^{3/2}\sqrt{x - 1}}$, para $x > 1$.
