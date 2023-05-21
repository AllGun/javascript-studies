const user = {
  nome: "Douglas",
  email: "doug@gmail.com",
  dataNasc: {
    dia: 12,
    mes: 08,
    ano: 1998
  },
  role: "Admin",
};

console.log(user.dataNasc);
console.log(user.dataNasc.dia);
console.log(`Data Nascimento: ${user.dataNasc.dia}/${user.dataNasc.mes}/${user.dataNasc.ano}`);
