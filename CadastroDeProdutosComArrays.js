/*  1) Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

a) A quantidade de produtos com preço inferior a R$50;
b) O nome dos produtos com preço entre R$50 e R$100;
c) A média dos preços dos produtos com preço superior a R$100.  */

let nomeProdutos = []
let precoProduto = []
let addNome, addPreco
let quantidadeMenor50 = 0
let nomes50e100 = []
let soma = 0 ,quantidadeMaior100 = 0 ,media



for (i = 0;i < 5; i++){

addNome = prompt (`Nome do produto:  ${i}`)
nomeProdutos.push(addNome)


addPreco = Number(prompt (`preço do produto: ${i}`))
precoProduto.push(addPreco)

if (addPreco < 50){

    quantidadeMenor50++
}
if (addPreco >=50 && addPreco <=100){


nomes50e100.push(addNome)


}
if (addPreco >100){

soma += addPreco
quantidadeMaior100++

media = (soma/quantidadeMaior100).toFixed(2)
}

}



alert(`Quantidade inferior a $50: ${quantidadeMenor50}\n nomes entre 50 e 100: ${nomes50e100}\n media de valores: ${media}` )