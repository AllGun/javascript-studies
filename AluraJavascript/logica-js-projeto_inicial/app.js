alert("Boas vindas ao jogo do número secredo");
let numeroSecreto = 29;
let numeroUsuario = prompt("Escolha um número entre 1 e 100:");

if (numeroUsuario == numeroSecreto) {
  alert("Parabéns!");
} else {
  alert("Você errou o número! Tente outra vez!");
}
