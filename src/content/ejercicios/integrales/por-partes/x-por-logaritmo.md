---
titulo: "Por partes con logaritmo: x ln x"
tema: "integrales"
seccion: "por-partes"
dificultad: "basico"
metodo: "Integración por partes con u = ln x"
orden: 5
---

## Enunciado

Calcula $\displaystyle \int x\ln x\,dx$, para $x > 0$.

## Solución

1. Aquí conviene $u = \ln x$, porque su derivada es algebraica, y $dv = x\,dx$. Entonces $du = \frac{dx}{x}$ y $v = \frac{x^2}{2}$.
2. $\int x\ln x\,dx = \frac{x^2}{2}\ln x - \int \frac{x^2}{2} \cdot \frac{1}{x}\,dx = \frac{x^2}{2}\ln x - \int \frac{x}{2}\,dx$.
3. $\int \frac{x}{2}\,dx = \frac{x^2}{4}$.
4. Resultado: $\frac{x^2}{2}\ln x - \frac{x^2}{4} + C$.

**Resultado final:** $\displaystyle \int x\ln x\,dx = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C$
