---
titulo: "Derivada de xⁿ por definición"
tema: "derivadas"
seccion: "demostraciones-por-definicion"
dificultad: "avanzado"
metodo: "Definición de derivada y binomio de Newton"
orden: 5
---

## Enunciado

Demuestra por definición que, para todo entero $n \ge 1$, $\dfrac{d}{dx}\left(x^n\right) = n x^{n-1}$.

## Solución

1. Por el binomio de Newton: $(x + h)^n = x^n + \binom{n}{1}x^{n-1}h + \binom{n}{2}x^{n-2}h^2 + \cdots + h^n$, con $\binom{n}{1} = n$.
2. Restamos $x^n$: $(x + h)^n - x^n = n x^{n-1}h + h^2\left[\binom{n}{2}x^{n-2} + \cdots + h^{n-2}\right]$.
3. Dividimos entre $h \neq 0$: $\frac{(x + h)^n - x^n}{h} = n x^{n-1} + h\left[\binom{n}{2}x^{n-2} + \cdots + h^{n-2}\right]$.
4. La expresión entre corchetes es un polinomio en $h$, que tiene límite finito cuando $h \to 0$; al multiplicarlo por $h$, el segundo término tiende a $0$.
5. Por lo tanto el límite es $n x^{n-1}$.

**Resultado final:** $\dfrac{d}{dx}\left(x^n\right) = n x^{n-1}$ para todo entero $n \ge 1$.
