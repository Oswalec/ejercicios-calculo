---
titulo: "Verificar que dos funciones son inversas"
tema: "funciones"
seccion: "funciones-inversas"
dificultad: "basico"
metodo: "Verificación mediante composición"
orden: 2
---

## Enunciado

Verifica si $f(x) = \dfrac{x - 1}{2}$ y $g(x) = 2x + 1$ son inversas una de la otra.

## Solución

1. $f$ y $g$ son inversas si $f(g(x)) = x$ para todo $x \in \operatorname{Dom} g$ y $g(f(x)) = x$ para todo $x \in \operatorname{Dom} f$. Aquí ambos dominios son $\mathbb{R}$.
2. $f(g(x)) = \frac{(2x + 1) - 1}{2} = \frac{2x}{2} = x$.
3. $g(f(x)) = 2 \cdot \frac{x - 1}{2} + 1 = (x - 1) + 1 = x$.
4. Se cumplen las dos composiciones. Hay que verificar ambas: en general, una sola no basta.

**Resultado final:** Sí, $f$ y $g$ son inversas: $f(g(x)) = g(f(x)) = x$.
