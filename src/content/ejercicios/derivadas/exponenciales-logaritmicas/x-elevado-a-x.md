---
titulo: "Derivada de x elevado a x"
tema: "derivadas"
seccion: "exponenciales-logaritmicas"
dificultad: "intermedio"
metodo: "Derivación logarítmica para base y exponente variables"
orden: 10
---

## Enunciado

Deriva $f(x) = x^{x}$, para $x > 0$.

## Solución

1. Ni la regla de la potencia (exponente fijo) ni la de la exponencial (base fija) sirven, porque varían la base y el exponente.
2. Tomamos logaritmo: $\ln f(x) = x\ln x$.
3. Derivamos ambos lados: $\frac{f'(x)}{f(x)} = 1 \cdot \ln x + x \cdot \frac{1}{x} = \ln x + 1$.
4. Despejamos: $f'(x) = x^{x}(\ln x + 1)$.

**Resultado final:** $f'(x) = x^{x}(\ln x + 1)$
