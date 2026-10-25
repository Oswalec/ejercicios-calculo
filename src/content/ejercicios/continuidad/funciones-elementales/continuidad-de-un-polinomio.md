---
titulo: "Un polinomio es continuo en todo punto"
tema: "continuidad"
seccion: "funciones-elementales"
dificultad: "basico"
metodo: "Propiedades algebraicas de los límites"
orden: 1
---

## Enunciado

Demuestra que $p(x) = 3x^3 - x + 2$ es continua en $x = 2$ usando las propiedades de los límites, y explica por qué lo es en todo $\mathbb{R}$.

## Solución

1. Sabemos que $\displaystyle \lim_{x \to a} x = a$ y $\displaystyle \lim_{x \to a} c = c$ para cualquier constante $c$.
2. Por las propiedades de potencia, múltiplo constante y suma: $\displaystyle \lim_{x \to 2} (3x^3 - x + 2) = 3(2)^3 - 2 + 2 = 24$.
3. Por otro lado, $p(2) = 24$. El límite coincide con el valor: $p$ es continua en $2$.
4. El mismo razonamiento vale en cualquier $a$: $\displaystyle \lim_{x \to a} p(x) = p(a)$. Todo polinomio es continuo en $\mathbb{R}$.

**Resultado final:** $\displaystyle \lim_{x \to 2} p(x) = 24 = p(2)$; $p$ es continua en todo $\mathbb{R}$.
