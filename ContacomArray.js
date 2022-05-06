let numero = []
let numeru= []
let num1
let contaSoma,numeroSoma = 0 , numeruSoma = 0



for (i = 0; i <5 ; i++){
// .push Incluindo o numero no vetor
num1 = Number(prompt("Digite um numero: "))
numero.push(num1)
numeroSoma += num1
}


for (i = 0; i <5 ; i++){
    // .push Incluindo o numero no vetor
    num1 = Number(prompt("Digite um numero: "))
    numeru.push(num1)
    numeruSoma += num1
}   

contaSoma = numeroSoma - numeruSoma
alert (contaSoma)