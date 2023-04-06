const notas = [10, 6, 8];
notas.push(7);

console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
console.log(media);

notas.push(10);
console.log(notas);

notas.pop();
console.log(notas);


console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );