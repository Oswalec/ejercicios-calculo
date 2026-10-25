---
titulo: "Continuidad demostrada con ε-δ"
tema: "continuidad"
seccion: "conceptos-de-continuidad"
dificultad: "intermedio"
metodo: "Definición ε-δ de continuidad"
orden: 10
---

## Enunciado

Demuestra con la definición $\varepsilon$-$\delta$ que $f(x) = 2x + 3$ es continua en $x = 1$.

## Solución

1. $f$ es continua en $a$ si para todo $\varepsilon > 0$ existe $\delta > 0$ tal que $|x - a| < \delta$ implica $|f(x) - f(a)| < \varepsilon$. Aquí $a = 1$ y $f(1) = 5$.
2. Análisis: $|f(x) - f(1)| = |2x + 3 - 5| = 2|x - 1|$. Queremos $2|x - 1| < \varepsilon$, es decir, $|x - 1| < \frac{\varepsilon}{2}$.
3. Elección: dado $\varepsilon > 0$, tomamos $\delta = \frac{\varepsilon}{2}$.
4. Verificación: si $|x - 1| < \delta$, entonces $|f(x) - 5| = 2|x - 1| < 2 \cdot \frac{\varepsilon}{2} = \varepsilon$.

**Resultado final:** Para cada $\varepsilon > 0$ basta $\delta = \dfrac{\varepsilon}{2}$; $f$ es continua en $x = 1$.
