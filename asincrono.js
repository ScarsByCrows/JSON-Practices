function sumar(acumulado, valor, callback) {
    let suma
    setTimeout(function () {
        suma = acumulado + valor        
        callback(suma)
    }, 1000);
    
}

let acumulado = 0
sumar(acumulado, 4, function (suma) {
    sumar(suma, 4, function(suma){
        sumar(suma, 2, function(suma){
            console.log(suma)
        })
    })
})
console.log("Estoy al final")
// console.log(acumulado)