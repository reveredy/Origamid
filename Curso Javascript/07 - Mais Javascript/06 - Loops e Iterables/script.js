const frutas = ['Banana', 'Uva', 'Maça'];
const frase = 'Isso é Javascript';

for(const fruta of frutas){
    console.log(fruta);
}

for(char of frase){
    console.log(char);
}

const buttons = document.querySelectorAll('button');

for(const btn of buttons){
    btn.style.color = 'blue';
}

const carro = {
    marca: 'Honda',
    ano: 2018
}

for(car in carro){
    console.log(carro[car]);
}

const btn = document.querySelector('button');

const btnStyles = getComputedStyle(btn);

for(const style in btnStyles){
    console.log(`${style}: ${btnStyles[style]}`);
}

//Exercicios

// Crie 4 li's na página
//Utilizando o for...of
//adicione uma classe a cada li
const itens = document.querySelectorAll('li');

for(const item of itens){
    item.classList.add('teste');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto windows

for(const windowKey in window){
    console.log(windowKey + ': ' + window[windowKey]);
}