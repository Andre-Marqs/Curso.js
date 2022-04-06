

let username = "ADMIN" , usernameLogin
usernameLogin = prompt("Digite o username:")
let senha = 123, senhalogin
senhalogin = Number (prompt("Digite o password"))
usernameLogin =usernameLogin .toUpperCase()

if (username == usernameLogin && senha == senhalogin){

alert ("Login efetuado!")


} else if( username == usernameLogin && senha!=senhalogin) {

 alert ("errou a senha!")}

 else if(username != usernameLogin && senha == senhalogin) {


alert ( "errou o login")

 }
else if(username != usernameLogin && senha !=senhalogin) {

alert ("Errou tudoo")


}
