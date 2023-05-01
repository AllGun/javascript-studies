/*
Desafio - Adicionando campos
Adicionar informações importantes que faltam em um cadastro;
Ex: Telefone;
*/

const cliente = {
  nome: "Samuel Calebe Diego Lima",
  idade: 27,
  cpf: "54511576262",
  rg: "199998711",
  data_nasc: "25/04/1996",
  email: "samuel-lima76@urbam.com.br",
};

// Mostra clente sem mudanças
console.log(cliente);

// Add o campo telefone com o número
cliente.telefone = "9898-8558";
console.log(cliente);

// Add o campo Sexo
cliente.sexo = "Masculino";
console.log(cliente);

//Mudando telefone
cliente.telefone = "98981010"
console.log(cliente);

//E se eu add um campo vazio?
cliente.endereco;
console.log(cliente.endereco);
console.log(cliente);

cliente.endereco = "Rua 10 casa 4";
console.log(cliente);


