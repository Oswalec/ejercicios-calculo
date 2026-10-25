---
titulo: "Aplicación: hacer continua una función de demanda"
tema: "continuidad"
seccion: "continuidad-uniforme-aplicaciones"
dificultad: "intermedio"
metodo: "Igualación del límite lateral con el valor"
orden: 8
---

## Enunciado

La demanda $q$ (unidades) de un producto según su precio $p$ (soles) se modela como

$$
q(p) = \begin{cases} a - 4p, & 0 \le p \le 20 \\ 0, & p > 20 \end{cases}
$$

Halla $a$ para que la demanda sea continua en $p = 20$ e interpreta.

## Solución

1. $q(20) = a - 80$ y coincide con el límite por la izquierda.
2. Por la derecha: $\displaystyle \lim_{p \to 20^+} q(p) = 0$.
3. Igualamos: $a - 80 = 0$, de donde $a = 80$. Así $q(p) = 80 - 4p$ en $[0, 20]$.
4. Interpretación: la demanda cae linealmente desde $80$ unidades (precio $0$) hasta $0$ unidades exactamente en el precio $20$, sin saltos. Con otro valor de $a$, el modelo diría que un céntimo más de precio hace desaparecer de golpe $a - 80$ unidades de demanda.

**Resultado final:** $a = 80$; la demanda es $q(p) = 80 - 4p$ y se anula justo en $p = 20$.
