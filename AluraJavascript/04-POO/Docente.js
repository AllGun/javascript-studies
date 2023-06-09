import User from "./User.js/";

class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super (nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso){
        return `Estudante ${estudante} foi aprovado no curso ${curso}.`;
    }
}

const novoDocente = new Docente("Mariana", "m@m.gmail.com", "2000-07-01");
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovarEstudante("Juliana", "Javascript"));