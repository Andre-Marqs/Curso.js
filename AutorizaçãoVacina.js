
let NomePessoa = 0
let IdadePessoa = 0
let Comorbidade = "S"
let IdadeVacina = 60

NomePessoa = prompt("Digite o seu nome: ")
IdadePessoa = Number (prompt ("Digite sua idade"))
Comorbidade = prompt ("Voce tem alguma comorbidade?")
Comorbidade = Comorbidade.toUpperCase()


 if(IdadePessoa >= 60 || Comorbidade == "S" ){

    alert ("Você pode se vacinar!")


} else {

  alert ("Não pode se vacinar!")

}
