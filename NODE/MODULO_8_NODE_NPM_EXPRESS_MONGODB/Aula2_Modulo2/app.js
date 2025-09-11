const Cachorro = require('./mod');


const cachorro = new Cachorro('Luna');

cachorro.latir();

const path = require('path');



console.log(path.resolve(__dirname, '..', '..'));

console.log(path.resolve(__dirname, '..', 'Aula1_Modulo1'));