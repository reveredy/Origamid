var nome = 'Carlos André'; //tipo String (cadeia de caracteres)
console.log(typeof nome);

var sobrenome = 'Albanus';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

var gols = 1200;
var frase = 'Romario fez ' + gols + " gols";
console.log(frase);

var ano = '2022';
var mes = 3

console.log(ano + mes);

var frase2 = `Romario fez ${gols * 2} gols`;
console.log(frase2);

//EXERCÍCIOS AULA 2

// Declare uma variável contendo uma String
var variavelComString = 'Uma String qualquer';

// Declare uma variável contendo um número dentro de uma String
var numeroDentroDeString = '27';

// Declare uma variável com a sua idade
var minhaIdade = 32;

// Declare duas variáveis, uma com seu nome outra com seu sobrenome e some as mesmas
var meuNome = 'Carlos André',
    meuSobrenome = 'Albanus';

// coloque a seguinte frase em uma variável: It's time
var literalString = `it's time!`;

// Verifique o tipo da variável que contém seu nome
console.log(typeof meuNome);

console.log(variavelComString, numeroDentroDeString, minhaIdade, meuNome + ' ' + meuSobrenome, literalString);