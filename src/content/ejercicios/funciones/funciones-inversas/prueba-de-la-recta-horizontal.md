---
titulo: "Prueba de la recta horizontal y restricción del dominio"
tema: "funciones"
seccion: "funciones-inversas"
dificultad: "basico"
metodo: "Prueba de la recta horizontal"
orden: 7
---

## Enunciado

¿Tiene inversa $f(x) = x^2$ con dominio $\mathbb{R}$? Si no, restringe su dominio para que la tenga y halla la inversa.

## Solución

1. Prueba de la recta horizontal: $f$ tiene inversa si y solo si toda recta horizontal corta su gráfica a lo sumo una vez (es decir, si $f$ es inyectiva).
2. La recta $y = 4$ corta la parábola en $(-2, 4)$ y $(2, 4)$: $f(-2) = f(2)$ con $-2 \neq 2$. No es inyectiva en $\mathbb{R}$ y no tiene inversa.
3. Si restringimos a $[0, \infty)$, la función es creciente y por tanto inyectiva.
4. Allí, $y = x^2$ con $x \ge 0$ da $x = \sqrt{y}$. La inversa es $f^{-1}(x) = \sqrt{x}$, con dominio $[0, \infty)$.

**Resultado final:** En $\mathbb{R}$ no tiene inversa; restringida a $[0, \infty)$, su inversa es $f^{-1}(x) = \sqrt{x}$.
