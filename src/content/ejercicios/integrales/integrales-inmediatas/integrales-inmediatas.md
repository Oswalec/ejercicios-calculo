---
titulo: "Integral inmediata de un polinomio"
tema: "integrales"
seccion: "integrales-inmediatas"
dificultad: "basico"
metodo: "Regla de la potencia para integrales"
orden: 1
---

## Enunciado

Calcula la siguiente integral indefinida:

$$
\int (6x^2 - 4x + 5)\,dx
$$

## Solución

1. La integral de una suma es la suma de las integrales, y las constantes salen de la integral. Integramos término a término.
2. Regla de la potencia, $\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$ para $n \neq -1$: $\int 6x^2\,dx = 6 \cdot \frac{x^3}{3} = 2x^3$.
3. $\int -4x\,dx = -4 \cdot \frac{x^2}{2} = -2x^2$.
4. $\int 5\,dx = 5x$.
5. Sumamos y agregamos una sola constante de integración: $2x^3 - 2x^2 + 5x + C$. Comprobación: al derivar se obtiene $6x^2 - 4x + 5$.

**Resultado final:** $\displaystyle \int (6x^2 - 4x + 5)\,dx = 2x^3 - 2x^2 + 5x + C$
