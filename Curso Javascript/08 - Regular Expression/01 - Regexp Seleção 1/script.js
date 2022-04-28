// Regexp ou Regex são expressões utilizadas para realizarmos
// buscas / substituições de padrões em Strings. Os padrões devem
// ser colocados entre //. Geralmente vamos utilizá-las nos métodos
// .replace() e .split().

// Procura: a
const padraoRegex = /J/;

const texto = 'Javascript';
const novoTexto = texto.replace(padraoRegex, 'B');

console.log(novoTexto);
//Retorna BavaScript

///////////////////////////////////////////////////////////////////
//Flags

//Flag: g (Global)
// As flags irão modificar como a expressão é interpretada. Uma das
// mais utilizadas é a g, que significa "Global", ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.

//Procura: Todos os a's
let regexp = /a/g;

let frase = 'Javascrit';
frase = frase.replace(regexp, 'i');
console.log(frase);

///////////////////////////////////////////////////////////////////
//Flag: i (case insensitive);

// Com o i informamos que devem ser ignoradas as diferenças
// entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A.

regexp = /Pe/gi;

frase = 'Perdeu Perdido';

frase = frase.replace(regexp, 'Ba');
console.log(frase);

///////////////////////////////////////////////////////////////////
// Character Class
// Se colocarmos os caracteres entre colchetes, estamos definindo
// uma classe. /[ab]/ irá procurar por a ou por b.
//Separa separadamente todos os as e is

//Procura: Todo a, A, i, I
regexp = /[ai]/gi;

frase = "Javascript";
frase = frase.replace(regexp, 'u');
console.log(frase);
//Juvuscrupt

