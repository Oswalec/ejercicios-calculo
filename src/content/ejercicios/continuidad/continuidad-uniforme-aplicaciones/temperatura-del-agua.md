---
titulo: "Aplicación: temperatura del agua al hervir"
tema: "continuidad"
seccion: "continuidad-uniforme-aplicaciones"
dificultad: "basico"
metodo: "Continuidad en el punto de cambio del modelo"
orden: 9
---

## Enunciado

La temperatura (°C) del agua en una olla se modela, en función del tiempo $t$ en minutos, como

$$
T(t) = \begin{cases} 20 + 4t, & 0 \le t \le 20 \\ 100, & t > 20 \end{cases}
$$

¿Es continuo el modelo en $t = 20$? ¿Qué temperatura hay a los $12$ minutos?

## Solución

1. $T(20) = 20 + 80 = 100$, que coincide con el límite por la izquierda.
2. Por la derecha: $\displaystyle \lim_{t \to 20^+} T(t) = 100$.
3. Los tres valores coinciden: el modelo es continuo en $t = 20$. Físicamente tiene sentido, porque la temperatura no salta de golpe: sube hasta $100$ °C y se mantiene mientras hierve.
4. A los $12$ minutos: $T(12) = 20 + 48 = 68$ °C.

**Resultado final:** Es continuo en $t = 20$; $T(12) = 68$ °C.
