/*
    Object.values
    Object.entries
    Object.assign(des, any)
    Object.getOwnPropertyDescriptor(o, 'prop')
    ...(spread)

    // Já vimos
    Object.keys (retorna as chaves)
    Object.freeze (congela o objeto)
    Object.defineProperties (define várias propriedades)
    Object.defineProperty (define uma propriedade)
*/

const produto = {
    nome: 'Caneca',
    preco: 25.5
};

console.log('Objeto Inicial: ');
console.log(produto);

const copiaAssign = Object.assign({}, produto, {material: 'porcelana'}); // Cria cópia e adiciona propriedade

const referenciaMemoria = produto; // Aponta para o mesmo endereço na memoria.
const copia = {...produto, material: 'porcelana'}; // Cria uma cópia, não possui mesmo endereço na memoria.

console.log('\n Atribui a outra variavel (Mesmo endereço na memoria): ')
console.log(referenciaMemoria);

console.log('\n Cria Cópia (Object.assign()): ')
console.log(copiaAssign);

console.log('\n Cria Cópia (Utiliza spread): ')
console.log(copia);

console.log('\n Descrição da propriedade (Object.getOwnPropertyDescriptor()):')
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log('\n Chaves (Object.keys()):')
console.log(Object.keys(produto));

console.log('\n Valores (Object.values()):')
console.log(Object.values(produto));

console.log('\n Chaves e Valores (Object.entries()):')
console.log(Object.entries(produto));