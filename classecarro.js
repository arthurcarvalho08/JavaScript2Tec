class Carro{
    constructor(pneu, rotacao, velocidade){
        this.pneu = pneu;
        this.rotacao = rotação;
        this.velocidade = this.velocidade;
    }


explicar(){
        console.log(`Òlá! seu veículo precisa de uma troca de ${this.pneu}, verifique a ${this.rotacao} de seu motor e cuidado com a sua ${this.velocidade}!`)
    }
fazerManutenção(){
    this.idade += 1;
        console.log(`Seu veículo precisa de manutenção no ${this.pneu} e no marcador de ${this.rotacao}.`)
    }
}

let carro1 = new Carro ("Pneu", "Rotação", "Velocidade");
carro1.explicar();
carro1.fazerManutenção();