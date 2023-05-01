/**DESAFIO - Add elementos
 * Um professor esqueceu de colocar umas das 4 notas no sistema
 * Corrija add a última nota no array
 */

const notas = [10, 6.5, 8];
notas.push(7.5);

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
}

const media04 = somaNotas / notas.length;
console.log(media04);

