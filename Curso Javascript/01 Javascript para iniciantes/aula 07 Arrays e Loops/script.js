var videoGames = ['Super Nintendo', 'PlayStation 4', 'Xbox 360', 'DS3'];

console.log(typeof videoGames);

for(let i = 1; i <= 10; i++){
    console.log(i);
}

var n = 0;

while(n < 10){
    console.log(n);
    n++;
}

for(let i = 0; i < videoGames.length; i++){
    console.log(videoGames[i]);
    if(videoGames[1] === 'PlayStation 4'){
        console.log(videoGames[i]);
        break; // Para imediatamente o loop e sai dele
    }
}

videoGames.forEach(function(item){
    console.log(item);
});

//Exercícios
//Crie um array com os anos que o Brasil ganhou a copa
//1959, 1962, 1970, 1994, 2002

var copasDoBrasil = [1959, 1962, 1970, 1994, 2002];

//Interaja com o array utilizando um loop, para mostrar
//no console a seguinte mensagem, 'O Brasil ganhou a copa de ${ano}'

copasDoBrasil.forEach(function(ano){
    console.log(`O Brasil ganhou a copa de ${ano}`);
});

//Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for(let i = 0; i < frutas.length; i++){
    if(frutas[i] === 'Pera'){
        console.log(frutas[i] + ', na posição ' + i);
        break;
    }
}

//Coloque a última fruta do array acima em uma variável,
//sem remover a mesma do array

var ultimaFruta = frutas[frutas.length-1];

console.log(ultimaFruta);