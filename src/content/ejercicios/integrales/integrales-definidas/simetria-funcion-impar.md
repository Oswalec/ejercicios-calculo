---
titulo: "Integral de una función impar en un intervalo simétrico"
tema: "integrales"
seccion: "integrales-definidas"
dificultad: "basico"
metodo: "Propiedad de simetría para funciones impares"
orden: 9
---

## Enunciado

Calcula $\displaystyle \int_{-2}^{2}\left(x^3\cos x + x^5\right)dx$ sin buscar una primitiva.

## Solución

1. Propiedad: si $f$ es continua e impar, $\int_{-a}^{a} f(x)\,dx = 0$, porque las áreas a ambos lados del origen se cancelan.
2. $x^3\cos x$ es impar (producto de una impar por una par): $(-x)^3\cos(-x) = -x^3\cos x$.
3. $x^5$ es impar. La suma de impares es impar.
4. El intervalo $[-2, 2]$ es simétrico, así que la integral vale $0$.

**Resultado final:** $\displaystyle \int_{-2}^{2}\left(x^3\cos x + x^5\right)dx = 0$
