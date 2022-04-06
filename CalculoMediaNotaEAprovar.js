let Nota1 = 0
let Nota2 = 0
let Nota3 = 0
let Nota4 = 0
let media = 0



Nota1 = Number(prompt("Digite a nota1:"))
Nota2 = Number(prompt("Digite a nota2:"))
Nota3 = Number(prompt("Digite a nota3:"))
Nota4 = Number(prompt("Digite a nota4:"))



media = ((Nota1) + (Nota2) + (Nota3) + (Nota4))/4 ,`${media.toFixed(2)}`

if(media >=7){

    alert ("PARABENS APROVADO COM MEDIA " + (media))


}else{


 alert ("Que pena, você foi reprovado, sua media foi: " + (media))

}