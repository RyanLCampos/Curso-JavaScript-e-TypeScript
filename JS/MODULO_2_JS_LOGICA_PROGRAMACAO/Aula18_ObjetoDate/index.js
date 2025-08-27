
// const tresHoras = 60 * 60 * 3 * 1000;

// const data = new Date(0); // 01/01/1970 Timestamp unix ou época unix

// const data = new Date(2025, 7, 21, 11, 44, 15); // a, m, d, h, M, s, ms

const data = new Date('2025-08-21 11:46:29');

console.log('Ano', data.getFullYear());
console.log('Mês', data.getMonth());
console.log('Dia', data.getDate());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());

console.log(data.toString());

console.log(Date.now());

const data2 = new Date();

const dataBrasil = formataData(data2);

console.log(dataBrasil);

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}
