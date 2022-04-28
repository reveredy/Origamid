//Closures
//A função2 possui 4 escopos. O primeiro é o local, com acesso ao item 3. O segundo escopo dá acesso ao item 2, esse escopo é chamado de Clojure(função 1)(escopo de função dentro da função). O terceiro escopo é o script com acesso ao item 1 e o quarto escopo é o Global/Window.

// let item1 = 1;
// function funcao1(){
//     let item2 = 2;
//     function funcao2(){
//         let item3 = 3;
//         console.log(item1);
//         console.log(item2);
//         console.log(item3);
//     }
//     funcao2();
// }

// console.log(funcao1);

function contagem(){
    let total = 0;
    return function incremento(){
        total++;
        console.log(total)
    }
}

const ativarIncremento = contagem();
console.log(ativarIncremento());