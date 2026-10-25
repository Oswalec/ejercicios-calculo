---
titulo: "Regla de L'Hôpital en la forma 0·∞"
tema: "derivadas"
seccion: "aplicaciones-fisicas-diferenciales"
dificultad: "intermedio"
metodo: "Transformación a ∞/∞ y regla de L'Hôpital"
orden: 10
---

## Enunciado

Calcula

$$
\lim_{x \to 0^+} x\ln x
$$

## Solución

1. Cuando $x \to 0^+$: $x \to 0$ y $\ln x \to -\infty$, una forma $0 \cdot \infty$. L'Hôpital no se aplica directamente a productos.
2. Lo reescribimos como cociente: $x\ln x = \frac{\ln x}{1/x}$, de la forma $\frac{-\infty}{\infty}$.
3. Aplicamos L'Hôpital: $\displaystyle \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x)$.
4. Este límite vale $0$.

**Resultado final:** $\displaystyle \lim_{x \to 0^+} x\ln x = 0$
