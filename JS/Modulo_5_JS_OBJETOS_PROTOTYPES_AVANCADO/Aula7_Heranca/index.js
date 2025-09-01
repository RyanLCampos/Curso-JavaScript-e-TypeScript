/*
    Javascript não é uma linguagem que apresenta essa característica em específico, 
    portanto não existe "herança" aqui. O que ocorre, na verdade, é "delegação". 
    Esse seria o termo mais correto para descrever "Herança" em JS.
*/

// Produto -> Aumento e Desconto
// Camiseta = Cor
// Garrafa = Material

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constuctor = Camiseta;

function Garrafa(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    },
  });
}

Garrafa.prototype = Object.create(Produto.prototype);
Garrafa.prototype.constuctor = Garrafa;

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const produto = new Produto('Gen', 120);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const garrafa = new Garrafa('Térmica', 145, 'Aço Inoxidável', 20);

produto.aumento(100); // Adiciona 100
camiseta.aumento(100); // Adiciona 100% do valor
garrafa.estoque = 100; // SETTER

console.log(produto);
console.log(camiseta);
console.log(garrafa);
console.log(garrafa.estoque); // GETTER
