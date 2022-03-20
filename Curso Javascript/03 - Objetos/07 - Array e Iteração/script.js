// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((carro, index, carros) => {
//     console.log(carro, index, carros);
// })
// //forEach não retorna valor (apenas undefined)

// const novosCarros = carros.map((carro, index, carros) => {
//     return carro.toUpperCase();
// })

// console.log(novosCarros);

// const numeros = [2, 4, 6, 8, 10, 12, 14];

// const numerosX2 = numeros.map(numero => numero * 2);
// console.log(numeros);
// console.log(numerosX2);

// const aulas = [
// {
//     nome: 'HTML 1',
//     min: 15
// },
// {
//     nome: 'HTML 2',
//     min: 10
// },
// {
//     nome: 'CSS 1',
//     min: 20
// },
// {
//     nome: 'JS 1',
//     min: 25
// }
// ];

// let totalMin = aulas.map(aula => aula.min);

// const nomeAulas = aulas.map(aula => aula.nome);

// console.log(nomeAulas);
// console.log(totalMin);

// const aula = [10, 25, 30];
// const reduceAulas = aula.reduce((acumulador, item, index, Array) => {
//     console.log(acumulador, item, index, Array);
// }, 50); //50 é o valor inicial do acumulador - item - index, array

// const reduce = aula.reduce((acumulador, item) => {
//     return acumulador + item;
// }) //Como não foi passado um valor inicial para o acumulador, ele pula a primeira iteração

// //E se for passado ele executa a primeira iteração

// console.log(reduce);

// Exemplo de como funciona o reduce
// const aulas = [10, 25, 35];

// 1

// aulas.reduce((0, 10) => {
//     return 0 + 10;
// }, 0); retorna 10

// 2

// aulas.reduce((10, 25) => {
//     return 10 + 25;
// }, 0); retorna 35

// 3

// aulas.reduce((35, 30) => {
//     return 35 + 30;
// }, 0); retorna 65

//Exemplo quando não repassamos o valor inicial do acumulador

// const aulas = [10, 25, 35];

// 1
// Pula, porque não foi passado um valor inicial para o acumulador

// 2

// aulas.reduce((10, 25) => {
//     return 10 + 25;
// }) //Retorna 35

// aulas.reduce((35, 30) => {
//     return 35 + 30;
// }) //Retorna 65

// const numeros2 = [10, 25, 60, 5, 35, 10];

// const maiorValor = numeros2.reduce((anterior, atual) => {
//     return anterior < atual ? atual : anterior;
// })

// console.log(maiorValor); // 60

// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 25
//     },
//     {
//         nome: 'CSS 1',
//         min: 32
//     },
//     {
//         nome: 'JS 1',
//         min: 12
//     }
// ]

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//     acumulador[index] = atual.nome;
//     return acumulador;
// }, {})

const frutas = ['Bananas', 'Pêra', 'Uva'];

const temUva = frutas.some((item) => {
    return item === 'Uva';
}); //Verifica se pelo menos uma das condições da verdadeiro para retornar um verdadeiro

console.log(temUva); 

const every = frutas.every((itens) => {
    return itens === 'Bananas';
}); //Verifica se pelo menos uma das condições da False para retornar um False

console.log(every);

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 25
    },
    {
        nome: 'CSS 1',
        min: 32
    },
    {
        nome: 'JS 1',
        min: 12
    }
]

const maiores15 = aulas.filter((aula) => {
    return aula.min > 15;
})

console.log(maiores15);