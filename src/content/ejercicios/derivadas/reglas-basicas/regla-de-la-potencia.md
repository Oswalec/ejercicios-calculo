---
titulo: "Derivada de un polinomio con la regla de la potencia"
tema: "derivadas"
seccion: "reglas-basicas"
dificultad: "basico"
metodo: "Regla de la potencia"
orden: 1
---

## Enunciado

Deriva la siguiente función:

$$
f(x) = 4x^5 - 3x^2 + 7x - 2
$$

## Solución

1. La derivada de una suma es la suma de las derivadas, y las constantes que multiplican salen de la derivada. Derivamos término a término.
2. Regla de la potencia, $\frac{d}{dx} x^n = n x^{n-1}$: $\frac{d}{dx}\left(4x^5\right) = 4 \cdot 5x^4 = 20x^4$.
3. $\frac{d}{dx}\left(-3x^2\right) = -3 \cdot 2x = -6x$.
4. $\frac{d}{dx}(7x) = 7$, porque $\frac{d}{dx} x = 1$.
5. La derivada de una constante es cero: $\frac{d}{dx}(-2) = 0$.
6. Sumamos los resultados: $f'(x) = 20x^4 - 6x + 7$.

**Resultado final:** $f'(x) = 20x^4 - 6x + 7$
