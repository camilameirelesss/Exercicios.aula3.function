// 1 - crie um algoritmo de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".

let a = 5

while (a<60) {
    a = a + 5
    if(a === 35 || a === 45){
        console.log("Pulou")
        continue
    }
    console.log(a)
}
