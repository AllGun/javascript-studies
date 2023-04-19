// cria referência ao form e ao elemento h3
const firstForm = document.querySelector("form");
const response = document.querySelector("h3");

/* Monitora o que acontece no html (o que o user faz), especificamente quando clicar em submit, neste caso.
    Outra forma de descrever o que estamos fazendo é dizer que foi criado um "ouvinte" de evento (event listner) que é acionado quando o botão submit for clicado
*/

firstForm.addEventListener("submit", (e) => {
  const userName = firstForm.inName.value; // Pega o nome digitado
  response.innerText = `Hi ${userName}, good morning bro!`; // Exibe a resposta no html
  e.preventDefault() // Evita o envio do form
});
