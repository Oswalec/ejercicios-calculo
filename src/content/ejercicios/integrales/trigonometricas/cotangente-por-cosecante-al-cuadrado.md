---
titulo: "Cotangente por cosecante al cuadrado"
tema: "integrales"
seccion: "trigonometricas"
dificultad: "basico"
metodo: "Sustitución u = cot x"
orden: 8
---

## Enunciado

Calcula $\displaystyle \int \cot x\csc^2 x\,dx$.

## Solución

1. Como $(\cot x)' = -\csc^2 x$, hacemos $u = \cot x$, con $du = -\csc^2 x\,dx$.
2. $\int \cot x\csc^2 x\,dx = -\int u\,du = -\frac{u^2}{2}$.
3. Regresamos a $x$: $-\frac{\cot^2 x}{2} + C$.

**Resultado final:** $\displaystyle \int \cot x\csc^2 x\,dx = -\frac{\cot^2 x}{2} + C$
