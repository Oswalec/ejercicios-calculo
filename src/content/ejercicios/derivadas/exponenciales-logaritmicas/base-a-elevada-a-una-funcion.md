---
titulo: "Derivada de a elevado a una función"
tema: "derivadas"
seccion: "exponenciales-logaritmicas"
dificultad: "intermedio"
metodo: "Regla de la cadena: (a^u)' = a^u ln a · u'"
orden: 5
---

## Enunciado

Deriva $f(x) = 10^{x^2 + 1}$.

## Solución

1. Para $a > 0$ y $u$ derivable: $\frac{d}{dx}a^{u} = a^{u}\ln a \cdot u'$.
2. Aquí $a = 10$ y $u = x^2 + 1$, con $u' = 2x$.
3. Entonces $f'(x) = 10^{x^2 + 1}\ln 10 \cdot 2x = 2x\ln 10 \cdot 10^{x^2 + 1}$.

**Resultado final:** $f'(x) = 2x\ln 10 \cdot 10^{x^2 + 1}$
