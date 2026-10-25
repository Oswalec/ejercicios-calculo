---
titulo: "Valor en el punto para eliminar una discontinuidad con radical"
tema: "continuidad"
seccion: "determinacion-de-parametros"
dificultad: "intermedio"
metodo: "Racionalización y definición f(a) = límite"
orden: 4
---

## Enunciado

Halla $k$ para que sea continua en $x = 3$:

$$
f(x) = \begin{cases} \dfrac{\sqrt{x + 1} - 2}{x - 3}, & x \neq 3 \\ k, & x = 3 \end{cases}
$$

## Solución

1. Para que $f$ sea continua en $3$ se necesita $k = f(3) = \displaystyle \lim_{x \to 3} \frac{\sqrt{x + 1} - 2}{x - 3}$.
2. El límite es de la forma $\frac{0}{0}$. Racionalizamos: $\frac{\sqrt{x + 1} - 2}{x - 3} \cdot \frac{\sqrt{x + 1} + 2}{\sqrt{x + 1} + 2} = \frac{x - 3}{(x - 3)\left(\sqrt{x + 1} + 2\right)}$.
3. Para $x \neq 3$: $\frac{1}{\sqrt{x + 1} + 2}$, que tiende a $\frac{1}{2 + 2} = \frac{1}{4}$.
4. Por lo tanto, $k = \frac{1}{4}$.

**Resultado final:** $k = \dfrac{1}{4}$
