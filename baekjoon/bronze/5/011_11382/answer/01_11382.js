const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ');
const [a, b, c] = input.map(value => +value);
console.log(a + b + c);
