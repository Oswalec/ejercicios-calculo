---
titulo: "Segunda derivada y puntos de inflexión"
tema: "aplicaciones-derivada"
seccion: "concavidad"
dificultad: "intermedio"
metodo: "Signo de la segunda derivada"
orden: 1
---

## Enunciado

Para la función

$$
f(x) = x^4 - 6x^2,
$$

halla $f''(x)$ y los puntos de inflexión.

## Solución

1. Primera derivada (regla de la potencia): $f'(x) = 4x^3 - 12x$.
2. Segunda derivada: $f''(x) = 12x^2 - 12 = 12(x^2 - 1) = 12(x - 1)(x + 1)$.
3. Los candidatos a inflexión son los ceros de $f''$: $12(x - 1)(x + 1) = 0$, es decir, $x = -1$ y $x = 1$.
4. Estudiamos el signo de $f''$: es positiva si $x < -1$ (cóncava hacia arriba), negativa si $-1 < x < 1$ (cóncava hacia abajo) y positiva si $x > 1$.
5. La concavidad cambia en $x = -1$ y en $x = 1$, así que ambos son puntos de inflexión. Como $f(-1) = f(1) = 1 - 6 = -5$, los puntos son $(-1, -5)$ y $(1, -5)$.

**Resultado final:** $f''(x) = 12x^2 - 12$; puntos de inflexión en $x = -1$ y $x = 1$
