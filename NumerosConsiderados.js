//Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.

let numero = 0;
let maior = 1;
let menor = 49;

for (i = 0; i < 10; i++) {
  numero = Number(prompt(`Digite um numero`));

  if (numero > 0 && numero < 50) {
    if (numero > maior) {
      maior = numero;
     
    }
    if (numero < menor) {
      menor = numero;
     
    }
  }
}
alert (`O maior numero é ${maior} e o menor numero é ${menor}`)