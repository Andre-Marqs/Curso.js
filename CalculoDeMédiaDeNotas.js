//CRAI VARIAVEIS PARA ARMAZENAR AS NOTAS

let Nota1 = 0
let Nota2 = 0
let Nota3 = 0


//RECEBE AS NOTAS

Nota1 = Number(prompt("Digite a nota da AT1:"))
Nota2 = Number(prompt("Digite a nota do Seminario:"))
Nota3 = Number(prompt("Digite a nota do Proj:"))


//CALCULA AS NOTAS RECEBIDAS
media = ((Nota1*1) + (Nota2*1) + (Nota3*3))/5

// CRIA UMA MENSAGEM NA TELA COM A MEDIA DO ALUNO
alert (`A sua média é ${media.toFixed(2)}`)
 

