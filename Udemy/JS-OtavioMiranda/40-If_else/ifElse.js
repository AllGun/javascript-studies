let hora = prompt(`Quantas horas?`);

if (hora < 0 || hora >= 24) {
  alert("Digite uma hora válida");
  hora = prompt("Quantas horas?");
  console.log(hora);

  if (hora < 0 || hora >= 24) {
    document.write("Você não digitou uma hora válida seu idiota!");
  } else {
    if (hora < 12 && hora >= 0) {
      document.write("Bom dia!");
    } else if (hora >= 12 && hora < 18) {
      document.write("Boa tarde!");
    } else if (hora >= 18 && hora < 24) {
      document.write("Boa noite!");
    }
  }
} else {
  if (hora < 12 && hora >= 0) {
    document.write("Bom dia!");
  } else if (hora >= 12 && hora < 18) {
    document.write("Boa tarde!");
  } else if (hora >= 18 && hora < 24) {
    document.write("Boa noite!");
  }
}
