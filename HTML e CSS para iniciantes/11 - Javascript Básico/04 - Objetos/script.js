// Declarando um livro sem objetos
const nome = "O senhor dos Anéis";
const ano = 1954;
const autor = "J. R. R. Tolkien";

//Declarando o filme sem objetos
const nomeFilme = "O senhor dos Anéis";
const anoFilme = 2001;
const diretorFilme = "Peter Jackson";

const livro = {
  nome: "O senhor dos Anéis",
  ano: 1954,
  autor: "J. R. R. Tolkien",
};

const filme = {
  nome: "O senhor dos Anéis",
  ano: 2001,
  autor: "J. R. R. Tolkien",
  diretor: "Peter Jackson",
};

console.log(2022 - livro.ano);

const texto = document.querySelector("p");

console.log(ano.toFixed().length); //Retorna uma String, "liberando" assim os metódos de uma String, já o length retorna um number, "liberando" os métodos de Number e assim sucessivamente

console.log(texto.innerHTML);
