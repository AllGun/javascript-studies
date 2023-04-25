const inputForm = document.querySelector("form");
const outSituacao = document.getElementById("outSituacao");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const velPermitida = Number(inputForm.inVelocidade.value);
  const velCondutor = Number(inputForm.inCondutor.value);

  if (velCondutor > velPermitida * 1.2) {
    outSituacao.innerText = `Multa Grave`;
  } else if (velCondutor > velPermitida && velCondutor <= velPermitida * 1.2) {
    outSituacao.innerText = `Multa Leve`;
  } else {
    outSituacao.innerText = `Sem multa`;
  }
});
