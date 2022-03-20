let comida = 'Pizza'; //string
const agua = new String('Agua'); //Objeto

comida.length; //retorna o tamanho da string (espaço também conta)
agua[0]; //retorna o primeiro caracter da string (a)
comida.charAt(0) //retorna o primeiro caracter da string

comida += ' e refri';
console.log(comida);

const frase = 'A melhor comida';
console.log(frase.length-1);

const linguagem = 'Javascript';

const fraseFinal = frase.concat(' Nome', ' da', ' linguagem é', linguagem);

console.log(fraseFinal);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta, 11));

console.log(fruta.startsWith('Ba'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(-5)); //Pega os 5 caracteres de tras para frente

console.log(transacao2.slice(1, 4));

console.log(fruta.indexOf('b')); //Case sensitive, se não encontrar o resultado retorna -1

const preco = 'R$ 99,00';
console.log(preco.padStart(4, '-'));

console.log(fruta.repeat(5));

let listaItens = 'Camisa Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', '); // /[ ]+/g Regular expression que pega todos os espaços na nossa lista e depois substituindo por , com o replace
console.log(listaItens);

const newList = listaItens.split(', ');
console.log(newList);