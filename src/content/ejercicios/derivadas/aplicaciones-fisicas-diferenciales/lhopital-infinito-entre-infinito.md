---
titulo: "Regla de L'Hôpital en la forma ∞/∞"
tema: "derivadas"
seccion: "aplicaciones-fisicas-diferenciales"
dificultad: "basico"
metodo: "Regla de L'Hôpital"
orden: 9
---

## Enunciado

Calcula

$$
\lim_{x \to \infty} \frac{\ln x}{x^2}
$$

## Solución

1. Numerador y denominador tienden a $\infty$: forma $\frac{\infty}{\infty}$. Ambos son derivables para $x > 0$ y $(x^2)' = 2x \neq 0$.
2. Aplicamos L'Hôpital: $\displaystyle \lim_{x \to \infty} \frac{1/x}{2x} = \lim_{x \to \infty} \frac{1}{2x^2}$.
3. Este límite vale $0$.
4. Interpretación: $x^2$ crece mucho más rápido que $\ln x$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \frac{\ln x}{x^2} = 0$
