---
titulo: "Derivada del arcotangente"
tema: "derivadas"
seccion: "trigonometricas-inversas"
dificultad: "intermedio"
metodo: "Derivación implícita e identidad 1 + tan² = sec²"
orden: 3
---

## Enunciado

Demuestra que $\dfrac{d}{dx}\arctan x = \dfrac{1}{1 + x^2}$ para todo $x$.

## Solución

1. Sea $y = \arctan x$, con $-\frac{\pi}{2} < y < \frac{\pi}{2}$. Entonces $\tan y = x$.
2. Derivamos implícitamente: $\sec^2 y \cdot y' = 1$, de donde $y' = \frac{1}{\sec^2 y}$.
3. Por la identidad $\sec^2 y = 1 + \tan^2 y = 1 + x^2$.
4. Por lo tanto $y' = \frac{1}{1 + x^2}$, definida para todo $x \in \mathbb{R}$.

**Resultado final:** $\dfrac{d}{dx}\arctan x = \dfrac{1}{1 + x^2}$
