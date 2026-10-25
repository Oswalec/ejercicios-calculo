---
titulo: "Integral definida con cambio de variable"
tema: "integrales"
dificultad: "avanzado"
orden: 10
---

## Enunciado

Calcula la siguiente integral definida:

$$
\int_{0}^{1} \frac{x}{x^2 + 1}\,dx
$$

## Solución

1. El numerador es, salvo una constante, la derivada del denominador. Hacemos el cambio $u = x^2 + 1$, con $du = 2x\,dx$, es decir, $x\,dx = \frac{du}{2}$.
2. Cambiamos los límites de integración: si $x = 0$, $u = 1$; si $x = 1$, $u = 2$.
3. Sustituimos: $\int_{0}^{1} \frac{x}{x^2 + 1}\,dx = \frac{1}{2} \int_{1}^{2} \frac{du}{u}$.
4. Integramos: $\frac{1}{2} \left[\ln u\right]_{1}^{2} = \frac{1}{2}(\ln 2 - \ln 1)$.
5. Como $\ln 1 = 0$, el resultado es $\frac{1}{2} \ln 2 \approx 0.3466$.

**Respuesta:** $\displaystyle \int_{0}^{1} \frac{x}{x^2 + 1}\,dx = \frac{1}{2} \ln 2$
