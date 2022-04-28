// new Promise();

// Promisse é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

// const promessa = new Promise((resolve, reject) => {
//     let condicao = true;

//     if(condicao){
//         resolve('Promise concluída');
//     }else{
//         reject();
//     }
// });

// console.log(promessa); // Promise {<resolved>: undefined}

// Then()

// O poder das promises está no método then() do seu protótipo. O
// callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve.

// const promessa = new Promise((resolve, reject) => {
//     let condicao = true;

//     if(condicao){
//         resolve('Promise concluída');
//     }else{
//         reject(Error('Um erro aconteceu')); //Ou não precisamos passar nada
//     }
// });

// promessa.then(resolucao => console.log(resolucao)) //'Promise concluída'

// As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. O poder está na execução de código assíncrono que executará o resolve() ao final dele.


//Encadeamento de then()
// const promessa = new Promise((resolve, reject) => {
//     let condicao = false;
//     if(condicao){
//         setTimeout(() => {
//             resolve({nome: 'Carlos', idade: 32});
//         }, 3000);
//     }else{
//         reject(Error('Um erro ocorreu na promise'))
//     }
// });

// const retorno = promessa
// .then(resolucao => {
//     resolucao.profissao = 'FrontEnd Developer';
//     return resolucao
// })
// .then(resolucao => {
//     console.log(resolucao)
// }).catch(rejeitado => {
//     console.log(rejeitado)
// }).finally(() => {
//     console.log('Acabou')
// })
// //'Resolvida' após 1 segundo

//Promise.all()

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário Logado')
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados Carregados')
    }, 1500)
})

const carregouTudo = Promise.all([login, dados]);

carregouTudo
.then((resolucao) => {
    console.log(resolucao);
})


//Retornará uma nova promise assim que a primeira for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida
const race = Promise.race([login, dados]);

console.log(race)