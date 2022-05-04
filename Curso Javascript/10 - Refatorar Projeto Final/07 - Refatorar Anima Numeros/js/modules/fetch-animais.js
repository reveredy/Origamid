import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.quantidade}</span>`;

    return div;
  }

  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();
    const divNumeros = document.querySelector(".numeros-grid");

    animaisJSON.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      divNumeros.appendChild(divAnimal);
    });

    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  fetchAnimais("./api/quantidadeAnimais.json");
}
