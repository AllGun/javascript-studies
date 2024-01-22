/**
 * Exercício 12: Escreva um programa que verifica a situação de um estudante de acordo com sua média final.

Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 24). Edição do Kindle. 
 */

function verificaAprovacao(mediaFinal) {
  if (mediaFinal >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

verificaAprovacao(7);
verificaAprovacao(6.99);
verificaAprovacao(4);
verificaAprovacao(8);
