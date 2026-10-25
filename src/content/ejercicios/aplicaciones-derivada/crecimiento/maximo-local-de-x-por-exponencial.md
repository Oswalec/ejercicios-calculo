---
titulo: "Máximo local de x·e^(−x)"
tema: "aplicaciones-derivada"
seccion: "crecimiento"
dificultad: "intermedio"
metodo: "Prueba de la primera derivada"
orden: 4
---

## Enunciado

Halla los extremos locales de $f(x) = xe^{-x}$.

## Solución

1. Regla del producto: $f'(x) = e^{-x} - xe^{-x} = e^{-x}(1 - x)$.
2. Como $e^{-x} > 0$, el signo de $f'$ es el de $1 - x$: positivo para $x < 1$ y negativo para $x > 1$.
3. $f$ crece en $(-\infty, 1)$ y decrece en $(1, \infty)$: hay un **máximo local** en $x = 1$.
4. $f(1) = e^{-1} = \frac{1}{e}$. No hay otros puntos críticos.

**Resultado final:** Máximo local en $\left(1, \dfrac{1}{e}\right)$.
