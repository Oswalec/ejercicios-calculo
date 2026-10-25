---
titulo: "Sumas inferior y superior con cuatro rectángulos"
tema: "integrales"
seccion: "integrales-definidas"
dificultad: "intermedio"
metodo: "Sumas inferior y superior de una función creciente"
orden: 4
---

## Enunciado

Para $f(x) = x^2$ en $[0, 2]$ con $n = 4$ subintervalos iguales, calcula la suma inferior y la superior, y compáralas con el valor exacto de la integral.

## Solución

1. $\Delta x = 0.5$; los puntos son $0, 0.5, 1, 1.5, 2$. Como $f$ es creciente en $[0, 2]$, el mínimo de cada subintervalo está a la izquierda y el máximo a la derecha.
2. Suma inferior: $0.5\left(0 + 0.25 + 1 + 2.25\right) = 0.5 \cdot 3.5 = 1.75$.
3. Suma superior: $0.5\left(0.25 + 1 + 2.25 + 4\right) = 0.5 \cdot 7.5 = 3.75$.
4. El valor exacto, $\frac{8}{3} \approx 2.667$, queda entre ambas: $1.75 \le \int_0^2 x^2\,dx \le 3.75$. Al aumentar $n$, las dos sumas se acercan al valor exacto.

**Resultado final:** Suma inferior $1.75$ y suma superior $3.75$; el valor exacto, $\dfrac{8}{3}$, está entre ellas.
