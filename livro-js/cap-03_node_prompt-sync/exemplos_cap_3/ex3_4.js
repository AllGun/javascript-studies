/*
b) Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas).

Iepsen, Edécio Fernando. Lógica de Programação e Algoritmos com JavaScript - 2ª Edição (p. 91). Novatec Editora. Edição do Kindle. 
*/

// adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// lê os dados de entrada
const pesoQuilo = Number(prompt("Peso da Ração (kg): "));
const consumoPorDia = Number(prompt("Quanto seu gato come por dia: "));

// cria variável auxiliar pesoGr
const pesoGrama = pesoQuilo * 1000

// cálculo das respostas
const duracao = Math.floor(pesoGrama / consumoPorDia);
const sobra = pesoGrama % consumoPorDia;

// respostas (dados de saída)
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);