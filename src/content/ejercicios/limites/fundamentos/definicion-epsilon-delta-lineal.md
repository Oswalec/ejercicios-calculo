---
titulo: "Definición formal de límite en una función lineal"
tema: "limites"
seccion: "fundamentos"
dificultad: "intermedio"
metodo: "Definición ε-δ"
orden: 6
---

## Enunciado

Demuestra, usando la definición formal ($\varepsilon$-$\delta$), que:

$$
\lim_{x \to 2} (3x - 1) = 5
$$

## Solución

1. Debemos probar que para todo $\varepsilon > 0$ existe $\delta > 0$ tal que, si $0 < |x - 2| < \delta$, entonces $|(3x - 1) - 5| < \varepsilon$.
2. Análisis previo: $|(3x - 1) - 5| = |3x - 6| = 3|x - 2|$. Queremos $3|x - 2| < \varepsilon$, es decir, $|x - 2| < \frac{\varepsilon}{3}$.
3. Elección: dado $\varepsilon > 0$, tomamos $\delta = \frac{\varepsilon}{3}$, que es positivo.
4. Verificación: si $0 < |x - 2| < \delta$, entonces $|(3x - 1) - 5| = 3|x - 2| < 3\delta = 3 \cdot \frac{\varepsilon}{3} = \varepsilon$.
5. Como $\varepsilon > 0$ fue arbitrario, se cumple la definición.

**Resultado final:** Para cada $\varepsilon > 0$ basta $\delta = \dfrac{\varepsilon}{3}$; por lo tanto $\displaystyle \lim_{x \to 2} (3x - 1) = 5$.
