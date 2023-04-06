document.write(`<header style="font-size: 3em; text-align: center; padding: 20px; font-weight: bold">Switch Case</header>`)

const dataDia = new Date("1987-04-20 00:00:00");
const diaSemana = dataDia.getDay() + 1;
let diaSemanaNome;

if (diaSemana === 1) {
  diaSemanaNome = "Domingo";
} else if (diaSemana === 2) {
  diaSemanaNome = "Segunda";
} else if (diaSemana === 3) {
  diaSemanaNome = "Terça";
} else if (diaSemana === 4) {
  diaSemanaNome = "Quarta";
} else if (diaSemana === 5) {
  diaSemanaNome = "Quinta";
} else if (diaSemana === 6) {
  diaSemanaNome = "Sexta";
} else {
  diaSemanaNome = "Sábado";
}

document.write(
  `<div style = "background: blue; font-size: 1.8em; text-align: center; padding: 20px">O ${diaSemana}° dia da semana é ${diaSemanaNome}.</div>`
);
document.write("<br>");

const dataMes = new Date();

let mesDoAno;

switch ((mes = dataMes.getMonth() + 1)) {
  case 1:
    mesDoAno = "Janeiro";
    break;
  case 2:
    mesDoAno = "Fevereiro";
  case 3:
    mesDoAno = "Março";
  case 4:
    mesDoAno = "Abril";
    break;
  case 5:
    mesDoAno = "Maio";
    break;
  case 6:
    mesDoAno = "Junho";
    break;
  case 7:
    mesDoAno = "Julho";
    break;
  case 8:
    mesDoAno = "Agosto";
    break;
  case 9:
    mesDoAno = "Setembro";
  case 10:
    mesDoAno = "Outrubro";
    break;
  case 11:
    mesDoAno = "Novembro";
    break;
  case 12:
    mesDoAno = "Dezembro";
    break;
}

document.write(
  `<div style="background: red; font-size: 1.8em; text-align: center; padding: 20px">O ${mes}° mês do ano é ${mesDoAno}.</div>`
);
document.write("<br>");
document.write(`<div style="background: purple; font-size: 1.8em; text-align: center; padding: 20px"> ${typeof mes}</div>`);
