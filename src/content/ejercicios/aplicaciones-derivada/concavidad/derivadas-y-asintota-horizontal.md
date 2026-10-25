---
titulo: "Derivadas y asíntota horizontal"
tema: "aplicaciones-derivada"
seccion: "concavidad"
dificultad: "intermedio"
metodo: "Asíntotas, primera y segunda derivada"
orden: 9
---

## Enunciado

Sea $f(x) = \dfrac{2x^2}{x^2 + 1}$. Halla su asíntota horizontal, su mínimo y sus puntos de inflexión.

## Solución

1. Asíntota horizontal: $\displaystyle \lim_{x \to \pm\infty} \frac{2x^2}{x^2 + 1} = 2$. Además $f(x) < 2$ para todo $x$, porque $2x^2 < 2x^2 + 2$: la gráfica se acerca a $y = 2$ por debajo.
2. $f'(x) = \frac{4x(x^2 + 1) - 2x^2 \cdot 2x}{(x^2 + 1)^2} = \frac{4x}{(x^2 + 1)^2}$: negativa para $x < 0$ y positiva para $x > 0$. Mínimo en $(0, 0)$.
3. $f''(x) = \frac{4(1 - 3x^2)}{(x^2 + 1)^3}$: positiva si $|x| < \frac{1}{\sqrt{3}}$ y negativa si $|x| > \frac{1}{\sqrt{3}}$.
4. Inflexiones en $x = \pm\frac{1}{\sqrt{3}}$, con $f = \frac{2/3}{4/3} = \frac{1}{2}$. La curva pasa de cóncava hacia arriba a cóncava hacia abajo al aproximarse a la asíntota.

**Resultado final:** Asíntota $y = 2$; mínimo $(0, 0)$; inflexiones en $\left(\pm\dfrac{1}{\sqrt{3}}, \dfrac{1}{2}\right)$.
