---
titulo: "Crecimiento de ln x / x"
tema: "aplicaciones-derivada"
seccion: "crecimiento"
dificultad: "intermedio"
metodo: "Signo de la primera derivada"
orden: 7
---

## Enunciado

Estudia el crecimiento de $f(x) = \dfrac{\ln x}{x}$ y halla su máximo.

## Solución

1. Dominio: $x > 0$. Regla del cociente: $f'(x) = \frac{\frac{1}{x} \cdot x - \ln x}{x^2} = \frac{1 - \ln x}{x^2}$.
2. Como $x^2 > 0$, el signo de $f'$ es el de $1 - \ln x$: positivo si $\ln x < 1$ ($x < e$) y negativo si $x > e$.
3. $f$ crece en $(0, e)$ y decrece en $(e, \infty)$: máximo en $x = e$.
4. $f(e) = \frac{1}{e}$. Como consecuencia, $\frac{\ln x}{x} \le \frac{1}{e}$ para todo $x > 0$.

**Resultado final:** Creciente en $(0, e)$ y decreciente en $(e, \infty)$; máximo absoluto $\dfrac{1}{e}$ en $x = e$.
