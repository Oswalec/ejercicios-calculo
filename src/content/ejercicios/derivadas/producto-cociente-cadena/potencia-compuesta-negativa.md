---
titulo: "Potencia compuesta con exponente negativo"
tema: "derivadas"
seccion: "producto-cociente-cadena"
dificultad: "basico"
metodo: "Regla de la cadena para potencias"
orden: 6
---

## Enunciado

Deriva

$$
f(x) = \frac{1}{(x^3 - 2x)^2}
$$

## Solución

1. Reescribimos: $f(x) = (x^3 - 2x)^{-2}$.
2. Regla de la cadena para potencias: $\frac{d}{dx}[u^n] = n u^{n-1} u'$, con $u = x^3 - 2x$ y $n = -2$.
3. $u' = 3x^2 - 2$, así que $f'(x) = -2(x^3 - 2x)^{-3}(3x^2 - 2)$.
4. En forma de fracción: $f'(x) = -\frac{2(3x^2 - 2)}{(x^3 - 2x)^3}$.

**Resultado final:** $f'(x) = -\dfrac{2(3x^2 - 2)}{(x^3 - 2x)^3}$
