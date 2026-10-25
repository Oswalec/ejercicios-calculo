---
titulo: "Continuidad de productos y cocientes de funciones elementales"
tema: "continuidad"
seccion: "funciones-elementales"
dificultad: "intermedio"
metodo: "Propiedades de continuidad del producto y el cociente"
orden: 8
---

## Enunciado

Determina dónde es continua

$$
f(x) = \frac{x^2 e^{x}}{\cos x}
$$

## Solución

1. $x^2$ y $e^{x}$ son continuas en $\mathbb{R}$; su producto $x^2 e^{x}$ también lo es.
2. $\cos x$ es continua en $\mathbb{R}$. El cociente de funciones continuas es continuo donde el denominador no se anula.
3. $\cos x = 0$ si y solo si $x = \frac{\pi}{2} + k\pi$, con $k \in \mathbb{Z}$.
4. Por lo tanto, $f$ es continua en todo $\mathbb{R}$ salvo en esos puntos.

**Resultado final:** $f$ es continua en $\left\{x : x \neq \dfrac{\pi}{2} + k\pi,\ k \in \mathbb{Z}\right\}$.
