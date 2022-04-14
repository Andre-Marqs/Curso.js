let numero

alert ("Digite uma sequencia de 10 a 1")


for(i=10; i > 0; i--){

    numero = Number (prompt("Digite o numero na sequencia correta: "))
    
    
    if (numero != i ){

        alert("Você errou a sequencia!!")
        break
        
    }

    
}
if (numero == i)
alert ("Você terminou a sequencia corretamente")


