---
titulo: "Regla de Barrow: área bajo un arco de seno"
tema: "integrales"
seccion: "integrales-definidas"
dificultad: "basico"
metodo: "Regla de Barrow"
orden: 7
grafica:
  ubicacion: "solucion"
  x: [-0.5, 3.6]
  y: [-0.3, 1.3]
  curvas:
    - expr: "sen(x)"
      desde: 0
      hasta: 3.14159
      etiqueta: 'y = \operatorname{sen} x,\ 0 \le x \le \pi'
  descripcion: "Un arco de la curva seno entre 0 y π, por encima del eje x; el área bajo él es 2."
---

## Enunciado

Calcula $\displaystyle \int_{0}^{\pi} \operatorname{sen} x\,dx$ e interprétalo.

## Solución

1. Regla de Barrow: si $F' = f$ en $[a, b]$, entonces $\int_a^b f(x)\,dx = F(b) - F(a)$.
2. Una primitiva de $\operatorname{sen} x$ es $F(x) = -\cos x$.
3. $F(\pi) - F(0) = -\cos\pi - (-\cos 0) = 1 + 1 = 2$.
4. Como $\operatorname{sen} x \ge 0$ en $[0, \pi]$, el resultado es el área bajo un arco de la curva seno.

**Resultado final:** $\displaystyle \int_{0}^{\pi} \operatorname{sen} x\,dx = 2$
