---
titulo: "La función escalonada máximo entero"
tema: "funciones"
seccion: "tipos-de-funciones"
dificultad: "basico"
metodo: "Definición del máximo entero"
orden: 8
---

## Enunciado

Sea $f(x) = \lfloor x \rfloor$, el máximo entero menor o igual que $x$. Calcula $f(2.7)$, $f(5)$, $f(-2.3)$ y $f(-0.5)$, y describe la gráfica en $[0, 3)$.

## Solución

1. $\lfloor x \rfloor$ es el único entero $n$ tal que $n \le x < n + 1$.
2. $f(2.7) = 2$, porque $2 \le 2.7 < 3$, y $f(5) = 5$, porque $5$ ya es entero.
3. Con negativos hay que tener cuidado: $f(-2.3) = -3$, porque $-3 \le -2.3 < -2$, y $f(-0.5) = -1$, porque $-1 \le -0.5 < 0$.
4. En $[0, 3)$: $f(x) = 0$ en $[0, 1)$, $f(x) = 1$ en $[1, 2)$ y $f(x) = 2$ en $[2, 3)$. La gráfica son tres escalones horizontales, cada uno con el extremo izquierdo incluido (punto lleno) y el derecho excluido (punto vacío).

**Resultado final:** $f(2.7) = 2$, $f(5) = 5$, $f(-2.3) = -3$, $f(-0.5) = -1$.
