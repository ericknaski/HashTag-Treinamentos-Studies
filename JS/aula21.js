//                                                 - AULA 20 -

// #Operadores Lógicos ou operações Booleanas - parte 1

// São usados para combinar e manipular valores booleanos

let idade = 17;
let codigo_promocional = true;

// &&  AND (operação e)   ->  X && Y - ambas as condições são verdadeiras

let verificacao = idade >= 18 && codigo_promocional;

console.log(verificacao);

// ||  OR (operação ou)   ->  X || Y - apenas uma das condições é verdadeira

let verificacao2 = idade >= 18 || codigo_promocional;

console.log(verificacao2);

// !   NOT (inversor)     ->  !X     - inverte um valor boleano

let verificacao3 = !idade >= 18 || codigo_promocional;

console.log(verificacao3);
