//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // NaN
imprimirSoma(2, 10, 4, 5, 6, 7); // apenas os dois primeiros parametros serao somados
imprimirSoma(); // NaN

//funcao com retorno
function soma(a, b = 0){ // valor padrao para b
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2)); // valor padrao para b