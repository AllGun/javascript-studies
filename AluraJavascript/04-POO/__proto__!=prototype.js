/*
Durante nossos estudos de JavaScript é normal toparmos com os protótipos de duas formas diferentes, através da propriedade __proto__ ou do objeto prototype que vemos em todos os objetos. Afinal, qual a diferença e quando se usa cada um deles?
*/

// Para entender melhor essa diferença, vamos testar alguns códigos:
let user = {
  perfil: "estudante",
};

let estudanteUniv = {
  nome: "juliana",
};

Object.setPrototypeOf(estudanteUniv, user);

/*
No trecho acima, definimos dois objetos, com propriedades diferentes, e estabelecemos que o objeto user será usado como protótipo para o objeto estudante.
*/
console.log(estudanteUniv.nome); // "juliana"
console.log(estudanteUniv.perfil); // "estudante"

/*
O objeto estudante, além da propriedade nome, também tema propriedade perfil, trazida do protótipo user.
*/

/*
É possível acessar __proto__ do estudante, porém, para isso, devemos copiar o código acima e executá-lo no console do navegador, pois o módulo console do NodeJS funciona de uma forma um pouco diferente e não vai acessar essa propriedade.
*/

user.ativo = true;

console.log(estudanteUniv.user);
console.log(user);

function User() {}

User.prototype.perfil = "estudante";
let estudante = new User();

console.log(estudante.perfil);
