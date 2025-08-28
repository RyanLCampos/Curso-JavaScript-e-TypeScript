// Função Construtora -> objetos
// Função Fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa (nome, sobrenome){

    // Atributos ou métodos privados (Utilizando const)
    const cpf = '123.456.789-10';

    const verificaCPF = function () {
        if(cpf.length === 14) true;
    };

    // Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log(`${this.nome} executa método.`);
    };
}

const p1 = new Pessoa('Ryan Lucas', 'Pires Campos');
const p2 = new Pessoa('Fulano', 'Ciclano');

console.log(p1.nome + ' ' + p1.sobrenome);
console.log(p2.nome + ' ' + p2.sobrenome);

p1.metodo();