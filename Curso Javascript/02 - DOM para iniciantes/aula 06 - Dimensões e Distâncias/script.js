const animais = document.querySelector('.animais-lista');

const height = animais.scrollHeight;
const raposah2 = document.querySelector('h2');

const distancia = raposah2.offsetLeft;
console.log(distancia);

const rect = raposah2.getBoundingClientRect();
console.log(rect);

console.log(
    innerWidth,
    outerWidth,
    innerHeight,
    outerHeight,
);

const small = matchMedia('(max-width: 600px)').matches;

if(small){
    console.log('Usuário mobile');
}else{
    console.log('Usuário mobile');
}

//Exercícios
//Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

//Retorne a soma da largura de todas as imagens

function somaImg(){
    const todasImagens = document.querySelectorAll('img');
    let soma = 0;

    todasImagens.forEach((img) => {
        soma +=img.offsetWidth;
    });

    console.log(soma);
}

onload = function(){
    somaImg();
}

//Verifique se os links da página possuem o mínimo recomendado para telas utilizadas
//com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if(linkWidth >= 48 && linkHeight >= 48){
        console.log('Possui boa acessibilidade');
    }else{
        console.log('Não possui boa acessibilidade');
    }
})

const browserSmall = matchMedia('(max-width: 720px)').matches;

if(browserSmall){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}