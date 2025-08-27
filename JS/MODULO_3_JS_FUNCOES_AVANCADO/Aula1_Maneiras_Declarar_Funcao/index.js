// Declaração de Função (Function hoisting)
function falaOi() {
  console.log("Oie");
}

//First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function (){
    console.log('Sou um dado.');
};

// Arrow function
const arrowFunction = () => console.log('Sou uma arrow function');

arrowFunction();

// Dentro de um objeto
const pessoa = {
    falar: function () {
        console.log('Estou falando...');
    },
    gritar() {
        console.log('ESTOU GRITANDO!!!!');
    }
};

pessoa.falar();
pessoa.gritar();