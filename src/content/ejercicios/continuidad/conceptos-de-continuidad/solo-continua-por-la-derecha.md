---
titulo: "Una función continua solo por la derecha"
tema: "continuidad"
seccion: "conceptos-de-continuidad"
dificultad: "intermedio"
metodo: "Límites laterales y continuidad lateral"
orden: 9
---

## Enunciado

Sea

$$
f(x) = \begin{cases} \dfrac{|x|}{x}, & x \neq 0 \\ 1, & x = 0 \end{cases}
$$

Estudia la continuidad de $f$ en $x = 0$.

## Solución

1. Para $x > 0$, $\frac{|x|}{x} = 1$; para $x < 0$, $\frac{|x|}{x} = -1$.
2. Por la derecha: $\displaystyle \lim_{x \to 0^+} f(x) = 1 = f(0)$. Es continua por la derecha.
3. Por la izquierda: $\displaystyle \lim_{x \to 0^-} f(x) = -1 \neq f(0)$. No es continua por la izquierda.
4. Los límites laterales son distintos ($-1$ y $1$), así que no existe el límite bilateral y $f$ no es continua en $0$. Ningún valor de $f(0)$ podría hacerla continua.

**Resultado final:** $f$ no es continua en $x = 0$; solo es continua por la derecha.
