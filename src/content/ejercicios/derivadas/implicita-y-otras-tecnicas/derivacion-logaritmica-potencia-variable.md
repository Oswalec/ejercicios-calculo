---
titulo: "Derivación logarítmica de x elevado a ln x"
tema: "derivadas"
seccion: "implicita-y-otras-tecnicas"
dificultad: "intermedio"
metodo: "Derivación logarítmica"
orden: 6
---

## Enunciado

Deriva $y = x^{\ln x}$, para $x > 0$.

## Solución

1. Tomamos logaritmo: $\ln y = \ln x \cdot \ln x = (\ln x)^2$.
2. Derivamos implícitamente: $\frac{y'}{y} = 2\ln x \cdot \frac{1}{x}$.
3. Despejamos: $y' = y \cdot \frac{2\ln x}{x} = x^{\ln x} \cdot \frac{2\ln x}{x}$.
4. Simplificamos: $y' = 2x^{\ln x - 1}\ln x$.

**Resultado final:** $y' = \dfrac{2\ln x}{x}\,x^{\ln x} = 2x^{\ln x - 1}\ln x$
