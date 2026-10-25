---
titulo: "Derivación logarítmica de un producto y cociente"
tema: "derivadas"
seccion: "exponenciales-logaritmicas"
dificultad: "avanzado"
metodo: "Derivación logarítmica"
orden: 9
---

## Enunciado

Deriva, para $x > 1$:

$$
f(x) = \frac{(x^2 + 1)^3\sqrt{x - 1}}{(x + 2)^4}
$$

## Solución

1. Para $x > 1$ todos los factores son positivos, así que tomamos logaritmo: $\ln f(x) = 3\ln(x^2 + 1) + \frac{1}{2}\ln(x - 1) - 4\ln(x + 2)$.
2. Derivamos ambos lados (a la izquierda, por la cadena): $\frac{f'(x)}{f(x)} = \frac{6x}{x^2 + 1} + \frac{1}{2(x - 1)} - \frac{4}{x + 2}$.
3. Despejamos multiplicando por $f(x)$.
4. La derivación logarítmica convierte productos, cocientes y potencias en sumas, lo que evita aplicar varias veces las reglas del producto y del cociente.

**Resultado final:** $f'(x) = \dfrac{(x^2 + 1)^3\sqrt{x - 1}}{(x + 2)^4}\left[\dfrac{6x}{x^2 + 1} + \dfrac{1}{2(x - 1)} - \dfrac{4}{x + 2}\right]$
