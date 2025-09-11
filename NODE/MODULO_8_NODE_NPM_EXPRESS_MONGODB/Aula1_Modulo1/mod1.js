class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Fulano';
const sobrenome = 'Ciclano';

/*
    Formas de exportar:

    exports.Pessoa = Pessoa;
    module.exports.nome = 'Ryan Lucas';
    this.sobrenome = 'Qualquer coisa';
*/

module.exports = {
    nome, sobrenome, Pessoa
};

