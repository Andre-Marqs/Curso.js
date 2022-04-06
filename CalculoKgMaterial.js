

//Cria variaveis para armazenamento de valores

let plastico = 0
let papel = 0
let metal = 0

// Recebe os valores e armazena nas variasveis

plastico = Number(prompt( "Digite a quantidade de kg de plastico" ))
papel = Number(prompt( "Digite a quantidade de kg de papel" ))
metal= Number(prompt( "Digite a quantidade de kg de metal" ))

// Faz os calculos com os valores das variaveis

plastico = ((plastico*2)/10)
papel = ((papel*3)/30)
metal = ((metal*5)/50)

// Exibe os dados na tela

alert (`Voce recebera pelo plastico ${plastico.toFixed(2)} reais \n Vocer recebera pelo papel ${papel.toFixed(2)} reais \nVoce recebera pelo metal ${metal.toFixed(2)} reais`)

