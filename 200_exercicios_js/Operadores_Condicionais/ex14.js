/**
 * Exercício 14: 
 * Escreva um programa que verifica se um ano é bissexto.
 * Descrição: Nesse exercício, você vai criar uma função que:
 *  - Recebe um ano e verifica se ele é bissexto 
 *  - Um ano é bissexto se for divisível por 4, exceto os que são divisíveis por 100 mas não por 400.

Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 27). Edição do Kindle. 
 */

// Função para verificar se um ano é bissexto
function anoEhBissexto(ano) {
  // Exibe o resto da divisão por 4
  console.log(ano % 4);

  // Exibe o resto da divisão por 100
  console.log(ano % 100);

  // Exibe o resto da divisão por 400
  console.log(ano % 400);

  // Condição para verificar se o ano é bissexto
  if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 100 == 0 && ano % 400 == 0)) {
    console.log(`O ${ano} é um ano bissexto.`);
  } else {
    console.log(`O ${ano} não é bissexto.`);
  }

  // Adiciona uma linha vazia para melhorar a legibilidade
  console.log();
}

// Chamadas da função para diferentes anos
anoBissexto(3000);
anoBissexto(2000);
anoBissexto(2029);
anoBissexto(2028);
anoBissexto(2027);
anoBissexto(2026);
anoBissexto(2025);
anoBissexto(2024);
anoBissexto(2023);
anoBissexto(2022);
anoBissexto(2021);
anoBissexto(2020);
anoBissexto(2019);
anoBissexto(2018);
anoBissexto(2017);
