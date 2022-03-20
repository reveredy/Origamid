// function Pessoa(nome, idade){
//     this.nome = nome;
//     this.idade = idade;
// }

// var obj = {
//     nome: 'Andre',
//     idade: 33
// }

// const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

// const listaArray = Array.prototype.slice.call(listaAnimais);
// const listaArray2 = Array.from(listaAnimais);

// console.log(listaArray);

// Crie uma função construtora de pessoas
// deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne o nome completo da pessoa

function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('Carlos', 'Albanus', 32);

console.log(pessoa1.nomeCompleto());

//Liste os métodos acessados por
//dados criados com NodeList,
//HTMLCollection, Document

console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);
console.log(Object.getOwnPropertyNames(NodeList.prototype));

//Liste os construtores dos dados abaixo

const li = document.querySelector('li');

li; // HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //Undefined

// Qual o constructor do dado abaixo

li.hidden.constructor.name
//String

const constr = li.hidden.constructor.name;
console.log(constr.constructor.name.constructor.name);