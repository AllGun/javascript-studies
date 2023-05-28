function User(nome, email) {
    this.nome = nome;
    this.email = email;
  
    this.exibirInformacoes = function () {
      return `Nome: ${this.nome.toUpperCase()} \nE-mail: ${this.email.toUpperCase()}`;
    };
  }
  
  let novoUser = new User("Juliana", "fulljull@gmail.com");
  console.log(novoUser.exibirInformacoes());
  
  console.log("====================================");
  
  function Admin(role) {
    User.call(this, "Juliana", "fulljull@gmail.com");
    this.role = role.toUpperCase();
    this.role = `Cargo: ${this.role || "ESTUDANTE"}`;
  }
  
  Admin.prototype = Object.create(User.prototype);
  novoUser = new Admin("Administrador");
  
  console.log(novoUser.exibirInformacoes());
  console.log(novoUser.role);
  