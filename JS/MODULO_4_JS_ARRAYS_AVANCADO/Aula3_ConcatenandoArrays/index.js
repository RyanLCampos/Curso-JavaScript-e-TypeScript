const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [7, 8, 9];

// ...rest -> ...spread
// const a4 = a1.concat(a2.concat(a3), [10, 11, 12], 'FIM');

const a4 = [...a1, ...a2, ...a3, ...[10, 11, 12], 'FIM'];

console.log(a4);