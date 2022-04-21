/*>>>>>>>>>>>>>>>>>>> Atividade 1 (5,0) <<<<<<<<<<<<<<<<<<<

Criar um sistema que receba os dados do usuário (janela) para sinalizar se ele pode se cadastrar no sistema do governo brasileiro. Os seguintes critérios devem ser adotados:

(1,5) O usuário deve ser brasileiro, do sexo masculino e ter entre 18 e 65 anos.
(1,5) O usuário deve ser brasileiro, do sexo feminino e ter entre 18 e 60 anos.
(2,0) O usuário, caso não seja brasileiro, deve morar no Brasil a mais de 3 anos e ter entre 21 e 30 anos.*/

let nacionalidade;
let sexo;
let idade;
let vivenobrasil;

alert("Bem vindo ao seu cadastrar no sistema do governo brasileiro ");

nacionalidade = prompt("Qual a sua nacionalidade :");
//alert ("Responda se seu sexo é masculino com M ou se for feminino com F")
//sexo = prompt ("seu sexo é masculino ou feminino: ")
//idade = Number(prompt("Qual é a sua idade: "))

if (nacionalidade == "brasileiro") {
  alert("Responda se seu sexo é masculino com M ou se for feminino com F");
  sexo = prompt("seu sexo é masculino ou feminino: ");

  if (sexo == "M") {
    idade = Number(prompt("Qual é a sua idade: "));

    if (idade >= 18 && idade <= 65) alert(" Pode se cadastrar");
  } else {
    idade = Number(prompt("Qual é a sua idade: "));

    if (idade >= 18 && idade <= 60) alert(" Pode se cadastrar");
  }
} else {
  vivenobrasil = prompt("Você mora no brasil? ");
}
if (vivenobrasil == "sim") {
  sexo = prompt("seu sexo é masculino ou feminino: ");

  if (sexo == "M") {
    idade = Number(prompt("Qual é a sua idade: "));

    if (idade >= 18 && idade <= 65) alert(" Pode se cadastrar");
  } else {
    idade = Number(prompt("Qual é a sua idade: "));

    if (idade >= 18 && idade <= 60) alert(" Pode se cadastrar");
  }
}
