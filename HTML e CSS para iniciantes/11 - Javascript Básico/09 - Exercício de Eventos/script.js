/*
    Exercício

    1 - Crie um círculo com uma div de width: 16px, height: 16px e background: #999
    2 - Adicione ao window uma função que ocorre ao 'mouse move';
    3 - Na função mude as propriedades top e left do círculo com base no mouse.
    4 - Você pode usar elemento.style.propriedade para mudar o CSS diretamente.
*/

const div = document.querySelector("div");

function moverCirculo(event) {
  div.style.left = event.x - 12 + "px";
  div.style.top = event.y - 12 + "px";
}

window.addEventListener("mousemove", moverCirculo);
