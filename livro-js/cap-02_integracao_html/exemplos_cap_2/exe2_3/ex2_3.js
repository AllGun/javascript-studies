const inputForm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

inputForm.addEventListener("submit", (e) => {
    const veiculo = inputForm.inVeiculo.value;
    const preco = Number(inputForm.inPreco.value)

    const entrada = preco * 0.5;
    const parcela = (preco * 0.5) / 12

    resp1.innerText = `${veiculo}`;
    resp2.innerText = `R$${entrada.toFixed(2)}`;
    resp3.innerText = `R$${parcela.toFixed(2)}`;

    e.preventDefault()

})
