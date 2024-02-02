/**
 * Exercício 7: 
 * Declare três variáveis e atribua valores numéricos a elas.
 * Use operadores de comparação para comparar os valores 
 * Imprima os resultados.

Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 19). Edição do Kindle. 
 */

// Função para comparar duas variáveis numéricas
function compararVariaveis(numero1, numero2) {
  // Verifica se o primeiro número é estritamente menor que o segundo
  let menor = numero1 < numero2;

  // Verifica se o primeiro número é menor ou igual ao segundo
  let menorIgual = numero1 <= numero2;

  // Verifica se os dois números são iguais
  let igual = numero1 === numero2;

  // Verifica se o primeiro número é estritamente maior ou igual ao segundo
  let maiorIgual = numero1 >= numero2;

  // Verifica se o primeiro número é estritamente maior que o segundo
  let maior = numero1 > numero2;

  // Exibe os resultados das comparações no console
  console.log(`${numero1} < ${numero2}: ${menor}`);
  console.log(`${numero1} <= ${numero2}: ${menorIgual}`);
  console.log(`${numero1} == ${numero2}: ${igual}`);
  console.log(`${numero1} >= ${numero2}: ${maiorIgual}`);
  console.log(`${numero1} > ${numero2}: ${maior}`);
  console.log();
}

// Chamadas da função com diferentes pares de números
compararVariaveis(2, 3);
compararVariaveis(13, 13);
compararVariaveis(40, 38);
