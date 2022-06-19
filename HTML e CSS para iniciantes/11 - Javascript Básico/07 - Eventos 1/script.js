const curso = {
  nome: "Javascript", //Propriedades são as variáveis criadas dentro de um objeto
  completar() {
    // Métodos são funções criadas dentro de objetos
    console.log("Curso Completo de");
  },
};

curso.completar();
console.log(curso.nome);

// Eventos

const ativar = document.querySelector(".ativar");

function handleClick(event) {
  console.log(event);
  console.log(event.curretTarget());
}

ativar.addEventListener("click", handleClick);

//Event
