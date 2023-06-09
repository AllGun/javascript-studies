/* Desafio - medias das turmar
    Com a média de todos os alunos de 3 salas,
    calcule a média geral de cada sala
    */

const salaJavaScript = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0);
  return somaDasNotas / notasDaSala.length;
}

console.log(mediaSala(salaJavaScript));
console.log(mediaSala(salaJava));
console.log(mediaSala(salaPython));