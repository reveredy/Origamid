//Webpack

const { $dataMetaSchema } = require("ajv");

//Bundler
//Agrupa/ processa diversos arquivos e otimiza os mesmos

//Altamente configurável
//Por isso é complexo

//https://webpack.js.org

////////////////////////////////////////////////////////////////////////////////////////

//$ npm install --save-dev webpack webpack-cli
//Para instalar o webpack e a cli do mesmo. Ter package.json antes

//$ npm webpack .js/script.js -o./main.js
//Irá agrupar todo o código, otimizar e mais. Utilizar npx é a mesma coisa que utilizar node_modules/.bin/webpack. Facilita para utilizarmos cli's instaladas localmente ao invés de globalmente.

////////////////////////////////////////////////////////////////////////////////////////////
//NPM SCRIPTS

//Permite definirmos uma linha de comando inteira, que será ativada com npm run nomeScript.
//Não precisamos utilizar o npx aqui.

//ck --mode development --watch ./js/script.js --output ./main.js"

// SCRIPTS EXTERNOS
// Podemos facilmente importar scripts externos instalando os mesmos através do NPM e utilizando o webpack para o bundler final.

//$ npm install jquery
//$ npm install lodash

// import $ from 'jquery'
// import _ from 'lodash'

// $('nav'.hide());

// _.difference(['Banana', 'Morango', 'Uva'], ['Banana', 'Morango', 'uva']);
// Uva

import $ from "jquery";
import _ from "lodash";
