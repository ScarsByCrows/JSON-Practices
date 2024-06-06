function sumar(acumulado, valor) {
    return new Promise(function (resolve, reject) {
        if (valor == 2) return reject("Los Números 2 Son de Mala Suerte")


        let suma
        setTimeout(function () {
            suma = acumulado + valor
            resolve(suma)
        }, 1000);
    })
}

async function main() {
    let acumulado = 0
    try {
        acumulado = await sumar(acumulado, 4)
        acumulado = await sumar(acumulado, 4)
        acumulado = await sumar(acumulado, 2)
    } catch (error) {
        console.log(error)
    }
    console.log(acumulado)
}


main()

// let acumulado = 0
// sumar(acumulado, 4)
//     .then(function (suma) {
//         return sumar(suma, 4)
//     })
//     .then(function(suma){
//         return sumar(suma, 2)
//     })

console.log("Estoy al final")
