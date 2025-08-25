//               0  1  2  3  4  5  6  7  8
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero);

console.log(resto);

const letras = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

const [lista1, lista2, lista3] = letras;

console.log(lista3[1]);
