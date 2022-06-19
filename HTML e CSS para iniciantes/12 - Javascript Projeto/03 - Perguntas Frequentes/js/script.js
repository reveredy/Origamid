//Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const href = link.href;
  const url = location.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Ativar itens do Orçamento

const parametros = new URLSearchParams(location.search);

parametros.forEach((parametro) => {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
});

// Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", (event) => {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
  });
});
