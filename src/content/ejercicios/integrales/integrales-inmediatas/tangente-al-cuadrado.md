---
titulo: "Integral de tan² x con una identidad"
tema: "integrales"
seccion: "integrales-inmediatas"
dificultad: "intermedio"
metodo: "Identidad tan² x = sec² x − 1"
orden: 10
---

## Enunciado

Calcula $\displaystyle \int \tan^2 x\,dx$.

## Solución

1. $\tan^2 x$ no aparece en la tabla, pero la identidad pitagórica $1 + \tan^2 x = \sec^2 x$ da $\tan^2 x = \sec^2 x - 1$.
2. $\int(\sec^2 x - 1)\,dx = \tan x - x + C$.
3. Comprobación: $(\tan x - x)' = \sec^2 x - 1 = \tan^2 x$.

**Resultado final:** $\displaystyle \int \tan^2 x\,dx = \tan x - x + C$
