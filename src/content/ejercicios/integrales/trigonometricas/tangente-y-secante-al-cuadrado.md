---
titulo: "Potencia de tangente por sec² x"
tema: "integrales"
seccion: "trigonometricas"
dificultad: "basico"
metodo: "Sustitución u = tan x"
orden: 5
---

## Enunciado

Calcula $\displaystyle \int \tan^3 x\sec^2 x\,dx$.

## Solución

1. $\sec^2 x$ es la derivada de $\tan x$. Hacemos $u = \tan x$, con $du = \sec^2 x\,dx$.
2. $\int u^3\,du = \frac{u^4}{4}$.
3. Regresamos a $x$: $\frac{\tan^4 x}{4} + C$.

**Resultado final:** $\displaystyle \int \tan^3 x\sec^2 x\,dx = \frac{\tan^4 x}{4} + C$
