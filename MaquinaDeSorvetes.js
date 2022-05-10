/*3) Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode montar seu sorvete com até 4 bolas (sabores). Criar um programa que simule esse sistema.

1- Adicionar sabor
2- Remover sabor
3- Visualizar sorvete
4- Finalizar pedido

======== MENSAGENS e VALIDAÇÕES ========
Opção 1-> “Sabor adicionado!” OU “Limite de sabores atingido, remova um sabor!”
Opção 2-> “Sabor removido!” OU “Não existem sabores adicionados!”
Opção 3-> “"Camada 1 - Sabor X, Camada 2 - Sabor Y, etc.” OU “Seu sorvete não possui sabores!”
Opção 4-> “Pedido realizado!” OU “Adicione pelo menos um sabor!”*/


let sorvetes = []
let addSabor
let op
let podeSair = false

do{

    op = Number(prompt(`1 - Adicionar sabor \n 2 - Remover o ultimo sabor \n 3 - Vizualizar \n 4 - Pedido finalizado `))

switch(op){

case 1:
    if (sorvetes.length >= 4){
        alert("remova um sabor")


    }else{
    addSabor = prompt("Digite o sabor:")
    sorvetes.push(addSabor)
    alert("Sabor adicionado!")
}
    break
    
    case 2:
        if(sorvetes.length == 0){
            alert ("Nenhum sabor para remover")
        }else{
    sorvetes.pop(addSabor)
    alert("O ultimo sabor foi removido!")
    }
    break
    
    
    case 3:
        if(sorvetes.length == 0){
    alert("Nenhum sabor, apenas a casquinha")
    }else{
    alert(sorvetes)}
    break
    
    
    case 4:
        if(sorvetes.length > 0){


        alert("Pedido finalizado")
        
    }else{

        podeSair = true
alert("Adicione ao menos um sabor")



    }




    
    break
    
    
 default:
    alert("invalido")


}}while(podeSair){





}