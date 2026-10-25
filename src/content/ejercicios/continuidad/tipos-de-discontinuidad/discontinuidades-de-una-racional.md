---
titulo: "Todas las discontinuidades de una función racional"
tema: "continuidad"
seccion: "tipos-de-discontinuidad"
dificultad: "intermedio"
metodo: "Factorización y límite en cada cero del denominador"
orden: 5
---

## Enunciado

Halla y clasifica las discontinuidades de

$$
f(x) = \frac{x^2 - x - 2}{x^2 - 4}
$$

## Solución

1. Una función racional es continua en su dominio, así que las discontinuidades están donde se anula el denominador: $x^2 - 4 = 0$, es decir, $x = 2$ o $x = -2$.
2. Factorizamos: $f(x) = \frac{(x - 2)(x + 1)}{(x - 2)(x + 2)}$, y para $x \neq 2$, $f(x) = \frac{x + 1}{x + 2}$.
3. En $x = 2$: $\displaystyle \lim_{x \to 2} \frac{x + 1}{x + 2} = \frac{3}{4}$. El límite es finito: discontinuidad **removible**.
4. En $x = -2$: el numerador de la forma simplificada tiende a $-1 \neq 0$ y el denominador a $0$, así que los límites laterales son infinitos ($+\infty$ por la izquierda, $-\infty$ por la derecha): discontinuidad **infinita**.

**Resultado final:** Removible en $x = 2$ (límite $\frac{3}{4}$) e infinita en $x = -2$.
