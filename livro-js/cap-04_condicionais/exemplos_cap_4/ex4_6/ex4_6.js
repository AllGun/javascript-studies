const inputForm = document.querySelector("form");
const outNotas100 = document.getElementById("outNotas100");
const outNotas50 = document.getElementById("outNotas50");
const outNotas10 = document.getElementById("outNotas10");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const saque = Number(inputForm.inSaque.value);

  if (saque % 10 != 0) {
    alert("Valor inválido para notas disponíveis.");
    alert("Notas disponívels: R$10, R$50 e R$100");

    inputForm.inSaque.focus();
    return;
  }

  // calcula quantas notas de 100
  const notasCem = Math.floor(saque / 100);

  // quanto sobra para completar saque
  let resto = saque % 100;

  // quantas notas de 50
  const notasCinquenta = Math.floor(resto / 50);

  resto = resto % 50;

  const notasDez = Math.floor(resto / 10);

  if (notasCem > 0) {
    outNotas100.innerText = `${notasCem}`;
  } else {
    outNotas100.innerText = `0`;
  }

  if (notasCinquenta > 0) {
    outNotas50.innerText = `${notasCinquenta}`;
  } else {
    outNotas50.innerText = `0`;
  }

  if (notasDez > 0) {
    outNotas10.innerText = `${notasDez}`;
  } else {
    outNotas10.innerText = `0`;
  }
});
