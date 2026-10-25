---
titulo: "Derivar un producto desarrollándolo primero"
tema: "derivadas"
seccion: "reglas-basicas"
dificultad: "basico"
metodo: "Desarrollo algebraico y reglas de suma y potencia"
orden: 6
---

## Enunciado

Deriva $f(x) = (2x - 1)(x^2 + 3)$ desarrollando primero el producto.

## Solución

1. Desarrollamos: $f(x) = 2x^3 + 6x - x^2 - 3 = 2x^3 - x^2 + 6x - 3$.
2. Derivamos término a término con la regla de la potencia: $\frac{d}{dx}(2x^3) = 6x^2$, $\frac{d}{dx}(-x^2) = -2x$, $\frac{d}{dx}(6x) = 6$ y la derivada de $-3$ es $0$.
3. Entonces $f'(x) = 6x^2 - 2x + 6$.
4. La derivada de un producto no es el producto de las derivadas: $(2)(2x) = 4x$ sería incorrecto. Para derivar sin desarrollar se usa la regla del producto (sección 4.4).

**Resultado final:** $f'(x) = 6x^2 - 2x + 6$
