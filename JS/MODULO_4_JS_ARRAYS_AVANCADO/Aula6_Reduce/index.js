/*
    function callBackMap(acumulador, valorElemento, indiceDoValor, arrayCompleto) {
        Implementacao de Codigo...
    }
*/

// Some todos os números
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


console.log('Soma dos valores: ')
const numerosSomados = numeros.reduce((acumulador, valor) => acumulador += valor);
console.log(numerosSomados);

// Não realizar assim, apenas exemplo.
console.log('\nNúmeros Pares (Reduce): ');
const numerosParesReduce = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor);
    
    return acumulador;
}, [])

console.log(numerosParesReduce);


// Utilize Filter
console.log('\nNúmeros Pares: ');
const numerosPares = numeros.filter(valor => valor % 2 === 0);
console.log(numerosPares);

// Não realizar assim, apenas exemplo.
console.log('\nNúmeros Dobrados (Reduce): ');
const numerosDobradosReduce = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);

    return acumulador;
}, []);
console.log(numerosDobradosReduce);

// Utilizar assim
console.log('\nNúmeros Dobrados: ');
const numerosDobrados = numeros.map(valor => valor * 2);
console.log(numerosDobrados);

// Retorne a pessoa mais velha 

const pessoas = [
    { nome: 'Ryan', idade: 22},
    { nome: 'Fulano', idade: 35},
    { nome: 'Ciclano', idade: 58},
    { nome: 'Cristiano', idade: 42},
    { nome: 'José', idade: 83},
    { nome: 'Maria', idade: 15}
];

console.log('\nRetorna pessoa mais velha: ');
const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => valor.idade > acumulador.idade ? acumulador = valor : acumulador);

console.log(pessoaMaisVelha);