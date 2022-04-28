//Factory Functions

//São funções que retornam um objeto sem a necessidade de
//utilizarmos a palavra chave new. Possuem basicamente a mesma
//função que construtor functions / Classes

// function createButton(text){
//     function element(){
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = text;

//         return buttonElement;
//     }
    
//     //podemos usar o Object.freeze para congelarmos o objeto e assim
//     //impedirmos ele de ser alterado
//     return Object.freeze({
//         text,
//         element
//     })
// }

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

// console.log(btnComprar);
// console.log(btnVender);

// function Pessoa(nome){
//     //Primeira maneira
//     // if(!(this instanceof Pessoa))
//     //     return new Pessoa;

//     //Segunda maneira
//     if(!new.target){
//         return new Pessoa(nome);
//     }
//     this.nome = nome;
// }

// Pessoa.prototype.andar = function(){
//     return `${this.nome} andou`;
// }

// const designer = Pessoa('Carlos');

// console.log(designer);

//EXERCÍCIO AULA

function $$(selectedElements){
    const elements = document.querySelectorAll(selectedElements);

    function hide(){
        elements.forEach(element => {
            element.style.display = 'none';
        });
        //Retornamos o proprio objeto para podermos encadear
        return this;
    }

    function show(){
        elements.forEach(element => {
            element.style.display = 'initial';
        });
        return this;
    }

    function on(onEvent, callback){
        elements.forEach(element => {
            element.addEventListener(onEvent, callback)
        });
        return this;
    }

    function addClass(className){
        elements.forEach(element => {
            element.classList.add(className);
        });
        return this;
    }

    function removeClass(className){
        elements.forEach(element => {
            element.classList.remove(className);
        });
        return this;
    }

    return{
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass
    }
}

const btns = $$('button');
console.log(btns.hide())