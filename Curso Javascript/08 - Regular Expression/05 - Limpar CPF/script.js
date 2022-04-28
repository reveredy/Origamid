const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
    return elements.map(element => element.innerText)
}

const limparCpf = (cpf) => {
    return cpf.replace(/\D/g, '');
}

const estruturarCpf = cpf => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3}(\d{2}))/g, '$1.$2.$3-$4');
}

const formatarCPFS = cpfs => {
    return cpfs.map(limparCpf).map(estruturarCpf);
}

const substituirCPFS = (cpfsElements) => {
    const cpfs = elementsInnerText(cpfsElements);
    const cpfsFormatados = formatarCPFS(cpfs);
    
    cpfsElements.forEach((element, index) => {
        element.innerText = cpfsFormatados[index];
    })
}

substituirCPFS(cpfsList);