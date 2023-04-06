// Tipo Number
const primeiroNumero = 13;
const segundoNumero = 15;
const terceiroNumero = 20;

// Operações aritméticas

//Soma
const resultadoSoma = primeiroNumero + segundoNumero;
console.log(`${primeiroNumero} + ${segundoNumero} = ${resultadoSoma}`);

// Subtração
const resultadoSubtracao = primeiroNumero - segundoNumero;
console.log(`${primeiroNumero} - ${segundoNumero} = ${resultadoSubtracao}`);

// Multiplicação
const resultadoMultiplicacao = primeiroNumero * segundoNumero;
console.log(`${primeiroNumero} * ${segundoNumero} = ${resultadoMultiplicacao}`);

// Divisão
const resultadoDivisao = terceiroNumero / 2;
console.log(`${terceiroNumero} / 2 = ${resultadoDivisao}`);

// Divisão modular
const resultadoDivisaoModular = segundoNumero % 2;
console.log(resultadoDivisaoModular);

// NaN -> Not A Number (não é um número)
const name_01 = "José";
console.log(name_01 * 2);

//Podemos utilizar o número PI através do código Math.PI
console.log(Math.PI);

//Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”. No entanto, há uma exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico NaN.

var a = 10
var b = 0
console.log(a/b) // Infinity

var a = 0
var b = 0
console.log(a/b) // NaN