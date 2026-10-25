---
titulo: "Integral definida con cambio de límites"
tema: "integrales"
seccion: "sustitucion"
dificultad: "intermedio"
metodo: "Sustitución u = sen x con cambio de límites"
orden: 9
---

## Enunciado

Calcula $\displaystyle \int_{0}^{\pi/2} \cos x\,e^{\operatorname{sen} x}\,dx$.

## Solución

1. Hacemos $u = \operatorname{sen} x$, con $du = \cos x\,dx$.
2. Cambiamos los límites: si $x = 0$, $u = 0$; si $x = \frac{\pi}{2}$, $u = 1$.
3. La integral queda $\int_{0}^{1} e^{u}\,du = \left[e^{u}\right]_{0}^{1} = e - 1$.
4. Al cambiar los límites no hace falta volver a la variable $x$.

**Resultado final:** $\displaystyle \int_{0}^{\pi/2} \cos x\,e^{\operatorname{sen} x}\,dx = e - 1$
