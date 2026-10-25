---
titulo: "Método de Newton para una ecuación cúbica"
tema: "aplicaciones-derivada"
seccion: "tasas-relacionadas-aproximacion"
dificultad: "avanzado"
metodo: "Método de Newton-Raphson"
orden: 9
---

## Enunciado

Aplica dos iteraciones del método de Newton a $x^3 - x - 1 = 0$ desde $x_0 = 1.5$.

## Solución

1. $f(x) = x^3 - x - 1$ y $f'(x) = 3x^2 - 1$. Fórmula: $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$.
2. Primera iteración: $f(1.5) = 3.375 - 1.5 - 1 = 0.875$ y $f'(1.5) = 6.75 - 1 = 5.75$, así que $x_1 = 1.5 - \frac{0.875}{5.75} \approx 1.5 - 0.152174 = 1.347826$.
3. Segunda iteración: $x_1^3 \approx 2.448514$, de donde $f(x_1) \approx 2.448514 - 1.347826 - 1 = 0.100688$, y $f'(x_1) \approx 3(1.816635) - 1 = 4.449905$.
4. $x_2 \approx 1.347826 - \frac{0.100688}{4.449905} \approx 1.347826 - 0.022627 = 1.325199$.
5. La raíz real es $1.324718\ldots$. Con dos iteraciones el error ya es menor que $0.0005$; por bisección (sección 3.5) hacían falta muchos más pasos.

**Resultado final:** $x_2 \approx 1.3252$ (raíz real $\approx 1.3247$).
