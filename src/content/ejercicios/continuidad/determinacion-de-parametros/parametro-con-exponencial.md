---
titulo: "Parámetro con el límite exponencial fundamental"
tema: "continuidad"
seccion: "determinacion-de-parametros"
dificultad: "basico"
metodo: "Límite fundamental (e^u − 1)/u"
orden: 8
---

## Enunciado

Halla $a$ para que sea continua en $x = 0$:

$$
f(x) = \begin{cases} \dfrac{e^{2x} - 1}{x}, & x \neq 0 \\ a, & x = 0 \end{cases}
$$

## Solución

1. Se necesita $a = \displaystyle \lim_{x \to 0} \frac{e^{2x} - 1}{x}$.
2. Escribimos $\frac{e^{2x} - 1}{x} = 2 \cdot \frac{e^{2x} - 1}{2x}$.
3. Con $u = 2x \to 0$, $\frac{e^{u} - 1}{u} \to 1$, así que el límite es $2$.
4. Por lo tanto, $a = 2$.

**Resultado final:** $a = 2$
