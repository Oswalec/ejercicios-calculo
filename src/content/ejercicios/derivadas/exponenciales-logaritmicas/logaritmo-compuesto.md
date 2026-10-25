---
titulo: "Derivada del logaritmo de una función"
tema: "derivadas"
seccion: "exponenciales-logaritmicas"
dificultad: "basico"
metodo: "Regla de la cadena: (ln u)' = u'/u"
orden: 7
---

## Enunciado

Deriva $f(x) = \ln\left(x^2 + 4x + 5\right)$.

## Solución

1. El argumento cumple $x^2 + 4x + 5 = (x + 2)^2 + 1 > 0$ para todo $x$, así que $f$ está definida en $\mathbb{R}$.
2. Regla de la cadena: $\frac{d}{dx}\ln u = \frac{u'}{u}$.
3. $u = x^2 + 4x + 5$ y $u' = 2x + 4$.
4. Entonces $f'(x) = \frac{2x + 4}{x^2 + 4x + 5}$.

**Resultado final:** $f'(x) = \dfrac{2x + 4}{x^2 + 4x + 5}$
