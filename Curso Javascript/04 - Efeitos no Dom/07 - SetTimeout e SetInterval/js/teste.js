// const btn = document.querySelector('[data-btn="teste"]');

// btn.addEventListener('click', handleClick);

// function handleClick(){ //Criando a função que foi passada como parâmetro para o addEventListener()
//     setTimeout(() => { //Criando o setTimeout com arrow function ao usarmos o this ai sim estaremos fazendo referencia ao elemento de handleClick
//         console.log(this);
//         this.classList.add('active');
//     }, 1000)
    
//     setTimeout(function(){ //chamando o método setTimeout e criando uma function()
//         this.classList.add('active'); //Adicionando a classe no this que assim é o window, porque ao passarmos a function por extenso no setTimeout ela usa o pai do método, que é o window, para resolvermos isso podemos usar um arrow function(exemplo abaixo);
//     }, 1000)//definindo tempo para disparar a função (em milissegundos)
// }

// for(let i = 0; i < 20; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 * i);
// }

//SETINTERVAL

// function loop(texto){
//     console.log(texto);
// }

// setInterval(loop, 1000, 'Passou 1seg');

// let i = 1;
// const meuLoop = setInterval(() => {
//     console.log('Passou ' + i++ + 'seg');
//     if(i > 20){
//         clearInterval(meuLoop);
//     }
// }, 100)

// ************************ EXERCíCiOS *************************

//Mude a cor da tela para azul e depois vermelho a cada 2 segundos

// const btn = document.querySelector('[data-btn="teste"]');

// function mudarCor(){
//     btn.classList.toggle('ativo');
// }

// setInterval(mudarCor, 1000);

//Crie um cronômetro utilizando o setInterval. Deve ser possível
//Iniciar, pausar e resetar (duplo clique no pausar);

const iniciar = document.querySelector('[data-btn="iniciar"]');

const pausar = document.querySelector('[data-btn="pausar"]');

const tempo = document.querySelector('[data-btn="tempo"]');

iniciar.addEventListener('click', iniciarTempo);

pausar.addEventListener('click', pausarTempo);

pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo(){
    timer = setInterval (() => {
        tempo.innerText = i++;
    }, 100);
    iniciar.setAttribute('disabled', ''); //O segundo argumento seria o valor do disabled
}

function pausarTempo(){
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function resetarTempo(){
    tempo.innerText = 0;
    i = 0;
}