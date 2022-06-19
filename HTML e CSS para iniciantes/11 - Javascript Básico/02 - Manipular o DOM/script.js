const nav = document.querySelector("nav"); //Seleciona a primeira tag nav encontrada no DOM, se não encontrar retorna null

const produtos = document.querySelector(".produtos a"); //Seleciona a primeira classe produtos que contenha um a encontrada no DOM, se não encontrar retorna null

console.log(nav); //Retorna o seletor passado na variável nav
console.log(produtos); //Retorna o seletor passado na variável produtos

console.log(produtos.innerHTML); //Retorna o texto de produtos
console.log(produtos.href); //Retorna a href de produtos

nav.style.background = "black"; //Adiciona um estilo de background no nav
nav.style.padding = "1.4rem"; //Adiciona um estilo de padding no nav

nav.classList.add("ativo"); //Adiciona uma classe a sua escolha no elemento

console.dir(nav); //Retorna no console os metodos e atributos disponíveis no elemento passado
