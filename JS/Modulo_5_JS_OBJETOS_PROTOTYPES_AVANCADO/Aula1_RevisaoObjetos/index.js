// Primeira Forma -> Literal
const pessoa = {
  nome: 'Ryan Lucas',
  sobrenome: 'Pires Campos',
  idade: 22,
  falarNome() {
    console.log(this.nome + ' ' + this.sobrenome);
  },
  getDataNascimento() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
  },
};

console.log('Pessoa Inicial: ');
console.log(pessoa);

// Segunda Forma -> Construtor
const frutas = new Object();
frutas.nome = 'Banana';
frutas.cor = 'Amarelo';
frutas.falarDetalhes = function () {
  console.log(`Nome: ${this.nome}\nCor: ${this.cor}`);
};

console.log('\nFrutas Inicial: ');
frutas.falarDetalhes();

// Primeira Forma
console.log('\nPrimeira Forma: ');
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// Segunda Forma
console.log('\nSegunda Forma: ');
const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa['sobrenome']);

// Utilizando Função Pessoa
console.log('\nChamando função de objeto (Pessoa): ');
pessoa.falarNome();
console.log(pessoa.getDataNascimento());

// Apagando Chaves
console.log('\nDeletando Chave -> Cor');
delete frutas.cor;

console.log(frutas);

// Factory Functions / Constructor Functions / Classes
console.log('\nParte -> Factory Functions / Constructor Functions');
console.log('\nFactory Functions:');

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa('Fulano', 'Ciclano');

console.log(p1.nomeCompleto);

console.log('\nConstructor Functions:');

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this); trava o objeto (não é possivel manipular)
}

const p2 = new Pessoa('Fulano2', 'Ciclano2');

p2.fala = function() {
    console.log('Olá');
};

p2.fala();
console.log(p2);