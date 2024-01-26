let number = 11;

let resultado = number > 10 ? "Maior que 10" : "Menor que 10";
console.log(resultado);

function imparOuPar(numero1) {
  let imparOuPar = numero1 % 2 == 0 ? "Par" : "Ímpar";
  console.log(imparOuPar);
}

imparOuPar(13);
imparOuPar(100);
imparOuPar(1);
imparOuPar(0);
