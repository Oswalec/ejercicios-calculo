---
titulo: "Derivación implícita con una función trigonométrica"
tema: "derivadas"
seccion: "implicita-y-otras-tecnicas"
dificultad: "intermedio"
metodo: "Derivación implícita y regla de la cadena"
orden: 3
---

## Enunciado

Si $\operatorname{sen}(xy) = x$, halla $\dfrac{dy}{dx}$.

## Solución

1. Derivamos ambos lados respecto de $x$. A la izquierda, por la cadena: $\cos(xy) \cdot \frac{d}{dx}(xy)$.
2. Por la regla del producto, $\frac{d}{dx}(xy) = y + xy'$. Entonces $\cos(xy)(y + xy') = 1$.
3. Despejamos: $xy'\cos(xy) = 1 - y\cos(xy)$.
4. Para $x\cos(xy) \neq 0$: $y' = \frac{1 - y\cos(xy)}{x\cos(xy)}$.

**Resultado final:** $\dfrac{dy}{dx} = \dfrac{1 - y\cos(xy)}{x\cos(xy)}$
