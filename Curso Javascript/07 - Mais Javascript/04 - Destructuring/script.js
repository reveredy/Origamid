//Destructuring
//Permite a desestruturação de arrays e Objetos. Atribuindo suas propriedades a novas variáveis.

// const carro = {
//     marca: 'Fiat',
//     ano: 2018,
//     portas: 4,
// }

// const {marca, ano} = carro;

// console.log(marca); //Fiat
// console.log(ano); //2018

// const cliente = {
//     nome: 'Carlos',
//     compras: {
//         digitais: {
//             livros: ['livro 1', 'Livro 2'],
//             videos: ['Video JS', 'Video HTML']
//         },
//         fisicas: {
//             cadernos: ['Caderno 1']
//         }
//     }
// }

// //Maneira normal de acessar
// //LIVROS
// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// // const {livros, videos} = cliente.compras.digitais;
// // console.log(livros);

// //Podemos aninhar a desestruturação
// const {digitais, fisicas, digitais:{livros, videos}} = cliente.compras;

// console.log(livros)

// const cliente = {
//     nome: 'Andre',
//     compras: 10,
//     email: 'andre@gmail.com'
// }

// //nome: nomeAndre - estamos atribuindo um novo nome para a variável nome, agora podemos chamar ela de nomeAndre(nome não estará mais definido)

// //email = 'email@gmail.com' - estamos atribuindo um nome padrão para email, caso ele não esteja declarado dentro do objeto;

// const {nome: nomeAndre, email = 'email@gmail.com'} = cliente;

// console.log(email);

// const frutas = ['Banana', 'Uva', 'Morango'];

// const primeiraFruta = frutas[0];
// const segundaFruta = frutas[1];
// const terceiraFruta = frutas[2];

// //com destructuring (no caso do array não precisa ser o mesmo nome da propriedade)
// const [primeira, segunda, terceira] = frutas;

// function handleKeyboard({key, keyCode}){
//     console.log(key, keyCode);
// }

// document.addEventListener('keyup', handleKeyboard);

//EXERCÍCIOS

//Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

//Resposta
const {backgroundColor, color, margin} = btnStyles;

console.log(backgroundColor, color, margin);


//Troque os valores das variáveis abaixo
let cursoAtivo = 'Javascript';
let cursoInativo = 'HTML';

//Resposta
[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo, cursoInativo);

//Corrija o erro abaixo
const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}

// const {bobCor: cor} = cachorro;
//erro bobCor não existe, o que podemos fazer é atribuir o nome bobCor a variável cor

//Certo
const {cor: bobCor} = cachorro;
console.log(bobCor);