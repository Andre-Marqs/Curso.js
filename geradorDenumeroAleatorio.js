/*Em um cassino, os desenvolvedores tiveram a ideia de criar um jogo onde o usuário deve dizer qual o número gerado randomicamente de 0 a 100. Caso o usuário acerte o número, deve aparecer uma mensagem de sucesso, quantas tentativas foram necessárias para acertar e quais foram os números (palpites) antes de acertar o número aleatório. */


let tentativas = []
let numerosDastentativas = []
let numeroAleatorio
let addTentativas


numeroAleatorio = Math.floor(Math.random() * 100) 
alert(numeroAleatorio)

while(addTentativas!=numeroAleatorio){

addTentativas = Number(prompt("Digite o numero"))
tentativas.push(addTentativas)
numerosDastentativas.push(addTentativas)



}alert(`Paranbens você acertou o numero e apenas com ${tentativas.length} tentativas e os numeros que você tentou foram ${numerosDastentativas}`)