//tambem podemos selecionar caracteres especiais
//Procura: todos os pontos
regexp = /[.]/gi; //Se passarmos o . fora dos colchetes ele seleciona todos os caracteres da frase
regexp = /\[/gi; //Outra maneira de escapar caracteres especiais

//Podemos utilizar caracteres que não são alfanuméricos dentro da
//classe. Mas fique atento, pois existem diversos casos especiais
//para os mesmos.

//Procura: - ou .
regexp = /[-.,]/g;

frase = 'Não é considerada como sendo ameaçada, embora seja apreciada como ave de gaiola. Suas populações estão diminuindo e algumas delas já estão extintas. Em Trinidad foi realizado um processo de reintrodução bem sucedido.';

frase = frase.replace(regexp, '');
console.log(frase);

regexp = /[nl]/g;
regexp = /bra[sz]il/;

//De A à Z
//O traço - dentro de [] pode servir para definirmos um alcance.
//[A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance.

//Buscar por itens de a à z
regexp = /[a-z]/g;

frase = 'Javascript é a linguagem.';
frase = frase.replace(regexp, '0');
console.log(frase);

//Busca por itens de a à z e A à Z
regexp = /[a-zA-Z]/g;
frase = 'Javascript é a linguagem.';
frase = frase.replace(regexp, '1');
console.log(frase);

frase = '111.222.333-81';
regexp = /[0-9]/g;

frase = frase.replace(regexp, 'X');
console.log(frase);

//Negar (não pegar determinado caracter)
//Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a];

regexp = /[^a]/g;
frase = 'Não é considerada como sendo ameaçada, embora seja apreciada como ave de gaiola. Suas populações estão diminuindo e algumas delas já estão extintas. Em Trinidad foi realizado um processo de reintrodução bem sucedido.';

frase = frase.replace(regexp, 'X');
console.log(frase);

///////////////////////////////////////////////////////////////////
//Ponto
//O ponto . irá selecionar qualquer caracter, menos quebras de linha.

//Procura: todos os caracteres menos quebra de linha
regexp = /./g;

frase = 'Não é considerada como sendo ameaçada, embora seja apreciada como ave de gaiola. Suas populações estão diminuindo e algumas delas já estão extintas. Em Trinidad foi realizado um processo de reintrodução bem sucedido.';
frase = frase.replace(regexp, 0);
console.log(frase);

///////////////////////////////////////////////////////////////////
// Escapar Especiais

//Caracteres especiais como o ponto ., podem ser escapados 
//utilizando a barra \, assim este não terá mais a sua função
//especial e será tratado como literal.

//Lista de carateres especiais

// +*?^$\.[]{}()|/

//Procura: Todos os pontos
regexp = /[.]/g;
regexpAlternativa = /\./g;
frase = '000.000.000-91';
frase = frase.replace(regexpAlternativa, '-');
console.log(frase);

///////////////////////////////////////////////////////////////////

//Word

// O \w irá selecionar qualquer caracter alfanumérico e o underline
//É a mesma coisa que [A-Za-z0-9_]

//Utilizando o \W maiúsculo ele vai negar, selecionando tudo que não for alfanumerico

regexp = /\w/g;
frase = 'Não é considerada como sendo ameaçada, embora seja apreciada como ave de gaiola. Suas populações estão diminuindo e algumas delas já estão extintas. Em Trinidad foi realizado um processo de reintrodução bem sucedido.';
frase = frase.replace(regexp, '-');
console.log(frase);

///////////////////////////////////////////////////////////////////

// d seleciona dígito e D maiúsculo nega o que for dígito
regexp = /\d/g;
frase = 'asd12351k123ubi213b12v31o,.34,.1@';
frase = frase.replace(regexp, '-');
console.log(frase);

regexp = /\D/g;
frase = 'asd12351k123ubi213b12v31o,.34,.1@';
frase = frase.replace(regexp, '-');
console.log(frase);

// s seleciona espaços, tab e quebra de linha e S maiúsculo nega espaços, quebra de linhas e tab
regexp = /\s/g;
frase = 'asd1 2351 k12  3ubi213 b12v31o,.34,.1@';
frase = frase.replace(regexp, '-');
console.log(frase);

regexp = /\S/g;
frase = 'asd12351k123ubi213b12v31o,.34,.1@';
frase = frase.replace(regexp, '-');
console.log(frase);

///////////////////////////////////////////////////////////////////
// Quantificador

//Procura: onde contém 2 is
regexp = /i{2}/g;
frase = 'asd12351k123ubiiiiii213b12v31o,.34,.1@';
frase = frase.replace(regexp, 'o');
console.log(frase);

//Quantificador min e max

regexp = /[i{2, 4}]/g;
frase = 'asd12iiii351k123ubi213b12v31o,.34,.1@';
frase = frase.replace(regexp, '-');
console.log(frase);

// Procura: Letras seguidos com 1 caracter ou mais
regexp = /[i{2,}]/g;
frase = 'asd12iiii351k123ubi213b12v31o,.34,.1@';
frase = frase.replace(regexp, '-');
console.log(frase);

// Mais +
// O sinal de + significa que devemos selecionar quando existir
// uma ou mais ocorrências

//Procura: dígitos em ocorrência de um ou mais
regexp = /\d+/g;

frase = 'asd12iiii351k123ubi213bsad123123sxcasdg12v31o,.34,.1@';
frase = frase.replace(regexp, '0');
console.log(frase);

//Procura: Começa com d, seguido por uma ou mais letras.
regexp = /d\w+/g;

frase = 'asd12iiii351k123ubi213bsad123123sxcasdg12v31o,.34,.1@';
frase = frase.replace(regexp, '0');
console.log(frase);

// Asterisco *
// O sinal * significa que devemos selecionar quando existir 0
// ou mais ocorrências

//Procura: Começa com d, seguindo de 0 ou mais letras.
regexp = /d\d+/g;

frase = 'asd12iiii351k123ubi213bsad123123sxcasdg12v31o,.34,.1@';
frase = frase.replace(regexp, ',');
console.log(frase);

///////////////////////////////////////////////////////////////////
// Opcional ?

// Procura: Por regex com p opcional
regexp = /regexp?/g;
frase = 'Qual é o certo, regex ou regexp?';
frase = frase.replace(regexp, 'Regular expression');
console.log(frase);

///////////////////////////////////////////////////////////////////
// Alternado |
// O sinal | irá selecionar um ou outro. Java | PHP

// Procura: Por uma dessas palavras
regexp = /qual | certo | regex?/gi;
frase = 'Qual é o certo, regex ou regexp?';
frase = frase.replace(regexp, '');
console.log(frase);

///////////////////////////////////////////////////////////////////
// Word boundary \b

// O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.

// Procura: propor (case insensitive)
regexp = /\bpropor\b/gi;
frase = 'propor, porporcional. Qual é o certo, regex ou regexp?';
frase = frase.replace(regexp, '');
console.log(frase);

// Procura: Dígitos e, sequência, que estejam isolados
regexp = /\b\d+\b/gi;
frase = '12 32propor, 232 p2orporcional. Qual é o certo, regex ou regexp?';
frase = frase.replace(regexp, '');
console.log(frase);


// Not Word Boundary \B

// É o contrário do \b
regexp = /\B\d+\B/gi;
frase = '12_2propor, porpo32rcional. Qu3312al é o certo, 3332 regex ou regexp?';
frase = frase.replace(regexp, '');
console.log(frase);


//ANCHOR BEGINNING
// Com o ^ é possível informar que a busca deve ser iniciada no início da linha

//Procura: sequência de alfanuméricos
//no início da linha.
regexp = /^\w+/g; //linha que comece com alfanumérico do 1 em diante
frase = '12_2propor, porpo32rcional. Qu3312al é o certo, 3332 regex ou regexp?';
frase = frase.replace(regexp, '0');
console.log(frase);

//Anchor End
//Com o $ é possível informar que a busca deve ser iniciada no
// final da linha.

//Procura: sequência de alfanuméricos
//no final da linha.
regexp = /\w+$/gm; //linha que comece com alfanumérico do 1 em diante
frase = '12_2propor, porpo32rcional. Qu3312al é o certo, 3332 regex ou regexp';
frase = frase.replace(regexp, '0');
console.log(frase);

//TAG m (multiline)

//Procura: Em todas as linhas
regexp = /^\w+/gm; //linha que termine com alfanumérico do 1 em diante
frase = '12_2propor, porpo32rcional. Qu3312al é o certo, 3332 regex ou regexp?';
frase = frase.replace(regexp, '0');
console.log(frase);

///////////////////////////////////////////////////////////////////
//Line feed \n

//O \n irá selecionar o final de uma linha, quando criamos uma nova

regexp = /\n/g;
frase = '12_2propor, porpo32rcional. \nQu3312al é o certo, 3332 regex ou regexp?';
frase = frase.replace(regexp, '0');
console.log(frase);

//\t seleciona tabs

///////////////////////////////////////////////////////////////////
//Unicode \u

//O \u irá selecionar o respectivo caracter unicode, de acordo com
//o código passado em \uXXXX. Ex: \u0040 seleciona o @.

//Procura @ ou c
regexp = /\u0040|\u00A9/g;
frase = '12_2propor, porpo32@@@rcional. \nQu3312al é o certo, 3332 regex ou regexp?';
frase = frase.replace(regexp, '0');
console.log(frase);