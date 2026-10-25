---
titulo: "Arcoseno de una función lineal"
tema: "derivadas"
seccion: "trigonometricas-inversas"
dificultad: "basico"
metodo: "Regla de la cadena con arcsen u"
orden: 7
---

## Enunciado

Deriva $f(x) = \operatorname{arcsen}(3x)$ e indica dónde es válida la derivada.

## Solución

1. Fórmula con la cadena: $\frac{d}{dx}\operatorname{arcsen} u = \frac{u'}{\sqrt{1 - u^2}}$.
2. $u = 3x$ y $u' = 3$.
3. $f'(x) = \frac{3}{\sqrt{1 - 9x^2}}$.
4. Válida donde $1 - 9x^2 > 0$, es decir, $|x| < \frac{1}{3}$.

**Resultado final:** $f'(x) = \dfrac{3}{\sqrt{1 - 9x^2}}$, para $|x| < \dfrac{1}{3}$.
