let nome, idade, nacionalidade, dados

nome = prompt("Digite o nome")
idade = Number(prompt("Digite a idade"))
nacionalidade = prompt(" Digite a nacionalidade")


MostraDados()

function MostraDados(){

dados = `${nome}\n tem ${idade} anos\n ${nacionalidade}`
alert (dados)

}


