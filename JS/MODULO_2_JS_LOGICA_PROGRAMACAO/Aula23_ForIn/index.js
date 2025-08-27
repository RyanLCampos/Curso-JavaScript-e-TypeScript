const frutas = ['Maçã', 'Banana', 'Uva'];

for (let i in frutas) {
    console.log(frutas[i])
}

const pessoa = {
    nome: 'Ryan Lucas',
    sobrenome: 'Campos',
    idade: 30
};

for(let chave in pessoa) {
    console.log(`Chave: ${chave},\nValor: ${pessoa[chave]}`);
}

