let nome = prompt("Digite seu nome completo:");
const letra = prompt("Digite uma letra do seu nome:");
const palavras = nome.split(" ").length;
console.log(palavras);
console.log(typeof palavras);

let space;

if (palavras > 1) {
  space = palavras - 1;
}

// if (palavras == 1) {
//   space == 0;
// } else {
//   space = palavras - 1;
// }

console.log(space);

document.body.innerHTML += `Nome:<strong> ${nome}</strong></br>`;
document.body.innerHTML += `Seu nome tem: <strong>${
  nome.length - space
}</strong> letras.</br>`;
document.body.innerHTML += `A segunda letra do seu nome é <strong>${nome[1].toUpperCase()}</strong></br>`;
document.body.innerHTML += `Qual o primeiro índice da letra "A" do seu nome<strong>${nome}</strong></br>`;
document.body.innerHTML += `Qual o último índice da letra <strong>"${letra.toUpperCase()}"</strong> do seu nome: `;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(
  -3
)}</strong></br>`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${palavras}</strong></br>`;
document.body.innerHTML += `Seu nome com letra maiúscula: <strong>${nome.toUpperCase()}</strong></br>`;
document.body.innerHTML += `Seu nome com todas as letras em minúscula: <strong>${nome.toLowerCase()}</strong></br>`;
