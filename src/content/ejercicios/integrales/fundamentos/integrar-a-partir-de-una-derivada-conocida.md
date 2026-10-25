---
titulo: "Integrar leyendo al revés una derivada conocida"
tema: "integrales"
seccion: "fundamentos"
dificultad: "basico"
metodo: "Relación entre derivación e integración"
orden: 9
---

## Enunciado

Sabiendo que $\dfrac{d}{dx}\arctan x = \dfrac{1}{1 + x^2}$ y que $\dfrac{d}{dx}\operatorname{arcsen} x = \dfrac{1}{\sqrt{1 - x^2}}$, calcula

$$
\int \frac{dx}{1 + x^2} \qquad \text{y} \qquad \int \frac{5\,dx}{\sqrt{1 - x^2}}
$$

## Solución

1. Si $F'(x) = f(x)$, entonces $\int f(x)\,dx = F(x) + C$: cada fórmula de derivación, leída al revés, da una fórmula de integración.
2. Como $(\arctan x)' = \frac{1}{1 + x^2}$: $\int \frac{dx}{1 + x^2} = \arctan x + C$.
3. Como $(\operatorname{arcsen} x)' = \frac{1}{\sqrt{1 - x^2}}$, por linealidad: $\int \frac{5\,dx}{\sqrt{1 - x^2}} = 5\operatorname{arcsen} x + C$, para $|x| < 1$.

**Resultado final:** $\arctan x + C$ y $5\operatorname{arcsen} x + C$
