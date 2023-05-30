const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "01/01/1998",
  role: "estudante",
  ativo: true,
  exibirInformacoes: function () {
    console.log(`Nome: ${this.nome}`);
    console.log(`E-mail: ${this.email}`);
  },
};

const admin = {
  nome: "Mariana",
  email: "m@m.com",
  role: "admin",
  criarCurso() {
    console.log("Curso criado.");
  },
};


// Abaixo, estabelecemos que o objeto user será usado como protótipo para o objeto admin
Object.setPrototypeOf(admin, user);



admin.criarCurso();
admin.exibirInformacoes();

//Herança de protótipo (modo anterior a ES06)
// Forma anterior antes de existirem as classes
/*
Em programação, "herança de protótipo" (prototype inheritance) é um conceito associado ao modelo de herança utilizado em algumas linguagens de programação, como JavaScript. 

No modelo de herança de protótipo, cada objeto possui um protótipo (prototype) associado a ele. O protótipo serve como uma espécie de objeto base, a partir do qual outros objetos podem herdar propriedades e métodos.

Quando um objeto é criado, ele herda as propriedades e métodos do seu protótipo. Se uma propriedade ou método não está presente no objeto em si, o interpretador da linguagem de programação procura no protótipo desse objeto e continua procurando nos protótipos ancestrais até encontrar a propriedade ou método desejado.

Essa cadeia de protótipos é conhecida como "cadeia de protótipos" ou "cadeia de herança de protótipo". Ela permite que objetos tenham acesso a propriedades e métodos definidos nos protótipos, fornecendo uma forma de reutilização de código e organização hierárquica de funcionalidades.

Em resumo, a herança de protótipo é um mecanismo de herança que permite que objetos herdem propriedades e métodos de protótipos, formando uma cadeia de protótipos. Essa abordagem é usada em linguagens como JavaScript para implementar herança e polimorfismo.
*/

// const exibir = function(){
//   console.log(this.nome);
// }
// 
// const exibirNome = exibir.bind(user);
// 
// exibirNome();
// exibir();

function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInformacoes = function() {
    return `${this.nome}, ${this.email}`
  }
}

// const novoUser = new User ('Juliana', 'j@j.com');
// console.log(novoUser.exibirInformacoes());

function Admin(role) {
  User.call(this, 'Juliana', 'j@j.com');
  this.role = role || 'estudante';
}

Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin('admin');
console.log(novoUser.exibirInformacoes());
console.log(novoUser.role);