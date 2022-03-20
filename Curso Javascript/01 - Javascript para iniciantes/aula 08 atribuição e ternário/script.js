var numero = 20;
var numero2 = 15;

numero += numero2;
numero -= numero2;
numero *= numero2;
numero /= numero2;
numero **= numero2;

var idade = 32;

var podeBeber = idade >= 18 ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber);

var possuiFaculdade = true;

if(possuiFaculdade)
    console.log('Sim, possui!')
else{
    console.log('Não possui');
}

//Exercícios

//Some 500 ao valor de scroll abaixo
//atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;

//Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário

var possuiCarro = true;
var possuiCasa = true;
var darCredito = possuiCarro && possuiCasa;

console.log(darCredito);