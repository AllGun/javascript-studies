function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

const cliente01 = new Cliente(
  "Vinicious Pietro Barbosa",
  "11949446123",
  "viniciuscauebarbosa@googlemail.com",
  500
);

console.log(cliente01);
