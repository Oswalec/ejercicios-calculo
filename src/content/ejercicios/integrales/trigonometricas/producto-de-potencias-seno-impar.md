---
titulo: "Producto de potencias con seno impar"
tema: "integrales"
seccion: "trigonometricas"
dificultad: "intermedio"
metodo: "Separar sen x y sustituir u = cos x"
orden: 3
---

## Enunciado

Calcula $\displaystyle \int \operatorname{sen}^3 x\cos^2 x\,dx$.

## Solución

1. La potencia del seno es impar: separamos un $\operatorname{sen} x$ y escribimos $\operatorname{sen}^2 x = 1 - \cos^2 x$. Queda $\int\left(1 - \cos^2 x\right)\cos^2 x\operatorname{sen} x\,dx$.
2. Hacemos $u = \cos x$, con $du = -\operatorname{sen} x\,dx$: $-\int\left(1 - u^2\right)u^2\,du = -\int\left(u^2 - u^4\right)du$.
3. $= -\frac{u^3}{3} + \frac{u^5}{5}$.
4. Regresamos a $x$: $-\frac{\cos^3 x}{3} + \frac{\cos^5 x}{5} + C$.

**Resultado final:** $\displaystyle \int \operatorname{sen}^3 x\cos^2 x\,dx = -\frac{\cos^3 x}{3} + \frac{\cos^5 x}{5} + C$
