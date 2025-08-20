// Função que cria objeto pessoa
function criaPessoa (nome, idade) {
    return {
        nome, idade,

        descricao() {
            console.log(`${this.nome} tem ${this.idade} anos de idade.`);
        }
    };
}

// Cria objeto pessoa

const pessoa2 = {
    nome: 'Fulano Ciclano',
    idade: 52,

    descricao() {
        console.log(`${this.nome} tem ${this.idade} anos de idade.`);
    }
};

const pessoa = criaPessoa('Ryan Lucas', 22);

console.log(pessoa);
pessoa.descricao();


console.log(pessoa2);
pessoa2.descricao();