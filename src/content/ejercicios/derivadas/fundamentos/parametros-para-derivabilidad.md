---
titulo: "Parámetros para que una función sea derivable"
tema: "derivadas"
seccion: "fundamentos"
dificultad: "avanzado"
metodo: "Continuidad e igualdad de derivadas laterales"
orden: 8
---

## Enunciado

Halla $a$ y $b$ para que sea derivable en $\mathbb{R}$:

$$
f(x) = \begin{cases} x^2, & x \le 2 \\ ax + b, & x > 2 \end{cases}
$$

## Solución

1. Fuera de $x = 2$ cada tramo es un polinomio derivable. En $x = 2$ se necesitan dos condiciones: continuidad e igualdad de derivadas laterales.
2. Continuidad: $f(2) = 4$ y el límite derecho es $2a + b$. Condición: $2a + b = 4$.
3. Derivadas laterales: por la izquierda, la derivada de $x^2$ en $2$ es $4$; por la derecha, la derivada de $ax + b$ es $a$. Condición: $a = 4$.
4. Entonces $b = 4 - 2a = -4$. La recta $y = 4x - 4$ es justamente la tangente a $y = x^2$ en $x = 2$.

**Resultado final:** $a = 4$ y $b = -4$
