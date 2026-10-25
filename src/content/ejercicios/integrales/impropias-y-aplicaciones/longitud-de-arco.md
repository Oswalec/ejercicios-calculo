---
titulo: "Longitud de arco de una curva"
tema: "integrales"
seccion: "impropias-y-aplicaciones"
dificultad: "intermedio"
metodo: "Fórmula L = ∫√(1 + (y')²) dx"
orden: 9
---

## Enunciado

Calcula la longitud de la curva $y = \dfrac{2}{3}x^{3/2}$ entre $x = 0$ y $x = 3$.

## Solución

1. Fórmula de la longitud de arco: $L = \int_a^b\sqrt{1 + \left[f'(x)\right]^2}\,dx$.
2. $f'(x) = \frac{2}{3} \cdot \frac{3}{2}x^{1/2} = \sqrt{x}$, así que $1 + \left[f'(x)\right]^2 = 1 + x$.
3. $L = \int_0^3\sqrt{1 + x}\,dx = \left[\frac{2}{3}(1 + x)^{3/2}\right]_0^3 = \frac{2}{3}\left(8 - 1\right)$.
4. $L = \frac{14}{3} \approx 4.67$.

**Resultado final:** $L = \dfrac{14}{3}$ unidades.
