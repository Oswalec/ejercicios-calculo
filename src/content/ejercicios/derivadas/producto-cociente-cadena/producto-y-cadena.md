---
titulo: "Producto combinado con la regla de la cadena"
tema: "derivadas"
seccion: "producto-cociente-cadena"
dificultad: "intermedio"
metodo: "Regla del producto y regla de la cadena"
orden: 4
---

## Enunciado

Deriva y factoriza:

$$
f(x) = x^2(3x + 1)^4
$$

## Solución

1. Es un producto $u \cdot v$ con $u = x^2$ y $v = (3x + 1)^4$. Regla del producto: $f' = u'v + uv'$.
2. $u' = 2x$. Para $v'$ usamos la regla de la cadena: $v' = 4(3x + 1)^3 \cdot 3 = 12(3x + 1)^3$.
3. $f'(x) = 2x(3x + 1)^4 + x^2 \cdot 12(3x + 1)^3$.
4. Factorizamos $2x(3x + 1)^3$: $f'(x) = 2x(3x + 1)^3\left[(3x + 1) + 6x\right] = 2x(3x + 1)^3(9x + 1)$.

**Resultado final:** $f'(x) = 2x(3x + 1)^3(9x + 1)$
