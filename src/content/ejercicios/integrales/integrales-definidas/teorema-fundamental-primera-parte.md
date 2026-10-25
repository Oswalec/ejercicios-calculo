---
titulo: "Teorema fundamental del cálculo, primera parte"
tema: "integrales"
seccion: "integrales-definidas"
dificultad: "intermedio"
metodo: "TFC parte 1 y regla de la cadena"
orden: 6
---

## Enunciado

Calcula $\displaystyle \frac{d}{dx}\int_{1}^{x^2} \sqrt{1 + t^3}\,dt$.

## Solución

1. TFC (parte 1): si $f$ es continua, $\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$.
2. Aquí el límite superior es $x^2$, no $x$. Sea $F(u) = \int_1^u \sqrt{1 + t^3}\,dt$; la expresión es $F(x^2)$.
3. Por la cadena: $\frac{d}{dx}F(x^2) = F'(x^2) \cdot 2x = \sqrt{1 + (x^2)^3} \cdot 2x$.
4. Resultado: $2x\sqrt{1 + x^6}$. No hace falta calcular la integral, que no tiene primitiva elemental.

**Resultado final:** $\displaystyle \frac{d}{dx}\int_{1}^{x^2} \sqrt{1 + t^3}\,dt = 2x\sqrt{1 + x^6}$
