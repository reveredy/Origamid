let condicao = ""; //String vazia - false
condicao = " "; //String com qualquer caracter dentro - true
condicao = 12; //Qualquer número positivo ou negativo - true
condicao = 0; //Se o número for 0 - false
condicao = null; //Se o elemento for null - false
condicao = undefined; //Se o elemento for undefined - false
condicao = document.querySelector("body"); //Se selecionarmos um elemento existente na tela ele vai ser true - true
condicao = document.querySelector("p"); //Se selecionarmos um elemento que não existe na tela ele vai ser false - false

function clicou() {
  console.log("Clicou");
}

if (condicao) {
  condicao.addEventListener("click", clicou);
}

console.log(Boolean(condicao));

//Operadores lógico ||(ou) e &&(e)
//|| (ou)
if (condicao || document.querySelector("body")) {
  console.log("Teste");
}

// && (e)
if (document.querySelector("body") && " ") {
  console.log("Verdadeiro");
}
