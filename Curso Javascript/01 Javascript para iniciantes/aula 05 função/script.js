function areaQuadrado(lado){
    return lado * lado;
}

console.log(3);

function imc(peso, altura){
    const imc = peso / altura ** 2;

    return imc;
}

console.log(imc(105, 1.73));

function corFavorita(cor){
    if(cor === 'Azul'){
        return 'Eu gosto do céu';
    }else if(cor === 'Verde'){
        return 'Eu gosto da mata';
    }else{
        return 'Eu não gosto de cores';
    }
}

console.log(corFavorita('Azul'));

addEventListener('click', function(){
    console.log('Oi');
});

function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Por favor informe sua idade';
    }

    if(idade >= 60){
        return true;
    }else{
        return false;
    }
}

console.log(terceiraIdade(59));

function faltaVisitar(paisesVisitados){
    const totalPaises = 193;

    return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(50));

// Exercícios de funções

//Crie uma função para verificar se um valor é truthy
function verificarBooleanos(dado){
    return !!dado;
}

console.log(verificarBooleanos(NaN));

//Crie uma função matemática que retorne o perímetro de um quadrado
//Lembrando que o perímetro é a soma dos 4 lados do quadrado
function perimetroQuadrado(lado){
    const perimetro = lado * 4;
    return perimetro;
}

console.log(perimetroQuadrado(4));

//Crie uma função que retorne o seu nome completo
//ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
    const completo = `${nome} ${sobrenome}`;

    return completo;
}

console.log(nomeCompleto('Carlos André', 'Albanus'));

//Crie uma função que verifique se um número é par
function verificarPares(numero){
    if(numero % 2 == 0){
        return 'Par';
    }else{
        return 'Ímpar';
    }
}

console.log(verificarPares(6));

//Crie uma função que retorne o tipo de dado
// passado no argumento (typeof)
function tipoDeDado(dado){
    return typeof(dado);
}

console.log(tipoDeDado('60'));

//addEventListener é uma função nativa do Javascript
//o primeiro parâmetro é o evento que ocorre
//o segundo é o callback
//Utilize essa função para mostrar no console o seu nome completo quando ocorrer o evento 'scroll'
addEventListener('scroll', function(){
    console.log('Carlos André');
});

//Corrija o erro
var totalP = 193;

function precisoVisitar(paisesVis){
    return `Ainda faltam ${totalP - paisesVis} países para visitar`;
}

function jaVisitei(paisesVis){
    return `Já visitei ${paisesVis} do total de ${totalP} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));