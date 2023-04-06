/**
 * Operadores de comparação
 * < : menor que
 * > : maior que
 * <=: menor ou igual a
 * >= : maior ou igual a
 * == igualdade (compara valor) evitar uso
 * === igualdade estrita (compara valor e tipo)
 * != diferente (compara valor) evitar uso
 * !== diferente estrito (compara valor e tipo)
 */

let num01 = Number(prompt(`Primeiro número:`)),
  num02 = Number(prompt(`Segundo número:`));

comparison = num01 < num02;
document.write(`O número ${num01} é menor que ${num02}? ${comparison}`);
document.write("<br>");

comparison = num01 > num02;
document.write(`O número ${num01} é maior que ${num02}? ${comparison}`);
document.write("<br>");

comparison = num01 <= num02;
document.write(`O número ${num01} é menor ou igual a ${num02}? ${comparison}`);
document.write("<br>");

comparison = num01 >= num02;
document.write(`O número ${num01} é maior ou igual a ${num02}? ${comparison}`);
document.write("<br>");

comparison = num01 === num02;
document.write(`O número ${num01} é igual ao número ${num02}? ${comparison}`);
document.write("<br>");

comparison = num01 !== num02;
document.write(
  `O número ${num01} é diferente do número ${num02}? ${comparison}`
);

document.write("<br>");

document.write(`Qual é o tipo primitivo de ${num01}: ${typeof num01}`);

document.write("<br>");
document.write(`Qual é o tipo primitivo de ${num02}: ${typeof num02}`);
