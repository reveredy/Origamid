const img = document.querySelector('img');

function callback(){
    console.log('Clicou!!')
}


img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
    console.log(event.target);
}

animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
    event.preventDefault();
    console.log(event);
}

linkExterno.addEventListener('click', handleLinkExterno);

//This faz referência ao objeto no qual se está usando, se está dentro de uma classe o this estará referenciando a classe

const h1 = document.querySelector('h1');

function handleEvent(event){
    console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// addEventListener('scroll', handleEvent);
// addEventListener('resize', handleEvent);

function handleKeyBoard(event){
    if(event.key === 'f'){
        document.body.classList.toggle('fullscreen');
    }
    console.log(event.key);
}

 addEventListener('keydown', handleKeyBoard);

 //Aula 2 Eventos

const image = document.querySelectorAll('img');

function handleImg(event){
    event.target.getAttribute('src');
}

image.forEach((image) =>{
    image.addEventListener('click', handleImg);
})

//EXERCÍCIOS

//Quando o usúario clicar nos links internos do site
//adicione a classe ativo ao item clicando e remova dos
//demais itens caso eles possuam a mesma. Previna
//o comportamento padrão desses links

const internos = document.querySelectorAll('a[href^="#"]');
console.log(internos);

function handleLink(event){
    event.preventDefault();
    
    internos.forEach((link) =>{
        link.classList.remove('ativo');
    })

    event.currentTarget.classList.add('ativo');
    
}

internos.forEach((interno) => {
    interno.addEventListener('click', handleLink);
});

//Selecione todos os elementos do site começando a partir do body
//ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event){
    console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);
})

console.log(todosElementos);

//Utilizando o código anterior, ao invés de mostrar no console,
//remova o elemento que está sendo clicado. o método remove() remove um elemento

const elementos = document.querySelectorAll('body *');

function removeElemento(event){
    console.log(event.currentTarget.remove());
}

elementos.forEach((elemento) => {
    elemento.addEventListener('click', removeElemento);
})

console.log(todosElementos);

//se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('texto-maior');
    }
}

addEventListener('keydown', handleClickT);