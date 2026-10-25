---
titulo: "Derivada del arcoseno"
tema: "derivadas"
seccion: "trigonometricas-inversas"
dificultad: "intermedio"
metodo: "Derivación implícita e identidad pitagórica"
orden: 1
---

## Enunciado

Demuestra que $\dfrac{d}{dx}\operatorname{arcsen} x = \dfrac{1}{\sqrt{1 - x^2}}$ para $-1 < x < 1$.

## Solución

1. Sea $y = \operatorname{arcsen} x$, con $-\frac{\pi}{2} < y < \frac{\pi}{2}$. Entonces $\operatorname{sen} y = x$.
2. Derivamos implícitamente respecto de $x$: $\cos y \cdot y' = 1$, de donde $y' = \frac{1}{\cos y}$.
3. En $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ el coseno es positivo, así que $\cos y = \sqrt{1 - \operatorname{sen}^2 y} = \sqrt{1 - x^2}$.
4. Por lo tanto $y' = \frac{1}{\sqrt{1 - x^2}}$. En $x = \pm 1$ la derivada no existe: la gráfica tiene tangentes verticales.

**Resultado final:** $\dfrac{d}{dx}\operatorname{arcsen} x = \dfrac{1}{\sqrt{1 - x^2}}$
