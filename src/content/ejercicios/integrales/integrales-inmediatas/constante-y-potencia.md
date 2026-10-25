---
titulo: "Integral de una constante y una potencia"
tema: "integrales"
seccion: "integrales-inmediatas"
dificultad: "basico"
metodo: "Reglas de la constante y de la potencia"
orden: 2
---

## Enunciado

Calcula $\displaystyle \int \left(5 - 3x^4\right)dx$.

## Solución

1. $\int 5\,dx = 5x$, porque $(5x)' = 5$.
2. Regla de la potencia, $\int x^n\,dx = \frac{x^{n+1}}{n + 1}$ para $n \neq -1$: $\int 3x^4\,dx = \frac{3x^5}{5}$.
3. Restamos y agregamos la constante: $5x - \frac{3}{5}x^5 + C$.
4. Comprobación: $\left(5x - \frac{3}{5}x^5\right)' = 5 - 3x^4$.

**Resultado final:** $\displaystyle \int \left(5 - 3x^4\right)dx = 5x - \frac{3}{5}x^5 + C$
