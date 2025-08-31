// Construtora -> molde (classe)

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// Usar prototype permite compartilhar métodos entre todas as instâncias,
// evitando recriar funções em memória a cada new.

// Pessoa.prototype === pessoa1.__proto__

/*
    Vantagens:
    - Eficiência de memória (métodos únicos, não duplicados).
    - Consistência (todas as instâncias usam a mesma versão do método).
*/

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

// Instância
const pessoa1 = new Pessoa('Ryan Lucas', 'Pires Campos'); // <- Pessoa = Função Construtora
const data = new Date(); // <- Date = Função Construtora
