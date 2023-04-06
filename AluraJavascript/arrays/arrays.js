/*
Aluno: Lucas
Médias:
    nota1 = 10
    nota1 = 6.5
    nota1 = 8
    nota1 = 7.5
*/

//Como guardar as notas de um determinado aluno sem o usso de arrays
let nota1 = 10, nota2 = 6.5, nota3 = 8, nota4 = 7.5;

// Calculando a média
let media = (nota1 + nota2 + nota3 + nota4)/4;
console.log(media);

// Utilizando arrays para calcular a média

const notas = [10, 6.5, 8, 7.5];

mediaArr = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length;

console.log(mediaArr);

