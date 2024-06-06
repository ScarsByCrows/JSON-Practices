function sumar(acumulado, valor){
    const suma = acumulado + valor
    return suma
}

let acumulado = 0
acumulado = sumar(acumulado, 4)
acumulado = sumar(acumulado, 4)
acumulado = sumar(acumulado, 4)

console.log(acumulado)