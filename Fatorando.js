/*1) Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. (Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120).*/

let num = Number(prompt("Digite o numero que deve ser fatorado: "));
let resultado = num;

for (i = 1; i < num; i++) {

  resultado *= i;

  
}
alert(resultado);