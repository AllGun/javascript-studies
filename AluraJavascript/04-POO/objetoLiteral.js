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
