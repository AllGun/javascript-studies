// cria referência ao form e elemento onde será exibida a resposta
const outForm = document.querySelector("form");
const response = document.querySelector("#outHoraFranca");

// "ouvinte" de evento, acionado quando enviar o form
outForm.addEventListener("submit", (e) => {
  // evita o envio do form
  e.preventDefault();

  // pega e converte o conteúdo do campo inHoraBrasil
  const horaBrasil = Number(outForm.inHoraBrasil.value);

  // calc o horário na França
  let horaFranca = horaBrasil + 5;

  // se passar das 24h na França
  if (horaFranca > 24) {
    horaFranca = horaFranca - 24;
  }

  // exibe a resposta (altera o conteúdo do elemento h3)
  response.innerText = `${horaFranca.toFixed(2)}`;
});
