let numeros = [];
let num1;
let maiorNumero = 0;
let totalmultiplicado = 0;

for (i = 0; i < 5; i++) {
  // .push Incluindo o numero no vetor
  num1 = Number(prompt("Digite um numero: "));
  numeros.push(num1);

  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
    alert(maiorNumero);
  }
}

for (i = 0; i < 5; i++) {
  if (numeros[i] != maiorNumero) {
    totalmultiplicado = totalmultiplicado + numeros[i] * maiorNumero;
  }
}
alert(`vetor ${numeros} total ${totalmultiplicado}`);
