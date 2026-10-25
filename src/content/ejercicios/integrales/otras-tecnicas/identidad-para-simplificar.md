---
titulo: "Una identidad para simplificar 1/(1 + cos x)"
tema: "integrales"
seccion: "otras-tecnicas"
dificultad: "intermedio"
metodo: "Multiplicar por el conjugado e identidad pitagórica"
orden: 6
---

## Enunciado

Calcula $\displaystyle \int \frac{dx}{1 + \cos x}$.

## Solución

1. Multiplicamos por el conjugado $1 - \cos x$: $\frac{1 - \cos x}{1 - \cos^2 x} = \frac{1 - \cos x}{\operatorname{sen}^2 x}$.
2. Separamos: $\frac{1}{\operatorname{sen}^2 x} - \frac{\cos x}{\operatorname{sen}^2 x} = \csc^2 x - \cot x\csc x$.
3. Integrales inmediatas: $\int\csc^2 x\,dx = -\cot x$ y $\int\cot x\csc x\,dx = -\csc x$.
4. Resultado: $-\cot x + \csc x + C = \frac{1 - \cos x}{\operatorname{sen} x} + C$, que también es igual a $\tan\frac{x}{2} + C$.

**Resultado final:** $\displaystyle \int \frac{dx}{1 + \cos x} = \csc x - \cot x + C = \tan\frac{x}{2} + C$
