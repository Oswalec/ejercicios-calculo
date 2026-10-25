---
titulo: "Derivada de un logaritmo de base 2"
tema: "derivadas"
seccion: "exponenciales-logaritmicas"
dificultad: "intermedio"
metodo: "Cambio de base y regla de la cadena"
orden: 8
---

## Enunciado

Deriva $f(x) = \log_2(3x + 1)$, para $x > -\dfrac{1}{3}$.

## Solución

1. Por el cambio de base: $\log_2 u = \frac{\ln u}{\ln 2}$, donde $\ln 2$ es una constante.
2. $f(x) = \frac{1}{\ln 2}\ln(3x + 1)$.
3. Por la cadena: $\frac{d}{dx}\ln(3x + 1) = \frac{3}{3x + 1}$.
4. Entonces $f'(x) = \frac{3}{(3x + 1)\ln 2}$.

**Resultado final:** $f'(x) = \dfrac{3}{(3x + 1)\ln 2}$
