---
titulo: "Derivada de la secante"
tema: "derivadas"
seccion: "trigonometricas"
dificultad: "basico"
metodo: "Regla de la cadena con potencia negativa"
orden: 3
---

## Enunciado

Demuestra que $\dfrac{d}{dx}\sec x = \sec x\tan x$.

## Solución

1. $\sec x = \frac{1}{\cos x} = (\cos x)^{-1}$, donde $\cos x \neq 0$.
2. Por la cadena: $\frac{d}{dx}(\cos x)^{-1} = -(\cos x)^{-2} \cdot (-\operatorname{sen} x) = \frac{\operatorname{sen} x}{\cos^2 x}$.
3. Separamos: $\frac{\operatorname{sen} x}{\cos^2 x} = \frac{1}{\cos x} \cdot \frac{\operatorname{sen} x}{\cos x} = \sec x\tan x$.
4. De forma análoga se obtienen $\frac{d}{dx}\csc x = -\csc x\cot x$ y $\frac{d}{dx}\cot x = -\csc^2 x$.

**Resultado final:** $\dfrac{d}{dx}\sec x = \sec x\tan x$
