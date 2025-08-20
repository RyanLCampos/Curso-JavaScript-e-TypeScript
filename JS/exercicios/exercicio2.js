
// Primeira Forma

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let aux = varA;

varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);

// Segunda forma

let varA2 = 'A'; // B
let varB2 = 'B'; // C
let varC2 = 'C'; // A

[varA2, varB2, varC2] = [varB2, varC2, varA2]

console.log(varA2, varB2, varC2);