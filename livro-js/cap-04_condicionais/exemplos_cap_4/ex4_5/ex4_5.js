const inputForm = document.querySelector("form");
const outSqrt = document.getElementById("outSqrt");

inputForm.addEventListener("submit", (e) => {
  // evita envio do form
  e.preventDefault();

  // obtém número digitado no form
  const numero = Number(inputForm.inNumber.value);

  // calcular raiz quadrada do número
  const raiz = Math.sqrt(numero);

  if (Number.isInteger(raiz)) {
    outSqrt.innerText =`Raiz quadrada de ${numero} é ${raiz}`;
  } else {
    outSqrt.innerText = `${numero} não tem raiz exata`;
  }
});
