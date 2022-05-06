let alistamneto = []
let anoAlistamento
let houve

for (i = 0; i < 10; i++){

anoAlistamento = prompt (`Houve alistamento no ano de 200${i} S/N?`).toUpperCase()
alistamneto.push(anoAlistamento)

}
houve = alistamneto.lastIndexOf("S")


if (houve == -1){
    alert ("Não houve alistamento")
    


}
else{

    alert(`ultimo ano que houve alistamento foi 200${houve}`)

}

