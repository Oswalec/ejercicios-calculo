---
titulo: "Simplificación de un cociente de funciones"
tema: "funciones"
seccion: "operaciones"
dificultad: "intermedio"
metodo: "Factorización y conservación del dominio original"
orden: 9
---

## Enunciado

Sean $f(x) = x^2 - x - 6$ y $g(x) = x^2 - 9$. Simplifica $\left(\dfrac{f}{g}\right)(x)$ e indica su dominio.

## Solución

1. $\left(\frac{f}{g}\right)(x) = \frac{x^2 - x - 6}{x^2 - 9}$. Se excluyen los ceros de $g$: $x^2 - 9 = 0$ si $x = \pm 3$. El dominio es $\mathbb{R} \setminus \{-3, 3\}$.
2. Factorizamos: $x^2 - x - 6 = (x - 3)(x + 2)$ y $x^2 - 9 = (x - 3)(x + 3)$.
3. Para $x$ en el dominio ($x \neq 3$) cancelamos $x - 3$: $\frac{x + 2}{x + 3}$.
4. El dominio sigue siendo $\mathbb{R} \setminus \{-3, 3\}$: el punto $x = 3$ no se recupera al simplificar.

**Resultado final:** $\left(\dfrac{f}{g}\right)(x) = \dfrac{x + 2}{x + 3}$, con dominio $\mathbb{R} \setminus \{-3, 3\}$.
