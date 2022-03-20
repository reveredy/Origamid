// function Carro(marca, modelo, preco){
//     this.marca = marca;
//     this.modelo = modelo;
//     this.preco = preco;
// }

// const cruze = new Carro('Chevrolet', 'Cruze', 25000);
// const fiat = new Carro('Fiat', 'Bravo', 20000);
// console.log(cruze.marca);
// console.log(fiat);

// function Carro2(marca, precoInicial){
//     const taxa = 1.2;
//     const precoFinal = precoInicial * taxa;
//     this.marca = marca;
//     this.preco = precoFinal;
// }

// const mazda = new Carro2('Mazda', 14000);
// console.log(mazda);

//*********************AULA 02*************************/
// OBJ
// const Dom = {
//     seletor: 'li',
//     element(){
//         return document.querySelector(this.seletor);
//     },
//     ativar(){
//         this.element().classList.add('ativar');
//     }
// }

//Constructor Function

// function Dom(seletor){
//     this.element = function(){
//         return document.querySelector(seletor);
//     }

//     this.ativar = function(){
//         this.element().classList.add('ativar');
//     }
// }

// const li = new Dom('li');
// const ul = new Dom('ul');
// const lastLi = new Dom('li:last-child');

//*****************************EXERCÍCIOS********************************/

//Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome da pessoa',
//     idade: 0,
//     andar(){
//         console.log(this.nome + ' andou');
//     }
// }

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    
    this.andar = function andar(){
        return `${this.nome} andou`;
    }
}

//Crie 3 pessoas, João - 20 anos
//Maria - 25 anos, Bruno - 15 anos

const p1 = new Pessoa('Carlos', 32);
const p2 = new Pessoa('Tairini', 27);
const p3 = new Pessoa('Zaida', 69);
const p5 = new Pessoa('Andrea', 42);
const p6 = new Pessoa('Cristiano', 25);

// Crie uma Constructor Function (Dom) para a manipulação
// de listas de elementos do DOM. Deve conter as seguintes
// propriedades e métodos:

// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe de todos os elementos

function Dom(element){
    this.elementos = document.querySelectorAll(element);
    
    this.addClass = function addClass(classe){
        this.elementos.forEach((elemento) =>{
            elemento.classList.add(classe);
        })
    }

    this.removeClass = function removeClass(classe){
        this.elementos.forEach((element) =>{
            element.classList.remove(classe);
        })
    }

}

const el = new Dom('li');