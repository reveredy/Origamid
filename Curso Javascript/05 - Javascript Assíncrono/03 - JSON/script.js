// JSON

// Javascript Object Notation (JSON) é um formato de organização
// de dados. Composto por um conjunto de chave e valor. As aspas
// duplas são obrigatórias, tanto na chave quanto no valor quando
// este for uma String.

// {
//     "id": 1,
//     "nome": "Carlos",
//     "email": "carlos.andre.albanus@hotmail.com"
// }

fetch('./dados.json')
.then(response => response.json())
.then(obj => {
    obj.forEach((element, index) => {
        console.log(index, element.aula) 
    });
})

//JSON.parse e JSON.stringfy

//JSON.parse() irá transformar um texto JSON em um objeto
//javascript. JSON.stringfy() irá transformar um objeto 
//Javascript em uma string no formato JSON

const configuracoes = { player: 'Google', tempo: 25, aula: '2.1 Javascript'};

localStorage.config = JSON.stringify(configuracoes)

console.log(JSON.parse(localStorage.config))