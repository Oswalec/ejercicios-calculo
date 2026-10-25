---
titulo: "Integración por partes con exponencial"
tema: "integrales"
dificultad: "intermedio"
orden: 5
---

## Enunciado

Calcula la siguiente integral indefinida:

$$
\int x e^{x}\,dx
$$

## Solución

1. Es el producto de un polinomio por una exponencial: usamos integración por partes, $\int u\,dv = uv - \int v\,du$.
2. Elegimos $u = x$ (al derivarlo se simplifica) y $dv = e^{x}\,dx$.
3. Entonces $du = dx$ y $v = \int e^{x}\,dx = e^{x}$.
4. Aplicamos la fórmula: $\int x e^{x}\,dx = x e^{x} - \int e^{x}\,dx = x e^{x} - e^{x} + C$.
5. Factorizamos: $e^{x}(x - 1) + C$. Comprobación: $\frac{d}{dx}\left[e^{x}(x - 1)\right] = e^{x}(x - 1) + e^{x} = x e^{x}$.

**Respuesta:** $\displaystyle \int x e^{x}\,dx = e^{x}(x - 1) + C$
