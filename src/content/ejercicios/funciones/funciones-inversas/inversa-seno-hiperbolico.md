---
titulo: "Inversa de una función con exponenciales"
tema: "funciones"
seccion: "funciones-inversas"
dificultad: "avanzado"
metodo: "Cambio u = e^x y ecuación cuadrática"
orden: 10
---

## Enunciado

Halla la inversa de

$$
f(x) = \frac{e^{x} - e^{-x}}{2}
$$

## Solución

1. Escribimos $y = \frac{e^{x} - e^{-x}}{2}$ y hacemos $u = e^{x} > 0$, con lo que $e^{-x} = \frac{1}{u}$: $2y = u - \frac{1}{u}$.
2. Multiplicamos por $u > 0$: $2yu = u^2 - 1$, es decir, $u^2 - 2yu - 1 = 0$, una cuadrática en $u$.
3. Por la fórmula cuadrática: $u = \frac{2y \pm \sqrt{4y^2 + 4}}{2} = y \pm \sqrt{y^2 + 1}$.
4. Como $\sqrt{y^2 + 1} > \sqrt{y^2} = |y| \ge y$, la opción con signo menos es negativa. Como $u = e^{x} > 0$, solo vale $u = y + \sqrt{y^2 + 1}$, que siempre es positiva.
5. Entonces $e^{x} = y + \sqrt{y^2 + 1}$, de donde $x = \ln\left(y + \sqrt{y^2 + 1}\right)$, para todo $y \in \mathbb{R}$. Intercambiando variables se obtiene $f^{-1}$.

**Resultado final:** $f^{-1}(x) = \ln\left(x + \sqrt{x^2 + 1}\right)$, con dominio $\mathbb{R}$.
