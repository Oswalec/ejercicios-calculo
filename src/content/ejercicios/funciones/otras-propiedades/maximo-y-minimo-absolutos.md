---
titulo: "Máximo y mínimo absolutos de una cuadrática en un intervalo"
tema: "funciones"
seccion: "otras-propiedades"
dificultad: "intermedio"
metodo: "Completación de cuadrados y acotación de |x − h|"
orden: 7
---

## Enunciado

Halla el máximo y el mínimo absolutos de $f(x) = x^2 - 4x + 1$ en el intervalo $[0, 5]$.

## Solución

1. Completamos cuadrados: $f(x) = (x - 2)^2 - 3$.
2. Para $x \in [0, 5]$: $-2 \le x - 2 \le 3$, así que $0 \le (x - 2)^2 \le 9$. El valor $0$ se alcanza en $x = 2$ y el valor $9$ en $x = 5$.
3. Entonces $-3 \le f(x) \le 6$ en $[0, 5]$.
4. El mínimo absoluto es $f(2) = -3$, en el vértice. El máximo absoluto es $f(5) = 25 - 20 + 1 = 6$, en el extremo más alejado del vértice; en el otro extremo, $f(0) = 1 < 6$.

**Resultado final:** Mínimo absoluto $-3$ en $x = 2$; máximo absoluto $6$ en $x = 5$.
