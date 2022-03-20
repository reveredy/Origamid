const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'azul');
menu.classList.remove('azul');

if(menu.classList.contains('ativo')){
    menu.classList.add('possuiAtivo');
}

console.log(menu.className += ' vermelho');

console.log(menu.classList);

//attributes

const animais = document.querySelector('.animais');

console.log(animais.attributes);

//getAttribute

const img = document.querySelector('img'); //Pega a primeira imagem
console.log(img.getAttribute('src'));//Pega o atributo passado no parâmetro, nesse caso o src

img.setAttribute('alt', 'É uma raposa');//seta um atributo
console.log(img.getAttribute('alt')); //Pega o atributo passado, alt

console.log(img.hasAttribute('alt')); //Verifica se tem o atributo
console.log(img.removeAttribute('alt')); //Remove um atributo

//Exercícios
//Adicione a classe ativo a todos itens do menu

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach(item => {
    item.classList.add('ativo');
});
console.log(itensMenu);

//Remova a classe ativo de todos os itens do menu e mantenha apenas do primeiro
itensMenu.forEach(item => {
    item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');
console.log(itensMenu);

//Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
console.log(imgs);

imgs.forEach(img =>{
    console.log(img.hasAttribute(img, 'alt'));
});

//Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');