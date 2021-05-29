/*Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 
    a) números de 1 a 100  
    b) quando chegar no número 50 interrompa a instrução e pare o loop 
    c) quando chegar no número 50 pule a instrução */

//a) número de 1 a 100

for (let numero = 1; numero <= 100; numero++) {
    console.log(numero)
}

//b)quando chegar no número 50 interrompa a instrução e pare o loop

for (let numero = 1; numero <= 100; numero++) {
    console.log(numero)
    if(numero === 50){
        break 
    }
}

//c)quando chegar no número 50 pule a instrução */
console.log('======================================')
for (let numero = 1; numero <= 100; numero++) {
    if(numero === 50){
        continue 
    }
    console.log(numero)
}
