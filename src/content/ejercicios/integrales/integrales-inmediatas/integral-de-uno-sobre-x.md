---
titulo: "La integral de 1/x"
tema: "integrales"
seccion: "integrales-inmediatas"
dificultad: "intermedio"
metodo: "División término a término y ∫dx/x = ln|x|"
orden: 5
---

## Enunciado

Calcula $\displaystyle \int \frac{x^2 + 3}{x}\,dx$.

## Solución

1. Dividimos término a término (para $x \neq 0$): $\frac{x^2 + 3}{x} = x + \frac{3}{x}$.
2. $\int x\,dx = \frac{x^2}{2}$.
3. La regla de la potencia no sirve para $n = -1$; en su lugar: $\int \frac{dx}{x} = \ln|x|$. Así, $\int \frac{3}{x}\,dx = 3\ln|x|$.
4. Resultado: $\frac{x^2}{2} + 3\ln|x| + C$.

**Resultado final:** $\displaystyle \int \frac{x^2 + 3}{x}\,dx = \frac{x^2}{2} + 3\ln|x| + C$
