---
titulo: "Integración por partes del logaritmo natural"
tema: "integrales"
seccion: "por-partes"
dificultad: "intermedio"
metodo: "Integración por partes con dv = dx"
orden: 2
---

## Enunciado

Calcula la siguiente integral indefinida, para $x > 0$:

$$
\int \ln x\,dx
$$

## Solución

1. No hay una regla directa para $\ln x$, pero podemos verla como $\ln x \cdot 1$ y usar integración por partes: $\int u\,dv = uv - \int v\,du$.
2. Elegimos $u = \ln x$ y $dv = dx$.
3. Entonces $du = \frac{1}{x}\,dx$ y $v = x$.
4. Aplicamos la fórmula: $\int \ln x\,dx = x \ln x - \int x \cdot \frac{1}{x}\,dx = x \ln x - \int 1\,dx$.
5. Integramos: $x \ln x - x + C$. Comprobación: $\frac{d}{dx}(x \ln x - x) = \ln x + 1 - 1 = \ln x$.

**Resultado final:** $\displaystyle \int \ln x\,dx = x \ln x - x + C$
