/**
    Arrays

    Uma array[] representa uma lista de dados. Para retornar um valor passamos o [index] na frente da variável, o index começa com 0.

    const lista = ["Javascript", 20, true];
    const nome = lista[0];
*/
const lista = ["Javascript", "HTML", "CSS", "Typescript", "React"];
const nome = lista[0];

console.log(lista);
console.log(nome);

/*
    Loop

    Um loop pode ser utilizado para executar um código para cada item do array

    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
*/
const body = document.querySelector("body");

for (let i = 0; i < lista.length; i++) {
  body.innerHTML += "<li>" + lista[i] + "</li>";
}
