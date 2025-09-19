let pessoa = {
    nome: "Ana",
    anoNascimento: 2008,
    apresentar: function(){
        this.idade = 2025 - this.anoNascimento
        return "Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos."; 
    }
};

console.log(pessoa.apresentar());

