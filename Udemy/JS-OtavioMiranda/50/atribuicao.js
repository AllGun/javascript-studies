const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeiroNumero = numeros[0];
console.log(primeiroNumero);

const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const [primeiraLetra, segundaLetra, ...outros] = letras;
console.log(primeiraLetra);
console.log(segundaLetra);
console.log(outros);

//Pulando valores
const numeros02 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiro, , terceiro, , quarto] = numeros02;
console.log(primeiro);
console.log(terceiro);
console.log(quarto);


const numerosArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Pegando o número 6 da segunda lista
console.log(numerosArray[1][2]); 

const [listaUm, listaDois, listaTres] = numerosArray;

// Outra forma de pegar o número 6 da segunda lista
console.log(listaDois[2]);