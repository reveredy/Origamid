//window.alert('Test!!!');

//alert("Tbm funciona!!");

const h1Selecionado = document.querySelector('h1');

// AULA 02

console.log(h1Selecionado.classList);

console.log(h1Selecionado.classList[0]);

const h1Classes = h1Selecionado.classList;

console.log(h1Classes);

h1Selecionado.addEventListener('click', function(){
    console.log(`Clicou em ${h1Selecionado.innerText}`);
})

// propriedade.innerText; //retorna o texto
// propriedade.classList; //retorna as classes
// propriedade.id; //retorna o id
// propriedade.offsetHeight; //retorna a altura do elemento

// propriedade.addEventListener('tipo de evento', callback);
//Ativa a função escolhida e faz a ação

// Exercícios DOM aula 02

//Retorne a url da página atual utilizando o Objeto window
console.log(window.location.href);

//Selecione o primeiro elemento da página que possua a classe ativo

const elementoAtivo = document.querySelector('.ativo');

console.log(elementoAtivo);

//Retorne a linguagem do navegador
const language = navigator.language;
console.log(language);

// retorne a largura da janela
const largura = innerWidth;
console.log(largura);