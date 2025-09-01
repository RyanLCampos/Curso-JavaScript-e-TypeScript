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

    const digito1 = this.obtemDigito(cpfArray.slice(0, 9));
    const digito2 = this.obtemDigito(cpfArray.slice(0, 10));

    return digito1 === digitosFinais[0] && digito2 === digitosFinais[1];
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

const form = document.querySelector('#cpfForm');
const input = document.querySelector('#cpf');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const cpf = new ValidaCPF(input.value);

    if(cpf.valida()) {
        resultado.textContent = `✅ CPF Válido: ${input.value}`;
        resultado.className = "valido";
    } else {
        resultado.textContent = `❌ CPF Inválido`;
        resultado.className = "invalido";
    }
});
