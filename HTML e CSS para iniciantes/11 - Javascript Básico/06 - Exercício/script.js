// function livro(nome, ano, autor) {
//   nome = nome.toUpperCase();
//   const totalAnos = 2022 - ano;
//   const frase = nome + " por " + autor;

//   const objeto = {
//     nome,
//     totalAnos,
//     frase,
//   };

//   return objeto;
// }

function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase,
    totalAnos: 2022 - ano,
    frase: nome + " por " + autor,
  };
}

const retorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(retorno.frase);
