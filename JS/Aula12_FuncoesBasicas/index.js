function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

saudacao('Ryan Lucas');

console.log(soma(5, 25));

const raiz = function (n) {
    return n ** 0.5;
};

const potenciacao = (n, p) => Math.pow(n, p);

console.log(raiz(144));

console.log(potenciacao(5, 2));