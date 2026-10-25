---
titulo: "Dos parámetros y continuidad en dos puntos"
tema: "continuidad"
seccion: "determinacion-de-parametros"
dificultad: "avanzado"
metodo: "Sistema de ecuaciones por continuidad en cada empalme"
orden: 3
---

## Enunciado

Halla $a$ y $b$ para que sea continua en $\mathbb{R}$:

$$
f(x) = \begin{cases} ax + b, & x < 1 \\ x^2 + 2, & 1 \le x \le 2 \\ bx + a, & x > 2 \end{cases}
$$

## Solución

1. Cada tramo es un polinomio, así que basta imponer la continuidad en $x = 1$ y en $x = 2$.
2. En $x = 1$: $f(1) = 3$ y el límite derecho es $3$; el límite izquierdo es $a + b$. Condición: $a + b = 3$.
3. En $x = 2$: $f(2) = 6$ y el límite izquierdo es $6$; el límite derecho es $2b + a$. Condición: $a + 2b = 6$.
4. Restamos la primera ecuación de la segunda: $b = 3$; luego $a = 0$.
5. Comprobación: en $x = 1$, $0 + 3 = 3$; en $x = 2$, $2(3) + 0 = 6$.

**Resultado final:** $a = 0$ y $b = 3$
