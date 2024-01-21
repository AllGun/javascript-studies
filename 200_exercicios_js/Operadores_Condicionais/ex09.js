/**
 * Exercício 9: 
 * Escreva um programa que recebe um número e
 * verifica se ele é positivo, negativo ou zero.

Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 21). Edição do Kindle. 
 */

// Função para analisar o sinal de um número e imprimir uma mensagem correspondente.
function analisarSinal(number) {
  // Verifica se o número é maior que zero.
  if (number > 0) {
    console.log("Positivo");
  }
  // Se não for maior que zero, verifica se é menor que zero.
  else if (number < 0) {
    console.log("Negativo");
  }
  // Se não for nem maior nem menor que zero, então é zero.
  else {
    console.log("Número Zero");
  }
}

// Exemplos de chamadas da função para diferentes números.
analisarSinal(2); // Deve imprimir "Positivo"
analisarSinal(0); // Deve imprimir "Número Zero"
analisarSinal(-35); // Deve imprimir "Negativo"
analisarSinal(0.44); // Deve imprimir "Positivo"
analisarSinal(1 - 5.41358); // Deve imprimir "Negativo"
analisarSinal(0.0000000000000000001); // Deve imprimir "Positivo"
