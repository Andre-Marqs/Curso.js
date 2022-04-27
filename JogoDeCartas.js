/*Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho).*/

let jogador1
let jogador2
let cartasjogador1 = 0
let cartasjogador2 = 0
let totalcartasjg1 = 0
let totalcartasjg2 = 0

jogador1 = prompt ("Qual o seu nome? ")
jogador2 = prompt ("Qual o seu nome? ")

for(i = 0; i < 5; i++){
cartasjogador1 = Number(prompt(`Digite suas carta jogador 1: `))
if (cartasjogador1 >= 1 && cartasjogador1 <= 13){
cartasjogador2 = Number(prompt(`Digite suas carta jogador 2: `))
if (cartasjogador2 >= 1 && cartasjogador2 <= 13){
totalcartasjg2 += cartasjogador2
totalcartasjg1 += cartasjogador1
}}}
if (totalcartasjg1 > totalcartasjg2){

alert (`${jogador1} venceu a soma de seus numeros foi de ${totalcartasjg1}`)

}else if(totalcartasjg2 < totalcartasjg1) {

alert (`${jogador2} venceu a soma de seus numeros foi de ${totalcartasjg2}`)

}if (totalcartasjg1 == totalcartasjg2){

alert ("O jogo empatou!!!!  MEEEEEUUU DEUUUUUUXXX")

}
