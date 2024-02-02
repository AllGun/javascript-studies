// Função que verifica se uma palavra é um palíndromo
function verificarPalindromo(palavra) {
  // Inicializa uma variável para armazenar a palavra invertida
  let palavraInvertida = "";
  // Converte a palavra para minúsculas para garantir comparação sem distinção entre maiúsculas e minúsculas
  let palavraLow = palavra.toLowerCase();

  // Loop que percorre a palavra de trás para frente, construindo a palavra invertida
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  // Converte a palavra invertida para minúsculas
  let palavraInvertidaLow = palavraInvertida.toLowerCase();

  // Verifica se a palavra original é igual à palavra invertida
  if (palavraLow == palavraInvertidaLow) {
    console.log(`A palavra ${palavra} é um palíndromo.`);
  } else {
    console.log(`A palavra ${palavra} não é um palíndromo.`);
  }
}

// Teste positivo
verificarPalindromo("Ana");
verificarPalindromo("Radar");
verificarPalindromo("ovo");
verificarPalindromo("reTER");
verificarPalindromo("NATAN");
verificarPalindromo("arara");
verificarPalindromo("osso");
verificarPalindromo("salas");

// Teste negativo
verificarPalindromo("Casa");
verificarPalindromo("Nuvem");
verificarPalindromo("123456");
verificarPalindromo("Escola");
