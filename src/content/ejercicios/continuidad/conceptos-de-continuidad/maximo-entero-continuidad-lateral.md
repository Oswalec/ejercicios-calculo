---
titulo: "Continuidad lateral del máximo entero"
tema: "continuidad"
seccion: "conceptos-de-continuidad"
dificultad: "intermedio"
metodo: "Definición de continuidad por la izquierda y por la derecha"
orden: 5
---

## Enunciado

Sea $f(x) = \lfloor x \rfloor$. ¿Es continua en $x = 2$? ¿Es continua por la izquierda o por la derecha?

## Solución

1. $f(2) = 2$.
2. Por la derecha: si $2 \le x < 3$, $\lfloor x \rfloor = 2$, así que $\displaystyle \lim_{x \to 2^+} f(x) = 2 = f(2)$. Es continua por la derecha.
3. Por la izquierda: si $1 \le x < 2$, $\lfloor x \rfloor = 1$, así que $\displaystyle \lim_{x \to 2^-} f(x) = 1 \neq f(2)$. No es continua por la izquierda.
4. Como los límites laterales son distintos, el límite bilateral no existe y $f$ no es continua en $2$.

**Resultado final:** $f$ no es continua en $x = 2$; es continua por la derecha pero no por la izquierda.
