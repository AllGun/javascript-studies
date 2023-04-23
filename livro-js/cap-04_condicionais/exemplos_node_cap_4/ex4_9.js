/*c) Elaborar um programa que leia um número – que deve ser uma centena. Calcule e exiba a centena invertida. Caso o número não seja uma centena, exiba mensagem.

Iepsen, Edécio Fernando. Lógica de Programação e Algoritmos com JavaScript - 2ª Edição (p. 122). Novatec Editora. Edição do Kindle. 
*/

// add pacote node prompt-sync ao projeto
const prompt = require("prompt-sync")();

const numero = Number(prompt("Número (centenas): "));

if (numero < 100 || numero >= 1000) {
  console.log("Erro.. dever ser uma centerna.");
  return;
}

const num1 = Math.floor(numero / 100);
const sobra = numero % 100;
const num2 = Math.floor(sobra / 10);
const num3 = Math.floor(sobra % 10);

console.log(`Invertido: ${num3}${num2}${num1}`);
