/*
Desafio - Acessar chaves

    Consultar um objeto utilizando uma lista de chaves
    relativas a informações de clientes gerada pelo sistema
    e printar o resultado
*/

const cliente = {
  nome: "César Mateus Jesus",
  idade: 74,
  cpf: "29454050672",
  rg: "166180804",
  data_nasc: "08/04/1949",
  sexo: "Masculino",
  signo: "Áries",
  mae: "Carolina Alessandra Aparecida",
  pai: "Martin Murilo Calebe Jesus",
  email: "cesarmateusjesus@marsans.com.br",
};

const chaves = [
  "nome",
  "idade",
  "cpf",
  "rg",
  "data_nasc",
  "sexo",
  "signo",
  "mae",
  "pai",
  "email",
];

const ordem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(cliente[chaves[0]]);


chaves.forEach((informacao) => console.log(cliente[informacao]));
