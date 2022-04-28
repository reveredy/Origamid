//Referência da seleção
//É possível utilizarmos o $& durante o momento da substituição para fazermos uma referência à seleção

//Procura: Java
let regexp = /Java/g;

let frase = 'PHP e Java são linguagens diferentes';
frase = frase.replace(regexp, '--$&Script');
console.log(frase);

//Grupo de captura
//É possível definirmos diferentes grupos de captura, que poderão
//ser referenciados durante a substituição. Basta envolvermos um 
//grupo entre () parênteses. A referência de cada grupo será feita com $n, sendo o primeiro $1.

//Procura: sequência alfanumérica, seguida
//de @, seguido de alfanuméricos ou .
regexp = /(\w+)@([\w.]+)/gi;
frase = 'andre@email.com.br';
frase = frase.replace(regexp, '$1@gmail.com');
console.log(frase);

regexp = /(\w+),\s([\w]+)/g;
frase = 'Albanus, Carlos\nRibeiro, Tairini';
frase = frase.replace(regexp, '$2 $1');
console.log(frase);

//Mais do que captura apenas
//Um grupo também serve para agruparmos uma sequência de caracteres que queremos em repetição

//Procura: Qualquer sequência de ta
regexp = /(ta)+/gi;
frase = 'Tatata, tata, ta';
frase = frase.replace(regexp, 'Pá');
console.log(frase);

//?: ignora o grupo de captura (Não cria eles)

//Positive lookahead
//Faz a seleção dos itens que possuírem o padrão dentro de (?=)
//à sua frente. Apesar de utilizar () parênteses o positive
// lookahead não captura grupo

//Procura: dígitos em sequência, que
//possuirem px, sem selecionar o px.
regexp = /\d(?=px)/g; //Seleciona todos os dígitos que tenham na sua frente o px
frase = '2em, 4px, 5%, 2px, 1px';
frase = frase.replace(regexp, 'X');
console.log(frase);

//Também temos a negação !