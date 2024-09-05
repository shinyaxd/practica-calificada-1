# EJERCICIO 2

---
function long_a(a) {
    let val_mid;
    if (a.length % 2 !== 0) {
        val_mid = Math.floor(a.length / 2);
    } else {
        val_mid = a.length / 2;
    }
    return val_mid;
}

##### Explicación:
Aquí se está creando una función llamada long_a(a) que nos permitirá saber si la longitud del array es par o impar, de ser impar se le sumará 1 al valor de la longitud.

---

function mediana_ar(a) {
    return a[long_a(a)];
}

##### Explicación:
Aquí se está creando la función mediana que retornará el valor del "centro" del array. Para esto se llamará a la anterior función long_a(a)

---
function media_ar(){
    let sum_total = a.reduce((x, y) => x + y, 0);
    return sum_total/long_a(a)
}

##### Explicación:
Aquí se está creando la función media_ar() en donde se calculará la media aritmética del array. Para ello sumaremos cada valor del array (agrupándolo de a dos) y lo dividiremos entre el valor de su longitud total.

---
function moda_ar(){
    let val = 0;
    let cont = 0;
    const guardado = {}; 
    a.forEach(function(i) {
        if (guardado[i]) {
            guardado[i]++;
        } else {
            guardado[i] = 1;
        }
        if (guardado[i] > cont) {
            cont = guardado[i];
            val = i;
        }
    });
    return val;
}

##### Explicación:
Aquí se está creando la función moda_ar() en dónde se mostrará el valor más "repetido" del array.
El contador inicial es 0, así que el valor de mi lista guardado será nuestro contadory nuestro valor será i. Cada que encuentre un valor "repetido" en el array, se sumará uno al contador.


