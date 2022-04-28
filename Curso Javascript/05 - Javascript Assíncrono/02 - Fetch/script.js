// fetch API

// Permite fazermos requisições HTTP através do método fetch().
// Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.

// fetch('./arquivo.txt').then((response) => {
//     console.log(response); //Response HTTP (objeto)
// });

// const doc = fetch('./doc.txt');

// doc
// .then(resolucao => resolucao.text()) 
// .then(body => {
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body;
//     console.log(body)
// })
// console.log(doc);

// O fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site local diretamente pelo index.html, sem um servidor local, o fetch não irá funcionar.

//const cep = fetch('https://viacep.com.br/ws/93216290/json/');

// cep
// .then(response => response.json())//cep.then me retornará um objeto do tipo response
// .then(body => {
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body;
// })

// const sobre = fetch('./sobre.html');

// const div = document.createElement('div');

// sobre
// .then(r => r.text())
// .then(body => {

//     div.innerHTML = body;
//     const titulo = div.querySelector('h1');
//     document.querySelector('h1').innerText = titulo.innerText;
// })

// const imagem = fetch('./imagem.png');

// imagem
// .then(r => r.blob())
// .then(text => {
//     const url = URL.createObjectURL(text);
//     const imgDom = document.querySelector('img')
//     imgDom.src = url;
// })

// const cep = fetch('https://viacep.com.br/ws/93216290/json/');

// cep.then(r => {
//     const clone = r.clone();    
//     r.text().then(text => {
//         console.log(text)
//     })
//     clone.json().then(json => {
//         console.log(json)
//     })
//     console.log(r)
// })
// .then(body => {
//     console.log(body)
// })

// const cep = fetch('https://viacep.com.br/ws/93216290/json/');

// cep.then(resposta => {
//     console.log(resposta)
//     resposta.headers.forEach(console.log);
// })

//EXERCÍCIOS

// Utilizando o API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const btn = document.forms[0].querySelector('#btn');
const cepInput = document.forms[0].querySelector('#cep');
const resultado = document.querySelector('.resultado');

function handleClick(event){
    event.preventDefault();
    const cep = cepInput.value;
    buscaCep(cep)
}

function buscaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body => {
        resultado.innerText = body;
    })
}

btn.addEventListener('click', handleClick);

//Utilizando a API https://blockchain.info/ticker
//retorne no DOM o valor da compra do bitcoin em reais
//atualize a cada 30 segundos
const btcDom = document.querySelector('.btc');

function fetchBtc(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        btcDom.innerText =  btcJson.BRL.buy;
    })
}

setInterval(fetchBtc, 1000 * 60);

fetchBtc();

//Utilizando a API https://api.chucknorris.io.jokes/random
//retorne uma piada randomica do chucknorris, toda vez que
//clicar em próxima
const joke = document.querySelector('.joke');
const btnNext = document.querySelector('.next')
function randomJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(rJoke => {
        joke.innerText = rJoke.value;
    })
}

randomJoke();
btnNext.addEventListener('click', randomJoke);