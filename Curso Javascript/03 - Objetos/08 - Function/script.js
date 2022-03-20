// function areaQuadrado(lado){
//     return lado * lado;
// }  // É o mesmo que 

// const perimetroQuadrado = new Function('lado', 'return lado * 4'); //Mesmo funcionando essa maneira não é usada

// // Métodos de funções

// //length - Retorna o total de atributos que tem na função
// console.log(areaQuadrado.length);

// //name - Retorna o nome da função em uma string
// console.log(areaQuadrado.name);

// // call executa a função
// function darOi(){
//     return 'Oi para você';
// }

// console.log(darOi.call());


// function descricaoCarro(velocidade){
//     console.log(this); //Por padrão quando criamos uma função direto, estamos criando ela dentro do Objeto Window
//     console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
// }
// descricaoCarro.call({marca: 'Honda', ano: 2015}, 130); //podemos substituir o this atraves do call

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Pêra', 'Uva', 'Maça'];

// carros.forEach.call(frutas, carro => { //quando chamamos o call e passamos o argumento(this), ele substitui o diz padrão
//     console.log(carro);
// })

// // EXEMPLO 2

// function Dom(seletor){
//     this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe){
//     console.log(this);
//     this.element.classList.add(classe);
// }

// const li = {
//     element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar');

// // const ul = new Dom('ul');  //Teste

// // ul.ativo.call(li, 'ativo');
// // console.log(ul);

// //EXEMPLO 3 - ARRAY

// Array.prototype.mostrarThis = function(){
//     console.log(this);
// }

// frutas.mostrarThis(); //Me retorna o this

// Array.prototype.pop.call(frutas);
// console.log(frutas);

// const arrayLike= {
//     0: 'Item 1',
//     1: 'Item 2',
//     2: 'Item 3',
//     length: 3
// }

// console.log(arrayLike); //Exemplo de ArrayLike
const frutas = ['Uva', 'Pêra']

const li = document.querySelectorAll('li'); //Retorna uma NodeList com todas as li's econtradas no document

const filtro = Array.prototype.filter.call(li, (item) =>{ //Declarei uma constante recebendo um método de Array direto do prototype(filter), e chamei o call para poder usar o li que não era um array
    return item.classList.contains('ativo');
})

console.log(filtro);
console.log(li);

const numeros = [1223, 1233, 3123, 4144, 233, 1242, 3321, 2413, 5553, 12323, 1231];


//Aplly Funciona da mesma maneira do call porém com arrays
console.log(Math.max.apply(null, numeros));

const $ = document.querySelectorAll.bind(document, 'li');

console.log($());

const carro = {
    marca: 'Ford',
    ano: 2022,
    acelerar: function(aceleracao, tempo){
        return `${this.marca} acelerou ${aceleracao}Km/h em ${tempo}seg`;
    }
}

console.log(carro.acelerar(200, 30));

const honda = {
    marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda, 100, 30);

console.log(acelerarHonda(220, 35));

