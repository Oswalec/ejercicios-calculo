---
titulo: "Continua pero no derivable: la raíz cúbica en el origen"
tema: "derivadas"
seccion: "fundamentos"
dificultad: "intermedio"
metodo: "Relación entre continuidad y derivabilidad"
orden: 6
grafica:
  ubicacion: "solucion"
  x: [-8, 8]
  y: [-2.5, 2.5]
  curvas:
    - expr: "cbrt(x)"
      etiqueta: 'f(x) = \sqrt[3]{x}'
  puntos:
    - { x: 0, y: 0, etiqueta: "(0, 0)" }
  descripcion: "La gráfica de la raíz cúbica es continua y tiene una tangente vertical en el origen."
---

## Enunciado

Demuestra que $f(x) = \sqrt[3]{x}$ es continua en $x = 0$ pero no es derivable allí.

## Solución

1. Continuidad: la raíz cúbica es continua en $\mathbb{R}$, y $\displaystyle \lim_{x \to 0} \sqrt[3]{x} = 0 = f(0)$.
2. Derivabilidad: $\frac{f(h) - f(0)}{h} = \frac{h^{1/3}}{h} = h^{-2/3} = \frac{1}{\sqrt[3]{h^2}}$ para $h \neq 0$.
3. Como $\sqrt[3]{h^2} > 0$ y tiende a $0$, el cociente tiende a $+\infty$. El límite no es finito, así que $f'(0)$ no existe.
4. Geométricamente, la tangente en el origen es **vertical**. Esto ilustra que derivable implica continua, pero continua no implica derivable.

**Resultado final:** $\sqrt[3]{x}$ es continua en $0$ pero no derivable (tangente vertical).
