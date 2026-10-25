---
titulo: "Rango de una función logarítmica"
tema: "funciones"
seccion: "rango"
dificultad: "intermedio"
metodo: "Monotonía del logaritmo"
orden: 8
---

## Enunciado

Halla el rango de

$$
f(x) = \ln\left(x^2 + 1\right)
$$

## Solución

1. Dominio: $x^2 + 1 > 0$ para todo $x$, así que $\operatorname{Dom} f = \mathbb{R}$.
2. El argumento cumple $x^2 + 1 \ge 1$, y toma todos los valores de $[1, \infty)$.
3. El logaritmo es creciente, así que $\ln(x^2 + 1) \ge \ln 1 = 0$.
4. Todo $y \ge 0$ se alcanza: $x^2 + 1 = e^{y}$ tiene solución $x = \sqrt{e^{y} - 1}$, pues $e^{y} \ge 1$.

**Resultado final:** $\operatorname{Ran} f = [0, \infty)$
