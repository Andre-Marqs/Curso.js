let base = Number(prompt("Digite o numero: "));
let expoente = Number(prompt("Digite o expoente: "));
let resultado = base;
let ref = 1;

while (ref < expoente) {
  resultado = resultado * base;


  ref++;
}

alert(resultado);
