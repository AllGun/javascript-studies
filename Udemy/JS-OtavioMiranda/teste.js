const idadeMiguel = 18;

const permitirMiguel = idadeMiguel >= 18 ? "Sim" : "Não";
console.log(permitirMiguel);

const idadePriscila = 13;
const permitirPriscila = idadePriscila >= 18 ? "Sim" : "Não";
console.log(permitirPriscila);
document.write(permitirPriscila);
document.write("<br>");

// 03) Se o estiver chovendo vou passear senão fico em casa
const chove = " ";
const vouPassear = chove === "Sim" ? "passear" : "não";
console.log(vouPassear);

const pontosCliente = 1000;
const nivelCliente = pontosCliente >= 1000 ? "VIP" : "Normal";
console.log(`O cliente é ${nivelCliente}`);
document.write(`O cliente é ${nivelCliente}`);
document.write("<br>");

const corUser = "Branca";
const corPadrao = corUser || "Preta";
console.log(`Qual a cor escolhida pelo Cliente: ${corPadrao}`);
document.write(`Qual a cor escolhida pelo Cliente: ${corPadrao}`);
document.write("<br>");

const data = new Date(0);
document.write(data.toString());
document.write("<br>");


