alert("Boas vindas ao jogo do número secredo");
let numeroSecreto = 29;
let numeroUsuario,
  tentativas = 1;
console.log(numeroSecreto == numeroUsuario);
console.log(typeof numeroUsuario);
console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("Escolha um número entre 1 e 100:");
  if (numeroUsuario == numeroSecreto) {
    alert(
      `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert(`O número secreto é menor que ${numeroUsuario}.`);
    } else {
      alert(`O número secreto é maior que ${numeroUsuario}.`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tantativa";

console.log(numeroSecreto == numeroUsuario);
console.log(tentativas);
