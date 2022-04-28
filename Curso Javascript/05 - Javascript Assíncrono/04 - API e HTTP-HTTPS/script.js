// API

// Application
// Um servidor, aplicativo, objeto Javascript ou qualquer outra coisa que você interaja através de comandos. Ao digitar uma URL, estamo utilizando a API do browser para se comunicar com a API do servidor.

// Programming
// Programação, isso significa que um comando irá encadear uma cadeia de eventos pré-definidos. O resultado esperado é geralmente o mesmo.

//Interface
// A interface são os comandos criados para permitir a interação
// com aplicação. EX: 'Violão'.toLowerCase() é um método que faz
// parte da interface do objeto String. A interação com a interface retorna um efeito/resposta

//HTTP
// Hypertext Transfer Protocol é o protocolo utilizado para enviarmos/recebermos arquivos e dados na web

// fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(r => r.json()).then(pokemon => {
//     console.log(pokemon)
// })

//url e method

// Uma requisição HTTP é feita através de uma URL. O método padrão
// é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.
const url = 'https://jsonplaceholder.typicode.com/posts';

const options = {
    method: 'POST',
    headers: {
        "content-Type": "application/json; charset=utf-8",
    },
    body: '{"aula": "Javascript"}'
}

fetch(url, options)
.then(r => r.json())
.then(json => {
    console.log(json)
})

//GET
//GET irá puxar as informações da URL. Não é necessário informar que o método é GET, pois este é o padrão.

//POST
//POST irá criar uma nova postagem, utilizando o tipo de conteúdo especificado no headers e utilizando o conteúdo do body.

//PUT
//PUT irá atualizar o conteúdo do URL com o que for informado no conteúdo do body

//HEAD
//HEAD puxa apenas os headers. É uma requisição mais leve pois não puxa o body

//Headers
//Cache-Control
//Tempo que o arquivo deve ficar em cache em segundos. Ex: public,
//max-age=3600

//Content-Type
//Tipo de conteúdo. Ex: text/html; charset=utf8. Indicar o tipo de arquivo principalmente em métodos POST e PUT

//Lista de Headers
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers\

//CORS

//Cross-Origin Resource Sharing, gerencia como deve ser o
//compartilhamento de recursos entre diferentes origens.

//É definido no servidor se é permitido ou não o acesso dos
//recursos através de scripts por outros site. Utilizando o 
//Access-Control-Allow-Origin

//Se o servidor não permitir o acesso, este será bloqueado. É
// possível passar por cima do bloqueio utilizando um proxy.

//CORS é um acordo entre browser / Servidor ou servidor / servidor
//Ele serve para dar certa proteção o browser, mas não é inviolável.