---
titulo: "Integral de la secante con un truco algebraico"
tema: "integrales"
seccion: "otras-tecnicas"
dificultad: "intermedio"
metodo: "Multiplicar por (sec x + tan x)/(sec x + tan x)"
orden: 10
---

## Enunciado

Calcula $\displaystyle \int \sec x\,dx$.

## Solución

1. Multiplicamos y dividimos por $\sec x + \tan x$: $\int \frac{\sec x(\sec x + \tan x)}{\sec x + \tan x}\,dx = \int \frac{\sec^2 x + \sec x\tan x}{\sec x + \tan x}\,dx$.
2. El numerador es la derivada del denominador: $(\sec x + \tan x)' = \sec x\tan x + \sec^2 x$.
3. Con $u = \sec x + \tan x$: $\int \frac{du}{u} = \ln|u|$.
4. Resultado: $\ln|\sec x + \tan x| + C$, coherente con la derivada calculada en la sección 4.6.

**Resultado final:** $\displaystyle \int \sec x\,dx = \ln|\sec x + \tan x| + C$
