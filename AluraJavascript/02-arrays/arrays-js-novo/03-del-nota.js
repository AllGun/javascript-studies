/**DESAFIO - Deletando nota
 * Um professor acidentalmente lançou 5 notas no sistema
 * Dessa forma um aluno ficou com 5 notas
 * São elas: 10, 6, 8, 5.5 e 10;
 * Para corrigir, remova a última nota
 */

const notaAluno = [10, 6, 8, 5.5, 10];

console.log(notaAluno.length);

notaAluno.pop();

console.log(notaAluno);

console.log(notaAluno.length);
