const nome = ["Luiz", "Otávio", "Henrique"];

for (let valor of nome) {
  console.log(valor);
}

const carros = ["Gol", "Fusca", "Ka", "HB20", "Combi", "Corolla"];
for (let valor of carros) {
  console.log(valor);
}

console.log();

const copa22 = [
  "Países Baixos",
  "Senegal",
  "Equador",
  "Qatar",
  "Inglaterra",
  "Estados Unidos",
  "Irã",
  "País de Gales",
  "Argentina",
  "Polônia",
  "México",
  "Arábia Saudita",
  "França",
  "Austrália",
  "Tunísia",
  "Dinamarca",
  "Japão",
  "Espanha",
  "Alemanha",
  "Costa Rica",
  "Marrocos",
  "Croacia",
  "Bélgica",
  "Brasil",
  "Suiça",
  "Camarões",
  "Sérvia",
  "Canadá",
  "Portugal",
  "Coreia",
  "Uruguai",
  "Gana",
];

console.log(copa22.length);
for (let valor of copa22) {
  console.log(valor);
}

//For Clássico: Geralmente com iteráveis (Arrays ou Strings)
// For IN: Retorna o índice ou chave (Strings, Arrays ou Objetos)
// For OF: Retorna o valor em si (Iteráveis, Arrays ou Strings)