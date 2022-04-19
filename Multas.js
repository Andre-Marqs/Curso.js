let quantidademultas = 0;
let valorMulta = 0;
let pontosCarteira = 0;
let valorTotal = 0;
let pontosTotal = 0;

multas = Number(prompt("Digite quantas multas você tem: "));

for (i = 0; i < multas; i++) {
  valorMulta = Number(prompt(`Digite o valor da multa ${i + 1}: `));
  pontosCarteira = Number(prompt(`Digite quantos pontos você levou pela multa  ${i + 1}: `));

  valorTotal += valorMulta;
  pontosTotal += pontosCarteira;
}
if (pontosTotal < 21) {
  alert(`Total: ${valorTotal}\n pontos: ${pontosTotal}\n Condição da carteira: REGULAR`);
} else {
  alert(`Total: ${valorTotal}\n pontos: ${pontosTotal} Condição da carteira: IRREGULAR`);
}
