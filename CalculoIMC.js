//Cria variaveis para armazenamento de valores

let Peso = 0
let Altura = 0
let Imc = 0

// Recebe os valores e armazena nas variasveis

Peso = Number (prompt("DIgite o peso: "))
Altura = Number(prompt ("Digite a altura: "))

// Faz os calculos com os valores das variaveis

Imc = (Peso / (Altura * Altura))

// Exibe os dados na tela

alert ("O Imc e: " + Imc)

