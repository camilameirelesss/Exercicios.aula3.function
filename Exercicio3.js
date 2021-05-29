// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
//Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor
//e dizer que ele é par.

function dividir(x,y){
    let resultado = x/y
    if ( x % y === 0 ) {
        console.log (`${resultado} é par`)
    }
    return resultado
}
let teste = dividir(70,5)
console.log (teste)
