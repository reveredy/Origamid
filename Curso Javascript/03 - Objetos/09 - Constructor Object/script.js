// const pessoa = new Object({
//     nome: 'André'
// });
// console.log(pessoa);

// // Normalmente utilizamos esse outro modo

// const pessoa2 = {
//     nome: 'Carlos'
// }
// console.log(pessoa2);

// //Objet.create

// const carro = {
//     cor: 'Branca',
//     init(marca){
//         this.marca = marca;
//         return this;
//     },
//     acelerar(){
//         return `${this.marca} acelerou`;
//     }
// }

// const honda = Object.create(carro).init('Range Rover');

// console.log(honda)

// console.log(honda.acelerar())

// const ferrari = Object.create(carro).init('Ferragi GT');
// console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//     acelerar(){
//         return "Acelerou";
//     },
//     buzinar(){
//         return 'Buzinou'
//     }
// }

// const moto = {
//     rodas: 2,
//     capacete: true
// }

// Object.assign(moto, funcaoAutomovel);

// console.log(moto.acelerar());

// const moto = {
    
// }

// Object.defineProperties(moto, {rodas: {
//     //value: 2,
//     configurable: false,
//     //writable: false,
//     enumerable: false,
//     get(){
//         return this._rodas;
//     },
//     set(){
//         this._rodas;
//     }
// }})

// moto._rodas = 2;
// console.log(moto.rodas);

// //

// console.log(Object.getOwnPropertyDescriptors(Array));

// //

// console.log(Object.keys(Array))

// console.log(Object.keys(moto))

// console.log(Object.values(moto))

// const carro = {
//     marca: 'Range Rover',
//     portas: 4,
//     cor: 'Branca',
//     acelerar(){
//         return `${this.marca} acelerou`
//     }
// }

// // OBject.freeze "congela o objeto", não deixando existir nenhum tipo de modificação nele

// //Object.seal Permite apenas editar propriedades existentes

// //Objet.preventExtensions permite deletar e editar antigas propriedades mas não adicionar

// console.log(carro);

//EXERCÍCIOS
//Crie uma função que verifique corretamente o tipo de dado

function verificarDado(dado){
    return Object.prototype.toString.call(dado);
}

console.log(verificarDado('a'));

//Crie um objeto quadrado com a propriedade lados e torne
//ela imutável

function quadrado(){
}

Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: true
    }
})

console.log(quadrado);

//Previna qualquer mudança no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(configuracao);

// Liste o nome de todos as propriedades do protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
