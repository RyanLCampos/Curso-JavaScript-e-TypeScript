class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar () {
        console.log(`${this.nome} está falando.`);
    }

    comer () {
        console.log(`${this.nome} está comendo.`);
    }

    beber () {
        console.log(`${this.nome} está bebendo.`);
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = () => console.log(`${this.nome} está falando`);

const p1 = new Pessoa('Ryan Lucas', 'Pires Campos');
const p2 = new Pessoa2('Fulano', 'Ciclano');

p1.falar();
p1.comer();
p1.beber();

console.log();

p2.falar();