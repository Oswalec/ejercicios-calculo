---
titulo: "Sustitución en una integral racional: u'/u"
tema: "integrales"
seccion: "sustitucion"
dificultad: "basico"
metodo: "Sustitución u = denominador"
orden: 8
---

## Enunciado

Calcula $\displaystyle \int \frac{2x + 1}{x^2 + x + 5}\,dx$.

## Solución

1. El numerador es la derivada del denominador. Hacemos $u = x^2 + x + 5$, con $du = (2x + 1)\,dx$.
2. $\int \frac{du}{u} = \ln|u|$.
3. Como $x^2 + x + 5 = \left(x + \frac{1}{2}\right)^2 + \frac{19}{4} > 0$, el valor absoluto no es necesario: $\ln\left(x^2 + x + 5\right) + C$.

**Resultado final:** $\displaystyle \int \frac{2x + 1}{x^2 + x + 5}\,dx = \ln\left(x^2 + x + 5\right) + C$
