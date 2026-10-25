---
titulo: "Derivada de orden n"
tema: "derivadas"
seccion: "implicita-y-otras-tecnicas"
dificultad: "avanzado"
metodo: "Búsqueda de un patrón e inducción matemática"
orden: 10
---

## Enunciado

Halla la derivada de orden $n$ de $f(x) = \dfrac{1}{x}$ y demuéstrala por inducción.

## Solución

1. Calculamos algunas: $f'(x) = -x^{-2}$, $f''(x) = 2x^{-3}$, $f'''(x) = -6x^{-4}$, $f^{(4)}(x) = 24x^{-5}$.
2. Patrón: los signos se alternan y los coeficientes son $1, 2, 6, 24 = n!$. Conjetura: $f^{(n)}(x) = \frac{(-1)^n n!}{x^{n+1}}$.
3. Base: para $n = 1$, $\frac{(-1)^1 1!}{x^2} = -\frac{1}{x^2}$, correcto.
4. Paso inductivo: si $f^{(n)}(x) = (-1)^n n!\,x^{-(n+1)}$, derivando se obtiene $f^{(n+1)}(x) = (-1)^n n!\,(-(n + 1))x^{-(n+2)} = (-1)^{n+1}(n + 1)!\,x^{-(n+2)}$, que es la fórmula para $n + 1$.

**Resultado final:** $f^{(n)}(x) = \dfrac{(-1)^n\,n!}{x^{n+1}}$ para todo $n \ge 1$.
