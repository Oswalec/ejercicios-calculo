---
titulo: "Fracciones parciales con factores lineales"
tema: "integrales"
seccion: "fracciones-parciales"
dificultad: "avanzado"
metodo: "Fracciones parciales con factores lineales distintos"
orden: 1
---

## Enunciado

Calcula la siguiente integral indefinida:

$$
\int \frac{1}{x^2 - 1}\,dx
$$

## Solución

1. Factorizamos el denominador: $x^2 - 1 = (x - 1)(x + 1)$. Descomponemos en fracciones parciales: $\frac{1}{(x - 1)(x + 1)} = \frac{A}{x - 1} + \frac{B}{x + 1}$.
2. Multiplicamos por $(x - 1)(x + 1)$: $1 = A(x + 1) + B(x - 1)$.
3. Con $x = 1$: $1 = 2A$, así que $A = \frac{1}{2}$. Con $x = -1$: $1 = -2B$, así que $B = -\frac{1}{2}$.
4. Integramos cada término, usando $\int \frac{du}{u} = \ln|u| + C$: $\frac{1}{2} \ln|x - 1| - \frac{1}{2} \ln|x + 1| + C$.
5. Por las propiedades del logaritmo: $\frac{1}{2} \ln\left|\frac{x - 1}{x + 1}\right| + C$.

**Resultado final:** $\displaystyle \int \frac{1}{x^2 - 1}\,dx = \frac{1}{2} \ln\left|\frac{x - 1}{x + 1}\right| + C$
