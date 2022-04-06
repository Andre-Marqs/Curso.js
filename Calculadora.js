let num1, num2, Operacao, Resultado

num1 = Number(prompt("Digite o primeiro numero: "))
num2 = Number(prompt("Digite o segundo numero: "))

Operacao = Number(prompt(`Escolha a oparação que deseja fazer" 1 - "Soma", 2 - "Diminui", 3 - "Divide", 4 - "Multiplica`))

    function Soma(){
        Resultado = (num1 + num2)
        alert  (Resultado )
    }


    function Diminui(){
        Resultado = (num1 - num2)
        alert  (Resultado)
    }


    function Divide(){
        Resultado = (num1/num2)
        alert  (Resultado)
    }


    function Multiplica(){
        Resultado = (num1*num2)
        alert  (Resultado)
    }

    switch (Operacao){
        case 1:
             Soma()
    
       break
       
       
       
       case 2:
            Diminui()
       
       break
       
       
       
       case 3:
            Divide()
       
       break
       
       
       
       case 4: 
            Multiplica()
       
       break
       
       }            