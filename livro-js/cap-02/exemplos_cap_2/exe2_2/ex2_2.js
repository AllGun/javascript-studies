/*
a) Elaborar um programa para um Cinema, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos,

Iepsen, Edécio Fernando. Lógica de Programação e Algoritmos com JavaScript - 2ª Edição (p. 72). Novatec Editora. Edição do Kindle. 
 */

// cria referência ao form e aos elementos #movieTitle e #movieTime
const firstForm = document.querySelector("#first-form");
const responseTitle = document.querySelector("#movieTitle");
const responseTime = document.querySelector("#movieTime");

// cria um "ouvinte" de evento, acionado quando clicado em enviar (submit)
firstForm.addEventListener("submit", (e) => {
  const title = firstForm.inTitle.value; // pega o título do filme
  const duration = Number(firstForm.inDuration.value); // pega a duração do filme e converte para número

  // Teste para sabermos o que title e duration armazena
  console.log(title);
  console.log(duration);

  const hours = Math.floor(duration / 60); // arredonda para baixo o resultado
  const minutes = duration % 60; // pega o resto da divisão

  responseTitle.innerText = title; // exibe o título (saída)
  responseTime.innerText = `${hours}h e ${minutes}min`; // exibe o tempo (horas e minutos)

  e.preventDefault(); // evita o envio do form
});
