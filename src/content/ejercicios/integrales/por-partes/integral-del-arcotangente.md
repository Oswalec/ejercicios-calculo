---
titulo: "Integral del arcotangente"
tema: "integrales"
seccion: "por-partes"
dificultad: "intermedio"
metodo: "Integración por partes con dv = dx y sustitución"
orden: 6
---

## Enunciado

Calcula $\displaystyle \int \arctan x\,dx$.

## Solución

1. Elegimos $u = \arctan x$ y $dv = dx$, con $du = \frac{dx}{1 + x^2}$ y $v = x$.
2. $\int \arctan x\,dx = x\arctan x - \int \frac{x}{1 + x^2}\,dx$.
3. Para la integral restante sustituimos $w = 1 + x^2$, con $dw = 2x\,dx$: $\int \frac{x}{1 + x^2}\,dx = \frac{1}{2}\ln\left(1 + x^2\right)$.
4. Resultado: $x\arctan x - \frac{1}{2}\ln\left(1 + x^2\right) + C$.

**Resultado final:** $\displaystyle \int \arctan x\,dx = x\arctan x - \frac{1}{2}\ln\left(1 + x^2\right) + C$
