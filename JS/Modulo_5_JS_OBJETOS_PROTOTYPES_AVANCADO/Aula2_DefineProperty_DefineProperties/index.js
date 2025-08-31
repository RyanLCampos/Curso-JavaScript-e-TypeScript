// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra chave
    value: estoque, // Valor
    writable: false, // Controla se pode ou não ser alterado
    configurable: true, // Configurável (True ou False)
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // Mostra chave
      value: nome, // Valor
      writable: true, // Controla se pode ou não ser alterado
      configurable: true, // Configurável (True ou False)
    },
    preco: {
      enumerable: true, // Mostra chave
      value: preco, // Valor
      writable: true, // Controla se pode ou não ser alterado
      configurable: true, // Configurável (True ou False)
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);

console.log(Object.keys(p1));
