const notas = [10, 6.7, 8, 9];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

let media = somaDasNotas / notas.length;

console.log(media);
console.log(somaDasNotas);
console.log(notas);