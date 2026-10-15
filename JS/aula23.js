// Exercícios- Operadores e Operações

// Exercício 1: Você tem um produto que custa R$ 200,00 e recebeu um desconto de R$ 40,00. Além disso, há um imposto de R$ 12,00 sobre o preço com desconto. Calcule o preço final do produto após aplicar o desconto e o imposto.

let valorproduto = 200;
let desconto = 40;
let imposto = 12;

let valorfinal = valorproduto - desconto + imposto;

console.log("Preço total: R$ " + valorfinal);

// Exercício 2: Você comprou um produto por R$ 100,00 e deseja vender com um lucro adicional de R$ 30,00. Calcule o preço de venda do produto.

let valorprod = 100;
let lucro = 30;

let valortotal = valorprod + lucro;

console.log("Preço de venda R$ " + valortotal);

// Exercício 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto é R$300,00.

let orcamento = 250;
let custoproduto = 300;
let desconto1 = 50;

let comdesconto = custoproduto - desconto1;

console.log(
  "O preço com desconto (R$ " +
    comdesconto +
    ") fica menor que o orçamento (R$ " +
    orcamento +
    ")? " +
    (comdesconto < orcamento),
);

// Exercício 4: Você tem duas variáveis, uma que representa a quantidade de produtos em um estoque como uma string ("20") e outra que representa a quantidade mínima necessária de produtos no estoque como um número (20). Verifique se a quantidade atual de produtos é suficiente (igual ou maior que a quantidade mínima necessária) após converter a string para um número. Imprima no console se a quantidade é suficiente ou não.
