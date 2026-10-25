---
titulo: "Definición formal de límite en una función cuadrática"
tema: "limites"
seccion: "fundamentos"
dificultad: "avanzado"
metodo: "Definición ε-δ con acotación previa"
orden: 7
---

## Enunciado

Demuestra, usando la definición formal ($\varepsilon$-$\delta$), que:

$$
\lim_{x \to 3} x^2 = 9
$$

## Solución

1. Debemos probar que para todo $\varepsilon > 0$ existe $\delta > 0$ tal que, si $0 < |x - 3| < \delta$, entonces $|x^2 - 9| < \varepsilon$.
2. Factorizamos: $|x^2 - 9| = |x - 3|\,|x + 3|$. El factor $|x - 3|$ lo controla $\delta$; falta acotar $|x + 3|$.
3. Acotación previa: si exigimos $\delta \le 1$, entonces $|x - 3| < 1$, es decir, $2 < x < 4$. En ese intervalo $5 < x + 3 < 7$, así que $|x + 3| < 7$.
4. Con esa cota, $|x^2 - 9| < 7|x - 3|$, y basta pedir $7|x - 3| < \varepsilon$, o sea $|x - 3| < \frac{\varepsilon}{7}$.
5. Elección: $\delta = \min\left\{1, \frac{\varepsilon}{7}\right\}$. Verificación: si $0 < |x - 3| < \delta$, se cumple $|x + 3| < 7$ (porque $\delta \le 1$) y $|x - 3| < \frac{\varepsilon}{7}$, de donde $|x^2 - 9| = |x - 3|\,|x + 3| < \frac{\varepsilon}{7} \cdot 7 = \varepsilon$.

**Resultado final:** Para cada $\varepsilon > 0$ basta $\delta = \min\left\{1, \dfrac{\varepsilon}{7}\right\}$; por lo tanto $\displaystyle \lim_{x \to 3} x^2 = 9$.
