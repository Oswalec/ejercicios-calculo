---
titulo: "Período de una suma de funciones trigonométricas"
tema: "funciones"
seccion: "tipos-de-funciones"
dificultad: "intermedio"
metodo: "Mínimo común múltiplo de los períodos"
orden: 5
---

## Enunciado

Halla un período de

$$
f(x) = \operatorname{sen}(3x) + \cos(2x)
$$

## Solución

1. Si $\operatorname{sen} u$ y $\cos u$ tienen período $2\pi$, entonces $\operatorname{sen}(bx)$ y $\cos(bx)$ tienen período $\frac{2\pi}{|b|}$.
2. Período de $\operatorname{sen}(3x)$: $T_1 = \frac{2\pi}{3}$. Período de $\cos(2x)$: $T_2 = \frac{2\pi}{2} = \pi$.
3. Un período de la suma es un número que sea múltiplo entero de ambos. El menor es $2\pi = 3 \cdot \frac{2\pi}{3} = 2 \cdot \pi$.
4. Verificación: $f(x + 2\pi) = \operatorname{sen}(3x + 6\pi) + \cos(2x + 4\pi) = \operatorname{sen}(3x) + \cos(2x) = f(x)$.

**Resultado final:** $T = 2\pi$ es un período de $f$ (el menor múltiplo común de $\frac{2\pi}{3}$ y $\pi$).
