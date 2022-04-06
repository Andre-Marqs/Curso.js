let maioridade  
let nome1 = prompt ("Digite nome1: ")
let idade1 =Number (prompt("Digite o numero1:"))
maioridade = idade1
let nome2 = prompt ("Digite nome2:")
let idade2 =Number (prompt("Digite o numero2:"))
if (idade2>maioridade){
    maioridade = idade2
}
let nome3 = prompt ("Digite nome3:")
let idade3 =Number (prompt("Digite o numero3:"))
if (idade3> maioridade){
    maioridade = idade3
}
let nome4 = prompt ("Digite nome4:")
let idade4 =Number (prompt("Digite o numero4:"))
if (idade4 > maioridade){
    maioridade = idade4
}
let nome5 = prompt ("Digite nome5")
let idade5 =Number (prompt("Digite o numero5:"))
if (idade5 > maioridade){
    maioridade = idade5
}
let media = (idade1+idade2+idade3+idade4+idade5)/5


 alert (`Media de idade: ${media}\n Idade mais alta: ${maioridade}`)





