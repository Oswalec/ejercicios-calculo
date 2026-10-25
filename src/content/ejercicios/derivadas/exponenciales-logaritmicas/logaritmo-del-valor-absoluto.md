---
titulo: "Derivada de ln|x|"
tema: "derivadas"
seccion: "exponenciales-logaritmicas"
dificultad: "intermedio"
metodo: "Análisis por casos y regla de la cadena"
orden: 6
---

## Enunciado

Demuestra que $\dfrac{d}{dx}\ln|x| = \dfrac{1}{x}$ para todo $x \neq 0$.

## Solución

1. Si $x > 0$: $|x| = x$, así que $\frac{d}{dx}\ln|x| = \frac{d}{dx}\ln x = \frac{1}{x}$.
2. Si $x < 0$: $|x| = -x > 0$, así que $\ln|x| = \ln(-x)$.
3. Por la cadena: $\frac{d}{dx}\ln(-x) = \frac{1}{-x} \cdot (-1) = \frac{1}{x}$.
4. En ambos casos la derivada es $\frac{1}{x}$. Por eso $\ln|x|$ es la antiderivada de $\frac{1}{x}$ en todo su dominio.

**Resultado final:** $\dfrac{d}{dx}\ln|x| = \dfrac{1}{x}$ para todo $x \neq 0$.
