/*
Em JavaScript, o método concat() é usado para concatenar dois ou mais arrays em um novo array.

A sintaxe básica do concat() é a seguinte:
*/

// const novoArray = array1.concat(array2);

/*
Acima, array1 e array2 são os arrays que você deseja concatenar. O método concat() retorna um novo array que contém todos os elementos de array1 seguidos por todos os elementos de array2.
*/

//Por exemplo, suponha que você tenha dois arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const novoArray = array1.concat(array2);
console.log(novoArray); // imprime [1, 2, 3, 4, 5, 6]

/*
Note que o método concat() não modifica os arrays originais array1 e array2, mas retorna um novo array que contém todos os elementos dos arrays originais concatenados.

Você também pode concatenar mais de dois arrays passando-os como argumentos separados no método concat(). Por exemplo:
*/

const arrayA = ["A", "B", "C"];
const arrayB = ["D", "E", "F"];
const arrayC = ["G", "H", "I"];

const letterArray = arrayA.concat(arrayB, arrayC);

// imprime ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I']
console.log(letterArray); 

const arrayA1 = ["A1", "B1", "C1"];
const arrayB2 = ["D2", "E2", "F2"];
const arrayC3 = ["G3", "H3", "I3"];
const arrayD4 = ["J4", "K4", "L4"];

const letNumArray = arrayA1.concat(arrayB2, arrayC3, arrayD4);
console.log(letNumArray);


