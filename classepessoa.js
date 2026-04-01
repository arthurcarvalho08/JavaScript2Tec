class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }


saudar(){
        console.log(`Òlá! meu nome é ${this.nome}, tenho ${this.idade} e trabalho com a profissão ${this.profissao}!`)
    }
fazerAniversario(){
    this.idade += 1;
        console.log(`Feliz aniversário, agora o ${this.nome} tem ${this.idade}.`)
    }
}

let pessoa1 = new Pessoa ("Meikilo", 17, "Jogadô");
pessoa1.saudar();
pessoa1.fazerAniversario();