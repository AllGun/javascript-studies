/*b) Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o nº máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condições: a) cada parcela deve ser de, no mínimo, R$ 20,00; b) o número máximo de parcelas permitido é 6.

Iepsen, Edécio Fernando. Lógica de Programação e Algoritmos com JavaScript - 2ª Edição (pp. 120-121). Novatec Editora. Edição do Kindle. 
*/

// add pacote node prompt-sync
const prompt = require("prompt-sync")();

// lê valor da compra
const valor = Number(prompt("Valor da compra R$:"));

// aux = número de pardelas sem condições
const aux = Math.floor(valor / 20);

// operador ternário
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;

// calculo do valor da parcela
const valorParcela = valor / parcelas;

console.log(`Pode pagar em: ${parcelas}x de R$${valorParcela.toFixed(2)}`);
