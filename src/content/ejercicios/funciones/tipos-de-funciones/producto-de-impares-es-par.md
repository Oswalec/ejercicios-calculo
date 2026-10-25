---
titulo: "El producto de dos funciones impares es par"
tema: "funciones"
seccion: "tipos-de-funciones"
dificultad: "intermedio"
metodo: "Demostración con la definición de paridad"
orden: 4
---

## Enunciado

Demuestra que si $f$ y $g$ son impares con el mismo dominio simétrico, entonces $p(x) = f(x)\,g(x)$ es par. Verifica con $f(x) = x$ y $g(x) = \operatorname{sen} x$.

## Solución

1. Hipótesis: $f(-x) = -f(x)$ y $g(-x) = -g(x)$ para todo $x$ del dominio.
2. Evaluamos $p$ en $-x$: $p(-x) = f(-x)\,g(-x) = \left(-f(x)\right)\left(-g(x)\right) = f(x)\,g(x) = p(x)$.
3. Por lo tanto $p$ es par.
4. Verificación: $f(x) = x$ y $g(x) = \operatorname{sen} x$ son impares, y $p(x) = x\operatorname{sen} x$ cumple $p(-x) = (-x)\operatorname{sen}(-x) = (-x)(-\operatorname{sen} x) = x\operatorname{sen} x$.

**Resultado final:** $p(-x) = p(x)$; el producto de dos funciones impares es par (por ejemplo, $x\operatorname{sen} x$).
