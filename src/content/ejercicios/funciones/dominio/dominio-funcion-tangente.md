---
titulo: "Dominio de una función tangente"
tema: "funciones"
seccion: "dominio"
dificultad: "intermedio"
metodo: "Exclusión de los ceros del coseno"
orden: 8
---

## Enunciado

Halla el dominio de

$$
f(x) = \tan(2x)
$$

## Solución

1. $\tan u = \frac{\operatorname{sen} u}{\cos u}$ está definida cuando $\cos u \neq 0$, es decir, cuando $u \neq \frac{\pi}{2} + k\pi$ con $k \in \mathbb{Z}$.
2. Aquí $u = 2x$, así que se exige $2x \neq \frac{\pi}{2} + k\pi$.
3. Dividimos entre $2$: $x \neq \frac{\pi}{4} + \frac{k\pi}{2}$, con $k \in \mathbb{Z}$.

**Resultado final:** $\operatorname{Dom} f = \left\{x \in \mathbb{R} : x \neq \dfrac{\pi}{4} + \dfrac{k\pi}{2},\ k \in \mathbb{Z}\right\}$
