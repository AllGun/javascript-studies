const frutas = [
  "Avocado",
  "Banana",
  "Coconut",
  "Dragon Fruit",
  "Eldberry",
  "Feijoa",
  "Guava",
  "Horned Melon",
  "Ita Palm",
  "Jack Fruit",
  "Kiwi",
  "Longan",
  "Mango",
  "Nectarines",
  "Orange",
  "Papaya",
  "Quince",
  "Rambutan",
  "Sapodilla",
  "Tomato",
  "Velvet Tamarind",
  "Mr. X",
  "Ugly Fruit",
  "Watermelon",
  "Yuzu",
  "Zucchini",
];

for (let index in frutas) {
  document.write(frutas[index]);
  document.write("<br>");
}

const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
};

const pessoaInfo = ["Nome", "Sobrenome", "Idade"];

for (let chave in pessoa) {
  document.write(`${chave}: ${pessoa[chave]}`);
  document.write("<br>");
}
