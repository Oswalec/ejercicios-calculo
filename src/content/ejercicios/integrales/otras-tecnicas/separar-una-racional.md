---
titulo: "Separar una racional en logaritmo y arcotangente"
tema: "integrales"
seccion: "otras-tecnicas"
dificultad: "intermedio"
metodo: "Separación del numerador"
orden: 7
---

## Enunciado

Calcula $\displaystyle \int \frac{x + 2}{x^2 + 4}\,dx$.

## Solución

1. Separamos el numerador: $\frac{x}{x^2 + 4} + \frac{2}{x^2 + 4}$.
2. Primer término, con $u = x^2 + 4$ y $du = 2x\,dx$: $\int \frac{x}{x^2 + 4}\,dx = \frac{1}{2}\ln\left(x^2 + 4\right)$.
3. Segundo término, con $\int \frac{du}{u^2 + a^2} = \frac{1}{a}\arctan\frac{u}{a}$ y $a = 2$: $2 \cdot \frac{1}{2}\arctan\frac{x}{2} = \arctan\frac{x}{2}$.
4. Resultado: $\frac{1}{2}\ln\left(x^2 + 4\right) + \arctan\frac{x}{2} + C$.

**Resultado final:** $\displaystyle \int \frac{x + 2}{x^2 + 4}\,dx = \frac{1}{2}\ln\left(x^2 + 4\right) + \arctan\frac{x}{2} + C$
