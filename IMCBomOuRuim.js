let Peso = 0
let Altura = 0
let Imc = 0



Peso = Number (prompt("DIgite o peso: "))
Altura = Number(prompt ("Digite a altura: "))

Imc = (Peso / (Altura * Altura)).toFixed(0)

if (Imc < 18){


    alert (`seu Imc: ${Imc} \n abaixo do peso`)
}
else if (Imc >= 18 && Imc <25){

    alert (`seu Imc: ${Imc} \n faixa de peso ideal`)

} else {

    alert (`seu Imc: ${Imc} \n acima do peso`)

}