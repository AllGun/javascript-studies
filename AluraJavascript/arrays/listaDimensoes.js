/*
Desafio - Lista com 2 dimensões

    Crie uma lista com os seguintes alunos:
    - João, Juliana, Caio e Ana

    Crie uma lista com as seguintes médias
    - 10, 8, 7.5 e 9

    Crie uma lista com 2 dimensões com os nomes e as médias
*/

const alunos = ["Jõa", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

let alunosMedias = [alunos, medias];

console.log(alunosMedias);

console.log(`${alunosMedias[0][0]}, sua média é ${alunosMedias[1][0]}`)