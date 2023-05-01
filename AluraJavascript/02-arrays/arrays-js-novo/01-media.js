/**DESAFIO - Média
 * Calcular a média entre as seguintes notas:
 * 10, 6.5, 8 3 7.5
 */

//sem usar array
const nota1 = 10,
  nota2 = 6.5,
  nota3 = 8,
  nota4 = 7.5;
const media01 = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media01);

//usando array (sem percorrer a lista)
const notas = [10, 6.5, 8, 7.5];
const media02 = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
console.log(media02);

//criando um código mais genérico
const media03 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media03);

//criando um código genérico e eficiente
let somaNotas = 0;

//Observar que notas.lenght é a quantidade e itens no arrays
console.log(notas.length);

//dado que notas.lenght = 4, i < notas.lenght
for (let i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
}

const media04 = somaNotas / notas.length;
console.log(media04);
