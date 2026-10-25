---
titulo: "Continuidad de la secante"
tema: "continuidad"
seccion: "funciones-elementales"
dificultad: "basico"
metodo: "Continuidad del cociente de funciones continuas"
orden: 5
---

## Enunciado

Determina dónde es continua $f(x) = \sec x$.

## Solución

1. $\sec x = \frac{1}{\cos x}$. El numerador $1$ y el coseno son continuos en todo $\mathbb{R}$.
2. El cociente de funciones continuas es continuo donde el denominador no se anula: se exige $\cos x \neq 0$.
3. $\cos x = 0$ si y solo si $x = \frac{\pi}{2} + k\pi$, con $k \in \mathbb{Z}$.
4. En esos puntos hay asíntotas verticales; en el resto, $f$ es continua.

**Resultado final:** $\sec x$ es continua en $\left\{x \in \mathbb{R} : x \neq \dfrac{\pi}{2} + k\pi,\ k \in \mathbb{Z}\right\}$.
