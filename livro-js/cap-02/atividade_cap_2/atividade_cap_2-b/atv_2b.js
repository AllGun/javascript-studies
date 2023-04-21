const inputForm = document.querySelector("form");
const response = document.querySelector("#outPreco");

inputForm.addEventListener("submit", (e) => {
  const preco = Number(inputForm.inPreco.value);
  const tempo = Number(inputForm.inTempo.value);

  console.log(preco);
  console.log(tempo);

  const pagar = (tempo / 15) * preco;

  response.innerText = `R$${pagar}`

  e.preventDefault();
});
