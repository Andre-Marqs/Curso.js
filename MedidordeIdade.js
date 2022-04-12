
   
/*2) Joãozinho mede 1,75m de altura e cresce 1 cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3 cm por ano. Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho.*/

let joaozinho = 1.75
let pedrinho = 1.60
let ano = 0

while (joaozinho >= pedrinho){
    
    
    joaozinho += 0.01
    pedrinho += 0.03
    ano ++

} 
alert (`São necessario ${ano}`)