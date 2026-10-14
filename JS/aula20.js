//                                                 - AULA 20 -

// #Coerção Implícita e Métodos de Conversão Explícita - Parte 2

// #Coerção Explícita
// Ocorre quando o programador utiliza métodos de conversão para transformar um tipo de dado em outro, de forma explícita.

// #Conversão para String

let numero = 10;
let texto = String(numero); // Converte o número para string
console.log(texto); // Saída: "10"
console.log(typeof texto); // Saída: "string"

let num = 5;
num = String(num);
console.log(num);
console.log(typeof num);

let numero2 = 2;
texto2 = numero2.toString();
console.log(texto2);
console.log(typeof texto2);

let num2 = 4;
console.log("Dado inserido: " + num2);
console.log("Tipo do dado antes da conversão: " + typeof num2);
num2 = num2.toString();
console.log("Tipo do dado depois da conversão: " + typeof num2);

let booleano = true;
let txt = String(booleano);
console.log(txt + " " + typeof txt);

// #Conversão para Boolean

let string = "programação";
console.log("O dado inserido é a string: " + string);
let boolean = Boolean(string);
console.log("A conversão aconteceu? " + boolean);
console.log("Tipo do dado depois da conversão: " + typeof boolean);

// #Conversão para Número
// Para que aconteça, o dado precisa ser um número ou uma string que represente um número

let stringnumber = "123";
let number = Number(stringnumber);
console.log(number + " " + typeof number);

let stringnum = "1234";
stringnum = Number(stringnum);
console.log(stringnum + " " + typeof stringnum);

let number2 = Number(string);
console.log(number2 + " " + typeof number2);

string = Number(string);
console.log(string + " " + typeof string);
