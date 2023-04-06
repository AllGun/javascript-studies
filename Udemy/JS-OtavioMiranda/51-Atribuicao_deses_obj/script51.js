const aluno = {
  studentName: "Luiz",
  lastName: "Miranda",
  age: 30,
  address: {
    street: "Avenida Brasil",
    number: 320,
  },
};

//Atribuição por desestruturação

//Posso usar os mesmos nomes do Objeto
const { studentName, lastName, age } = aluno;
console.log(studentName);
console.log(lastName);
console.log(age);

//Posso mudar os nome que estão no Objeto
const { studentName: nome, lastname: sobrenome, age: idade } = aluno;
console.log(nome);
console.log(sobrenome);
console.log(idade);

//Desestruturação de um Objeto dentro de um Objeto
//Usando o mesmo nome do Objeto
const {
  address: { street, number },
} = aluno;
console.log(street);
console.log(number);

//Usando nomes diferente dos que estão no Objeto
const {
  address: { street: rua, number: numero },
} = aluno;
console.log(rua);
console.log(numero);
