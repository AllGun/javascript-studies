function saudacao(nome){
    console.log(`Bom dia ${nome}`);
}

saudacao('Maria');
saudacao('José do Egito');

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

soma(2,3);

let resultadoSoma = soma(3, 5);
console.log(resultadoSoma);

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//Arrow function

const radix = n => n ** 0.5;
console.log(radix(4));
console.log(radix(169));
console.log(radix(20 * 20));
console.log(radix(500 * 500));

const potencia = (n, x) => n ** x;
console.log(potencia(2, 2));