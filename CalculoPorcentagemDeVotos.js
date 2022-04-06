//Cria variaveis para armazenamento de valores

let VotosValidos = 0
let VotosCandidatoX = 0
let VotosCandidatoY = 0
let VotosNulo = 0
let VotosEmBranco = 0


alert ("A SOMA DE TODOS OS VOTOS DEVE SOMAR 15.000")

// Recebe os valores e armazena nas variasveis

VotosCandidatoX = Number(prompt( "Digite os votos do canditadoX" ))
VotosCandidatoY = Number(prompt( "Digite os votos do canditadoY" ))
VotosNulo = Number(prompt("Digite a quantidade dos votos nulos"))
VotosEmBranco = Number(prompt("Digite a quantidade dos votos em branco"))

// Faz os calculos com os valores das variaveis

VotosValidos = (VotosEmBranco + VotosCandidatoX + VotosCandidatoY + VotosNulo)
VotosCandidatoX = ((VotosCandidatoX * 100) / VotosValidos)
VotosCandidatoY = ((VotosCandidatoY * 100) / VotosValidos)
VotosEmBranco = ((VotosEmBranco * 100)/ VotosValidos)
VotosNulo = ((VotosNulo * 100) / VotosValidos)

// Exibe os dados na tela

alert (` Votos do CanditatoX: ${VotosCandidatoX.toFixed(2)}% \n Votos do VotosCandidatoY: ${VotosCandidatoY.toFixed(2)}% \n Votos nulos: ${VotosNulo.toFixed(2)}% \n Votos em branco: ${VotosEmBranco.toFixed(2)}% `)

