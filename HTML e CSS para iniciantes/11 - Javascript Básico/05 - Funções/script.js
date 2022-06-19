function logCurso() {
  const nome = "CSS";

  console.log(nome);
}

function logCurso2(nome) {
  console.log(nome);
}

logCurso();
logCurso2("Javascript");
logCurso2("HTML");

function funcaoComRetorno(nome, horas) {
  console.log(nome, horas, "horas");

  return {
    nome,
    horas,
  };
}

const verRetorno = funcaoComRetorno("React", 45);

console.log(verRetorno);

// Escopo

const nome = "Javascript";

function f2() {
  console.log(nome);
}

console.log(f2());
