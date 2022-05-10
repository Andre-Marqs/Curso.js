/*2) Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 4, 5, 0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

======== MENU ========
1- Cadastrar nome
2- Excluir um nome
3- Editar um nome
4- Pesquisar se um nome está cadastrado
5- Listar todos os nomes cadastrados
0- Sair do programa*/



let op
let nomes = []
let addNome
let nomePesquisa
let nomeExcluir
let nomeEditar
let novoNome
let posicao



do{

op = Number(prompt(`1 - Cadastrar\n 2 - Excluir\n 3 - Editar\n 4 - Pesquisar\n 5 - Listar\n 0 - Sair `))

switch(op){

case 1:
   addNome = prompt("Digite um nome: ")
   nomes.push(addNome)
    break

    case 2:
        nomeExcluir = prompt("Digite o nome a excluir: ")
        posicao = nomes.indexOf(nomeExcluir)
        
        if (posicao == -1){
    
            alert ("Nome não encontrado")
        }else{
       
            nomes.splice(posicao,1)
            
            alert("Nome excluido com sucesso!")}
    break
 
    case 3:
    nomeEditar = prompt("Digite o nome a editar: ")
    posicao = nomes.indexOf(nomeEditar)
    
    if (posicao == -1){

        alert ("Nome não encontrado")
    }else{
   
        novoNome = prompt("Digite novo nome: ")
        nomes[posicao] = novoNome
        alert("Nome editado com sucesso!")
}
    break

    case 4:
    nomePesquisa = prompt("Qual nome deseja pesquisar: ")
    posicao = nomes.indexOf(nomePesquisa)
    
    
    if (posicao == -1){

        alert ("Nome não encontrado")
    }else {


        alert (`Nome ${nomePesquisa} encontrado na posição ${nomes.indexOf(nomePesquisa)}!!`)
    }
    break

    case 5:
    alert(nomes)
    break

    case 0:
    alert("Sair")
    break

    default:
    alert("INVALIDO")



}



}while (op!=0){}
