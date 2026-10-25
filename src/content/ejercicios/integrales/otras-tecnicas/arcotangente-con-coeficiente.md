---
titulo: "Arcotangente con coeficiente en x²"
tema: "integrales"
seccion: "otras-tecnicas"
dificultad: "basico"
metodo: "Factorización del coeficiente y fórmula del arcotangente"
orden: 8
---

## Enunciado

Calcula $\displaystyle \int \frac{dx}{4 + 9x^2}$.

## Solución

1. Escribimos $4 + 9x^2 = 4 + (3x)^2$. Con $u = 3x$, $du = 3\,dx$: $\frac{1}{3}\int \frac{du}{4 + u^2}$.
2. Fórmula: $\int \frac{du}{a^2 + u^2} = \frac{1}{a}\arctan\frac{u}{a}$, con $a = 2$.
3. $\frac{1}{3} \cdot \frac{1}{2}\arctan\frac{3x}{2} = \frac{1}{6}\arctan\frac{3x}{2}$.

**Resultado final:** $\displaystyle \int \frac{dx}{4 + 9x^2} = \frac{1}{6}\arctan\frac{3x}{2} + C$
