/*
Desafio 01 - Printar informações do cliente

    Acessar um objeto com informações de um cliente;
    Exibir informações no console.
*/

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "12215772042",
  email: "andre@gmail.com",
};

console.log(cliente);

// chave nome
console.log(`Nome: ${cliente.nome}`);
console.log(`Idade: ${cliente.idade}`);
console.log(`CPF: ${cliente.cpf}`);
console.log(`E-mail: ${cliente.email}`);

console.log(cliente.cpf.substring(0,3));
