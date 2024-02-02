/**
 * Exercício 8: 
 * Declare uma variável e atribua um valor numérico a ela. 
 * Use o operador de incremento para aumentar o valor 
 * Imprima o resultado.

Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 19). Edição do Kindle. 
 */

function incrementarDecrementar(number) {
  let numberIncrementado = number++;
  console.log(numberIncrementado);
  let numberDecrementado = (number -= 2);
  console.log(numberDecrementado);
}

incrementarDecrementar(5);

function decrementarVariavel(numeroDecrem) {
  numeroDecrem--;
  console.log(numeroDecrem);
}

decrementarVariavel(10);
