
/*No final do ano letivo, a turma de Desenvolvimento de Sistemas teve uma ideia para auxiliar os professores no lançamento das notas dos 15 alunos. O curso em questão adotava o critério de 0 a 10, sendo 7 ou mais a média para aprovar. Os alunos fizeram um sistema para os professores inserirem o nome dos alunos e suas 4 notas, em seguida já apresentar se o aluno estava aprovado ou reprovado. No final o sistema deveria parabenizar todos os alunos aprovados com uma mensagem de parabéns.*/


let alunosAprovados = []
let aluno

let Nota1 = 0
let Nota2 = 0
let Nota3 = 0
let Nota4 = 0
let media = 0


for(i = 0; i<15; i++){


aluno = prompt("Digite o nome do aluno: ")
Nota1 = Number(prompt("Digite a nota1: "))
Nota2 = Number(prompt("Digite a nota2: "))
Nota3 = Number(prompt("Digite a nota3: "))
Nota4 = Number(prompt("Digite a nota4: "))


media = ((Nota1) + (Nota2) + (Nota3) + (Nota4))/4 ,`${media.toFixed(2)}`

if(media >=7){

    
    alert ("PARABENS APROVADO COM MEDIA " + (media))

    alunosAprovados.push(aluno)


}else{


 alert ("Que pena, você foi reprovado, sua media foi: " + (media))

}}alert(`Parabens aos alunos${alunosAprovados} vocês foram aprovados :)`)
