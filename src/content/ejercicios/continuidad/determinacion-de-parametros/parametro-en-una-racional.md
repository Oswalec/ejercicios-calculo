---
titulo: "Parámetro que hace removible una discontinuidad racional"
tema: "continuidad"
seccion: "determinacion-de-parametros"
dificultad: "intermedio"
metodo: "Condición de raíz común y factorización"
orden: 6
---

## Enunciado

Halla $a$ para que exista $\displaystyle \lim_{x \to 2} \frac{x^2 + ax - 6}{x - 2}$, y el valor que debe tomar $f(2)$ para que $f(x) = \dfrac{x^2 + ax - 6}{x - 2}$ se vuelva continua en $x = 2$.

## Solución

1. El denominador tiende a $0$. Para que el límite sea finito, el numerador también debe tender a $0$; si no, el límite sería infinito. Entonces $4 + 2a - 6 = 0$, es decir, $a = 1$.
2. Con $a = 1$: $x^2 + x - 6 = (x - 2)(x + 3)$.
3. Para $x \neq 2$, $\frac{(x - 2)(x + 3)}{x - 2} = x + 3$, así que el límite vale $5$.
4. Para que la función extendida sea continua en $2$, se define $f(2) = 5$.

**Resultado final:** $a = 1$ y $f(2) = 5$
