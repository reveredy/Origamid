//Regexp Constructor
//Toda regexp é criada com o constructor RegExp() e herda as suas prioridades e métodos. Existem diferenças na sintaxe de uma RegExp criada diretamente em uma variável e de uma passada como argumento de RegExp.

let regexp = /\w+/gi;

//Se passarmos uma string, não precisamos dos //
//e devemos utilizar \\ para meta characters, pois é necessário
//escapar o especial. As flags são o segundo argumento

const regexObj1 = new RegExp('\\w+', 'gi');//Pega todos os alfanuméricos
const regexObj2 = new RegExp(/\w+/, 'gi');

console.log('Javascript Linguagem 101'.replace(regexObj1, 'X'));

//Propriedades
//Uma regexp possui propriedades com informações sobre flags e o conteúdo da mesma

console.log(regexp.flags);       //'gi'
console.log(regexp.global);      //true
console.log(regexp.ignoreCase);  //true
console.log(regexp.multiline);   //false
console.log(regexp.source);      //\w+

///////////////////////////////////////////////////////////////////
//Métodos
//regexp.tested

//O método test() verifica se existe ou não uma ocorrência da busca. Se existir ele retorna true. A próxima vez que chamarmos o mesmo, ele irá começar do index em que parou no último true.

regexp = /Java/g;
let frase = 'JavaScript, TypeScript, CoffeeScript e Java';

console.log(regexp.lastIndex); //0
console.log(regexp.test(frase)); //true

console.log(regexp.lastIndex); //4
console.log(regexp.test(frase)); //true

console.log(regexp.lastIndex); //17
console.log(regexp.test(frase)); //false

console.log(regexp.lastIndex); //0 (reinicia 1x após encontrar fase)
console.log(regexp.test(frase)); //true

///////////////////////////////////////////////////////////////////
//regexp.exec()
//o exec() diferente do test(), irá retornar uma Array com mais informações do que apenas um valor booleano.

regexp = /Script/g;

// console.log(regexp.exec(frase));
// //['Script', index: 4, input: 'JavaScript, TypeScript, CoffeeScript e Java', groups: undefined]
// console.log(regexp.exec(frase));
// //['Script', index: 16, input: 'JavaScript, TypeScript, CoffeeScript e Java', groups: undefined]
// console.log(regexp.exec(frase));
// //['Script', index: 30, input: 'JavaScript, TypeScript, CoffeeScript e Java', groups: undefined]
// console.log(regexp.exec(frase));
// //null
// console.log(regexp.exec(frase));
// //Reinicia
let regextResult;
while((regextResult = regexp.exec(frase)) !== null ){
    console.log(regextResult);
}

///////////////////////////////////////////////////////////////////
//str.match()
//O match() é um método de strings qie pode receber como argumento uma regexp. Existe uma diferença de resultado quando utilizamos a flag g ou não

regexp = /\w{2,}/g;
let regexSemG = /\w{2,}/;
frase = 'JavaScript, TypeScript, CoffeeScript e Java';

console.log(frase.match(regexp, frase)); //Retorna todas as palavras encontradas
console.log(frase.match(regexSemG, frase)); //Retorna somente 1 palavra

///////////////////////////////////////////////////////////////////
//str.split()
//O split() serve para distribuirmos uma string em uma array,
//quebrando a string no argumento que for passado. Este método
//irá remover o match da array final

console.log(frase.split(', '));
console.log(frase.split(/Script/g));

///////////////////////////////////////////////////////////////////
//str.replace()
//O método replace() é o mais interessante por permitir a
// utilização de funções de callback para cada match que ele
// der com a RegExp

let tags = `
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    `;

    regexp = /(?<=<\/?)\w+/g;
    console.log(tags.replace(regexp, 'div'));

    regexp = /<li/g;

tags = `
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
`;

console.log(tags.replace(regexp, '$& class="ativa"'));//Faz referencia a captura

///////////////////////////////////////////////////////////////////
//Grupos de  captura
//É possível definirmos quantos grupos de captura quisermos.

let emails = `
    empresa@email.com
    contato@email.com
    suporte@email.com
`;

regexp = /(\w+@)[\w.]+/g;

console.log(emails.replace(regexp, '$1gmail.com'));

///////////////////////////////////////////////////////////////////
//Callback
//Para substituições mais complexas, podemos utilizar um callback
//como segundo argumento do replace. O valor do return será o que irá substituir cada match.

emails = `
    empresa@email.com
    contato@grma.com
    suporte@pedro.com
`;

regexp = /(\w+@)([\w.]+)/g;

const result = emails.replace(regexp, function(...args){
    if(args[2] === 'email.com'){
        return args[1] + 'hotmail.com';
    }else if(args[2] === 'grma.com'){
        return args[1] + 'gmail.com';
    }else if(args[2] === 'pedro.com'){
        return args[1] + 'google.com';
    }
});

console.log(result);