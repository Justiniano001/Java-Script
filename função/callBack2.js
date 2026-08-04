//sem callback

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
const notasBaixas1 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas1)


//com callback

const notasBaixas2 = notas.filter(function (nota) { 
    return nota < 7 
})

console.log(notasBaixas2)

const notasmenorque7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasmenorque7)
console.log(notasBaixas3)