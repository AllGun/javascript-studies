const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map(nota => nota == 10? nota: ++nota);
const notasAtualizadas2 = notas.map(nota => nota == 10? nota: nota ++);

console.log(notasAtualizadas);
console.log(notasAtualizadas2)