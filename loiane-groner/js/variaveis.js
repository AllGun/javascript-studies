/*
Em JavaScript, os tipos disponíveis são:
    - number;
    - string;
    - boolean;
    - function;
    - object.
Também temos "undefined" e "null", junto com "arrays", "datas" e "expressões regulares (regex)"

De acordo com com a espeficifacação, há dois tipos de dados em js:
    Tipos primitivos:
        - null;
        - undefined;
        - string;
        - number;
        - boolean;
        - symbol;
    
    Tipos derivados/objetos:
        - JavaScript Object;
        - Functions;
        - Arrays;
        - Regular expressions (Regex);

        */

var num = 1;
num = 3;
var price = 1.5;
var myName = "Patrick";
var trueValue = true;
var nullVar = null;
var undef;
var str01 = "";
var str02 = " ";

console.log("num: " + num);
console.log("MyName: " + myName);
console.log("trueValue: " + trueValue);
console.log("price: " + price);
console.log("nullVar: " + nullVar);
console.log("undef: " + undef);
console.log(typeof str01);
console.log(typeof str02);

/*    
O JavaScript aceita o operador "delete".
O operador "delete" apaga uma propriedade de um objeto.
*/
var myObj = { name: "John", age: 21 };
console.log(myObj);

delete myObj.age;
console.log(myObj);

/*
verdadeiro e falso
- undefined: false
- null: false
- boolean:
    - true: para verdadeiro;
    - false: para false;
- number: 
    - false: +0, -0, 0 ou NaN
    - true: outros números é verdadeiro
*/

var x = +0;
console.log(x == false);
var x = 0;
console.log(x == false);
var x = -0;
console.log(x == false);

var y = 10;
console.log(y == true);
console.log(y === true);
