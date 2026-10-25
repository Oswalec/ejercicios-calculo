---
titulo: "Llenado de un tanque cónico"
tema: "aplicaciones-derivada"
seccion: "tasas-relacionadas-aproximacion"
dificultad: "intermedio"
metodo: "Tasas relacionadas con volumen y semejanza"
orden: 4
---

## Enunciado

Un tanque tiene forma de cono invertido, con radio superior de $2$ m y altura de $4$ m. Se le echa agua a $2$ m³/min. ¿Con qué rapidez sube el nivel cuando el agua tiene $3$ m de profundidad?

## Solución

1. Volumen del agua: $V = \frac{1}{3}\pi r^2 h$, donde $r$ y $h$ son el radio y la altura de la superficie del agua.
2. Por semejanza con el cono completo: $\frac{r}{h} = \frac{2}{4}$, de donde $r = \frac{h}{2}$. Entonces $V = \frac{1}{3}\pi\frac{h^2}{4}h = \frac{\pi h^3}{12}$.
3. Derivamos: $\frac{dV}{dt} = \frac{\pi h^2}{4}\frac{dh}{dt}$.
4. Con $\frac{dV}{dt} = 2$ y $h = 3$: $2 = \frac{9\pi}{4}\frac{dh}{dt}$, de donde $\frac{dh}{dt} = \frac{8}{9\pi} \approx 0.283$ m/min.

**Resultado final:** El nivel sube a $\dfrac{8}{9\pi} \approx 0.283$ m/min.
