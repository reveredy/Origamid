//validar CEP
let regexp = /\d{5}[\s-]?\d{3}/g;

const ceps = [
    '00000-000',
    '00000 000',
    '00000000'
]

for(cep of ceps){
    if(cep.match(regexp)){
        console.log(cep);
    }
}

///////////////////////////////////////////////////////////////////
// Validar CPF


const cpfs = [
    '000.000.000-00',
    '000-000-000-00',
    '000.000.000.00',
    '000 000 000 00',
    '000000000-00',
    '00000000000'
];

regexp = /(?:\d{3}[.-\s]?){3}\d{2}/g;

for(cpf of cpfs){
    if(cpf.match(regexp)){
        console.log(cpf);
    }
}

///////////////////////////////////////////////////////////////////
//Validar CNPJ

const cnpjs = [
    '00.000.000/0000-00',
    '00000000000000',
    '00-000-000-0000-00',
    '00.000.000/000000',
    '00.000.000.000000',
    '00.000.000.0000.00',
    '00 000 000 0000 00'
]

regexp = /\d{2}[.-\s]?(?:\d{3}[.-\s]?){2}\/?\d{4}[./-\s]?\d{2}/g;

for(cnpj of cnpjs){
    if(cnpj.match(regexp)){
        console.log(cnpj);
    }
}

///////////////////////////////////////////////////////////////////
//Validar Telefone

const telefones = [
    '+55 11 99999-9999',
    '+55 11 99999 9999',
    '+55 11 999999999',
    '+55 11999999999',
    '+5511999999999',
    '5511999999999',
    '11 99999-9999',
    '11 99999 9999',
    '(11) 99999-9999',
    '(11) 99999 9999',
    '11-99999-9999',
    '11 99999 9999',
    '11999999999',
    '1199999999',
    '999999999',
    '99999-9999',
    '(11)999999999',
    '99999 9999',
    '9999 9999'
]

regexp = /(?:\+?55\s?)?\(?(?:\d{2}\)?[\s-]?)?\d{4,5}[-\s]?\d{4}/g;

for(telefone of telefones){
    if(telefone.match(regexp)){
        console.log(telefone);
    }
}

///////////////////////////////////////////////////////////////////
//Validar email

const emails = [
    'email@gmail.com',
    'email@gmail.com.org',
    'email-email@gmail.com',
    'email_email@gmail.com',
    'email.email23@gmail.com.br',
    'email.email23@empresa-sua.com.br',
    'c@contato.cc'
];

regexp = /[\w.-]+@[\w-]+\.[\w.-]+/gi;

for(email of emails){
    if(email.match(regexp)){
        console.log(email);
    }
}

///////////////////////////////////////////////////////////////////
//Validar Tag

const tags = [
    '<div>Isso é uma div</div>',
    '<div class="ativa">Essa div está ativa</div>',
    '<img src="imagem">',
    '<ul class="ativa">',
    '<li>Essa está ativa</li>',
    '</ul>'
]

regexp = /<\/[\w\s="']+\/?>/gi;

for(tag of tags){
    if(tag.match(regexp)){
        console.log(tag);
    }
}