---
titulo: "Derivada de un producto de funciones trigonométricas"
tema: "derivadas"
dificultad: "intermedio"
orden: 5
---

## Enunciado

Deriva la siguiente función:

$$
f(x) = \operatorname{sen} x \cos x
$$

## Solución

1. $f$ es el producto de $u(x) = \operatorname{sen} x$ y $v(x) = \cos x$. Usamos la regla del producto: $(uv)' = u'v + uv'$.
2. Recordamos las derivadas básicas: $\frac{d}{dx} \operatorname{sen} x = \cos x$ y $\frac{d}{dx} \cos x = -\operatorname{sen} x$.
3. Aplicamos la regla: $f'(x) = \cos x \cdot \cos x + \operatorname{sen} x \cdot (-\operatorname{sen} x)$.
4. Simplificamos: $f'(x) = \cos^2 x - \operatorname{sen}^2 x$.
5. Por la identidad del ángulo doble, $\cos^2 x - \operatorname{sen}^2 x = \cos(2x)$.

**Respuesta:** $f'(x) = \cos^2 x - \operatorname{sen}^2 x = \cos(2x)$
