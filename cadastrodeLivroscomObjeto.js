let livros = []
let livrosAdd


alert ("BEM VINDO AO CADASTRO ONLINE DE LIVROS")


livrosAdd = Number(prompt("Quantos livros você deseja cadastrar: "))


for(i = 0; i < livrosAdd; i++){

let livrosObj = {
    
    nome:prompt("Nome do livro: "),
    autor: prompt("Nome do autor: "),
    ano: Number(prompt("Ano de lançamento: ")),



}
livros.push(livrosObj)
}
console.log(livros)