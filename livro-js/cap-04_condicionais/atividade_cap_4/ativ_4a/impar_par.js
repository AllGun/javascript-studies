const inputForm = document.querySelector("form");
const outNumber = document.getElementById("outNumber");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const number = Number(inputForm.inNumber.value);

  if (number % 2 == 0) {
    outNumber.innerText = `O número ${number} é par`;
  } else {
    outNumber.innerText = `O número ${number} é ímpar`;
  }
});
