class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método instancia
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        // Não tem acesso aos dados da instancia
        console.log('Trocando Pilha...');
    }
}

const c1 = new ControleRemoto('LG');

c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();

ControleRemoto.trocaPilha();

console.log(c1);