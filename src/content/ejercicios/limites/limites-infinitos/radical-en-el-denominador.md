---
titulo: "Radical que se anula en el denominador"
tema: "limites"
seccion: "limites-infinitos"
dificultad: "basico"
metodo: "Análisis del dominio y del signo"
orden: 8
---

## Enunciado

Calcula el siguiente límite:

$$
\lim_{x \to 1^+} \frac{x + 1}{\sqrt{x^2 - 1}}
$$

## Solución

1. Dominio: el denominador exige $x^2 - 1 > 0$, es decir, $|x| > 1$. Cerca de $1$ la función solo existe para $x > 1$, por eso el límite es por la derecha.
2. Cuando $x \to 1^+$: el numerador tiende a $2 > 0$.
3. El denominador $\sqrt{x^2 - 1}$ es positivo y tiende a $0$, porque $x^2 - 1 \to 0^+$.
4. Un número positivo entre una cantidad positiva que tiende a $0$ crece sin cota: el límite es $+\infty$.

**Resultado final:** $\displaystyle \lim_{x \to 1^+} \frac{x + 1}{\sqrt{x^2 - 1}} = +\infty$
