//Cria variaveis para armazenamento de valores

let NumeroBase = 0
let Expoente = 0
let Resultado = 0
let Conta = 0

// Recebe os valores e armazena nas variasveis

NumeroBase = Number (prompt ("Coloque um numero" ))
Expoente = Number(prompt("Quantas vezes o numero deve ser mulplicado por ele mesmo? "))

// Faz os calculos com os valores das variaveis

Conta = (NumeroBase ** Expoente )

// Exibe os dados na tela

alert ("resultado da exponenciação é " + Conta)
