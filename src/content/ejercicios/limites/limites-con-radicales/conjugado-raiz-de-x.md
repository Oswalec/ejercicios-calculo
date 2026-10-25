---
titulo: "Racionalización de la raíz de x"
tema: "limites"
seccion: "limites-con-radicales"
dificultad: "basico"
metodo: "Racionalización con el conjugado"
orden: 2
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9}
$$

## Solución

1. Al sustituir $x = 9$: numerador $3 - 3 = 0$ y denominador $0$. Es una indeterminación $\frac{0}{0}$. El dominio exige $x \ge 0$, lo que se cumple cerca de $9$.
2. Multiplicamos numerador y denominador por el conjugado $\sqrt{x} + 3$: $\frac{(\sqrt{x} - 3)(\sqrt{x} + 3)}{(x - 9)(\sqrt{x} + 3)} = \frac{x - 9}{(x - 9)(\sqrt{x} + 3)}$.
3. Para $x \neq 9$ simplificamos: $\frac{1}{\sqrt{x} + 3}$.
4. La expresión es continua en $x = 9$: $\frac{1}{3 + 3} = \frac{1}{6}$.

**Resultado final:** $\displaystyle \lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9} = \frac{1}{6}$
