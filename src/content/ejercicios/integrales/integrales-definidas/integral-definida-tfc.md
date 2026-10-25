---
titulo: "Integral definida con el teorema fundamental del cálculo"
tema: "integrales"
seccion: "integrales-definidas"
dificultad: "basico"
metodo: "Teorema fundamental del cálculo (regla de Barrow)"
orden: 1
---

## Enunciado

Calcula la siguiente integral definida:

$$
\int_{0}^{2} (3x^2 + 1)\,dx
$$

## Solución

1. Por el teorema fundamental del cálculo, $\int_{a}^{b} f(x)\,dx = F(b) - F(a)$, donde $F$ es una antiderivada de $f$.
2. Hallamos una antiderivada con la regla de la potencia: $F(x) = x^3 + x$.
3. Evaluamos en el límite superior: $F(2) = 2^3 + 2 = 10$.
4. Evaluamos en el límite inferior: $F(0) = 0^3 + 0 = 0$.
5. Restamos: $F(2) - F(0) = 10 - 0 = 10$.

**Resultado final:** $\displaystyle \int_{0}^{2} (3x^2 + 1)\,dx = 10$
