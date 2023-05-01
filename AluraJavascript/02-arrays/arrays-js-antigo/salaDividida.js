/*
Divida os alunos abaixo em duas salas com a mesma quantidade de alunos.

Alunos Matriculados:
João, Juliana, Ana, Caio, Lara, Marjorie, Guilherme, Aline, Fabiana, Andre
Carlos, Paulo, Bia, Vivian, Isabela, Vinícius, Renan, Renata, Daisy, Camilo
*/

// 1) Criar a lista com todos os alunos
const alunos = [
  "Joã",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "André",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinny",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

console.log(alunos.length);

// 2) Criando as salas e adicionando os alunos
const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);