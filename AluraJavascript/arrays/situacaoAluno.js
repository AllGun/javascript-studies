const nomes = ["Ana", "Marcos", "Maria", "Mauro"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((alunos, indice) => notas[indice] < 5);
const aprovados = nomes.filter((alunos, indice) => notas[indice] > 5);

console.log(`Reprovados: ${reprovados}`);
console.log(`Aprovados: ${aprovados} `);
