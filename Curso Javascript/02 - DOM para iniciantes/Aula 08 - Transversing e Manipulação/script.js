// console.log(h1.innerHTML); //HTML interno
// console.log(h1.outerHTML); //Todo o HTML do elemento
// console.log(h1.innerText); //Texto, sem tags

// h1.innerText = '<p>Texto</p>'; //A tag vai como texto
// h1.innerText = '<p>Texto</p>'; //A tag é renderizada

// console.log(lista.parentElement.parentElement);
// console.log(lista.nextElementSibling);
// console.log(lista.previousElementSibling);

// console.log(lista.children[lista.children.length-1]);
// console.log(lista.children);
// console.log(lista.querySelector('li:last-child'));

// console.log(lista.childNodes);
// console.log(lista.previousSibling);

// const lista = document.querySelector('.animais');

// const contato = document.querySelector('.contato');

// const titulo = contato.querySelector('.titulo');

// console.log(lista);
// console.log(contato);
// console.log(titulo);

// // lista.appendChild(titulo);

// // contato.replaceChild(lista, titulo);

// const novoH1 = document.createElement('h1'); //Cria uma nova tag mas ainda não está no DOM
// novoH1.innerText = 'Novo Título'; //Adiciona um texto no novoH1
// novoH1.classList.add('titulo'); //Adiciona uma classe no novoH1

// contato.appendChild(novoH1); //novoH1 adiciona depois do primeiro filho de contato
// console.log(novoH1);

//****************************Clonar elementos***************************************

// const h1 = document.querySelector('h1');

// const faq = document.querySelector('.faq');

// const cloneH1 = h1.cloneNode(true);

// faq.appendChild(cloneH1);

//****************************************EXERCÍCIOS********************************/

//Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

//Selecione o primeiro DT da dl de faq
const firstDlFaq = document.querySelector('.faq').querySelector('dt').nextElementSibling;

console.log(firstDlFaq);

//Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
console.log(faq);