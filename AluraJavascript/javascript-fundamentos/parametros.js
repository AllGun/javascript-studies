function soma() {
  return 2 + 2;
}

console.log(soma());

//Parâmetros de Função

function resultado(number1, number2) {
  return number1 + number2;
}

console.log(resultado(10, 3));

function multiplicacao(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplicacao(resultado(4, 1), resultado(3, 3)));

function nomeCompleto(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(nomeCompleto("Alfredo", "Gutemberg"));
console.log(nomeCompleto("Gutemberg", "Alfredo"));

let primeiroNome = "Alfredo",
  segundoNome = "Gutemberg";

function nomeCompletoInvertido(primeiroNome, segundoNome) {
  return segundoNome + " " + primeiroNome;
}

console.log(nomeCompletoInvertido(primeiroNome, segundoNome));
