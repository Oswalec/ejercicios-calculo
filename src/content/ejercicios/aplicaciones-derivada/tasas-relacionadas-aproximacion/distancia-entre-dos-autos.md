---
titulo: "Rapidez con que se separan dos autos"
tema: "aplicaciones-derivada"
seccion: "tasas-relacionadas-aproximacion"
dificultad: "intermedio"
metodo: "Tasas relacionadas con el teorema de Pitágoras"
orden: 10
---

## Enunciado

Dos autos parten del mismo punto: uno hacia el norte a $60$ km/h y otro hacia el este a $80$ km/h. ¿Con qué rapidez aumenta la distancia entre ellos a las $2$ horas?

## Solución

1. Sean $y$ y $x$ las distancias recorridas hacia el norte y hacia el este, y $D$ la distancia entre los autos: $D^2 = x^2 + y^2$.
2. Derivamos: $2D\frac{dD}{dt} = 2x\frac{dx}{dt} + 2y\frac{dy}{dt}$, de donde $\frac{dD}{dt} = \frac{x\frac{dx}{dt} + y\frac{dy}{dt}}{D}$.
3. A las $2$ h: $x = 160$, $y = 120$ y $D = \sqrt{160^2 + 120^2} = 200$ km.
4. $\frac{dD}{dt} = \frac{160 \cdot 80 + 120 \cdot 60}{200} = \frac{12800 + 7200}{200} = 100$ km/h.

**Resultado final:** La distancia aumenta a $100$ km/h.
