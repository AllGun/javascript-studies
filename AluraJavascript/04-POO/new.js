// function firstUser(nome, email) {
//   this.nome = nome;
//   this.email = email;
//
//   this.exibirInformacoes = function () {
//     return `Nome: ${this.nome} \nE-mail: ${this.email}`;
//   };
// }
//
// let novoUser = new firstUser("Juliana", "fulljull@gmail.com");
// console.log(novoUser.exibirInformacoes());
//
// console.log("===================================================");
//
// function Admin(role) {
//   User.call(this, "Juliana", "fulljull@gmail.com");
//     this.role = role || "estudante";
//     this.role = `Cargo: ${
//       role.charAt(0).toUpperCase() + role.slice(1) || "Estudante"
//     }`;
// }
//
// Admin.prototype = Object.create(User.prototype);
// novoUser = new Admin("");
//
// console.log(novoUser.exibirInformacoes());
// console.log(novoUser.role);
//
// console.log("===================================================");
//
// let novoEstudante = new User("Michael", "mic@gmail.com");
// console.log(novoEstudante.exibirInformacoes());
//
// console.log("===================================================");
// Admin.prototype = Object.create(User.prototype);
// novoEstudante = new Admin("");
// console.log(novoEstudante.exibirInformacoes());
// console.log(novoEstudante.role);
//
// console.log("===================================================");

const criarUsuario = {
  init: function (nome, email) {
    this.nome = nome;
    this.email = email;
  },
  exibirInfos: function (nome) {
    return nome;
  },
};

const segundoUsuario = Object.create(criarUsuario);

console.log(`Nome: ${segundoUsuario.exibirInfos("Juliana")}`);

console.log(
  `criarUsuario é protótipo de segundoUsuario? ${criarUsuario.isPrototypeOf(
    segundoUsuario
  )}`
);
