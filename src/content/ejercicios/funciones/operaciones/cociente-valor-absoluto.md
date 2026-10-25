---
titulo: "Cociente de |x| entre x: la función signo"
tema: "funciones"
seccion: "operaciones"
dificultad: "intermedio"
metodo: "Definición del valor absoluto por partes"
orden: 6
---

## Enunciado

Sean $f(x) = |x|$ y $g(x) = x$. Halla $\left(\dfrac{f}{g}\right)(x)$, su dominio y su rango.

## Solución

1. $\left(\frac{f}{g}\right)(x) = \frac{|x|}{x}$, definida donde $g(x) \neq 0$: el dominio es $\mathbb{R} \setminus \{0\}$.
2. Si $x > 0$: $|x| = x$, así que $\frac{|x|}{x} = 1$.
3. Si $x < 0$: $|x| = -x$, así que $\frac{|x|}{x} = -1$.
4. Por lo tanto el cociente vale $1$ para $x > 0$ y $-1$ para $x < 0$, y solo toma esos dos valores.

**Resultado final:** $\left(\dfrac{f}{g}\right)(x) = \begin{cases} 1, & x > 0 \\ -1, & x < 0 \end{cases}$, con dominio $\mathbb{R} \setminus \{0\}$ y rango $\{-1, 1\}$.
