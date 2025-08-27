/*
    Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
    Valores Copiados

    Referência (mutável) - array, object e function
    Passados por referência
*/

// Exemplo Primitivo
let a = 'A';
let b = a; // Copia

console.log(a, b);


// Exemplo Referência
const arrayA = [1, 2, 3];
const arrayB = arrayA;

console.log(arrayA, arrayB); // Mesmo local na memoria (não cria copia).

arrayA.pop(); // Remove do arrayA e arrayB
 
console.log(arrayA, arrayB);