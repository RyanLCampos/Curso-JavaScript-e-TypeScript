// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Somente outro exemplo:
const numerosPares = numeros.filter(valor => valor % 2 === 0);
const numerosDobrados = numerosPares.map(valor => valor * 2);
const numerosSomados = numerosDobrados.reduce(
  (acumulador, valor) => (acumulador + valor)
);

// Realizar dessa maneira:
const resultado = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((acumulador, valor) => acumulador + valor);

console.log("Números Pares: ");
console.log(numerosPares);
console.log("\nNúmeros Pares Dobrados: ");
console.log(numerosDobrados);
console.log("\nResultado (Separados): ");
console.log(numerosSomados);

console.log('\nResultado (Cadeia): ');
console.log(resultado);
