// Arguments -> sustenta todos os argumentos enviados.
function funcao() {
  console.log(arguments[0]);
}

funcao("Valor", 1, 2, 3, "Argumento");

function segundaFuncao(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

segundaFuncao(1, 2, 3); // Define o resto como undefined

// Define valor padrão
// Maneira Atual
function terceiraFuncao(a, b = 0, c = 4) {
  // b = b || 0; Maneira Antiga
  console.log(a + b + c);
}

terceiraFuncao(2);

// Desestruturação na funcão
function quartaFuncao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

quartaFuncao({ nome: "Ryan Lucas", sobrenome: "Campos", idade: 20 });

// Rest operator (sempre o ultimo parametro) (...nomeParametro)
function quintaFuncao(operador, acumulador, ...numeros) {
  for(let numero of numeros){
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }

  console.log(acumulador);
}

quintaFuncao('*', 20, 1, 10, 25);

// Utiliza o Rest operator para obter os arguments (...args)
const conta = (...args) => {
    console.log(args);
};

conta('*', 20, 1, 10, 25);
