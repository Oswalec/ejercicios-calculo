---
titulo: "Radical cuando x tiende a −∞"
tema: "limites"
seccion: "limites-al-infinito"
dificultad: "intermedio"
metodo: "Extracción de x del radical con √(x²) = |x|"
orden: 5
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to -\infty} \frac{\sqrt{x^2 + 1}}{2x - 3}
$$

## Solución

1. Para sacar $x$ del radical recordamos que $\sqrt{x^2} = |x|$. Cuando $x \to -\infty$ tomamos $x < 0$, y entonces $|x| = -x$.
2. Así, $\sqrt{x^2 + 1} = \sqrt{x^2\left(1 + \frac{1}{x^2}\right)} = |x|\sqrt{1 + \frac{1}{x^2}} = -x\sqrt{1 + \frac{1}{x^2}}$.
3. En el denominador: $2x - 3 = x\left(2 - \frac{3}{x}\right)$.
4. Para $x < 0$ el factor $x$ se simplifica: $\frac{-x\sqrt{1 + \frac{1}{x^2}}}{x\left(2 - \frac{3}{x}\right)} = -\frac{\sqrt{1 + \frac{1}{x^2}}}{2 - \frac{3}{x}}$.
5. Cuando $x \to -\infty$: $-\frac{\sqrt{1 + 0}}{2 - 0} = -\frac{1}{2}$. El signo negativo proviene de $|x| = -x$.

**Resultado final:** $\displaystyle \lim_{x \to -\infty} \frac{\sqrt{x^2 + 1}}{2x - 3} = -\frac{1}{2}$
