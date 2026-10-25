---
titulo: "Cociente combinado con la regla de la cadena"
tema: "derivadas"
seccion: "producto-cociente-cadena"
dificultad: "intermedio"
metodo: "Regla del cociente y regla de la cadena"
orden: 5
---

## Enunciado

Deriva y simplifica:

$$
f(x) = \frac{(x - 1)^2}{x + 1}
$$

## Solución

1. Regla del cociente con $u = (x - 1)^2$ y $v = x + 1$: $f' = \frac{u'v - uv'}{v^2}$.
2. Por la cadena, $u' = 2(x - 1)$; además $v' = 1$.
3. $f'(x) = \frac{2(x - 1)(x + 1) - (x - 1)^2}{(x + 1)^2}$.
4. Factorizamos $(x - 1)$ en el numerador: $(x - 1)\left[2(x + 1) - (x - 1)\right] = (x - 1)(x + 3)$.

**Resultado final:** $f'(x) = \dfrac{(x - 1)(x + 3)}{(x + 1)^2}$
