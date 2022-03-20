//Retorne um número aleatório entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050));

//Retorne o maior número da lista abaixo
let numeros = "4, 5, 20, 8, 9";

numeros = numeros.split(", ");

const maiorNumero = Math.max(...numeros);

console.log(maiorNumero);

let listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;

listaPrecos.forEach((item) => {
    soma += limparPreco(item);
})


console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
