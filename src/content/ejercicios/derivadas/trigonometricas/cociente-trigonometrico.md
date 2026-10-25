---
titulo: "Cociente trigonométrico que se simplifica"
tema: "derivadas"
seccion: "trigonometricas"
dificultad: "intermedio"
metodo: "Regla del cociente e identidad pitagórica"
orden: 7
---

## Enunciado

Deriva y simplifica

$$
f(x) = \frac{\operatorname{sen} x}{1 + \cos x}
$$

## Solución

1. Regla del cociente: $f'(x) = \frac{\cos x(1 + \cos x) - \operatorname{sen} x(-\operatorname{sen} x)}{(1 + \cos x)^2}$.
2. Numerador: $\cos x + \cos^2 x + \operatorname{sen}^2 x = \cos x + 1$.
3. Entonces $f'(x) = \frac{1 + \cos x}{(1 + \cos x)^2}$.
4. Simplificamos, donde $1 + \cos x \neq 0$: $f'(x) = \frac{1}{1 + \cos x}$.

**Resultado final:** $f'(x) = \dfrac{1}{1 + \cos x}$
