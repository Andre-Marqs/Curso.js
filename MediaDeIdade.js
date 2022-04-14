
let nome;
let idade;
let nomeMaiorIdade;
let maiorIdade = 0;
let mediaIdade = 0;
let somaIdade = 0;

for (i = 0; i < 5; i++) {
  nome = prompt("Digite um nome: ");
  idade = Number(prompt("Digite uma idade: "));

  somaIdade = somaIdade + idade;

  if (idade > maiorIdade) {
    maiorIdade = idade;
    nomeMaiorIdade = nome;
  }
}

mediaIdade = somaIdade / 5;

alert(
  `A media das idade é ${mediaIdade}.\nA pessoa mais velha é ${nomeMaiorIdade} com a idade de ${maiorIdade}`
);
