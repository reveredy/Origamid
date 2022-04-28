// function somar(a, b){
//     return a + b;
// }

// const somar = function(a, b){
//     return a + b;
// }

// const somar = (a, b) => a + b;
// const quadrado = a => a * 4;

// function dividir(a, b){
//     return a / b;
// }

// function initCodigo(){
//     const instrumento = "Guitarra";

//     console.log(instrumento)
// }

// initCodigo();

instrumento = "Violao";

(() => {
    const instrumento = "Guitarra";
    console.log(instrumento)
})
();

console.log(instrumento);

//EXERCÍCIOS

const priceNumber = n => +n.replace('R$', '').replace(',', '.');

console.log(priceNumber('R$99,99'));

//Crie uma IIFE e isole o escopo
//de qualquer código JS.

((nome) => {
    console.log('Meu nome é ' + nome);
})
('Carlos');

//Como podemos utilizar
//a função abaixo
const active = callback => callback();

active(function() {
    console.log('Teste de active');
})