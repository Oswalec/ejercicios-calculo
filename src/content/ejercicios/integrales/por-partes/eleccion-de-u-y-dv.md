---
titulo: "Elección de u y dv: x sec² x"
tema: "integrales"
seccion: "por-partes"
dificultad: "intermedio"
metodo: "Integración por partes con la elección adecuada"
orden: 10
---

## Enunciado

Calcula $\displaystyle \int x\sec^2 x\,dx$ y justifica la elección de $u$ y $dv$.

## Solución

1. Opción A: $u = \sec^2 x$ y $dv = x\,dx$. La nueva integral sería $\int \frac{x^2}{2} \cdot 2\sec^2 x\tan x\,dx$, más complicada.
2. Opción B: $u = x$ (se simplifica al derivar) y $dv = \sec^2 x\,dx$ (fácil de integrar: $v = \tan x$). Es la buena.
3. $\int x\sec^2 x\,dx = x\tan x - \int \tan x\,dx$.
4. Como $\int \tan x\,dx = -\ln|\cos x|$, el resultado es $x\tan x + \ln|\cos x| + C$.

**Resultado final:** $\displaystyle \int x\sec^2 x\,dx = x\tan x + \ln|\cos x| + C$
