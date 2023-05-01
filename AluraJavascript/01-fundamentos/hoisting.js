/* Hoisting
"hoisting" em português é "elevação". Em JavaScript, o termo "hoisting" refere-se ao comportamento da linguagem de mover as declarações de variáveis e funções para o topo do escopo atual antes da execução do código. Esse comportamento é chamado de "elevação" porque essas declarações são movidas para a parte superior do escopo atual, como se estivessem sendo "elevadas" para o topo.

Hoisting em JavaScript é um comportamento da linguagem que move as declarações de variáveis e funções para o topo do escopo atual antes da execução do código.

Isso significa que, mesmo que você declare uma variável ou função abaixo do local onde é usada no código, o JavaScript permitirá que você use essa variável ou função porque ela foi "movida" para o topo do escopo pelo interpretador.

No entanto, é importante lembrar que apenas as declarações de variáveis e funções são movidas para o topo, não suas atribuições ou definições de função.

Em relação às variáveis const, a razão pela qual o hoisting não funciona com elas é porque elas não são inicializadas com um valor padrão como as variáveis var e let. Em vez disso, elas exigem uma atribuição imediata de valor no momento da declaração. Como resultado, o JavaScript não pode mover uma declaração const para o topo do escopo sem definir um valor para ela, o que levaria a um comportamento indefinido.

Portanto, ao usar const em JavaScript, é importante declará-las antes de usá-las em qualquer outro lugar no código para evitar erros e garantir que o código seja executado corretamente.
*/

// 
// console.log(x + y);
// 
// let x = 10, y = 14;

nome = 'João';
console.log(nome); // Output: undefined
var nome; 

jao(); // Output: "Olá do Jão!"
function jao() {
  console.log('Olá do Jão!');
}
