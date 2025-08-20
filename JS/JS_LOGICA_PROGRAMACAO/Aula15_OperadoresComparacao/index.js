/* 
    Operadores de Comparação

    > Maior que
    >= Maior ou igual que
    < Menor que
    <= Menor ou Igual que
    == Igualdade (valor)
    === igualdade estrita (valor e tipo)
    != diferente (valor)
    !== diferente estrito (valor e tipo)

*/

const num1 = 10;
const num2 = '10';
const comp = num1 === num2; // Verifica Valor e Tipo
const comp2 = num1 == num2; // Verifica somente valor

const comp3 = num1 !== num2; // Verifica Valor e Tipo
const comp4 = num1 != num2; // Verifica somente valor

console.log(comp);
console.log(comp2);


console.log(comp3);
console.log(comp4);