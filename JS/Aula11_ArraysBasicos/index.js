const alunos = ['Ryan', 'Lucas', 'Danilo'];

console.log(alunos);

// Busca o primeiro elemento
const aluno1 = alunos[0];

console.log(aluno1);

// Adiciona elemento no final do array
alunos.push('Yasmin');
alunos.push('Pires');
console.log(alunos);

// Adiciona elemento no inicio do array
alunos.unshift('Daniel');
console.log(alunos);

// Remove elemento final
const alunoRemovidoFinal = alunos.pop();
console.log(alunos);
console.log(`Aluno removido: ${alunoRemovidoFinal}`);

// Remove elemento do inicio
const alunoRemovidoInicio = alunos.shift();
console.log(alunos);
console.log(alunoRemovidoInicio);

