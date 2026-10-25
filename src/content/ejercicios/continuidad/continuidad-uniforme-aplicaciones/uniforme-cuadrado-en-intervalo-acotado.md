---
titulo: "x² es uniformemente continua en un intervalo acotado"
tema: "continuidad"
seccion: "continuidad-uniforme-aplicaciones"
dificultad: "intermedio"
metodo: "Definición de continuidad uniforme con acotación"
orden: 2
---

## Enunciado

Demuestra que $f(x) = x^2$ es uniformemente continua en $[0, 2]$.

## Solución

1. Para $x, y \in [0, 2]$: $|f(x) - f(y)| = |x^2 - y^2| = |x + y|\,|x - y|$.
2. Como $0 \le x, y \le 2$, se cumple $|x + y| = x + y \le 4$. Entonces $|f(x) - f(y)| \le 4|x - y|$.
3. Dado $\varepsilon > 0$, tomamos $\delta = \frac{\varepsilon}{4}$, independiente de $x$ e $y$.
4. Si $|x - y| < \delta$: $|f(x) - f(y)| \le 4|x - y| < 4 \cdot \frac{\varepsilon}{4} = \varepsilon$.

**Resultado final:** Con $\delta = \dfrac{\varepsilon}{4}$, $f(x) = x^2$ es uniformemente continua en $[0, 2]$.
