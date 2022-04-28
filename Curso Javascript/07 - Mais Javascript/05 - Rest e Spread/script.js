// Antes do ES
// function perimetro(lado, totalLados){
//     totalLados = totalLados || 4;

//     return lado * totalLados;
// }^

//ES6+
// function perimetro(lado, totalLados = 5){
//     const argArray = Array.from(arguments);
//     argArray.forEach(arg => {
//         console.log(arg)
//     console.log(argArray);
//     })
//     return lado * totalLados;
// }

// console.log(perimetro(10));

//REST
// function perimetro(lado, totalLados, ...lista){//Rest deve ser o último parametro da função
//     console.log(lista);//Se tiver outros parametros que venham a ser usados eles nao entram na lista e retorna um array
//     console.log(arguments);// Já o argumentos pega todos os parâmetros e adiciona na list e retorna um arrayLike
//     return lado * totalLados;
// }

// function anunciarGanhadores(premio, ...ganhadores){
//     ganhadores.forEach(ganhador => console.log(ganhador + " ganhou um " + premio));
// }

// anunciarGanhadores('Carro', 'Pedro', 'Jader', 'Gustavo', 'Fabio', 'Cristiano', 'Cristian', 'Ederson', 'Felipe');

//SPREAD

// const frutas = ['Banana', 'Uva', 'Morango'];
// const legumes = ['Cenoura', 'Batatas'];

// const comidas = [...frutas, 'Coca-Cola', ...legumes];
// console.log(comidas);

//EXERCICIOS

//Reescreva a função utilizando valores
//iniciais de patâmetros com ES6+
function createButton(background = 'blue', color = 'red'){
    // background = background || blue;
    // if(color === undefined){
    //     color = 'red';
    // }

    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    return buttonElement;
}

const redButton = createButton();

//Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas);
console.log(comidas);