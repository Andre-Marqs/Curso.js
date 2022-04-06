let PopulaçãoTotal, TamanhoArea, Densidade

PopulaçãoTotal = Number(prompt("Digite a população: "))
TamanhoArea = Number(prompt("Digite quantos Km tem a área ocupada: "))
Densidade = (PopulaçãoTotal / (TamanhoArea*TamanhoArea))

    if (Densidade >= 100){

    alert ("Densidade alta")

    }   
    
    else if (Densidade >= 25){


    alert("Densidade média")

    }
    
    else{

    alert ("Densidade Baixa")

    }