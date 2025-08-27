// IIFE -> Immediately invoked function expression
function qualquerCoisa(){
    console.log(11123455);
}

qualquerCoisa(); //Toca o escopo global

(function (idade, peso, altura) { // Não toca o escopo global;
    const sobrenome = 'Campos';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Ryan Lucas'));
    }


    falaNome();
    console.log(`Idade: ${idade},\nPeso: ${peso} kg\nAltura: ${altura} m`);
})(22, 65, 1.63);

const nome = 'Qualquer coisa'; // Não existe conflito com a outra declaração