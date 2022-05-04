import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  const divNumeros = document.querySelector(target);

  // Cria a div com informações do total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.quantidade}</span>`;

    return div;
  }

  // Preenche cada animal no DOM
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    divNumeros.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch, espera resposta e transforma ela em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a transformação de json, ativa as funções
      // para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
