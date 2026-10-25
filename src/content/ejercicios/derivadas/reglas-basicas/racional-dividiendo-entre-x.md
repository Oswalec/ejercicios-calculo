---
titulo: "Derivar una fracción separándola en términos"
tema: "derivadas"
seccion: "reglas-basicas"
dificultad: "intermedio"
metodo: "División término a término y regla de la potencia"
orden: 5
---

## Enunciado

Deriva, sin usar la regla del cociente:

$$
f(x) = \frac{x^3 - 2x + 5}{x}
$$

## Solución

1. Como el denominador es un monomio, dividimos cada término entre $x$ (para $x \neq 0$): $f(x) = x^2 - 2 + 5x^{-1}$.
2. Derivamos término a término: $\frac{d}{dx}x^2 = 2x$, $\frac{d}{dx}(-2) = 0$ y $\frac{d}{dx}\left(5x^{-1}\right) = -5x^{-2}$.
3. Entonces $f'(x) = 2x - \frac{5}{x^2}$.

**Resultado final:** $f'(x) = 2x - \dfrac{5}{x^2}$
