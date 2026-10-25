---
titulo: "Derivada de una exponencial de base a"
tema: "derivadas"
seccion: "exponenciales-logaritmicas"
dificultad: "basico"
metodo: "Fórmula (a^x)' = a^x ln a y regla del producto"
orden: 3
---

## Enunciado

Deriva $f(x) = 3^{x}$ y $g(x) = x \cdot 2^{x}$.

## Solución

1. Para $a > 0$: $a^{x} = e^{x\ln a}$, y por la cadena, $\frac{d}{dx}a^{x} = e^{x\ln a}\ln a = a^{x}\ln a$.
2. Entonces $f'(x) = 3^{x}\ln 3$.
3. Para $g$ usamos la regla del producto: $g'(x) = 1 \cdot 2^{x} + x \cdot 2^{x}\ln 2$.
4. Factorizando: $g'(x) = 2^{x}(1 + x\ln 2)$.

**Resultado final:** $f'(x) = 3^{x}\ln 3$ y $g'(x) = 2^{x}(1 + x\ln 2)$
