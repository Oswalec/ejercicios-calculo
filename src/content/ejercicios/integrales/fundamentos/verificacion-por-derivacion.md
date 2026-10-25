---
titulo: "Comprobar una integral derivando el resultado"
tema: "integrales"
seccion: "fundamentos"
dificultad: "basico"
metodo: "Verificación por derivación"
orden: 3
---

## Enunciado

Comprueba, sin integrar, que

$$
\int x e^{x}\,dx = (x - 1)e^{x} + C
$$

## Solución

1. Una integral indefinida es correcta si la derivada del resultado es igual al integrando.
2. Derivamos $(x - 1)e^{x}$ con la regla del producto: $1 \cdot e^{x} + (x - 1)e^{x}$.
3. Simplificamos: $e^{x} + xe^{x} - e^{x} = xe^{x}$.
4. Coincide con el integrando, así que la fórmula es correcta.

**Resultado final:** $\dfrac{d}{dx}\left[(x - 1)e^{x} + C\right] = xe^{x}$: la integral es correcta.
