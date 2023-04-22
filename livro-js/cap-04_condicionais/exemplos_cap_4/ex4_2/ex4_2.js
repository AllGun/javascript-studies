// cria referência ao form e elemento onde será exibida a resposta
const outForm = document.querySelector("form");
const outName = document.getElementById("outName");
const outPeso = document.getElementById("outPeso");

// ouvinte
outForm.addEventListener("submit", (e) => {
  // evita o envio do form
  e.preventDefault();

  // obtém valores do form
  const nome = outForm.inName.value;
  const masculino = outForm.inMale.checked;
  const altura = Number(outForm.inAltura.value);

  // declara a variável peso
  let peso;

  if (masculino) {
    // se masculino
    peso = 22 * Math.pow(altura, 2); // Math.pow eleva ao quadrado
  } else {
    peso = 21 * Math.pow(altura, 2);
  }

  // apresenta a resposta
  outName.innerText = `${nome}`;
  outPeso.innerText = `${peso.toFixed(3)}kg`;
});
