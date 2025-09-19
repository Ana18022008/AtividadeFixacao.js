function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.descrever = function(){
    return this.nome + " custa R$" + this.preco;
}

let salgado = new Produto ("Coxinha", 7.93);
console.log (salgado.descrever());