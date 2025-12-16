const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const [n1, n2] = input.map(value => parseInt(value, 10));
const [n5, n4, n3] = input[1].split('').map(value => parseInt(value, 10));
console.log(`${n1 * n3}\n${n1 * n4}\n${n1 * n5}\n${n1 * n2}`);
