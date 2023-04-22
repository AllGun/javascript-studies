/*
a) Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final.

Iepsen, Edécio Fernando. Lógica de Programação e Algoritmos com JavaScript - 2ª Edição (p. 90). Novatec Editora. Edição do Kindle. 
*/

// adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// lê os dados de entrada
const salario = Number(prompt("Salário R$: "));
const tempo = Number(prompt("Tempo(anos): "));

// calcula quadriênios
const quadrienios = Math.floor(tempo / 4);

// acrescimo do adicional de quadriênio
const acrescimo = (salario * quadrienios) / 100;

console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário final: R$${(salario + acrescimo).toFixed(2)}`);
