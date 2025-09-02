class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado.`);
            return;
        };

        console.log('Ligou dispositivo!');
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado.`);
            return;
        };

        console.log('Desligou dispositivo!');
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() { // Reescreve o método Ligar da class DispositivoEletronico
        console.log('Você alterou o método ligar');
    }

    nivelBateria() { // Tem somente em Tablet 
        console.log('50% de Bateria');
    }
}


const celular = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
const tablet = new Tablet('Samsung', true);

celular.ligar();
celular.ligar();
celular.desligar();
celular.desligar();

console.log(celular);

tablet.ligar();
tablet.nivelBateria();

console.log(tablet);