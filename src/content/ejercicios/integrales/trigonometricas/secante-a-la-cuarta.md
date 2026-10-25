---
titulo: "Integral de sec⁴ x"
tema: "integrales"
seccion: "trigonometricas"
dificultad: "intermedio"
metodo: "Separar sec² x y usar sec² x = 1 + tan² x"
orden: 6
---

## Enunciado

Calcula $\displaystyle \int \sec^4 x\,dx$.

## Solución

1. Con potencia par de la secante se separa un $\sec^2 x$: $\sec^4 x = \sec^2 x \cdot \sec^2 x = \left(1 + \tan^2 x\right)\sec^2 x$.
2. Hacemos $u = \tan x$, con $du = \sec^2 x\,dx$: $\int\left(1 + u^2\right)du = u + \frac{u^3}{3}$.
3. Regresamos a $x$: $\tan x + \frac{\tan^3 x}{3} + C$.

**Resultado final:** $\displaystyle \int \sec^4 x\,dx = \tan x + \frac{\tan^3 x}{3} + C$
