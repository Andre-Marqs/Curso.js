
//Cria variaveis para armazenamento de valores

let ComprimentoPiscina = 0
let LarguraPiscina = 0
let Metroquadrado = 0
let Azulejos = 0
let ValorPiscina = 0
let PrecoPiscina = 0

// Recebe os valores e armazena nas variasveis

ComprimentoPiscina = Number(prompt("Quantos metros tera o comprimento da piscina: " ))
LarguraPiscina = Number(prompt ("Qual sera a largura da piscina: " ))


// Faz os calculos com os valores das variaveis

Metroquadrado = (LarguraPiscina*ComprimentoPiscina)
Azulejos = (Metroquadrado*120)
PrecoPiscina = ((Azulejos/60)*45.50 )

// Exibe os dados na tela

alert (`Quantidade  de azulejos que devem ser compradas: ${Azulejos}\n Preco Piscina: ${PrecoPiscina}$`)

