const nome01 = "Luiz",
  sobrenome01 = "Miranda",
  idade01 = 25;

console.log(nome01);
console.log(sobrenome01);
console.log(idade01);

console.log();

const nome02 = "Gustavo",
  sobrenome02 = "Peixoto",
  idade02 = 29;

console.log(nome02);
console.log(sobrenome02);
console.log(idade02);

console.log();

const pessoa03 = {
  nome: "Aline",
  sobrenome: "Baptista",
  idade: 26,
};

console.log(pessoa03);
console.log(pessoa03.nome);
console.log(pessoa03.sobrenome);
console.log(pessoa03.idade);

console.log();

const pessoa04 = {
  nome: "Débora",
  sobrenome: "Duarte",
  idade: 32,
};

console.log(pessoa04);
console.log(pessoa04.nome);
console.log(pessoa04.sobrenome);
console.log(pessoa04.idade);

console.log();

//Parametros: nome, sobrenome, idade
function criaPessoa(nome, sobrenome, idade) {
  return {
    //Argumentos: valor enviado aos parametros
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const pessoa05 = criaPessoa("Nicolas", "Araújo", 31);
console.log(pessoa05);
console.log(pessoa05.nome);
console.log(pessoa05.sobrenome);
console.log(pessoa05.idade);

console.log();

const pessoa06 = criaPessoa("Maya", "Pires", 60);
console.log(pessoa06);
console.log(pessoa06.nome);
console.log(pessoa06.sobrenome);
console.log(pessoa06.idade);
