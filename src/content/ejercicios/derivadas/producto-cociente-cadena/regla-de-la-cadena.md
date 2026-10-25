---
titulo: "Regla de la cadena con una potencia"
tema: "derivadas"
seccion: "producto-cociente-cadena"
dificultad: "intermedio"
metodo: "Regla de la cadena"
orden: 3
---

## Enunciado

Deriva la siguiente función:

$$
f(x) = (3x^2 - 1)^4
$$

## Solución

1. $f$ es una composición: la función externa es $g(u) = u^4$ y la interna es $u(x) = 3x^2 - 1$. Usamos la regla de la cadena: $f'(x) = g'(u(x)) \cdot u'(x)$.
2. Derivada de la externa: $g'(u) = 4u^3$.
3. Derivada de la interna: $u'(x) = 6x$.
4. Multiplicamos: $f'(x) = 4(3x^2 - 1)^3 \cdot 6x$.
5. Ordenamos la constante: $f'(x) = 24x(3x^2 - 1)^3$.

**Resultado final:** $f'(x) = 24x(3x^2 - 1)^3$
