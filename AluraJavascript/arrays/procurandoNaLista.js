/*
 Desafio - Procurando na Lista
    - Crie uma função que receba como argumento o nome de um aluno;
    - Verifique se o aluno está presente na lista;
    - Retorne a média final que se encontra no mesmo índice;
    - Caso o nome do aluno não esteja na lista, retorne uma msg;
    - Na msg indique que o aluno não foi encontrado
    */


// procurando com function tradicional
function procurandoNaLista(nome) {
  const alunos = ["Jõa", "Juliana", "Caio", "Ana"];
  const medias = [10, 8, 7.5, 9];
  let alunosMedias = [alunos, medias];
  if (alunosMedias[0].includes(nome)) {
    indice = alunosMedias[0].indexOf(nome);
    return `${nome} está na lista.`;
  } else {
    return `${nome} não está na lista.`  }
}

console.log(procurandoNaLista("Juliana"))

console.log(procurandoNaLista("Carlos"));

console.log(procurandoNaLista("Ana"))

