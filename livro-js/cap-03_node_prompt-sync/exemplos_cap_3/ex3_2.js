// adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// lê os dados de entrada
const veiculo = prompt("Veículo: ");
const preco = prompt("Preço: R$");
const numParcelas = prompt("Restante em: ");

//Calcula o valor da entrada
const entrada = preco * 0.5;

// calcula o valor das parcelas
const parcela = (preco * 0.5) / numParcelas;

// exibe as respostas
console.log(`Promoção: ${veiculo}`);
console.log(`Entrada de R$${entrada.toFixed(2)}`);
console.log(`Mais ${numParcelas}x de R$${parcela.toFixed(2)}`);
