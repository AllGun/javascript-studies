function apresentar(nome) {
  return `Me nome é ${nome}`;
}

//Arrow function (anônima)
const apresentarArrowFunc = (nome) => `Meu nome é ${nome}`;

console.log(apresentarArrowFunc(nome));

const soma = (num1, num2) => num1 + num2;

// Arrow function com + de 1 linha de instrução
const somaNumerosMenores = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "Somente números menores que 10.";
  } else {
    return num1 + num2;
  }
};
