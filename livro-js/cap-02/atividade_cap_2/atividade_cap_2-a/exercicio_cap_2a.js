const inputForm = document.querySelector("form");
const responsePreco = document.querySelector("#outPreco");
const responseDesconto = document.querySelector("#outDesconto");

inputForm.addEventListener("submit", (e) => {
  const medicamento = inputForm.inMedicamento.value;
  const preco = Number(inputForm.inPreco.value);

  console.log(medicamento);
  console.log(preco);

  const desconto = preco * 2 * 0.9;

  console.log(desconto);

  responsePreco.innerText = `R$${preco}`;
  responseDesconto.innerText = `R$${desconto}`;

  e.preventDefault();
});
