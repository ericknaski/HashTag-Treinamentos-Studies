//                                                 - AULA 19 -

// #Coerção Implícita e Métodos de Conversão Explícita
// São usados para converter valores de um tipo para outro, seja de forma implícita (coerção) ou explícita (métodos de conversão).

// #Coerção Implícita
// Ocorre quando o JavaScript converte automaticamente um tipo de dado para outro, sem que o programador precise fazer isso explicitamente.

console.log(5 == "5");

// o operador "+" é associativo da esquerda para a direita

console.log(5 + "5");
console.log("5" + 5);
// número é convertido automaticamente para uma string

console.log(2 + 3 + "5");
// soma de números é feita primeiro, depois a concatenação com a string

console.log("10" - 5);
// texto é convertido automaticamente para um número

// o "+" tem a propriedade de concatenação, já o "-" não tem nenhum tipo que faça essa converção

console.log("3" * "2");
// esse operador matemático tbem transforma as duas são convertidas para number

console.log(null == undefined);
