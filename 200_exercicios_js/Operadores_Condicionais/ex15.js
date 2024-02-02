/**
 * Exercício 15:
 * Escreva um programa que verifica se uma palavra é um palíndromo.
 *
 * Descrição: Um palíndromo é uma palavra que tem a propriedade de
 * poder ser lida tanto da direita para a esquerda como da esquerda
 * para a direita. Nesse exercício, você irá criar uma função que
 * recebe uma palavra como argumento e verifica se ela é um palíndromo.
 *
 * Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas
 * habilidades com desafios: Domine JavaScript com exercícios
 * interativos (Portuguese Edition) (p. 28). Edição do Kindle.
 */

// Função que verifica se uma palavra é um palíndromo
function verificarPalindromo(palavra) {
  // Inicializa uma variável para armazenar a palavra invertida
  let palavraInvertida = "";
  // Converte a palavra para minúsculas para garantir comparação sem distinção entre maiúsculas e minúsculas
  let palavraLow = palavra.toLowerCase();

  // Loop que percorre a palavra de trás para frente, construindo a palavra invertida
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  // Converte a palavra invertida para minúsculas
  let palavraInvertidaLow = palavraInvertida.toLowerCase();

  // Verifica se a palavra original é igual à palavra invertida
  if (palavraLow == palavraInvertidaLow) {
    console.log(`A palavra ${palavra} é um palíndromo.`);
  } else {
    console.log(`A palavra ${palavra} não é um palíndromo.`);
  }
}

// Teste positivo
verificarPalindromo("Ana");
verificarPalindromo("Radar");
verificarPalindromo("ovo");
verificarPalindromo("reTER");
verificarPalindromo("NATAN");
verificarPalindromo("arara");
verificarPalindromo("osso");
verificarPalindromo("salas");

// Teste negativo
verificarPalindromo("Casa");
verificarPalindromo("Nuvem");
verificarPalindromo("123456");
verificarPalindromo("Escola");
