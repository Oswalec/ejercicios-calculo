---
titulo: "Teorema del encaje cuando x tiende a infinito"
tema: "limites"
seccion: "teoremas-aplicaciones"
dificultad: "basico"
metodo: "Teorema del encaje"
orden: 2
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to \infty} \frac{2 + \operatorname{sen} x}{x}
$$

## Solución

1. El numerador no tiene límite (oscila), pero está acotado: como $-1 \le \operatorname{sen} x \le 1$, se cumple $1 \le 2 + \operatorname{sen} x \le 3$.
2. Para $x > 0$ dividimos entre $x$ sin cambiar el sentido de las desigualdades: $\frac{1}{x} \le \frac{2 + \operatorname{sen} x}{x} \le \frac{3}{x}$.
3. Las cotas cumplen $\frac{1}{x} \to 0$ y $\frac{3}{x} \to 0$ cuando $x \to \infty$.
4. Por el teorema del encaje, el límite es $0$.

**Resultado final:** $\displaystyle \lim_{x \to \infty} \frac{2 + \operatorname{sen} x}{x} = 0$
