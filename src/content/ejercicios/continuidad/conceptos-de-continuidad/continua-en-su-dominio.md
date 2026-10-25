---
titulo: "Continua en su dominio, pero con un salto en la gráfica"
tema: "continuidad"
seccion: "conceptos-de-continuidad"
dificultad: "intermedio"
metodo: "Continuidad en el dominio de una función"
orden: 7
---

## Enunciado

¿Es continua la función $f(x) = \dfrac{1}{x}$? Discute qué ocurre en $x = 0$.

## Solución

1. $\operatorname{Dom} f = \mathbb{R} \setminus \{0\}$. Una función es continua (en su dominio) si es continua en cada punto de su dominio.
2. Para cualquier $a \neq 0$: $\displaystyle \lim_{x \to a} \frac{1}{x} = \frac{1}{a} = f(a)$, por la propiedad del cociente de límites. Entonces $f$ es continua en cada punto de su dominio.
3. El punto $x = 0$ no pertenece al dominio, así que la pregunta «¿es continua en $0$?» no se plantea en el sentido de las tres condiciones: allí falla la condición (i).
4. La gráfica se rompe en $x = 0$, donde hay una asíntota vertical, pero eso no contradice que $f$ sea continua en su dominio.

**Resultado final:** $f$ es continua en su dominio $\mathbb{R} \setminus \{0\}$; en $x = 0$ no está definida.
