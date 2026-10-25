---
titulo: "Inversa de una función exponencial"
tema: "funciones"
seccion: "funciones-inversas"
dificultad: "intermedio"
metodo: "Despeje con logaritmos"
orden: 5
---

## Enunciado

Halla la inversa de $f(x) = e^{2x} - 1$ e indica su dominio.

## Solución

1. $f$ es creciente (y por tanto inyectiva), y su rango es $(-1, \infty)$, porque $e^{2x} > 0$ toma todos los valores positivos.
2. Despejamos: $y = e^{2x} - 1$, es decir, $e^{2x} = y + 1$, que requiere $y + 1 > 0$.
3. Aplicamos logaritmo natural: $2x = \ln(y + 1)$, de donde $x = \frac{1}{2}\ln(y + 1)$.
4. Intercambiamos variables: $f^{-1}(x) = \frac{1}{2}\ln(x + 1)$, con dominio $(-1, \infty)$, que es el rango de $f$.

**Resultado final:** $f^{-1}(x) = \dfrac{1}{2}\ln(x + 1)$, con dominio $(-1, \infty)$.
