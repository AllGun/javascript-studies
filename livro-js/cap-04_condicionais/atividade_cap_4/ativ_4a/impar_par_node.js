const prompt = require("prompt-sync")();

const number = Number(prompt("Digite um número: "));

if (number % 2 == 0) {
  console.log(`O número ${number} é par`);
} else {
  console.log(`O número ${number} é ímpar`);
}
