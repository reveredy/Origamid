//Utilizando o forEach no array abaixo,
//some os valores de taxa e os valores de recebimento

const transacoes = [{
    descricao: 'Taxa do pão',
    valor: 'R$ 39',
},
{
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
},
{
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
},
{
    descricao: 'Taxa do Banco',
    valor: 'R$ 129'
},
{
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49'
}];

let totalTaxas = 0;
let totalRecebidos = 0;
transacoes.forEach((taxa) =>{

     if(taxa.descricao.slice(0, 4) === ('Taxa')){
         totalTaxas += +taxa.valor.replace('R$ ', '');
     }else{
        totalRecebidos += +taxa.valor.replace('R$ ', '');
     }
})

console.log(totalTaxas);
console.log(totalRecebidos);

//Retornar uma array com a lista abaixo

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

//Substitua todos os span's por a's
let html = '<ul><li><span>Sobre</span></li><li><span>Produtos</span></li><li><span>Contato</span></li><ul>'

html = html.split('span').join('a');
console.log(html);

//Retorne o último caracter da frase
const frase1 = 'Melhor do ano!';

console.log(frase1[frase1.length-1]);

//Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', 'TAXA DO PÃO', '   taxa do mercado   ', 'depósito Bancário', 'TARIFA especial'];

let numeroDeTaxas = 0;

transacoes2.forEach((item) => {
    item = item.trim().toLowerCase().slice(0, 4);
    if(item === 'taxa'){
        numeroDeTaxas++;
    }
})

console.log(numeroDeTaxas);