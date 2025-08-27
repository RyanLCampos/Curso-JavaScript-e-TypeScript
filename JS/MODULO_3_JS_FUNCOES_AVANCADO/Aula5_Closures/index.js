// Resumo: Habilidade de acessar o escopo léxico

function retornaFuncao(nome) {
  return () => {
    return nome;
  };
}

const funcao = retornaFuncao("Ryan"); // Possui acesso a 3 escopos (Global/Propria Funcao(retorno)/Funcao Mãe(retornaFuncao))
const funcao2 = retornaFuncao("Lucas");

console.log(funcao(), funcao2());

// Resumo: a função lembra do ambiente onde foi criado (Escopo Léxico), mesmo depois de encerrado.
// Pode guardar variáveis de fora dela, mesmo quando a função de fora já terminou de rodar.

//Exemplo 2:

function criarContador() {
    const cont = 0; // Variavel que vai ser lembrada

    function aumentar() {
        cont++;
        console.log(cont);
    }

    return aumentar;
}

const contador = criarContador(); // Retorna a função aumentar

contador(); // 1
contador(); // 2
contador(); // 3

// Aumentar lembra da variavel 'cont' mesmo depois de criarContador ser encerrado
// Sendo assim, cada vez que chama contador(), o numero vai aumentando, e não volta a zero.