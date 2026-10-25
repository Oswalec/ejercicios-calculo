---
titulo: "Aplicación: población a largo plazo"
tema: "limites"
seccion: "teoremas-aplicaciones"
dificultad: "basico"
metodo: "Límite al infinito de una función racional"
orden: 8
---

## Enunciado

La población de una colonia de bacterias, en miles, después de $t$ horas es

$$
P(t) = \frac{1200\,t}{t + 3}, \qquad t \ge 0.
$$

¿Qué valor alcanza la población a largo plazo?

## Solución

1. «A largo plazo» significa calcular $\displaystyle \lim_{t \to \infty} P(t)$.
2. Numerador y denominador tienden a $\infty$. Dividimos ambos entre $t$ (para $t > 0$): $P(t) = \frac{1200}{1 + \frac{3}{t}}$.
3. Cuando $t \to \infty$, $\frac{3}{t} \to 0$, así que $P(t) \to \frac{1200}{1} = 1200$.
4. Además, para todo $t \ge 0$ se cumple $P(t) = 1200 \cdot \frac{t}{t + 3} < 1200$: la población crece acercándose a $1200$ mil sin superarlo.

**Resultado final:** $\displaystyle \lim_{t \to \infty} P(t) = 1200$; la población se estabiliza en $1\,200\,000$ bacterias.
