---
titulo: "Derivada de ln(sec x + tan x)"
tema: "derivadas"
seccion: "trigonometricas"
dificultad: "avanzado"
metodo: "Regla de la cadena y factorización"
orden: 10
---

## Enunciado

Demuestra que $\dfrac{d}{dx}\ln\left(\sec x + \tan x\right) = \sec x$, donde $\sec x + \tan x > 0$.

## Solución

1. Por la cadena: $\frac{d}{dx}\ln u = \frac{u'}{u}$, con $u = \sec x + \tan x$.
2. $u' = \sec x\tan x + \sec^2 x$.
3. Factorizamos $\sec x$: $u' = \sec x(\tan x + \sec x)$.
4. Entonces $\frac{u'}{u} = \frac{\sec x(\sec x + \tan x)}{\sec x + \tan x} = \sec x$. Este resultado da la antiderivada de $\sec x$ que se usa en integrales.

**Resultado final:** $\dfrac{d}{dx}\ln\left(\sec x + \tan x\right) = \sec x$
