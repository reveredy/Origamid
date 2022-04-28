// class Button{
//     constructor(text, background){
//         //Quantos eu quiser;
//         this.text = text;
//         this.background = background;
//     }
//     element(){
//         //Criando um elemento button
//         const buttonElement = document.createElement('button');
//         //Substituindo o texto to elemento(button) pelo texto passado como argumento
//         buttonElement.innerText = this.text;
//         //trocando o style do elemento, nesse caso o background
//         buttonElement.style.background = this.background;

//         //Retorno da função
//         return buttonElement;
//     }

//     appendTo(target){
//         //Selecionando o local onde será inserido o botão
//         const targetElement = document.querySelector(target);

//         //inserindo o elemento no local passado como argumento
//         targetElement.appendChild(this.element());

//         //retornando o botãoo
//         return targetElement;
//     }
// }

// //Criando um novo botão com os argumentos escolhidos
// const blueButton = new Button('Comprar', 'dodgeBlue');

// //Passando o local desejado para inserir o botão
// blueButton.appendTo('body');

// class Button{
//     constructor(options){
//         this.options = options;
//     }
// }

// const blueButton = new Button({
//     backgroundColor: 'Blue',
//     text: 'Comprar',
//     color: 'White',
// })

//Static vs Prototype

//Por padrão todos os métodos criados dentro de classes irão para
//o protótipo da mesmo. Porém podemos criar métodos diretamente na 
//classe utilizando a palavra chave static. Assim como [].map() é 
//um método de um array e Array.from() é um método do construtor 
//Array


// class Button{
//     constructor(options){
//         this.options = options;
//     }

//     static createButton(text, background){
//         const buttonElement = document.createElement('button');

//         buttonElement.innerText = text;
//         buttonElement.style.background = background;
//         buttonElement.classList.add('btn-ativo')

//         return buttonElement;
//     }
// }

// const optionsBlue = {
//     backgroundColor: 'Blue',
//     text: 'Comprar',
//     color: 'White',
// }

// const blueButton = new Button(optionsBlue);

// const blueButtonStatic = Button.createButton('clique', 'blue');
// console.log(blueButtonStatic)

class Button{
    constructor(text, background){
        //Quantos eu quiser;
        this.text = text;
        this.background = background;
    }
    element(){
        //Criando um elemento button
        const buttonElement = document.createElement('button');
        //Substituindo o texto to elemento(button) pelo texto passado como argumento
        buttonElement.innerText = this.text;
        //trocando o style do elemento, nesse caso o background
        buttonElement.style.background = this.background;

        //Retorno da função
        return buttonElement;
    }

    appendTo(target){
        //Selecionando o local onde será inserido o botão
        const targetElement = document.querySelector(target);

        //inserindo o elemento no local passado como argumento
        targetElement.appendChild(this.element());

        //retornando o botãoo
        return targetElement;
    }

    static blueButton(text){
        return new Button(text, 'blue');
    }
}

const botaoAzul = Button.blueButton();

//Criando um novo botão com os argumentos escolhidos
const blueButton = new Button('Comprar', 'dodgeBlue');