---
titulo: "Derivada de la tangente con la regla del cociente"
tema: "derivadas"
seccion: "trigonometricas"
dificultad: "basico"
metodo: "Regla del cociente e identidad pitagórica"
orden: 2
---

## Enunciado

Demuestra que $\dfrac{d}{dx}\tan x = \sec^2 x$.

## Solución

1. $\tan x = \frac{\operatorname{sen} x}{\cos x}$, donde $\cos x \neq 0$.
2. Regla del cociente: $\frac{d}{dx}\tan x = \frac{\cos x \cdot \cos x - \operatorname{sen} x \cdot (-\operatorname{sen} x)}{\cos^2 x}$.
3. El numerador es $\cos^2 x + \operatorname{sen}^2 x = 1$ (identidad pitagórica).
4. Entonces $\frac{d}{dx}\tan x = \frac{1}{\cos^2 x} = \sec^2 x$.

**Resultado final:** $\dfrac{d}{dx}\tan x = \sec^2 x$
