---
titulo: "1/x no es uniformemente continua en (0, 1)"
tema: "continuidad"
seccion: "continuidad-uniforme-aplicaciones"
dificultad: "avanzado"
metodo: "Negación de la definición con sucesiones"
orden: 4
---

## Enunciado

Demuestra que $f(x) = \dfrac{1}{x}$ no es uniformemente continua en $(0, 1)$, aunque sí es continua allí.

## Solución

1. $f$ es continua en $(0, 1)$ porque $x \neq 0$. Para refutar la continuidad uniforme buscamos puntos cercanos con imágenes alejadas.
2. Tomamos $x_n = \frac{1}{n}$ e $y_n = \frac{1}{n + 1}$, con $n \ge 2$, ambos en $(0, 1)$. Entonces $|x_n - y_n| = \frac{1}{n(n + 1)} \to 0$.
3. Sus imágenes: $|f(x_n) - f(y_n)| = |n - (n + 1)| = 1$ para todo $n$.
4. Con $\varepsilon = 1$, ningún $\delta > 0$ sirve: siempre hay un par con $|x_n - y_n| < \delta$ e imágenes a distancia $1$. Esto no contradice el teorema de Heine-Cantor, porque $(0, 1)$ no es cerrado.

**Resultado final:** $f(x) = \dfrac{1}{x}$ es continua pero no uniformemente continua en $(0, 1)$.
