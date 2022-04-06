
//Cria variaveis para armazenamento de valores

let ChoppTotal = 300
let ChoppConsumido = 0
let ChoppDesperdicio = 0
let ChoppSobra = 0
let Convidados = 45

// Recebe os valores e armazena nas variasveis

ChoppDesperdicio = Number(prompt( " Digite a quantidade de Chopp desperdicado"))
ChoppSobra = Number(prompt( "Digite a quantidade de chopp que sobrou")) 


// Faz os calculos com os valores das variaveis

ChoppConsumido = ((ChoppTotal - ChoppDesperdicio - ChoppSobra) / Convidados)


// Exibe os dados na tela

alert(` A quatidade de chopp consumido foi de ${ChoppConsumido.toFixed(2)}Litros por pessoas \n A quantidade de chopp desperdicado foi de ${ChoppDesperdicio.toFixed(2)} Litros\n A quantidade de chopp que sobrou foi de ${ChoppSobra.toFixed(2)}Litros`)