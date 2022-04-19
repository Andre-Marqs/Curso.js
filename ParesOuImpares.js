let numero;
let impar = false;
let soma = 0;

for (i = 0; i < 5; i++) {
  numero = Number(prompt("Digite o numero: "));
  soma = soma + numero;

  if (numero % 2 == 1) {
    impar = true;
  }
}
media = (soma / 5).toFixed(2);


if (impar){

alert ("um dos numero digitados é impar")

}else alert (`a media dos numeros é  ${media}`  )
