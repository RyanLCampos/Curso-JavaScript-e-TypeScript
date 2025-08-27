// Escreva uma função que recebe um número e retorne:
// Divisivel por 3 = Fizz
// Divisivel por 5 = Buzz
// Divisivel por 3 e 5 = FizzBuzz
// Nenhum = retornar o numero
// Checar se é numero = retorna o que recebeu
// Use função com numeros de 0 a 100

function fizzBuzz(num) {
  if (typeof num !== "number") return num;

  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";

  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";

  return num;
}

for (let i = 0; i <= 100; i++) {
    console.log(`${i}: ${fizzBuzz(i)}`);
}
