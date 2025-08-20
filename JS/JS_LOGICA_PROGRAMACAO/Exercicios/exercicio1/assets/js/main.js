
function meuEscopo () {

    const form = document.querySelector('.form');
    
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm (evento) {
        evento.preventDefault();
    
        const peso = parseFloat(form.querySelector('.peso').value.replace(',', '.'));
        const altura = parseFloat(form.querySelector('.altura').value.replace(',', '.'));
        
        if(!peso) {
            resultado.innerHTML = 'Peso inválido';
            resultado.style.background = '#780000';
        }else if (!altura) {
            resultado.innerHTML = 'Altura inválida';
            resultado.style.background ='#780000';
        } else {

            let imc = peso / (Math.pow(altura, 2));
        
            let resultadoIMC = respostaIMC(imc);
        
            resultado.innerHTML = `O seu IMC é ${imc.toFixed(2)} (${resultadoIMC})`;
            resultado.style.background= 'rgb(42, 157, 143)';
        }
    }

    form.addEventListener('submit', recebeEventoForm);
}


function respostaIMC (imc) {

    if(imc < 18.5) {
        return 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9){
        return 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9){
        return 'Obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9){
        return 'Obesidade grau 2';
    } else if (imc >= 40){
        return 'Obesidade grau 3';
    }
}

meuEscopo();