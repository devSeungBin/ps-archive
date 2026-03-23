const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const n = input[0];
const b = +input[1];

console.log(parseInt(n, b));
