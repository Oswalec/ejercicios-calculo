---
titulo: "Dónde es continua una función racional"
tema: "continuidad"
seccion: "funciones-elementales"
dificultad: "basico"
metodo: "Continuidad del cociente de polinomios"
orden: 2
---

## Enunciado

Determina dónde es continua

$$
f(x) = \frac{x + 1}{x^2 - 5x + 6}
$$

## Solución

1. Una función racional (cociente de polinomios) es continua en todo punto donde el denominador no se anula, por la propiedad del cociente de límites.
2. Resolvemos $x^2 - 5x + 6 = 0$: $(x - 2)(x - 3) = 0$, es decir, $x = 2$ o $x = 3$.
3. En esos puntos $f$ no está definida, así que no es continua allí.
4. En cualquier otro punto es continua.

**Resultado final:** $f$ es continua en $\mathbb{R} \setminus \{2, 3\}$.
