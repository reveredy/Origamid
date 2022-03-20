const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

//Remova o primeiro valor de comidas e coloque em uma variável
let primeiraComida = comidas.shift();
console.log(primeiraComida);

//Remova o última valor de comidas e coloque em uma variável
const ultimaComida = comidas.pop();
console.log(ultimaComida);

//Adicione 'Arroz'ao final do array
comidas.push('Arroz');
console.log(comidas);

//Adicione 'Peixe' e 'Batata'ao início do array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
//Arrume os estudantes em ordem alfábetica
estudantes.sort();
console.log(estudantes);

//Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);

console.log(estudantes.includes('Joana'));
console.log(estudantes.includes('Juliana'));

//Substitua section por ul e div por li
//utilize plit e join
let html = `<section><div>Sobre</div><div>Produtos</div><div>Contato</div></section>`;

html = html.split('section').join('ul');
html = html.split('div').join('li');
console.log(html);

//Remova o último carro, mas antes de remover
//salve o array original em outra variável
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log('Carros: ' + carros);

const copyCarros = carros.slice('');
console.log('Copy carros: ' + copyCarros);

carros.pop();
console.log('Carros: ' + carros);