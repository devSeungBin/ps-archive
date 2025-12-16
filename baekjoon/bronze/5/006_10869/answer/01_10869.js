const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log('%d\n%d\n%d\n%d\n%d', a + b, a - b, a * b, Math.floor(a / b), a % b);
