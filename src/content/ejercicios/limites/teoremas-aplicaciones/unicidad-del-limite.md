---
titulo: "Demostración de la unicidad del límite"
tema: "limites"
seccion: "teoremas-aplicaciones"
dificultad: "avanzado"
metodo: "Reducción al absurdo con la definición ε-δ"
orden: 5
---

## Enunciado

Demuestra que si $\displaystyle \lim_{x \to a} f(x) = L$ y $\displaystyle \lim_{x \to a} f(x) = M$, entonces $L = M$.

## Solución

1. Supongamos, por el absurdo, que $L \neq M$. Tomamos $\varepsilon = \frac{|L - M|}{2} > 0$.
2. Como $\displaystyle \lim_{x \to a} f(x) = L$, existe $\delta_1 > 0$ tal que $0 < |x - a| < \delta_1$ implica $|f(x) - L| < \varepsilon$.
3. Como $\displaystyle \lim_{x \to a} f(x) = M$, existe $\delta_2 > 0$ tal que $0 < |x - a| < \delta_2$ implica $|f(x) - M| < \varepsilon$.
4. Tomamos un $x$ con $0 < |x - a| < \min\{\delta_1, \delta_2\}$. Por la desigualdad triangular: $|L - M| \le |L - f(x)| + |f(x) - M| < \varepsilon + \varepsilon = |L - M|$.
5. Obtuvimos $|L - M| < |L - M|$, lo cual es imposible. La suposición era falsa, así que $L = M$.

**Resultado final:** El límite de una función en un punto, si existe, es único: $L = M$.
