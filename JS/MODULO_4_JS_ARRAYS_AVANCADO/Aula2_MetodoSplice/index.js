
/*
    SPLICE

    Parametros -> (
        Indice Inicial,
        Quantidade de elementos que irá remover,
        Elementos que irá adicionar
    )
    Retorno -> Array

    Obs -> adiciona elementos a partir do indice inicial passado.

    Exemplo: nomes.splice(0, 2, 'Ryan', 'Lucas');
*/

const nomes = ['Ryan', 'Lucas', 'Pires', 'Campos'];
console.log(`Array Inicial: ${nomes}\n`);

// Simulação de POP
const removidos = nomes.splice(-1, 1); // Remove Ultimo Elemento

console.log('Elementos Removidos:')
console.log(removidos);
console.log(`Remove ultimo elemento: ${nomes}\n`);

// Number.MAX_VALUE -> obtem o maior numero possivel.
// const removidosAteOUltimoElemento = nomes.splice(-1, Number.MAX_VALUE);

// Simulação Shift
removidos.push(nomes.splice(0, 1).join());
console.log('Elementos Removidos:')
console.log(removidos);
console.log(`Remove primeiro elemento: ${nomes}`);

// Simulação UNSHIFT
nomes.splice(nomes.length, 0, 'Campos');
console.log(`Adiciona elemento no final: ${nomes}`);

// Simulação UNSHIFT
nomes.splice(0, 0, 'Ryan');
console.log(`Adiciona elemento no inicio: ${nomes}`);


