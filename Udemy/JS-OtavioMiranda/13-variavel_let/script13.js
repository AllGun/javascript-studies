// Observe que temos parte que podem ser substiuidas
console.log("João nasceu em 1984.");
console.log("Em 2000 João conheceu Maria.");
console.log("João casou-se com Maria em 2012.");
console.log("Maria teve 1 filho com João em 2015.");
console.log("João nasceu em 1984.");
console.log("O filho de João se chama Junior.");

console.log();

//Como o nome João e Maria se repete podemos trocar por variáveis

let nomeDele = "João";
let nomeDela = "Maria";

console.log(nomeDele, "nasceu em 1984.");
console.log("Em 2000", nomeDele, "conheceu", nomeDela, ".");
console.log(nomeDele, "casou-se com", nomeDela, "em 2012.");
console.log(nomeDela, "teve 1 filho com", nomeDele, "em 2015.");
console.log("O filho de", nomeDele, "e", nomeDela, "se chama Junior.");

console.log();

//Podemos tb criar uma variável para o filho
let nomeFilho = "Junior";
console.log("O filho de", nomeDele, "e", nomeDela, "se chama", nomeFilho, ".");

console.log();

/*
Agora podemos em mesmo contexto mas pessoas diferentes, podemos alterar o nome apenas reatribuindo outro nome à variável
*/
nomeDele = "Henrique";
nomeDela = "Camila";
nomeFilho = "Caique";

console.log(nomeDele, "nasceu em 1984.");
console.log("Em 2000", nomeDele, "conheceu", nomeDela, ".");
console.log(nomeDele, "casou-se com", nomeDela, "em 2012.");
console.log(nomeDela, "teve 1 filho com", nomeDele, "em 2015.");
console.log("O filho de", nomeDele, "e", nomeDela, "se chama", nomeFilho, ".");

/**
 * Notas:
 * Podemos criar uma variável sem atribuir a ela um valor;
 * Tecnicamente, criar uma variável e não atribuir um valor é chamado de variável não inicializada;
 * Uma variável não inicializada possui um valor indefinido do tipo "undefined";
 * Variáveis criadas com "var" podem ter seu valor reatribuido em qualquer parte do código isso acontece pq são globais;
 * Variáveis criadas com "let" podem ter seu valor reatribuidos apenas dentro do escopo;
 *
 */

var nome = "Cris";
console.log(nome);
var nome = "AlfGP";
console.log(nome);

