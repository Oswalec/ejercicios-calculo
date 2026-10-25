---
titulo: "Derivada de una función inversa en un punto"
tema: "derivadas"
seccion: "implicita-y-otras-tecnicas"
dificultad: "intermedio"
metodo: "Fórmula (f⁻¹)'(b) = 1 / f'(a), con f(a) = b"
orden: 5
---

## Enunciado

Sea $f(x) = x^3 + x + 1$. Calcula $\left(f^{-1}\right)'(3)$ sin hallar $f^{-1}$.

## Solución

1. $f'(x) = 3x^2 + 1 > 0$, así que $f$ es creciente e invertible, y su inversa es derivable.
2. Fórmula: si $f(a) = b$ y $f'(a) \neq 0$, entonces $\left(f^{-1}\right)'(b) = \frac{1}{f'(a)}$.
3. Buscamos $a$ con $f(a) = 3$: $a^3 + a + 1 = 3$; por inspección, $a = 1$ cumple $1 + 1 + 1 = 3$.
4. $f'(1) = 4$, así que $\left(f^{-1}\right)'(3) = \frac{1}{4}$.

**Resultado final:** $\left(f^{-1}\right)'(3) = \dfrac{1}{4}$
