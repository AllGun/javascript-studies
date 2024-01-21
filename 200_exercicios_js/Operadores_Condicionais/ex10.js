/**
 * Exercício 10: Escreva um programa que recebe duas notas de um
 * aluno, calcula a média e imprime se o aluno foi aprovado ou
 * reprovado (considerando que a média para aprovação é 7).

Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 22). Edição do Kindle. 
 */

function verificarAprovacao(nota1, nota2) {
  let media = (nota1 + nota2) / 2;
  if (media >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

verificarAprovacao(8, 7);
verificarAprovacao(6.99, 7.2);
verificarAprovacao(4, 6.99);
verificarAprovacao(7, 7);
