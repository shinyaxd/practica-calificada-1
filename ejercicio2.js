function long_a(a) {
    let val_mid;
    if (a.length % 2 !== 0) {
        val_mid = Math.floor(a.length / 2);
    } else {
        val_mid = a.length / 2;
    }
    return val_mid;
}

function mediana_ar(a) {
    return a[long_a(a)];
}

function media_ar(){
    let sum_total = a.reduce((x, y) => x + y, 0);
    return sum_total/long_a(a)
}

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
    
a=[1,2,3,4,4,5,5,5,5,7,6,8]
console.log(mediana_ar(a));
console.log(media_ar(a));
console.log(moda_ar(a));



