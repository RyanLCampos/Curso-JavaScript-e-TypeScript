function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra chave
    configurable: true, // Configurável (True ou False)
    get: function() {
        return estoquePrivado;
    },
    set: function(valor) {
        if(typeof valor !== 'number'){
            throw new TypeError('Tipo precisa ser numérico.');
        }

        estoquePrivado = valor;
    }
  });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}

const p1 = new Produto('Camiseta', 20, 3);
const p2 = criaProduto('Calça');

console.log(Object.keys(p1));
console.log(Object.keys(p2));
