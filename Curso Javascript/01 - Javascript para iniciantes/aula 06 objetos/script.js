var pessoa = {
    nome: ' Carlos',
    idade: 32,
    profissao: 'Designer',
    possuiFaculdade: true
}

console.log(pessoa.nome);

var quadrado = {
    lados: 4,
    area(lado){
        return lado * lado;
    },

    perimetro: function(lado){
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));

console.log(Math.PI); //retorna 3.14
console.log(Math.random()); //retorna números aleatórios entre 0 e 1
console.table(Math); //Organiza em tabela os arrays e objetos

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight(){
        this.height / 2; //sempre usar o this para pegar uma variável dentro de um objeto
    }
}

menu.backgroundColor = '#000';

var bg = menu.backgroundColor;

//Exercicios de fixação
//Crie um objeto com os seus dados pessoais
//Deve possuir pelo menos duas propriedades: nome e sobrenome
var dadosPessoais = {
    nome: 'Carlos',
    sobrenome: 'Albanus',
    idade: 32,
    endereco: 'Rua João XXIII',
}

//Crie um método no objeto anterior, que mostre seu nome completo
dadosPessoais.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}

console.log(dadosPessoais.nomeCompleto());

//Modifique o valor da propriedade preço para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}

carro.preco = 3000;

console.log(carro.preco);

//Crie um objeto de um cachorro que representa um labrador,
//preto com 10 anos, que late ao ver um homem
var cachorro={
    raca: 'labrador',
    cor: 'preto',
    avistarHomem(pessoa){
        if(pessoa === 'homem'){
            return 'Latir';
        }else{
            return 'abanar o rabo';
        }
    }
}

//Uma string herda métodos e propriedades do contrutor string()

var nome = 'Carlos';
//exemplos
console.log(nome.length) //6
console.log(nome.toUpperCase()) //Passa todas as letrar para maiuscula
console.log(nome.replace('s', 'ta')) //troca os caracteres passados no primeiro parâmetro pelos do segundo

var btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    console.log('Clicou');
});
console.log(btn.classList);

btn.classList.toggle('clicado');

//Mais exercícios
// lenght - replice - toString

//nomeie 5 propriedades ou métodos de elementos do DOM
// querySelector - classList - getElementById - addEventListener - appendChild - innerHtml

//busque na web um objeto (método) capaz de interagir com o clipboard
//Clipboard é a parte do seu computador que lida com CTRL + C e CTRL + V
//API clipboard.js