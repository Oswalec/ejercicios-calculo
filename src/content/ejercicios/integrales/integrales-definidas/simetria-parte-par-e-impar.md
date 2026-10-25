---
titulo: "Separar la parte par y la parte impar del integrando"
tema: "integrales"
seccion: "integrales-definidas"
dificultad: "intermedio"
metodo: "Propiedades de simetría para funciones pares e impares"
orden: 10
---

## Enunciado

Calcula $\displaystyle \int_{-\pi/2}^{\pi/2}\left(x^2\operatorname{sen} x + \cos x\right)dx$.

## Solución

1. Separamos: $\int_{-\pi/2}^{\pi/2} x^2\operatorname{sen} x\,dx + \int_{-\pi/2}^{\pi/2}\cos x\,dx$.
2. $x^2\operatorname{sen} x$ es impar (par por impar), así que su integral en el intervalo simétrico es $0$.
3. $\cos x$ es par: $\int_{-a}^{a} f = 2\int_0^a f$. Entonces $2\int_0^{\pi/2}\cos x\,dx = 2\left[\operatorname{sen} x\right]_0^{\pi/2} = 2$.
4. Total: $0 + 2 = 2$.

**Resultado final:** $\displaystyle \int_{-\pi/2}^{\pi/2}\left(x^2\operatorname{sen} x + \cos x\right)dx = 2$
