// cria referência o form e ao elemento onde será exibida a resposta
const inputForm = document.querySelector("form");
const response = document.querySelector("#outPreco");

// cria um "ouvinte" de evento, acionado quando o btn submit for clicado
inputForm.addEventListener("submit", (e) => {
  const quilo = Number(inputForm.inQuilo.value); // pega o preço do Kg
  const consumo = Number(inputForm.inConsumo.value); // pega o consumo em gr

  const valor = (quilo / 1000) * consumo; // calcula o valor a ser pago

  response.innerText = `R$${valor.toFixed(2)}`;

  e.preventDefault(); //evita o envio do form
});
