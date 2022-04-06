//Cria variaveis para armazenamento de valores

let nome = 0
let idade = 0
let nacionalidade = 0
let endereco = 0

// Recebe os valores e armazena nas variasveis

nome = prompt ("Digite seu nome:")
idade = Number (prompt ("Digite sua idade:"))
nacionalidade = prompt ("Digite a sua nacionalidade")
endereco = prompt ("Digite o seu endereco:")

// Exibe os dados na tela

alert (("Cliente: " + nome) +"\n"+ (idade + " anos") + "\n" + ("Nacionalidade: " + nacionalidade) + "\n" + ("Reside no endereco: " + endereco))
