const pessoa = {
    nome: 'Ryan Lucas',
    sobrenome: 'Campos',
    idade: 22,
    endereco: {
        rua: 'Av Brasil',
        numero: 546
    }
};


// Atribuição Normal
const nomeAtribuicaoNormal = pessoa.nome; 
console.log(nomeAtribuicaoNormal);

// Atribuição via desestruturação
const { nome: nomeAtribuicaoViaDesestruturacao = '', sobrenome, idade } = pessoa;
console.log(nomeAtribuicaoViaDesestruturacao, sobrenome, idade);

const { endereco: { rua: r = 'Av Fulano', numero } } = pessoa;
console.log(r, numero);
