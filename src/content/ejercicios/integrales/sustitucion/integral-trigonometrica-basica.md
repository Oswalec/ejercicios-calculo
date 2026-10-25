---
titulo: "Integral trigonométrica básica"
tema: "integrales"
seccion: "sustitucion"
dificultad: "basico"
metodo: "Sustitución u = 3x"
orden: 2
---

## Enunciado

Calcula la siguiente integral indefinida:

$$
\int \operatorname{sen}(3x)\,dx
$$

## Solución

1. Sabemos que $\int \operatorname{sen} u\,du = -\cos u + C$. Hacemos el cambio $u = 3x$.
2. Diferenciamos: $du = 3\,dx$, es decir, $dx = \frac{du}{3}$.
3. Sustituimos: $\int \operatorname{sen}(3x)\,dx = \frac{1}{3} \int \operatorname{sen} u\,du$.
4. Integramos: $\frac{1}{3}(-\cos u) + C = -\frac{\cos u}{3} + C$.
5. Regresamos a $x$: $-\frac{\cos(3x)}{3} + C$. Comprobación: la derivada es $-\frac{1}{3} \cdot (-\operatorname{sen}(3x)) \cdot 3 = \operatorname{sen}(3x)$.

**Resultado final:** $\displaystyle \int \operatorname{sen}(3x)\,dx = -\frac{\cos(3x)}{3} + C$
