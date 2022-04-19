//O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.

let cumeEverest = 8840;
let base = 5360;
let totalPercorrido = 0;
let distancia = cumeEverest - base;

for (i = 0; i < 8; i++) {
  alert(`dia ${i + 1}`);
  let metrosPercorridos = Number(prompt("Quantos metros você percorreu hoje?"));

  distancia -= metrosPercorridos;

  if (distancia <= 0) {
    alert(`Você conseguiu e levou apenas ${i + 1}`);
    break;
  }
}
if (totalPercorrido < distancia) {
  alert("Você deve voltar, pois corre risco de ficar sem oxigênio");
}
