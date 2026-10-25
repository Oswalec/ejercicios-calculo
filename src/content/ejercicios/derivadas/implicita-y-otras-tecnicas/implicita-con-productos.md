---
titulo: "Derivación implícita con productos"
tema: "derivadas"
seccion: "implicita-y-otras-tecnicas"
dificultad: "intermedio"
metodo: "Derivación implícita y regla del producto"
orden: 2
---

## Enunciado

Si $x^2y + xy^2 = 6$, halla $\dfrac{dy}{dx}$ en el punto $(1, 2)$.

## Solución

1. Comprobamos que el punto está en la curva: $1 \cdot 2 + 1 \cdot 4 = 6$.
2. Derivamos respecto de $x$, con $y = y(x)$ y la regla del producto en cada término: $2xy + x^2y' + y^2 + 2xyy' = 0$.
3. Agrupamos los términos con $y'$: $y'(x^2 + 2xy) = -(2xy + y^2)$, de donde $y' = -\frac{2xy + y^2}{x^2 + 2xy}$.
4. En $(1, 2)$: $y' = -\frac{4 + 4}{1 + 4} = -\frac{8}{5}$.

**Resultado final:** $\dfrac{dy}{dx}\Big|_{(1, 2)} = -\dfrac{8}{5}$
