// return
// Retorna um valor
// Termina a função

function soma(a, b) {
    return a + b;
}

soma(5, 3);

function funcaoSemRetorno(a, b){
    console.log(a + b);
}

funcaoSemRetorno(5, 2);

// Exemplo 2

function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome
    };
}

const p1 = criaPessoa('Ryan Lucas', 'Campos');

console.log(p1);

// Exemplo 3.1 (Retorna uma Função)

function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');

console.log(resto);

// Exemplo 3.2 (Retorna uma Função)

function criaMultiplicador(multiplicador) {
    // Multiplicador
    // function multiplicacao(n){
    //     return n * multiplicador;
    // }

    return (n) => {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));