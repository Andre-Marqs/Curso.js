
//Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar? “. Quando for adicionado a cereja, mostrar a frase “Sua salada de frutas está pronta!” (DESAFIO: Mostrar na tela também a quantidade de frutas que foram adicionadas)

let fruta = 0
let maca = 0
let banana = 0 
let mamao = 0
let morango = 0 
let laranja = 0 
let cereja = 0
let final



while (final != "pronto"){

final= prompt(`Deseja adicionar quais frustas: \n maça, banana, mamão, morango, laranja, cereja \n caso não deseje adicionar mais nenhuma fruta, escreva pronto`)
    maca +=1
    banana +=1 
    mamao +=1
    morango +=1
    laranja +=1
    cereja +=1
    fruta ++

}
alert (`Sua salada de frutas esta pronta, nela contem um total de ${fruta} frutas`)