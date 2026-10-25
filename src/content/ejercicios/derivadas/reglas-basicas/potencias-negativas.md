---
titulo: "Derivada con potencias negativas"
tema: "derivadas"
seccion: "reglas-basicas"
dificultad: "basico"
metodo: "Reescritura con exponentes negativos y regla de la potencia"
orden: 3
---

## Enunciado

Deriva

$$
f(x) = \frac{3}{x^2} - \frac{2}{x}
$$

## Solución

1. Reescribimos con exponentes negativos: $f(x) = 3x^{-2} - 2x^{-1}$, para $x \neq 0$.
2. La regla de la potencia vale para exponentes enteros negativos: $\frac{d}{dx}x^{n} = n x^{n-1}$.
3. $\frac{d}{dx}\left(3x^{-2}\right) = 3(-2)x^{-3} = -6x^{-3}$ y $\frac{d}{dx}\left(-2x^{-1}\right) = -2(-1)x^{-2} = 2x^{-2}$.
4. Volvemos a la forma de fracción: $f'(x) = -\frac{6}{x^3} + \frac{2}{x^2}$.

**Resultado final:** $f'(x) = -\dfrac{6}{x^3} + \dfrac{2}{x^2}$
