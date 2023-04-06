let resultado;
// Conversão implícita
const number = 13;
const numberString = "13";
 
console.log(number === numberString);

console.log(number == numberString);

console.log(number + numberString);

// Conversão explícita
conversaoNumber = Number(numberString);

resultado = number + conversaoNumber
console.log(resultado);

let telefone01 = 12341234;
console.log("O telefone é " + String(telefone01)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone02 = 12341234;
console.log("O telefone é " + telefone02.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(usuarioConectado);
console.log(typeof(usuarioConectado));
console.log(String(usuarioConectado)); // agora teremos uma string “true”.
console.log(typeof(usuarioConectado));

let numeroQualquer = 10;
console.log(typeof(numeroQualquer));

let numeroQualquerString = String(numeroQualquer);
console.log(numeroQualquerString);


// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação

largura = "10";
 altura = "5";
console.log((+largura) * (+altura)); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.
let y;
let x = y;

console.log(x);

console.log("deu erro");
console.error(new Error("deu erro"));

const animal = "Whale";

console.table(animal);

console.trace(animal);