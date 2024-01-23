/**
 * Exercício 13: Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa está
 *  abaixo do peso, 
 * com peso normal, 
 * com sobrepeso 
 * ou obesa.

Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 25). Edição do Kindle. 
 */

// Função para calcular o Índice de Massa Corporal (IMC)
function calcularImc(peso, altura) {
  // Fórmula do IMC: peso / (altura ao quadrado)
  let imc = peso / altura ** 2;

  // Exibe o valor do IMC no console
  console.log(imc);

  // Avaliação do estado nutricional com base no IMC calculado
  if (imc <= 18) {
    console.log("Abaixo do peso");
  } else if (imc > 18 && imc < 25) {
    console.log("Peso normal");
  } else if (imc >= 25 && imc < 30) {
    console.log("Com sobrepeso");
  } else if (imc >= 30) {
    console.log("Obesidade");
  }
}

// Chamadas da função com diferentes conjuntos de peso e altura
calcularImc(55, 1.78); // Exemplo: Peso 55 kg, Altura 1.78 m
calcularImc(70, 1.78); // Exemplo: Peso 70 kg, Altura 1.78 m
calcularImc(88, 1.78); // Exemplo: Peso 88 kg, Altura 1.78 m
calcularImc(100, 1.78); // Exemplo: Peso 100 kg, Altura 1.78 m
