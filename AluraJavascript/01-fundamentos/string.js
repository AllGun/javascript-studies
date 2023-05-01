const texto = "Hello World!";
const texto2 = 'Olá Mundo!';
const stringDeNumero = "12345679";

const citacao = 'Ele falou que "House" é casa em inglês.'
console.log(citacao);

// Template string ou template literal
//console.log(`O robô disse ${texto}`);
{
}

//console.log(testeDeAcesso);

{
    
    //console.log(testeDeAcesso);
    {
        let testeDeAcesso = 10;
        console.log(testeDeAcesso);
    }
}

// Falsy 
console.log(0 == false);
console.log(0 == " ");

let letra = "";
console.log( letra == false);

// Truthy
letra = "A"
console.log(1 == true);
console.log(letra);
console.log(letra == true);

console.log("A" == true);

console.log("deu erro");
console.error(new Error("deu erro"));