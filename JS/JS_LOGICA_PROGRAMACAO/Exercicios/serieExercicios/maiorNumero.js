// Escreva uma função que recebe 2 numeros e retorna o maior deles

function maiorNumero(num1, num2) {
    num1, num2 = Number(num1), Number(num2);
    
    return num1 > num2 ? num1 : num2;
}

console.log(maiorNumero(3, 1));

const maiorNumero2 = (x, y) => {
    return x > y ? x : y;
};

console.log(maiorNumero2(20, 55));

const maiorNumero3 = (x, y) => x > y ? x : y;

console.log(maiorNumero3(20, 22));