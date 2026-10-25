---
titulo: "Integral de la tangente"
tema: "integrales"
seccion: "trigonometricas"
dificultad: "basico"
metodo: "Reescritura como cociente y sustitución u = cos x"
orden: 7
---

## Enunciado

Calcula $\displaystyle \int \tan x\,dx$.

## Solución

1. Escribimos $\tan x = \frac{\operatorname{sen} x}{\cos x}$.
2. Hacemos $u = \cos x$, con $du = -\operatorname{sen} x\,dx$: $\int \frac{\operatorname{sen} x}{\cos x}\,dx = -\int \frac{du}{u} = -\ln|u|$.
3. Resultado: $-\ln|\cos x| + C$. Como $-\ln|\cos x| = \ln\left|\frac{1}{\cos x}\right|$, también se escribe $\ln|\sec x| + C$.

**Resultado final:** $\displaystyle \int \tan x\,dx = -\ln|\cos x| + C = \ln|\sec x| + C$
