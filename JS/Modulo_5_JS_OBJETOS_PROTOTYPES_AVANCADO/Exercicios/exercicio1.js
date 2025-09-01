// Validar CPF
/*
    Exemplo: 705.484.450-52

    7x  0x  5x  4x  8x  4x  4x  5x  0x
    10  9   8   7   6   5   4   3   2
    70  0   40  28  48  20  16  15  0 = 237

    11 - (237 % 11) = 5 (Primeiro Digito)
    Se o digito for maior que 9, consideramos 0.

    7x  0x  5x  4x  8x  4x  4x  5x  0x  5x 
    11  10  9   8   7   6   5   4   3   2
    77  0   45  32  56  24  20  20  0   10 = 283

    11 - (284 % 11) = 2 (Segundo Digito)
    Se o digito for maior que 9, consideramos 0.
*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequence()) return false;

    const cpfArray = Array.from(this.cpfLimpo).map(Number);
    const digitosFinais = cpfArray.slice(-2);


    const digito1 = this.obtemDigito(cpfArray.slice(0, 9))
    const digito2 = this.obtemDigito(cpfArray.slice(0, 10))

    if(digito1 !== digitosFinais[0] || digito2 !== digitosFinais[1]) return false;

    return true;
}

function validarCPF(cpf) {
    const cpfLimpo = cpf.replace(/\D+/g, '');

    const cpfArray = Array.from(cpfLimpo).map(Number);
    const digitosFinais = cpfArray.slice(-2);

    const primeiroDigito = obtemDigitos(cpfArray.slice(0, 9));
    if(primeiroDigito !== digitosFinais[0]) return 'CPF Inválido';

    const segundoDigito = obtemDigitos(cpfArray.slice(0, 10));
    if(segundoDigito !== digitosFinais[1]) return 'CPF Inválido';

   
    return `CPF Válido -> ${cpf}`;  
}

ValidaCPF.prototype.obtemDigito = function (cpfArray) {
    let aux = cpfArray.length + 1;

    const valor = 11 - ((cpfArray.reduce((ac, valor) => {
        ac += valor * aux--;
        return ac;
    }, 0)) % 11);

    return valor > 9 ? 0 : valor;
}

ValidaCPF.prototype.isSequence = function() {
    const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequence === this.cpfLimpo;
}
// TESTES
// 705.484.450-52
// 111.111.111-11
const cpf = new ValidaCPF('705.484.450-52');

if(cpf.valida()){
    console.log(`CPF Válido`);
} else {
    console.log('CPF Inválido');
}