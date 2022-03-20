//Retorne a soma total de caracteres dos parágrafos acima utilizando o reduce

const paragrafos = document.querySelectorAll('.lobo p');

const arrayParagrafos = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0)


console.log(arrayParagrafos);

//Crie uma função que retorne novos elementos html
//com os seguintes parâmetros
//tag, classe e conteúdo

function novosElementos(tag, classe, conteudo){
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    classe ? elemento.innerHTML = conteudo : null;
    
    return elemento;
}

console.log(novosElementos('div', 'a' , 'conteúdo'));

//Crie uma nova função utilizando a anterior como base
//essa nova função deverá sempre criar um h1 com a classe titulo
//Porém o parâmetro conteúdo continuará dinâmico

const h1Titulo = novosElementos.bind(null, 'h1', 'titulo');

console.log(h1Titulo('Novo conteúdo'));