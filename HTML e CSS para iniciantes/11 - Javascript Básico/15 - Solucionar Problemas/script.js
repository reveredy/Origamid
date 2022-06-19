/*
    Solucionar Problemas

    1 - Quais elementos serão observados/modificados?

    2 - Quais eventos serão observados?

    3 - Quais informações dos elementos/browser precisamos?

    4 - Quais informações dos elementos/browser serão alteradas?

    Exercício Galeria

    1 - Lista de imagens (li img) e a imagem principal.
      1.1 Como Selecionar uma lista de itens?
      1.2 Como Selecionar um item?
    
    2 - Clique em um dos itens da lista
      2.1 Como adicionar um evento de click a uma lista de itens?
    
    3 - Precisamos do url do item clicado.
      3.1 Como pegar o url de um elemento?

    4 - Precisamos alterar o url da imagem principal.
      4.1 Como alterar o url de um elemento?
*/
const lista = document.querySelectorAll("#galeria li img");
const principal = document.querySelector("#principal");

function galeriaTrocar(event) {
  principal.src = event.currentTarget.src;
  principal.alt = event.currentTarget.alt;
}

lista.forEach((item) => {
  item.addEventListener("click", galeriaTrocar);
});
