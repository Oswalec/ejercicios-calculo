---
titulo: "Simplificar antes de derivar"
tema: "derivadas"
seccion: "reglas-basicas"
dificultad: "avanzado"
metodo: "Desarrollo algebraico y potencias negativas y fraccionarias"
orden: 10
---

## Enunciado

Deriva

$$
f(x) = \frac{\left(\sqrt{x} + 1\right)^2}{x}
$$

## Solución

1. Desarrollamos el cuadrado: $\left(\sqrt{x} + 1\right)^2 = x + 2\sqrt{x} + 1$, para $x > 0$.
2. Dividimos entre $x$: $f(x) = 1 + 2x^{-1/2} + x^{-1}$.
3. Derivamos término a término: $0 + 2\left(-\frac{1}{2}\right)x^{-3/2} + (-1)x^{-2} = -x^{-3/2} - x^{-2}$.
4. En forma de fracciones: $f'(x) = -\frac{1}{x\sqrt{x}} - \frac{1}{x^2}$.

**Resultado final:** $f'(x) = -\dfrac{1}{x\sqrt{x}} - \dfrac{1}{x^2}$
