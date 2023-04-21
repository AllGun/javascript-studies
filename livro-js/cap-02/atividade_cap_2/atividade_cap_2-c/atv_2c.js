const inputForm = document.getElementById("inForm");
const outProduto = document.getElementById("outProduto");
const outPreco = document.getElementById("outPreco");
const outPromo = document.getElementById("outPromo");

inputForm.addEventListener("submit", (e) => {
  const produto = inputForm.inProduto.value;
  const preco = Number(inputForm.inPreco.value);

  console.log(produto);
  console.log(preco);

  const promo = preco * 2 + preco / 2;

  outProduto.innerText = `${produto}`;
  outPreco.innerText = `R$${preco.toFixed(2)}`;
  outPromo.innerText = `Compre 3 por R$${promo.toFixed(2)}`;

  e.preventDefault();
});
