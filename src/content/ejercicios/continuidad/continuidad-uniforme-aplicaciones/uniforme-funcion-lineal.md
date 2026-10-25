---
titulo: "Continuidad uniforme de una función lineal"
tema: "continuidad"
seccion: "continuidad-uniforme-aplicaciones"
dificultad: "intermedio"
metodo: "Definición de continuidad uniforme"
orden: 1
---

## Enunciado

Demuestra que $f(x) = 3x + 1$ es uniformemente continua en $\mathbb{R}$.

## Solución

1. $f$ es uniformemente continua en $I$ si para todo $\varepsilon > 0$ existe $\delta > 0$, **que no depende del punto**, tal que para todos $x, y \in I$ con $|x - y| < \delta$ se cumple $|f(x) - f(y)| < \varepsilon$.
2. Calculamos: $|f(x) - f(y)| = |3x - 3y| = 3|x - y|$.
3. Dado $\varepsilon > 0$, tomamos $\delta = \frac{\varepsilon}{3}$, que solo depende de $\varepsilon$.
4. Si $|x - y| < \delta$, entonces $|f(x) - f(y)| = 3|x - y| < 3 \cdot \frac{\varepsilon}{3} = \varepsilon$.

**Resultado final:** Con $\delta = \dfrac{\varepsilon}{3}$, $f$ es uniformemente continua en $\mathbb{R}$.
