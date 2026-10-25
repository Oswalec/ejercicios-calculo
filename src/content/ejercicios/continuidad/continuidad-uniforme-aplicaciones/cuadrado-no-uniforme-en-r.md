---
titulo: "x² no es uniformemente continua en ℝ"
tema: "continuidad"
seccion: "continuidad-uniforme-aplicaciones"
dificultad: "avanzado"
metodo: "Negación de la definición con sucesiones"
orden: 3
---

## Enunciado

Demuestra que $f(x) = x^2$ no es uniformemente continua en $\mathbb{R}$.

## Solución

1. Negación de la definición: existe $\varepsilon > 0$ tal que para todo $\delta > 0$ hay $x, y$ con $|x - y| < \delta$ pero $|f(x) - f(y)| \ge \varepsilon$.
2. Tomamos $x_n = n + \frac{1}{n}$ e $y_n = n$. Entonces $|x_n - y_n| = \frac{1}{n} \to 0$: los puntos se acercan tanto como se quiera.
3. Sin embargo, $|f(x_n) - f(y_n)| = \left(n + \frac{1}{n}\right)^2 - n^2 = 2 + \frac{1}{n^2} \ge 2$.
4. Con $\varepsilon = 2$: dado cualquier $\delta > 0$, elegimos $n$ con $\frac{1}{n} < \delta$, y el par $x_n, y_n$ viola la condición. No existe un $\delta$ común a todo $\mathbb{R}$, porque la función se vuelve cada vez más empinada.

**Resultado final:** $f(x) = x^2$ es continua en $\mathbb{R}$, pero no uniformemente continua.
