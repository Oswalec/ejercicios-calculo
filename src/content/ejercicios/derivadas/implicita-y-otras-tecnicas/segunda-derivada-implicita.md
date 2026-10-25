---
titulo: "Segunda derivada en forma implícita"
tema: "derivadas"
seccion: "implicita-y-otras-tecnicas"
dificultad: "avanzado"
metodo: "Derivación implícita sucesiva y sustitución de la ecuación"
orden: 8
---

## Enunciado

Si $x^2 + y^2 = 25$, halla $\dfrac{d^2y}{dx^2}$ en función de $y$.

## Solución

1. Primera derivada implícita: $2x + 2yy' = 0$, de donde $y' = -\frac{x}{y}$ (con $y \neq 0$).
2. Derivamos $y' = -\frac{x}{y}$ con la regla del cociente: $y'' = -\frac{1 \cdot y - x \cdot y'}{y^2}$.
3. Sustituimos $y' = -\frac{x}{y}$: $y'' = -\frac{y + \frac{x^2}{y}}{y^2} = -\frac{y^2 + x^2}{y^3}$.
4. Usamos la ecuación de la curva, $x^2 + y^2 = 25$: $y'' = -\frac{25}{y^3}$.

**Resultado final:** $\dfrac{d^2y}{dx^2} = -\dfrac{25}{y^3}$
