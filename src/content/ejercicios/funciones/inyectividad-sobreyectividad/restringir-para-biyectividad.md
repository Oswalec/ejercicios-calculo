---
titulo: "Restringir dominio y codominio para obtener una biyección"
tema: "funciones"
seccion: "inyectividad-sobreyectividad"
dificultad: "intermedio"
metodo: "Completación de cuadrados y restricción a una rama"
orden: 10
---

## Enunciado

Sea $f(x) = x^2 - 4x + 3$. Elige un dominio que contenga a $x = 5$ y un codominio adecuados para que $f$ sea biyectiva, y justifícalo.

## Solución

1. Completamos cuadrados: $f(x) = (x - 2)^2 - 1$. La parábola tiene vértice $(2, -1)$ y es simétrica respecto de $x = 2$, así que no es inyectiva en $\mathbb{R}$.
2. Para que el dominio contenga a $x = 5$ tomamos la rama derecha, $[2, \infty)$. Allí, si $f(a) = f(b)$, entonces $(a - 2)^2 = (b - 2)^2$, y como $a - 2 \ge 0$ y $b - 2 \ge 0$, se obtiene $a - 2 = b - 2$, es decir, $a = b$. Es inyectiva.
3. Rango en ese dominio: $(x - 2)^2 \ge 0$ toma todos los valores no negativos, así que $f(x) \ge -1$ y el rango es $[-1, \infty)$.
4. Tomando como codominio el rango, $[-1, \infty)$, la función es sobreyectiva: dado $y \ge -1$, $x = 2 + \sqrt{y + 1}$ cumple $f(x) = y$.

**Resultado final:** $f\colon [2, \infty) \to [-1, \infty)$ es biyectiva.
