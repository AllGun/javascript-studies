/*Demostranção de objetos
    => Para exemplificar o objeto foi criado manualmente um a um;
    => Se fossemos criar mais de alguns poucos objetos, isso seria impraticável;
    => Na prática criamos um modelo (classe) ou forma para criar objetos semelhantes;
    => Com essa forma podemos criar objetos genéricos.
*/

const gato1 = {
  //Características || Atributos do objeto
  nome: "Churrumina",
  nascimento: "25/11/2018",
  pelagem: "Mesclada",
  status: {
    castrada: true,
    vacinada: true,
    vermifugada: true,
  },

  //Ações || Métodos do objeto
  miar: function () {
    console.log("miau");
  },
};

const gato2 = {
  nome: "Wen Ning",
  nascimento: "25/01/2021",
  pelagem: "Creme",
  status: {
    castrado: true,
    vacinado: true,
    vermifugado: true,
  },

  //Ação ==
  miar: function () {
    console.log("miau");
  },
};

// Modelo de Objetos
// const modeloGato = {
//   nome: stringNome,
//   nascimento: stringData,
//   pelagem: stringPelagem,
//   status: {
//     castrado: boolCastrado,
//     vacinado: boolVacinado,
//     vermifugado: boolVermifugado,
//   },
// };

/**
 * Quando criamos um objeto a partir de uma classe, estamos realizando uma instanciação desse objeto.
 * Em programação orientada a objetos, a instanciação é o processo de criar uma instância única e específica de uma classe.
 * Pense na classe como um modelo ou uma descrição que define os atributos e comportamentos que um objeto desse tipo pode ter. Cada vez que criamos um novo objeto utilizando essa classe, estamos instanciando esse objeto, ou seja, estamos criando uma cópia independente da classe, com seus próprios valores para os atributos.
 * Por exemplo, quando criamos cachorro1 e cachorro2 usando new Cachorro(...), estamos instanciando objetos distintos da classe Cachorro. Embora ambos os objetos sejam da mesma classe, cada um deles terá seus próprios valores para os atributos nome e idade.
 * Portanto, a instância é o objeto específico criado a partir de uma classe, e a instanciação é o ato de criar essa instância.
 */

class Cachorro {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  latir() {
    console.log("Woof! Woof!");
  }

  mostrarInformacoes() {
    console.log("Nome:", this.nome);
    console.log("Idade:", this.idade);
  }
}

// Criando objetos da classe Cachorro
let cachorro1 = new Cachorro("Max", 3);
let cachorro2 = new Cachorro("Bella", 5);

// Chamando métodos dos objetos
cachorro1.latir(); // Saída: Woof! Woof!
cachorro2.latir(); // Saída: Woof! Woof!

// Exibindo informações dos objetos
cachorro1.mostrarInformacoes();
// Saída:
// Nome: Max
// Idade: 3

cachorro2.mostrarInformacoes();
// Saída:
// Nome: Bella
// Idade: 5
