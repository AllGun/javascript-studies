const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

notas.forEach( nota => {
    somaNotas += nota;
    console.log(nota)
})

let media = somaNotas / notas.length;

console.log(media);


//Percorrendo o array com forEach

const alunos = ["Camila", "Bia", "Juan", "Bruno", "Guilherme", "Stéfanii"];

alunos.forEach( aluno => {
    console.log(aluno);
})