
let resposta1, resposta2, resposta3
let pontos
let pontosTotais = 0

alert ("SEJA MUITO BEM VINDO AO QUIZ QUE ENTREGA SUA IDADE,, IHHHHUUUUUUUUU")


alert ("Quais séries a seguir englobam melhor a temática de vampiros e assombração? \n A) Van Helsing \n B) Castlevania \n C) The Vampire Diaries \n D) Blade: The Series \n E) Nenhum")

resposta1 = prompt (`A, B, C, D OU E`)

switch(resposta1){
    case "A":
        resposta1 = 4
         alert ("4 pontos")
         break
    case  "B":
        alert ("3 pontos")
        resposta1 = 3
        break
    case  "C":
        alert ("2 Pontos")
        resposta1 = 2
        break
    case  "D":
        alert ("1 pontos")
        resposta1 = 1
        break
    case  "E":
        resposta1 = 0
        alert ("0 pontos")
        break



}

alert ("2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia? \n A) Alice no País das Maravilhas \n B) O Hobbit \n C) A Fantástica Fábrica de Chocolates \n D) Coraline \n E) Nenhum ")

resposta2 = prompt (`VAMOS LÁ: A, B, C, D OU E`)

switch(resposta2){
    case "A":
         alert ("3 pontos")
         resposta2 = 3
         break
    case  "B":
        alert ("3 pontos")
        resposta2 = 3
        break
    case  "C":
        alert ("2 Pontos")
        resposta2 = 2
        break
    case  "D":
        alert ("1 pontos")
        resposta2 = 1
        break
    case  "E":
        alert ("0 pontos")
        resposta2 = 0
        break


}



alert ("Quais das franquias listadas, representam melhor a empresa de jogos Nintendo? \n A) The Legend of Zelda \n B) Kirby \n C) Metroid \n D) Super Mario Bros \n E) Nenhum ")

resposta3 = prompt (`VAMOS LÁ: A, B, C, D OU E`)

switch(resposta3){
    case "A":
         alert ("3 pontos")
         resposta3 = 3
         break
    case  "B":
        alert ("3 pontos")
        resposta3 = 3
        break
    case  "C":
        alert ("2 Pontos")
        resposta3 = 2
        break
    case  "D":
        alert ("1 pontos")
        resposta3 = 1
        break
    case  "E":
        alert ("0 pontos")
        resposta3 = 0
        break

}
pontosTotais = (resposta1 + resposta2 + resposta3)


if (pontosTotais >= 10){

alert (` Parabéns! Você fez o total de ${pontosTotais}`)

}else {
alert (`Você fez ${pontosTotais}`)


}
