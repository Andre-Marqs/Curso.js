let velocidade = 0
let tempo = 0
let distacia = 0


tempo = Number(prompt("Digite a tempo que você percorreu na trilha:"))
distacia = Number(prompt("Digite a distancia percorrida:"))

velocidade = (distacia / tempo)

alert (`A sua média de velocidade durante essa trilha foi de:  ${velocidade.toFixed(2)}Km/h`)
 
