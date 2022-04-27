

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
