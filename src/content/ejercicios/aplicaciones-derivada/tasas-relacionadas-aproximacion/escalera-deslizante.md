---
titulo: "Escalera que se desliza por una pared"
tema: "aplicaciones-derivada"
seccion: "tasas-relacionadas-aproximacion"
dificultad: "basico"
metodo: "Tasas relacionadas con el teorema de Pitágoras"
orden: 2
---

## Enunciado

Una escalera de $5$ m está apoyada en una pared. Su base se aleja de la pared a $0.5$ m/s. ¿Con qué rapidez baja el extremo superior cuando la base está a $3$ m de la pared?

## Solución

1. Sea $x$ la distancia de la base a la pared e $y$ la altura del extremo superior. Por Pitágoras: $x^2 + y^2 = 25$.
2. Derivamos respecto de $t$: $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$, de donde $\frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt}$.
3. Con $x = 3$: $y = \sqrt{25 - 9} = 4$. Además $\frac{dx}{dt} = 0.5$.
4. $\frac{dy}{dt} = -\frac{3}{4}(0.5) = -0.375$ m/s. El signo negativo indica que la altura disminuye.

**Resultado final:** El extremo superior baja a $0.375$ m/s.
