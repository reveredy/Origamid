const imgs = document.querySelectorAll('img');

// imgs.forEach(function(img, index, array){
//     console.log(img, index, array);
// });

imgs.forEach((item, index) => {
    console.log(item, index);
}) // Arrow function 


//Quando temos apenas 1 linha de código podemos escrever a sintaxe em uma linha tbm e sem as chaves
//EX
imgs.forEach(item => console.log(item)); 

//Exercícios

//Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p');

paragrafos.forEach(item => console.log(item));

//Mostra o texto dos parágrafos no console
paragrafos.forEach(item => console.log(item.innerText));

//Como corrigir os erros abaixo:

const img = document.querySelectorAll('img');

img.forEach((item, index) => {
    console.log(item, index)
});

let i = 0;

img.forEach(() => {
    console.log(i++)
});

img.forEach(() => i++);