var possuiGraduação = true;
var possuiDoutorado = true;

if(true){
    console.log('É verdadeiro');
}

if(possuiGraduação){
    console.log('Verdadeiro');
}else if(possuiDoutorado){
    console.log("possui Doutorado");
}else{
    console.log("Não possui graduação")
}

/*
Truthy and false

**Falsy**
if(false)
if(0) ou -0
if(NaN)
if(Null)
if(undefined)
if('') ou "" ou ``

***Truthy***
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})

***Operador lógico de negação !

if(!true) False
if(!1) False
if(!'') True
if(!undefined) True
if(!!' ') True
if(!!'') False

*/

var nome = '10Kg ' + 10;
if(nome){
    console.log(nome);
}else{
    console.log('Nome não existe');
}

var x = 10;

console.log(x === '10'); // Verifica se os valores e os tipos são iguais

//No &&(e) retorna o primeiro valor False ou o ultimo valor verdadeiro
if((5-5) && (5+5)){
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}

//No ||(ou) retorna sempre o primeiro verdadeiro

var cond2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(cond2);

// SWITCH

var corFavorita = 'Azul';

switch (corFavorita){
    case 'Azul':
        console.log("Olhe para o céu");
        break;
        case 'Amarelo':
            console.log("Olhe para o sol");
            break;
            case 'Verde':
                console.log("Olhe para a floresta");
                break;
        default:
            console.log("Feche os olhos");
            break;
}

//EXERCICIO AULA

//Verifique se sua idade é maior que a de algum parente
//Dependendo do resultado coloque no console 'É maior', 'É igual'

var minhaIdade = 28,
    idadePrimo = 32;

if(minhaIdade > idadePrimo){
    console.log("É maior");
}else if(minhaIdade === idadePrimo){
    console.log("É igual");
}else{
    console.log("É menor");
}

//Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //3 
//(5 - ' ') = 5
console.log(expressao);

//Verifique se as seguintes variáveis são Truthy or Falsy
var nome2 = 'Andre'; //True
var idade2 = 28; // True
var possuiDoutorado2 = false; //False
var empregoFuturo2; //False
var dinheiroNaConta2 = 0; //False

console.log(!!nome2);
console.log(!!idade2);
console.log(!!possuiDoutorado2);
console.log(!!empregoFuturo2);
console.log(!!dinheiroNaConta2);

//Compare o total de habitantes do Brasil com China (valor em Milhões)
var brasil = 207;
var china = 1340;
console.log(brasil > china); //False

//O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)){
    console.log("Verdadeiro");
}else{
    console.log("Falso");
} // Falso

//O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)){
    console.log('Gato' && 'Cão'); //Cão, porque retorna sempre o último verdadeiro no &&
}else{
    console.log('Falso');
}