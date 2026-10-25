---
titulo: "Sustitución con logaritmo: ln x / x"
tema: "integrales"
seccion: "sustitucion"
dificultad: "basico"
metodo: "Sustitución u = ln x"
orden: 5
---

## Enunciado

Calcula $\displaystyle \int \frac{\ln x}{x}\,dx$, para $x > 0$.

## Solución

1. Observamos que $\frac{1}{x}$ es la derivada de $\ln x$. Hacemos $u = \ln x$, con $du = \frac{dx}{x}$.
2. $\int \frac{\ln x}{x}\,dx = \int u\,du = \frac{u^2}{2}$.
3. Regresamos a $x$: $\frac{(\ln x)^2}{2} + C$.

**Resultado final:** $\displaystyle \int \frac{\ln x}{x}\,dx = \frac{(\ln x)^2}{2} + C$
