---
titulo: "Integral impropia divergente: 1/x"
tema: "integrales"
seccion: "impropias-y-aplicaciones"
dificultad: "basico"
metodo: "Definición como límite de integrales definidas"
orden: 3
---

## Enunciado

Determina si converge $\displaystyle \int_{1}^{\infty} \frac{dx}{x}$.

## Solución

1. $\int_1^\infty \frac{dx}{x} = \displaystyle \lim_{b \to \infty}\int_1^b \frac{dx}{x}$.
2. $\int_1^b \frac{dx}{x} = \left[\ln x\right]_1^b = \ln b$.
3. $\displaystyle \lim_{b \to \infty}\ln b = \infty$.
4. La integral diverge. Aunque $\frac{1}{x} \to 0$, no decrece lo bastante rápido; en general, $\int_1^\infty \frac{dx}{x^p}$ converge solo si $p > 1$.

**Resultado final:** $\displaystyle \int_{1}^{\infty} \frac{dx}{x}$ diverge.
