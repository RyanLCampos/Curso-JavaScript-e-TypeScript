// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());

// const {nome, sobrenome, falaNome} = require('./mod1');

// console.log(nome, sobrenome);
// console.log(falaNome());

const axios = require('axios');

axios('https://calmcode.io/static/data/pokemon.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));

const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Ryan Lucas');

console.log(p1);