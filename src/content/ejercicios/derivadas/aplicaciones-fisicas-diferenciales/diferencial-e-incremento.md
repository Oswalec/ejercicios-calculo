---
titulo: "Diferencial frente a incremento real"
tema: "derivadas"
seccion: "aplicaciones-fisicas-diferenciales"
dificultad: "basico"
metodo: "Diferencial dy = f'(x) dx"
orden: 5
---

## Enunciado

Sea $y = x^3$. Para $x = 2$ y $dx = \Delta x = 0.01$, calcula el diferencial $dy$ y el incremento real $\Delta y$, y compáralos.

## Solución

1. Diferencial: $dy = f'(x)\,dx = 3x^2\,dx$. En $x = 2$: $dy = 12 \cdot 0.01 = 0.12$.
2. Incremento real: $\Delta y = f(2.01) - f(2) = 2.01^3 - 8$.
3. $2.01^3 = 8.120601$, así que $\Delta y = 0.120601$.
4. El error de la aproximación es $\Delta y - dy = 0.000601$, mucho menor que $dx$: el diferencial es una excelente aproximación para incrementos pequeños.

**Resultado final:** $dy = 0.12$ y $\Delta y = 0.120601$; difieren en $0.000601$.
