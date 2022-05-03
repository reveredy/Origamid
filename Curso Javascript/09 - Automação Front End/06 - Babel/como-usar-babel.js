//Babel

// Compilador
// Transforma código novo em código antigo. EX: const nome = 'Andre';
// vira var nome = 'Andre';

// Browser suporte
// Pra que um browser possa suportar algo novo de Javascript é preciso que ele esteja
// atualizado, mas nem todo usuário possui a última versão do browser instalada.

// Can I Use
// O site https://caniuse.com/ mostra em quais browsers a novidade está disponível ou não.

// Polyfill vs Transpiler

//Polyfill
// Cria métodos/ funções com o mesmo nome das atuais, porém utilizando código antigo para permitir o uso em browsers que não possuem a API.

//Transpiler
// Transforma código novo em código antigo. Ou seja, transforma const em var.

//Instalar Babel
// https://babel.io/docs/en/usage

//$ npm install --save-dev @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-loader
//Instala o Babel, as configurações padrões e o loader para o webpack