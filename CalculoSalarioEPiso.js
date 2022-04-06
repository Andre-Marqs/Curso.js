let salarioAnual = 0
let pisoSalarial = 0
let salarioMensal = 0

salarioAnual = Number(prompt("Digite o salario anual"))
pisoSalarial = Number(prompt("Digite o piso salarial"))


salarioMensal = (salarioAnual/12).toFixed(0)



if(salarioMensal >= pisoSalarial){


alert ("seu salario é " + (salarioMensal) +" reais" + " e você ganha acima do piso")


} else{


alert ("Seu salario é " + (salarioMensal) +" reais"+ " e você ganha abaixo do piso")

}
