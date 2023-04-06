// let num1 = Number(prompt("Digite o primeiro número:"));
// let num2 = Number(prompt("Digite o segundo número:"));

// // const soma = num1 + num2;

// alert(`${num1} + ${num2} = ${num1 + num2}`);

// let varA = "A",
//   varB = "B",
//   varC = "C",
//   tempVar;

// tempVar = varA;
// varA = varB; // B
// varB = varC; // C
// varC = tempVar; // A

// alert(`A = ${varA}`);
// alert(`B = ${varB}`);
// alert(`C = ${varC}`);

// [varA, varB, varC] = [varC, varA, varB];
// alert(`A = ${varA}`);
// alert(`B = ${varB}`);
// alert(`C = ${varC}`);

const nome = prompt("Nome:");
document.body.innerHTML = `Meu nome é ${nome} <br />`;
const sobrenome = prompt("Sobrenome:");
document.body.innerHTML += `Meu sobrenome é ${sobrenome} <br />`;
document.body.innerHTML += `Meu nome completo é ${nome} ${sobrenome} <br />`;
