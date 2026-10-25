---
titulo: "Integral de cos³ x: potencia impar"
tema: "integrales"
seccion: "trigonometricas"
dificultad: "intermedio"
metodo: "Separar un factor y usar la identidad pitagórica"
orden: 2
---

## Enunciado

Calcula $\displaystyle \int \cos^3 x\,dx$.

## Solución

1. Con potencia impar se separa un factor: $\cos^3 x = \cos^2 x\cos x = \left(1 - \operatorname{sen}^2 x\right)\cos x$.
2. Hacemos $u = \operatorname{sen} x$, con $du = \cos x\,dx$: $\int\left(1 - u^2\right)du = u - \frac{u^3}{3}$.
3. Regresamos a $x$: $\operatorname{sen} x - \frac{\operatorname{sen}^3 x}{3} + C$.

**Resultado final:** $\displaystyle \int \cos^3 x\,dx = \operatorname{sen} x - \frac{\operatorname{sen}^3 x}{3} + C$
