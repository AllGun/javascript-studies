import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nomeCurso, vagasCurso) {
    return `Curso ${nomeCurso} criado com ${vagasCurso} vagas.`;
  }
}

const newAdmin = new Admin("Rodrigo", "r@r.com", "1998-01-01");
// console.log(newAdmin);
// console.log(newAdmin.exibirInfos());

console.log(newAdmin.criarCurso("Javascript", 20));
