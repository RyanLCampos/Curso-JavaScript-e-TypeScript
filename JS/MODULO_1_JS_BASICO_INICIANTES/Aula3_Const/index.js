// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com numero
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// É necessário inicializar a constante na declaração
// NÃO UTILIZE VAR, UTILIZE CONST.

const nome = 'Ryan Lucas';

console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = '20';

const resultado = primeiroNumero * segundoNumero;

console.log(resultado);

console.log(typeof primeiroNumero); // Number
console.log(typeof (primeiroNumero + terceiroNumero)); // String