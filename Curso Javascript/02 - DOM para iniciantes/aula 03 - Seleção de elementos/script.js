const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section'); //Dinâmico

const gridSectionNode = document.querySelectorAll('.grid-section'); //Estatico

console.log(gridSectionHTML, gridSectionNode);

gridSectionNode.forEach(function(item, index){
    console.log(item);
}); //ForEach

const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid); //Transforma em array

console.log(arrayGrid.pop());

arrayGrid.forEach(function(item){
   console.log(item);
});

// Exercícios aula
//Retorne no console todas as imagens do site

const todasImagens = document.querySelectorAll('img');

//Retorne no console apenas as imagens que começaram com a palavra imagem
const imgImagem = document.querySelectorAll('img[src^="img/imagem"]');

//Selecione todos os links internos (onde href comece com #)
const hrefInterno = document.querySelectorAll('[href^="#"]');
console.log(hrefInterno);

//Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);

//Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length-1]);