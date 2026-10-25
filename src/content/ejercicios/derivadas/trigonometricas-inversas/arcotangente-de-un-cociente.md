---
titulo: "Una derivada sorprendente con arcotangente"
tema: "derivadas"
seccion: "trigonometricas-inversas"
dificultad: "avanzado"
metodo: "Regla de la cadena, regla del cociente y simplificación"
orden: 10
---

## Enunciado

Deriva y simplifica, para $x \neq 1$:

$$
f(x) = \arctan\left(\frac{1 + x}{1 - x}\right)
$$

## Solución

1. Con $u = \frac{1 + x}{1 - x}$: $f'(x) = \frac{u'}{1 + u^2}$.
2. Regla del cociente: $u' = \frac{(1 - x) + (1 + x)}{(1 - x)^2} = \frac{2}{(1 - x)^2}$.
3. $1 + u^2 = \frac{(1 - x)^2 + (1 + x)^2}{(1 - x)^2} = \frac{2 + 2x^2}{(1 - x)^2} = \frac{2(1 + x^2)}{(1 - x)^2}$.
4. Dividimos: $f'(x) = \frac{2}{(1 - x)^2} \cdot \frac{(1 - x)^2}{2(1 + x^2)} = \frac{1}{1 + x^2}$.
5. Coincide con la derivada de $\arctan x$: en cada intervalo $(-\infty, 1)$ y $(1, \infty)$, $f(x)$ y $\arctan x$ difieren en una constante.

**Resultado final:** $f'(x) = \dfrac{1}{1 + x^2}$, para $x \neq 1$.
