---
titulo: "Definición formal de un límite infinito"
tema: "limites"
seccion: "limites-infinitos"
dificultad: "intermedio"
metodo: "Definición M-δ de límite infinito"
orden: 1
---

## Enunciado

Demuestra, usando la definición formal, que:

$$
\lim_{x \to 0} \frac{1}{x^2} = +\infty
$$

## Solución

1. Definición: $\displaystyle \lim_{x \to a} f(x) = +\infty$ significa que para todo $M > 0$ existe $\delta > 0$ tal que, si $0 < |x - a| < \delta$, entonces $f(x) > M$.
2. Análisis previo: queremos $\frac{1}{x^2} > M$. Como $x^2 > 0$ para $x \neq 0$, esto equivale a $x^2 < \frac{1}{M}$, es decir, $|x| < \frac{1}{\sqrt{M}}$.
3. Elección: dado $M > 0$, tomamos $\delta = \frac{1}{\sqrt{M}} > 0$.
4. Verificación: si $0 < |x| < \delta$, entonces $0 < x^2 < \delta^2 = \frac{1}{M}$, y al tomar recíprocos (cantidades positivas) $\frac{1}{x^2} > M$.
5. Como $M > 0$ fue arbitrario, se cumple la definición.

**Resultado final:** Para cada $M > 0$ basta $\delta = \dfrac{1}{\sqrt{M}}$; por lo tanto $\displaystyle \lim_{x \to 0} \frac{1}{x^2} = +\infty$.
