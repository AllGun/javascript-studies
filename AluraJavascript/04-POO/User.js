export default class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || "estudante";
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

// const newUser = new User("Juliana", "j@j.com", "2000-01-01");
// 
// console.log(newUser);
// console.log(newUser.exibirInfos());
// 
// console.log(`Estado: ${User.prototype.isPrototypeOf(newUser)}`);
