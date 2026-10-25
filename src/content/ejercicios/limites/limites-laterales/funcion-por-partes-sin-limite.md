---
titulo: "Límites laterales distintos en una función por partes"
tema: "limites"
seccion: "limites-laterales"
dificultad: "basico"
metodo: "Cálculo de límites laterales"
orden: 2
---

## Enunciado

Sea

$$
f(x) = \begin{cases} 2x + 1, & x < 2 \\ x^2 - 1, & x \ge 2 \end{cases}
$$

Calcula los límites laterales en $x = 2$ y determina si existe $\displaystyle \lim_{x \to 2} f(x)$.

## Solución

1. A la izquierda de $2$ ($x < 2$) la función es $f(x) = 2x + 1$, un polinomio: $\displaystyle \lim_{x \to 2^-} f(x) = 2(2) + 1 = 5$.
2. A la derecha de $2$ ($x > 2$) la función es $f(x) = x^2 - 1$: $\displaystyle \lim_{x \to 2^+} f(x) = 2^2 - 1 = 3$.
3. El límite bilateral existe si y solo si los dos límites laterales existen y son iguales.
4. Como $5 \neq 3$, el límite bilateral no existe. La gráfica presenta un salto en $x = 2$.

**Resultado final:** $\displaystyle \lim_{x \to 2^-} f(x) = 5$, $\displaystyle \lim_{x \to 2^+} f(x) = 3$; $\displaystyle \lim_{x \to 2} f(x)$ no existe.
