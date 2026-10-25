---
titulo: "Derivada de una cosecante compuesta"
tema: "derivadas"
seccion: "trigonometricas"
dificultad: "intermedio"
metodo: "Regla de la cadena con csc u"
orden: 9
---

## Enunciado

Deriva $f(x) = \csc\left(\sqrt{x}\right)$, para $x > 0$ con $\sqrt{x} \neq k\pi$.

## Solución

1. Fórmula: $\frac{d}{dx}\csc u = -\csc u\cot u \cdot u'$.
2. $u = \sqrt{x}$, con $u' = \frac{1}{2\sqrt{x}}$.
3. Entonces $f'(x) = -\csc\left(\sqrt{x}\right)\cot\left(\sqrt{x}\right) \cdot \frac{1}{2\sqrt{x}}$.

**Resultado final:** $f'(x) = -\dfrac{\csc\left(\sqrt{x}\right)\cot\left(\sqrt{x}\right)}{2\sqrt{x}}$
