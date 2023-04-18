/* 
# Declaração de variáveis

    As variáveis declaradas em um programa devem possuir um nome, seguindo algumas regras de nomenclatura. Em JavaScript, os nomes de variáveis não podem: 
        • Conter espaços. 
        • Começar por número. 
        • Conter caracteres
        • Utilizar nomes de palavras reservadas da linguagem, como function, var, new, for ou return.

    Para declarar uma variável em JavaScript, podemos utilizar os comandos var, let ou const. Nas últimas versões do JavaScript, passou-se a recomendar o uso de const ou let. Uma variável criada a partir de um desses comandos possui um escopo local (de bloco), o que pode evitar desperdício de memória – pois, ao final do bloco, a variável deixa de existir. Além disso, const e let impedem que um programa rode com alguns problemas no código, como declarar duas variáveis com o mesmo nome no script.

Iepsen, Edécio Fernando. Lógica de Programação e Algoritmos com JavaScript - 2ª Edição (p. 39). Novatec Editora. Edição do Kindle. 
*/

// Atribuição:
const myName = "Greg Gaines"
let age = 26;
const college = "Whassington";
let weightLbs = 312;
let weightKg = 141.52

/*
No JavaScript moderno, o uso de const passou a ter um novo significado e tem se tornado o padrão da linguagem. Declarar uma variável com const serve para indicar que essa variável deve possuir uma única atribuição de valor e não será alterada no decorrer do programa. Então, caso o conteúdo da variável possa ser alterado, declare-a com let. Em todos os demais casos, opte pelo const.

Iepsen, Edécio Fernando. Lógica de Programação e Algoritmos com JavaScript - 2ª Edição (p. 40). Novatec Editora. Edição do Kindle. 
 */


