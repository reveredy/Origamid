// ASYNC / AWAIT

// A palavra chave async indica que a função possui partes
// assincronas e que você pretende esperar a resolução da mesma
// antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte do ES8

// async function puxarDados(){
//     const dadosResponse = await fetch('./dados.json');
//     const jsonDados = await dadosResponse.json();
    
//     document.body.innerText = jsonDados.aula;
// }

// puxarDados()

//then / async
//A diferença é a sintaxe mais limpa

//then
// function iniciarFetch(){
//     fetch('./dados.json')
//     .then(response => response.json())
//     .then(json => {
//         document.body.innerText = json.aula;
//     })
// }
// iniciarFetch();

//async
// async function iniciarAsync(){
//     const dadosResponse = await fetch('./dados.json');
//     const dadosJSON = await dadosResponse.json();

//     document.body.innerText = dadosJSON.aula;
// }
// iniciarAsync()

//Try / Catch
//Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função
//O que estiver dentro do bloco do try será executado
//Encontrando algum erro ele cai no bloco catch

// async function iniciarAsync(){
//     try{
//         const dadosResponse = await fetch('./dados.json');
//         const dadosJSON = await dadosResponse.json();

//         document.body.innerText = dadosJSON.aula;
//     }
//     catch(erro){
//         console.log(erro)
//     }
// }
// iniciarAsync()

//Iniciar Fetch ao mesmo tempo

//Não precisamos esperar um fetch para começarmos outro. Porém
//precisamos esperar a resposta resolvida do fetch para transformar a response em json

async function iniciarAsync(){
    const response = fetch('./dados.json');

    //ele espera o que está dentro da expressão() ocorrer primeiro
    const dadosjSON = await (await response).json();

    console.log(dadosjSON)
}

iniciarAsync()

//Promise
//O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado desta promise