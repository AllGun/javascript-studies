// adiciona pacote para entrada de dados
const prompt = require("prompt-sync")() 

// Lê os números
const num1 = Number(prompt("Primeiro número:"));
const num2 = Number(prompt("Segundo número:"));

// Calcula a soma
const soma = num1 + num2

// exibe o resultado
console.log(`${num1} + ${num2} = ${soma}`)
