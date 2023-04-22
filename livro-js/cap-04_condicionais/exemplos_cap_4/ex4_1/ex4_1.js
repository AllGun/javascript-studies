// cria referência ao form e elementos de resposta do programa
const inputForm = document.querySelector("form");
const outName = document.getElementById("outName");
const outMedia = document.getElementById("outMedia");
const outResultado = document.getElementById("outResultado");

inputForm.addEventListener("submit", (e) => {
  // obtém valores de form
  const studentName = inputForm.inName.value;
  const primeroBimestre = Number(inputForm.inPrimeiro.value);
  const segundoBimestre = Number(inputForm.inSegundo.value);
  const terceiroBimestre = Number(inputForm.inTerceiro.value);
  const quartoBimestre = Number(inputForm.inQuarto.value);

  // calcular a média
  const media =
    (primeroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre) / 4;
  console.log(media);

  outName.innerText = `${studentName}`;
  outMedia.innerText = `${media}`;

  if (media >= 7) {
    // altera o texto e estilo da cor do elemento
    outResultado.innerText = `Aprovado`;
    outResultado.style.color = "blue";
  } else {
    outResultado.innerText = `Reprovado`;
    outResultado.style.color = "red";
  }

  e.preventDefault();
});
