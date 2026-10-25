---
titulo: "Estimación del error en el volumen de una esfera"
tema: "derivadas"
seccion: "aplicaciones-fisicas-diferenciales"
dificultad: "intermedio"
metodo: "Propagación de errores con diferenciales"
orden: 7
---

## Enunciado

Se mide el radio de una esfera: $r = 10$ cm, con un error posible de $\pm 0.05$ cm. Estima el error máximo en el volumen calculado y el error relativo.

## Solución

1. $V = \frac{4}{3}\pi r^3$. El error en $V$ se aproxima con el diferencial: $dV = 4\pi r^2\,dr$.
2. Con $r = 10$ y $|dr| = 0.05$: $|dV| = 4\pi(100)(0.05) = 20\pi \approx 62.8$ cm³.
3. Volumen: $V = \frac{4000\pi}{3} \approx 4188.8$ cm³.
4. Error relativo: $\frac{dV}{V} = \frac{4\pi r^2\,dr}{\frac{4}{3}\pi r^3} = 3\frac{dr}{r} = 3 \cdot 0.005 = 0.015$, es decir, $1.5\%$. El error relativo del radio se triplica en el volumen.

**Resultado final:** Error máximo $\approx 20\pi \approx 62.8$ cm³; error relativo $\approx 1.5\%$.
