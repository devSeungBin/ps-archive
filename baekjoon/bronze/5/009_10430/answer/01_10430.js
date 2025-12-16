const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ');
const [a, b, c] = input.map(value => parseInt(value, 10));
console.log(`${(a + b) % c}\n${((a % c) + (b % c)) % c}\n${(a * b) % c}\n${((a % c) * (b % c)) % c}`);
