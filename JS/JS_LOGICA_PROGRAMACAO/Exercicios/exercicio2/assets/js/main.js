
// const outputData = document.querySelector('#dataCompleto');

// const data = new Date();

// const dataTexto = formatarDataTexto(data);

// function formatarDataTexto (date) {

//     const dia = date.getDay();
//     const mes = date.getMonth() + 1;
//     const ano = date.getFullYear();
//     const horaMinuto = data.toLocaleTimeString().substring(0, 5);

//     const diaSemanaTexto = getDiaSemanaTexto(dia);
//     const mesTexto = getMesTexto(mes);

//     return outputData.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} <br/> ${horaMinuto}`;
// }

// function getDiaSemanaTexto (dia) {
//     let diaSemanaTexto;

//     switch (dia) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sabado';
//             return diaSemanaTexto;
//         default:
//             return '';
//     }
// }

// function getMesTexto (mes) {
//     let mesTexto;

//     switch (mes) {
//         case 1:
//             mesTexto = 'janeiro';
//             return mesTexto;
//         case 2:
//             mesTexto = 'fevereiro';
//             return mesTexto;
//         case 3:
//             mesTexto = 'março';
//             return mesTexto;
//         case 4:
//             mesTexto = 'abril';
//             return mesTexto;
//         case 5:
//             mesTexto = 'maio';
//             return mesTexto;
//         case 6:
//             mesTexto = 'junho';
//             return mesTexto;
//         case 7:
//             mesTexto = 'julho';
//             return mesTexto;
//         case 8:
//             mesTexto = 'agosto';
//             return mesTexto;
//         case 9:
//             mesTexto = 'setembro';
//             return mesTexto;
//         case 10:
//             mesTexto = 'outubro';
//             return mesTexto;
//         case 11:
//             mesTexto = 'novembro';
//             return mesTexto;
//         case 12:
//             mesTexto = 'dezembro';
//             return mesTexto;
//         default:
//             return '';
//     }
// }

const h1 = document.querySelector('.container h1');

const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
