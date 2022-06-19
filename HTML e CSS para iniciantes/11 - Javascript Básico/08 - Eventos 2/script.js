const botao = document.querySelector(".botao");

function mostrar() {
  const texto = document.querySelector("p").classList.toggle("ativo");
}

botao.addEventListener("click", mostrar);
