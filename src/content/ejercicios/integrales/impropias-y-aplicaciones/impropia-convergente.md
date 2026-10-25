---
titulo: "Integral impropia convergente con intervalo infinito"
tema: "integrales"
seccion: "impropias-y-aplicaciones"
dificultad: "basico"
metodo: "Definición como límite de integrales definidas"
orden: 2
---

## Enunciado

Determina si converge $\displaystyle \int_{1}^{\infty} \frac{dx}{x^2}$ y, en ese caso, calcula su valor.

## Solución

1. Definición: $\int_1^\infty f(x)\,dx = \displaystyle \lim_{b \to \infty}\int_1^b f(x)\,dx$, si el límite existe y es finito.
2. $\int_1^b x^{-2}\,dx = \left[-\frac{1}{x}\right]_1^b = 1 - \frac{1}{b}$.
3. $\displaystyle \lim_{b \to \infty}\left(1 - \frac{1}{b}\right) = 1$.
4. El límite es finito: la integral converge y vale $1$. Aunque la región no está acotada, su área es finita.

**Resultado final:** Converge: $\displaystyle \int_{1}^{\infty} \frac{dx}{x^2} = 1$
