---
titulo: "Método de Newton para aproximar √2"
tema: "aplicaciones-derivada"
seccion: "tasas-relacionadas-aproximacion"
dificultad: "intermedio"
metodo: "Método de Newton-Raphson"
orden: 8
---

## Enunciado

Aplica tres iteraciones del método de Newton a $f(x) = x^2 - 2$, desde $x_0 = 1$, para aproximar $\sqrt{2}$.

## Solución

1. Método de Newton: $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$. Aquí $f'(x) = 2x$, así que $x_{n+1} = x_n - \frac{x_n^2 - 2}{2x_n} = \frac{x_n}{2} + \frac{1}{x_n}$.
2. $x_1 = \frac{1}{2} + 1 = 1.5$.
3. $x_2 = 0.75 + \frac{1}{1.5} = 0.75 + 0.666667 = 1.416667$.
4. $x_3 = 0.708333 + \frac{1}{1.416667} \approx 0.708333 + 0.705882 = 1.414216$.
5. El valor real es $\sqrt{2} = 1.414214\ldots$: tras tres iteraciones ya hay cinco decimales correctos.

**Resultado final:** $x_3 \approx 1.414216$, que aproxima $\sqrt{2}$.
