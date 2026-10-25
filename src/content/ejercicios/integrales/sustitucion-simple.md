---
titulo: "Cambio de variable en una potencia"
tema: "integrales"
dificultad: "basico"
orden: 2
---

## Enunciado

Calcula la siguiente integral indefinida:

$$
\int 2x(x^2 + 1)^5\,dx
$$

## Solución

1. Observamos que $2x$ es la derivada de $x^2 + 1$. Esto sugiere el cambio de variable $u = x^2 + 1$.
2. Diferenciamos: $du = 2x\,dx$.
3. Sustituimos en la integral: $\int 2x(x^2 + 1)^5\,dx = \int u^5\,du$.
4. Integramos con la regla de la potencia: $\int u^5\,du = \frac{u^6}{6} + C$.
5. Regresamos a la variable original: $\frac{(x^2 + 1)^6}{6} + C$.

**Respuesta:** $\displaystyle \int 2x(x^2 + 1)^5\,dx = \frac{(x^2 + 1)^6}{6} + C$
