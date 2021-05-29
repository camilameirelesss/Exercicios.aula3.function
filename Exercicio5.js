/*Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
b) Deverá ser possível passar 2 números para a operação escolhida
c) Deverá retornar o resultado e imprimir no console*/

function calculadora(operacao, a, b){
    switch (operacao){
        case 'soma':
            return a+b
        case 'multiplicacao':
            return a*b
        case 'divisao':
            return a/b
        case 'subtracao':
            return a-b
        default: 
            console.log("operação inválida")
    }
}

let resultado=calculadora("divisao",50,45)
console.log(resultado)
