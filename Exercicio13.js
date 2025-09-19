let dadosPessoais = {
    nome : "Ana",
    idade : 17
};

let dadosProfissionais={
    cargo : "CEO",
    empresa : "WEG"
};

let funcionarioCompleto = {...dadosPessoais, ...dadosProfissionais};

console.log (funcionarioCompleto);