---
titulo: "Límite lateral con raíz en el borde del dominio"
tema: "limites"
seccion: "limites-laterales"
dificultad: "intermedio"
metodo: "Análisis del dominio y simplificación de radicales"
orden: 7
---

## Enunciado

Calcula el siguiente límite y explica por qué solo tiene sentido por la derecha:

$$
\lim_{x \to 1^+} \frac{x - 1}{\sqrt{x^2 - 1}}
$$

## Solución

1. Dominio: $\sqrt{x^2 - 1}$ exige $x^2 - 1 \ge 0$ y, por estar en el denominador, $x^2 - 1 > 0$; es decir, $|x| > 1$. Cerca de $x = 1$ la función solo está definida para $x > 1$, así que el límite por la izquierda no tiene sentido.
2. Para $x > 1$ se cumple $x - 1 > 0$ y $x + 1 > 0$, de modo que podemos escribir $x - 1 = \sqrt{x - 1}\,\sqrt{x - 1}$ y $\sqrt{x^2 - 1} = \sqrt{x - 1}\,\sqrt{x + 1}$.
3. Simplificamos: $\frac{x - 1}{\sqrt{x^2 - 1}} = \frac{\sqrt{x - 1}\,\sqrt{x - 1}}{\sqrt{x - 1}\,\sqrt{x + 1}} = \frac{\sqrt{x - 1}}{\sqrt{x + 1}}$.
4. Esta expresión es continua por la derecha en $x = 1$: $\displaystyle \lim_{x \to 1^+} \frac{\sqrt{x - 1}}{\sqrt{x + 1}} = \frac{0}{\sqrt{2}} = 0$.

**Resultado final:** $\displaystyle \lim_{x \to 1^+} \frac{x - 1}{\sqrt{x^2 - 1}} = 0$
