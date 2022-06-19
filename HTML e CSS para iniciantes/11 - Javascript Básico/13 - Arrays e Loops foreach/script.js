/*
    foreach

    Arrays e objetos que se parecem com array's, possuem o método foreach.
    
    Esse método recebe uma função que é executada para cada item da Array.

    const lista = ["Javascript", "HTML", "CSS"];
    
    function logarItems(item, index, array){
        console.log(item, 'no index:', index);
    }

    lista.foreach(logarItems);

    Você pode escrever a função no argumento:
    lista.foreach(function(item, index){
        console.log(item, 'no index:', index);
    });

    querySelectorAll

    O método document.querySelectorAll(), seleciona todos os elementos que suprirem a condição do argumento e retorna uma array-like (Objeto que se parece com uma array);

    Métodos e Propriedades (Array)

    Uma array possui diferentes métodos e propriedades

    Retorna o tamanho
    const total = lista.length;

    Remove o último
    const ultimo = lista.pop()

    Remove o primeiro
    const primeiro = lista.shift();

    Adiciona ao final
    lista.push('PHP');
 */

const lista = ["Javascript", "CSS", "HTML", "PHP"];

const body = document.querySelector("body");

function adicionarBody(item) {
  body.innerHTML += "<li>" + item + "</li>";
}

lista.forEach(adicionarBody);

// querySelectorAll

const links = document.querySelectorAll("nav a");

function logHref(item) {
  const href = item.href;
  console.log(href);
}

links.forEach(logHref);

const removerUltimo = lista.pop();
console.log(removerUltimo); //Removeu o PHP

const removerPrimeiro = lista.shift();
console.log(removerPrimeiro); //Removeu o Javascript

lista.push("Javascript");
console.log(lista); //Inseriu Javascript ao final da lista
