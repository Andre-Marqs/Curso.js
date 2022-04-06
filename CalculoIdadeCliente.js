//Cria variaveis para armazenamento de valores

let AnoNacimento = 0
let MesNascimento = 0
let DiaNascimento = 0
let Diaatual = 0
let Mesatual = 0
let AnoAtual = 0
let MesesDeIdade = 0 
let SemanasDeIdade = 0
let DiasDeIdade = 0
let Diasano = 365
let SemanasAno = 52
let MesesAno = 12
let Idade = 0

// Recebe os valores e armazena nas variasveis

AnoNacimento = Number(prompt( "Digite o ano do seu nascimento"))
MesNascimento = Number(prompt( "Digite o mes do seu nascimento"))
DiaNascimento = Number(prompt( "Digite o dia do seu nascimento"))
AnoAtual = Number(prompt( "Digite o ano atual: "))
Mesatual = Number(prompt( "Digite o mes atual: "))
Diaatual = Number(prompt( "Digite o dia atual: "))

// Faz os calculos com os valores das variaveis

Idade = (AnoAtual - AnoNacimento)
MesesDeIdade = (Mesatual + (Idade0 * MesesAno))
DiaNascimento = (DiaNascimento + (Idade * Diasano))
SemanasDeIdade = (Idade * SemanasAno)

// Exibe os dados na tela

    alert ("Sua idade " + Idade + " anos")
    alert ("Sua idade em meses é " + MesesDeIdade + " meses")
    alert ("Sua idade em dias é " + DiaNascimento + " dias" )
    alert ("Sua idade em semanas é " + SemanasDeIdade + " semanas")
    