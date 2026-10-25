---
titulo: "Regla de la cadena con funciones anidadas"
tema: "derivadas"
seccion: "producto-cociente-cadena"
dificultad: "intermedio"
metodo: "Regla de la cadena aplicada dos veces"
orden: 8
---

## Enunciado

Deriva

$$
f(x) = \left[(2x + 1)^2 + 1\right]^3
$$

## Solución

1. Hay tres capas: la exterior es $w^3$, la intermedia es $w = v^2 + 1$ y la interior es $v = 2x + 1$.
2. Derivada de la capa exterior: $3\left[(2x + 1)^2 + 1\right]^2$.
3. Por la cadena, se multiplica por la derivada de la capa intermedia, $2(2x + 1)$, y por la derivada de la interior, $2$.
4. $f'(x) = 3\left[(2x + 1)^2 + 1\right]^2 \cdot 2(2x + 1) \cdot 2 = 12(2x + 1)\left[(2x + 1)^2 + 1\right]^2$.

**Resultado final:** $f'(x) = 12(2x + 1)\left[(2x + 1)^2 + 1\right]^2$
