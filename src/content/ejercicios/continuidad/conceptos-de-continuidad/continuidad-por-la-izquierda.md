---
titulo: "Continuidad por la izquierda en el borde del dominio"
tema: "continuidad"
seccion: "conceptos-de-continuidad"
dificultad: "intermedio"
metodo: "Definición de continuidad lateral"
orden: 4
---

## Enunciado

Sea $f(x) = \sqrt{4 - x}$. Analiza su continuidad en $x = 4$.

## Solución

1. Dominio: $4 - x \ge 0$, es decir, $x \le 4$. A la derecha de $4$ la función no está definida, así que solo tiene sentido la continuidad por la izquierda.
2. Definición: $f$ es continua por la izquierda en $a$ si $\displaystyle \lim_{x \to a^-} f(x) = f(a)$.
3. $f(4) = \sqrt{0} = 0$, y $\displaystyle \lim_{x \to 4^-} \sqrt{4 - x} = 0$, porque $4 - x \to 0^+$ y la raíz es continua en $0$ por la derecha.
4. Como el límite por la izquierda coincide con $f(4)$, $f$ es continua por la izquierda en $4$. Por eso se dice que $f$ es continua en su dominio $(-\infty, 4]$.

**Resultado final:** $f$ es continua por la izquierda en $x = 4$ (y $f(4) = 0$).
