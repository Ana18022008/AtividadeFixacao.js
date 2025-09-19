function Guerreiro (nome, vida){
    this.nome = nome;
    this.vida = 100;
}

Guerreiro.prototype.atacar = function(){
 console.log ("Atacando!");
}

let guerreiro1 = new Guerreiro ("Arthur",100);
console.log (guerreiro1, guerreiro1.atacar());
let guerreiro2 = new Guerreiro ("Lancelot",100);
console.log (guerreiro2, guerreiro2.atacar());