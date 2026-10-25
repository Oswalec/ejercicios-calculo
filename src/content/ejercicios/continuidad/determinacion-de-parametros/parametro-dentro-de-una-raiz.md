---
titulo: "Parámetro dentro de una raíz para que exista el límite"
tema: "continuidad"
seccion: "determinacion-de-parametros"
dificultad: "avanzado"
metodo: "Condición de indeterminación 0/0 y racionalización"
orden: 10
---

## Enunciado

Halla $a$ y $k$ para que sea continua en $x = 1$:

$$
f(x) = \begin{cases} \dfrac{\sqrt{x + a} - 3}{x - 1}, & x \neq 1 \\ k, & x = 1 \end{cases}
$$

## Solución

1. El denominador tiende a $0$. Para que el límite sea finito, el numerador también debe tender a $0$: $\sqrt{1 + a} - 3 = 0$, es decir, $1 + a = 9$, de donde $a = 8$.
2. Con $a = 8$ racionalizamos: $\frac{\sqrt{x + 8} - 3}{x - 1} = \frac{(x + 8) - 9}{(x - 1)\left(\sqrt{x + 8} + 3\right)} = \frac{1}{\sqrt{x + 8} + 3}$ para $x \neq 1$.
3. El límite es $\frac{1}{3 + 3} = \frac{1}{6}$.
4. Para que $f$ sea continua en $1$, se toma $k = \frac{1}{6}$.

**Resultado final:** $a = 8$ y $k = \dfrac{1}{6}$
