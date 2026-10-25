---
titulo: "Teorema de Heine-Cantor y un δ explícito para √x"
tema: "continuidad"
seccion: "continuidad-uniforme-aplicaciones"
dificultad: "avanzado"
metodo: "Teorema de Heine-Cantor y desigualdad |√x − √y| ≤ √|x − y|"
orden: 5
---

## Enunciado

Justifica que $f(x) = \sqrt{x}$ es uniformemente continua en $[0, 4]$ y halla un $\delta$ explícito en función de $\varepsilon$.

## Solución

1. Teorema de Heine-Cantor: toda función continua en un intervalo cerrado y acotado es uniformemente continua en él. $\sqrt{x}$ es continua en $[0, 4]$, así que es uniformemente continua.
2. Desigualdad auxiliar: si $0 \le y \le x$, entonces $\sqrt{x} - \sqrt{y} \le \sqrt{x - y}$. Elevando al cuadrado (ambos lados son no negativos): $x - 2\sqrt{xy} + y \le x - y$, que equivale a $y \le \sqrt{xy}$, cierto porque $y = \sqrt{y}\sqrt{y} \le \sqrt{y}\sqrt{x}$.
3. Por simetría, $|\sqrt{x} - \sqrt{y}| \le \sqrt{|x - y|}$ para $x, y \ge 0$.
4. Dado $\varepsilon > 0$, tomamos $\delta = \varepsilon^2$: si $|x - y| < \varepsilon^2$, entonces $|\sqrt{x} - \sqrt{y}| \le \sqrt{|x - y|} < \varepsilon$.

**Resultado final:** $\sqrt{x}$ es uniformemente continua en $[0, 4]$ (de hecho en $[0, \infty)$), con $\delta = \varepsilon^2$.
