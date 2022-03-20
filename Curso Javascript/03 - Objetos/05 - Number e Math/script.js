const number = 12;
const numb = new Number(12);

//ISNAN
console.log(Number.isNaN(12)); //Porque 12 é um número
console.log(Number.isNaN(numb)); //Porque o que contêm dentro da variável é um número

// PARSE INT e FLOAT

const stg1 = '12.5654';

console.log(parseFloat(stg1));
console.log(parseInt(stg1));

// toFixed - Arredonda os números
console.log(parseFloat(stg1).toFixed());

let valor = -48.49;

valor = valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
console.log(valor);

valor2 = 48.49;

// MATH

console.log(Math.PI);
console.log(Math.abs(valor2)); //Transforma em número absoluto (números positivos)
console.log(Math.ceil(valor2)); //Arredonda qualquer valor quebrado para cima ex: 4.1 = 5
console.log(Math.floor(valor2)); //Arredonda qualquer valor quebrado para baixo ex: 4.9 = 4
console.log(Math.round(valor2)); //Arredonda qualquer valor quebrado para cima ou para baixo, dependendo das suas casas decimais ex: 4.1 = 4, 4.6 = 5
console.log(Math.max(1, 12, 43, 5656, 324213, 4532, 334234, 6,3,23, 423,42,34));

// Random

console.log(Math.floor(Math.random() * 100));

//Por padrão ele retorna números quebrados entre 0 e 1

// Número random entre um intervalo de espaço

console.log(Math.floor(Math.random() * (40 - 20 + 1) + 20));