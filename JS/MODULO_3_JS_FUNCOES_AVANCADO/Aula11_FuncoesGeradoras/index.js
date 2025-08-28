
console.log('\n===== ===== GERADORA 1 ===== =====');
function* geradora1() {

    // Codigo Qualquer...
    yield 'Valor 1';

    // Codigo Qualquer...
    yield 'Valor 2';

    // Codigo Qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();

// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);

for(let valor of g1){
    console.log(valor);
}

console.log('\n===== ===== GERADORA 2 ===== =====');

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3() {
    yield 1;
    yield 2;
    yield 3;
}

console.log('\n===== ===== GERADORA 4 ===== =====');

function* geradora4() {
    yield* geradora3();

    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();

for(let valor of g4){
    console.log(valor);
}

console.log('\n===== ===== GERADORA 5 ===== =====');

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };

    // ...

    yield function(){
        console.log('Vim do y2');
    };
}


const g5 = geradora5();

const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();


