/**
 * Exercício 11: 
 * Escreva um programa que verifica se uma pessoa pode votar com
 * base na idade.

Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 23). Edição do Kindle. 
 */

function elegivelParaVotar(idade) {
  if (idade < 16) {
    console.log("Não pode Votar");
  } else if ((idade >= 16 && idade < 18) || idade > 70) {
    console.log("Votar é opcional.");
  } else {
    console.log("Deve votar");
  }
}

elegivelParaVotar(18);
elegivelParaVotar(16);
elegivelParaVotar(15);
elegivelParaVotar(66);
elegivelParaVotar(10);
elegivelParaVotar(70);
elegivelParaVotar(71);
