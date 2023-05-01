let x = "";
console.log(x);

console.log(x);

x = "";

ternario = x !== "" ? "Hello" : "F U!";
console.log(ternario);

z = " ";
y = "";

console.log(typeof z);
console.log(typeof y);
console.log(z === y);
console.log(z == y);

function imprimeTexto(texto) {
  console.log(texto);
}

x = "Hello F* World!";

imprimeTexto(x);

imprimeTexto("outro texto");

function soma() {
  return 2 * 2;
}

console.log(soma());

imprimeTexto(soma);
imprimeTexto(soma());
