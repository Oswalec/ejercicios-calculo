---
titulo: "Rango mediante el discriminante"
tema: "funciones"
seccion: "rango"
dificultad: "avanzado"
metodo: "Despeje de x y condición del discriminante"
orden: 10
---

## Enunciado

Halla el rango de

$$
f(x) = \frac{x}{x^2 + 1}
$$

## Solución

1. El dominio es $\mathbb{R}$. Un valor $y$ está en el rango si $y = \frac{x}{x^2 + 1}$ tiene solución real en $x$.
2. Multiplicamos por $x^2 + 1 > 0$: $y x^2 + y = x$, es decir, $y x^2 - x + y = 0$.
3. Caso $y = 0$: la ecuación es $-x = 0$, con solución $x = 0$. Así que $0$ está en el rango.
4. Caso $y \neq 0$: es una ecuación cuadrática en $x$, con solución real si y solo si su discriminante es no negativo: $(-1)^2 - 4y \cdot y = 1 - 4y^2 \ge 0$, es decir, $y^2 \le \frac{1}{4}$, o sea $-\frac{1}{2} \le y \le \frac{1}{2}$.
5. Juntando ambos casos: el rango es $\left[-\frac{1}{2}, \frac{1}{2}\right]$. Los extremos se alcanzan en $x = 1$ y $x = -1$.

**Resultado final:** $\operatorname{Ran} f = \left[-\dfrac{1}{2}, \dfrac{1}{2}\right]$
