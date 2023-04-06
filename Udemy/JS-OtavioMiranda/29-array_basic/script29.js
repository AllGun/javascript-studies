// Básico sobre Arrays
/**
 * Assim como as Strings, os Arreys tb são indexados;
 * A indexação, da mesma forma que Strings, começa no 0;
 * A diferença é que a indexação é por elemento;
 */

//               0       1        2      3            4
console.log(`Aqui temos um Arrey com 5 elementos:`);
const alunos = ["Luiz", "Maria", "Jão", "Guilherme", "Lucas"];
console.log(alunos);
console.log();

//Acessando o elemento de índice 1
console.log(`Acessando o elemento de índice 1:`);
console.log(alunos[1]);
console.log();

//Alterando elemento do Arrey
console.log(`Alterando o elemento de índice 2:`);
alunos[2] = "Joãozinho";
console.log(alunos);
console.log();

//Criando um novo elemento
console.log(`Criando um novo elemento quando sabemos o tamanho do Arrey:`);
alunos[5] = "Luiza";
console.log(alunos);
console.log();

//Para saber o tamanho do Arrey
console.log(`Mostra o tamanho do Arrey:`);
console.log(alunos.length);
console.log();

//Adicionando um elemento ao final do Arrey
console.log(`Add um elemento ao final do Arrey:`);
alunos.push("Otávio");
console.log(alunos);
console.log();

const clientes = ["Luiz", "Maria", "João"];

clientes.push("Luiza");
clientes.push("Eduardo");

console.log(clientes[4]);

console.log(clientes.slice(0, 3));

// O Obj é um Array? True or False
console.log(clientes instanceof Array);

console.log(alunos instanceof Array);

let bichinho = 10;

console.log(bichinho instanceof Array);

console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);
console.log(alunos[4]);