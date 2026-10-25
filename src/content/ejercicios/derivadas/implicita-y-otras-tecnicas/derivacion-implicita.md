---
titulo: "Derivación implícita en una circunferencia"
tema: "derivadas"
seccion: "implicita-y-otras-tecnicas"
dificultad: "intermedio"
metodo: "Derivación implícita"
orden: 1
---

## Enunciado

Si $x$ e $y$ cumplen la ecuación de la circunferencia

$$
x^2 + y^2 = 25,
$$

halla $\frac{dy}{dx}$ y evalúala en el punto $(3, 4)$.

## Solución

1. Consideramos $y$ como función de $x$ y derivamos ambos lados respecto de $x$. Por la regla de la cadena, $\frac{d}{dx}\left(y^2\right) = 2y \frac{dy}{dx}$.
2. Derivamos: $2x + 2y \frac{dy}{dx} = 0$, porque la derivada de la constante $25$ es $0$.
3. Despejamos: $2y \frac{dy}{dx} = -2x$, de donde $\frac{dy}{dx} = -\frac{x}{y}$ (para $y \neq 0$).
4. Comprobamos que $(3, 4)$ está en la curva: $3^2 + 4^2 = 9 + 16 = 25$.
5. Evaluamos en $(3, 4)$: $\frac{dy}{dx} = -\frac{3}{4}$.

**Resultado final:** $\dfrac{dy}{dx} = -\dfrac{x}{y}$; en $(3, 4)$ vale $-\dfrac{3}{4}$
