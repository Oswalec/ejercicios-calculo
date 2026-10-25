---
titulo: "Crecimiento de un polinomio frente a la exponencial"
tema: "limites"
seccion: "infinito-entre-infinito"
dificultad: "avanzado"
metodo: "Acotación de la exponencial y teorema del encaje"
orden: 9
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \frac{x^3}{e^{x}}
$$

## Solución

1. Numerador y denominador tienden a $\infty$: indeterminación $\frac{\infty}{\infty}$. Probaremos que la exponencial crece más rápido que cualquier polinomio.
2. Desigualdad auxiliar: para $x > 0$ y todo entero $n \ge 0$, $e^{x} > 1 + x + \frac{x^2}{2!} + \cdots + \frac{x^n}{n!}$. Se prueba por inducción: si $g_n(x) = e^{x} - \left(1 + x + \cdots + \frac{x^n}{n!}\right)$, entonces $g_n(0) = 0$ y $g_n'(x) = g_{n-1}(x) > 0$ para $x > 0$, con $g_0(x) = e^{x} - 1 > 0$.
3. Con $n = 4$, en particular $e^{x} > \frac{x^4}{24}$ para $x > 0$.
4. Entonces $0 < \frac{x^3}{e^{x}} < \frac{x^3}{x^4/24} = \frac{24}{x}$, y $\frac{24}{x} \to 0$ cuando $x \to \infty$.
5. Por el teorema del encaje, $\frac{x^3}{e^{x}} \to 0$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \frac{x^3}{e^{x}} = 0$
