// Factory Function (Função Fábrica)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    
    sobrenome,
    
    //GETTER
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },

    //SETTER
    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'falando sobre NADA.') {
      return `${nome} está ${assunto}`;
    },
    
    altura: a,
    
    peso: p,
    
    // GETTER
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    }

  };
}

const p1 = criaPessoa("Ryan Lucas", "Pires Campos", 1.63, 65);
const p2 = criaPessoa("Fulano", "Ciclano", 1.8, 75);

p1.nomeCompleto = 'Ryan Lucas Pires Campos';
console.log(p1);
console.log(p1.nomeCompleto);
console.log(p1.fala("falando sobre Javascript"));
console.log(p1.imc);

console.log("\n===== ===== ===== ===== =====\n");

console.log(p2);
console.log(p2.nomeCompleto);
console.log(p2.fala());
console.log(p2.imc);
