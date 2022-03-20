//Array simples (Com um tipo de dado dentro)
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome)}];

const carros = Array('Corolla', 'Mustang', 'Honda');

const bicicletas = new Array('Monark', 'Shimano', 'ceci');

console.log(instrumentos);
console.log(precos);
console.log(dados[0]);
console.log(carros);
console.log(bicicletas);

const li = document.querySelectorAll('li');

const arrayLi = Array.from(li);

console.log(li);
console.log(arrayLi);

const obj = {
    0: 'Andre',
    1: 'Carlos',
    2: 'Tairini',
    length: 3,
}

const objArray = Array.from(obj);
console.log(obj);

console.log(instrumentos);
instrumentos.sort(); //Organiza os itens por Ordem alfabética
console.log(instrumentos);

// Unshift e push

const carro = ['Celta', 'Ferrari', 'Lamborguini'];
console.log(carro);
carro.unshift('Porsche'); //Unshift adiciona ao começo do array
console.log(carro);
carro.push('BMW'); //adiciona o item ao final do array
console.log(carro);

// Shift e Pop
carro.shift(); //Remove o primeiro item do array
console.log(carro);

carro.pop(); //Remove o último item do array
console.log(carro);

carro.reverse(); //Inverte a ordem do array
console.log(carro);

carro.unshift('Fusca', 'Gol', 'Parati', 'Belina');
console.log(carro);
carro.splice(2, 4, 'Fusca');
console.log(carro);

console.log(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].copyWithin(2, 1, 3));

console.log(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].fill('Banana', 1, 4));

//Métodos de acesso
const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto'];

const transporte3 = transporte1.concat(transporte2, 'Van');
console.log(transporte3);

// Includes

console.log(transporte3.includes('Van'));
console.log(transporte3.includes('Pão'));

console.log(transporte3.indexOf('Van'));
console.log(transporte3.indexOf('Vk'));
console.log(transporte3.includes('Van'));

let htmlString = '<h2>Título Principal</h2';

htmlString = htmlString.split('h2');
console.log(htmlString);

htmlString = htmlString.join('h1');
console.log(htmlString);

console.log(carro);
console.log(carro.slice(1, 3));

// Clonar Arrays

carro2 = carro.slice(2, 3);
console.log(carro2);